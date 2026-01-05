import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContex";
import { FaUserCircle, FaLeaf, FaSignOutAlt, FaCog, FaQuestionCircle } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleSignOut = () => {
    signOutUser();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plants", path: "/plants" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About Us", path: "/about-us" },
    { name: "Extra", path: "/extra" },
    { name: "My Profile", path: "/profile" },
  ];

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;
  
  const textColor = isTransparent ? "text-white" : "text-gray-800";
  const navLinkClass = isTransparent 
    ? "text-gray-200 hover:text-white" 
    : "text-gray-600";

  return (
    <nav
      className={`bg-gray-100 fixed top-0  w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="w-11/12  max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
             <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary group-hover:scale-105 transition-transform duration-300" src={logo} alt="GreenNest Logo" />
             <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <FaLeaf className="text-primary text-xs" />
             </div>
          </div>
          <span className={`text-2xl font-montserrat font-bold tracking-tight ${textColor}`}>
            Green<span className="text-primary">Nest</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  isActive ? "text-primary font-bold" : navLinkClass
                }`
              }
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* User Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {user && (
            <Link to="/dashboard" className="btn btn-ghost btn-sm font-semibold text-primary">
              Dashboard
            </Link>
          )}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2 transition-transform hover:scale-105"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src={user?.photoURL || "https://i.ibb.co/Txcz8b0/user.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-gray-100"
              >
                <li>
                  <Link to="/dashboard" className="justify-between font-semibold text-primary">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge badge-primary badge-sm">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings"><FaCog className="mr-2"/> Settings</Link>
                </li>
                 <li>
                  <Link to="/help"><FaQuestionCircle className="mr-2"/> Help Center</Link>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-red-500 hover:bg-red-50">
                    <FaSignOutAlt className="mr-2"/> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-3">
               <Link to="/auth/login" className={`font-semibold transition-colors ${isTransparent ? "text-white hover:text-gray-200" : "text-gray-600 hover:text-primary"}`}>Login</Link>
               <Link
                to="/auth/register"
                className="btn btn-primary btn-sm text-white px-6 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl transition-colors focus:outline-none ${isTransparent ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-primary"}`}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <span className="text-xl font-bold font-montserrat text-primary">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-gray-500 hover:text-red-500 transition-colors"
            >
              <IoClose />
            </button>
          </div>

          <div className="flex flex-col gap-4 flex-grow">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile User Actions */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              {user ? (
                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-3 px-4 mb-2">
                      <img
                        alt="User"
                        src={user?.photoURL || "https://i.ibb.co/Txcz8b0/user.png"}
                        className="w-10 h-10 rounded-full border border-gray-200"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{user.displayName || "User"}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                   </div>
                   <Link to="/dashboard" className="text-lg font-medium px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary transition-all">
                      Dashboard
                   </Link>
                   <Link to="/profile" className="text-lg font-medium px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary transition-all">
                      Profile
                   </Link>
                   <button onClick={handleSignOut} className="text-lg font-medium px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 text-left transition-all flex items-center gap-2">
                      <FaSignOutAlt /> Logout
                   </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 px-4">
                  <Link to="/auth/login" className="btn btn-outline btn-primary w-full rounded-xl">
                    Login
                  </Link>
                  <Link to="/auth/register" className="btn btn-primary w-full rounded-xl text-white">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100">
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/Txcz8b0/user.png"}
                    alt="User"
                    className="w-12 h-12 rounded-full border border-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{user.displayName || "User"}</p>
                    <p className="text-xs text-gray-500 truncate max-w-[150px]">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="btn btn-error btn-outline btn-block rounded-xl mt-2"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link to="/auth/login" className="btn btn-outline border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:text-primary">
                  Login
                </Link>
                <Link to="/auth/register" className="btn btn-primary text-white rounded-xl shadow-lg">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

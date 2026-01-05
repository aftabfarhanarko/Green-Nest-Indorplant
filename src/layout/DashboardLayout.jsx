import React from 'react';
import { NavLink, Outlet, Link } from 'react-router';
import { FaHome, FaShoppingBag, FaHeart, FaUser, FaMapMarkerAlt, FaHeadset, FaCog, FaSignOutAlt, FaLeaf } from 'react-icons/fa';

const DashboardLayout = () => {
    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
        { name: 'My Orders', path: '/dashboard/orders', icon: <FaShoppingBag /> },
        { name: 'Wishlist', path: '/dashboard/wishlist', icon: <FaHeart /> },
        { name: 'Manage Profile', path: '/dashboard/profile', icon: <FaUser /> },
        { name: 'Address Book', path: '/dashboard/address', icon: <FaMapMarkerAlt /> },
        { name: 'Support Tickets', path: '/dashboard/support', icon: <FaHeadset /> },
        { name: 'Settings', path: '/dashboard/settings', icon: <FaCog /> },
    ];

    return (
        <div className="drawer lg:drawer-open font-montserrat bg-gray-50 min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar for Mobile */}
                <div className="w-full navbar bg-white shadow-sm lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-xl font-bold text-gray-800">
                        Green<span className="text-primary">Nest</span> Dashboard
                    </div>
                </div>
                
                {/* Page Content */}
                <div className="p-4 md:p-8">
                    <Outlet />
                </div>
            </div> 
            
            {/* Sidebar */}
            <div className="drawer-side z-50">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-72 min-h-full bg-white text-base-content border-r border-gray-100">
                    {/* Sidebar Logo */}
                    <div className="flex items-center gap-2 px-4 mb-8 mt-2">
                        <div className="bg-green-100 p-2 rounded-full text-primary">
                            <FaLeaf size={20} />
                        </div>
                        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-800">
                            Green<span className="text-primary">Nest</span>
                        </Link>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink 
                                    to={item.path} 
                                    end={item.path === '/dashboard'}
                                    className={({ isActive }) => 
                                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                            isActive 
                                            ? 'bg-primary text-white shadow-md' 
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                                        }`
                                    }
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="divider my-6"></div>

                    {/* Bottom Links */}
                    <li>
                        <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg hover:text-primary transition-all">
                            <FaSignOutAlt />
                            <span className="font-medium">Back to Home</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;

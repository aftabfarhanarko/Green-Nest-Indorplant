import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContex";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigation } from "react-router";
import Loder from "../components/Loder";
import { FaUserCheck, FaUserEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user, updeatUserProfile, ubdeatRealTimeDataBase, setRelUser } =
    useContext(AuthContext);
  const [forms, setFroms] = useState(false);

  const handelRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value.trim();
    e.target.reset();
    if (!displayName && !photoURL) {
      toast.error("Please Provide a Name or Photo URl!");
      return;
    }
    const useraData = { displayName, photoURL };
    updeatUserProfile(useraData)
      .then(() => {
        toast.success("Profile Updeat Successfully!");
        return ubdeatRealTimeDataBase(user.uid, useraData);
      })
      .then(() => {
        setRelUser((prev) => ({
          ...prev,
          displayName,
          photoURL,
        }));
      })
      .catch((err) => {
        toast.error(err.code || "Something went Wrong!");
      });
  };

  const navegit = useNavigation();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <title>User Profile</title>
      <Navbar></Navbar>
      
      {navegit.state === "loading" ? (
        <Loder></Loder>
      ) : (
        <main className="flex-grow pt-28 pb-20 px-4">
          <div className="w-full max-w-4xl mx-auto">
             <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">My Profile</h1>
                <p className="text-gray-500 mt-2">Manage your account settings and preferences.</p>
             </div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
            >
              {/* Left Side - Profile Info */}
              <div className="md:w-1/3 bg-gradient-to-br from-emerald-50 to-white p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                <div className="relative">
                  <img
                    src={user?.photoURL}
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-lg mb-4"
                    referrerPolicy="no-referrer"
                    alt="Profile"
                  />
                  <div className="absolute bottom-4 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 text-center">
                  {user?.displayName || "User"}
                </h2>
                <p className="text-sm text-gray-500 mb-6 text-center">{user?.email}</p>
                
                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setFroms(!forms)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      forms 
                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200" 
                        : "bg-primary text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200"
                    }`}
                  >
                    <FaUserEdit /> {forms ? "Cancel Editing" : "Edit Profile"}
                  </button>
                </div>
              </div>

              {/* Right Side - Details or Edit Form */}
              <div className="md:w-2/3 p-8 md:p-12">
                {!forms ? (
                   <div className="h-full flex flex-col justify-center space-y-6">
                      <div className="space-y-1">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</h3>
                        <p className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2">
                          {user?.displayName || "Not set"}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</h3>
                        <p className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2">
                          {user?.email}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Account Type</h3>
                        <p className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2">
                          Standard User
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-6">
                        <div className="bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                           <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                           Signed in via Firebase Authentication
                        </div>
                      </div>
                   </div>
                ) : (
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Update Profile Details</h3>
                    <form onSubmit={handelRegister} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Display Name</label>
                        <input
                          type="text"
                          name="name"
                          defaultValue={user?.displayName}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Profile Photo URL</label>
                        <input
                          type="text"
                          name="photo"
                          defaultValue={user?.photoURL}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="https://example.com/photo.jpg"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2"
                        >
                          <FaUserCheck /> Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </motion.article>
          </div>
        </main>
      )}

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MyProfile;

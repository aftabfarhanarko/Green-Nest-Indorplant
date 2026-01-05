import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { FaCamera, FaSave, FaLock, FaHistory, FaGoogle, FaFacebook } from 'react-icons/fa';

const ManageProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Feature 1: Profile Header with Cover */}
            <div className="relative">
                <div className="h-48 bg-gradient-to-r from-green-400 to-emerald-600 rounded-t-2xl"></div>
                <div className="absolute -bottom-16 left-8 flex items-end gap-4">
                    <div className="relative group">
                        <img 
                            src={user?.photoURL || "https://i.ibb.co/Txcz8b0/user.png"} 
                            alt="Profile" 
                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-white"
                        />
                        <button className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-green-700 transition-colors">
                            <FaCamera size={14} />
                        </button>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">{user?.displayName || "User Name"}</h2>
                        <p className="text-gray-500">{user?.email || "user@example.com"}</p>
                    </div>
                </div>
            </div>
            <div className="h-12"></div> {/* Spacer for profile overlap */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Feature 2: Personal Information Form */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-800">Personal Information</h3>
                            <button className="btn btn-sm btn-ghost text-primary">Edit</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label text-gray-500 text-sm">Full Name</label>
                                <input type="text" defaultValue={user?.displayName} className="input input-bordered bg-gray-50" />
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-500 text-sm">Email Address</label>
                                <input type="email" defaultValue={user?.email} disabled className="input input-bordered bg-gray-50 opacity-70" />
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-500 text-sm">Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" className="input input-bordered bg-gray-50" />
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-500 text-sm">Date of Birth</label>
                                <input type="date" className="input input-bordered bg-gray-50" />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="btn btn-primary text-white gap-2">
                                <FaSave /> Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Feature 3: Security & Password */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FaLock className="text-primary" /> Security
                        </h3>
                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label text-gray-500 text-sm">Current Password</label>
                                <input type="password" placeholder="••••••••" className="input input-bordered bg-gray-50" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label text-gray-500 text-sm">New Password</label>
                                    <input type="password" placeholder="••••••••" className="input input-bordered bg-gray-50" />
                                </div>
                                <div className="form-control">
                                    <label className="label text-gray-500 text-sm">Confirm Password</label>
                                    <input type="password" placeholder="••••••••" className="input input-bordered bg-gray-50" />
                                </div>
                            </div>
                            <button className="btn btn-outline btn-primary mt-2">Update Password</button>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Feature 4: Connected Accounts */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Connected Accounts</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-red-50 text-red-500 rounded-full">
                                        <FaGoogle />
                                    </div>
                                    <span className="font-medium text-gray-700">Google</span>
                                </div>
                                <span className="text-xs text-green-500 font-bold bg-green-50 px-2 py-1 rounded">Connected</span>
                            </div>
                            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-full">
                                        <FaFacebook />
                                    </div>
                                    <span className="font-medium text-gray-700">Facebook</span>
                                </div>
                                <button className="text-xs text-primary font-bold hover:underline">Connect</button>
                            </div>
                        </div>
                    </div>

                    {/* Feature 5: Login History */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FaHistory className="text-gray-400" /> Login History
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-gray-800">Chrome on Windows</p>
                                    <p className="text-xs text-gray-400">192.168.1.1 • Current Session</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                            </div>
                            <div className="flex justify-between items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-gray-800">Safari on iPhone</p>
                                    <p className="text-xs text-gray-400">10.0.0.45 • 2 days ago</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-xs btn-outline w-full mt-4">Log out all devices</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProfile;
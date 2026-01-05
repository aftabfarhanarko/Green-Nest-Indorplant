import React, { useState } from 'react';
import { FaBell, FaLock, FaPalette, FaGlobe, FaTrash, FaMoon, FaSun, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Settings = () => {
    const [emailNotif, setEmailNotif] = useState(true);
    const [smsNotif, setSmsNotif] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>

            {/* Feature 1: Notification Settings */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FaBell className="text-primary" /> Notifications
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <h4 className="font-semibold text-gray-800">Email Notifications</h4>
                            <p className="text-xs text-gray-500">Receive updates about your orders and promotions.</p>
                        </div>
                        <button onClick={() => setEmailNotif(!emailNotif)} className={`text-3xl transition-colors ${emailNotif ? 'text-primary' : 'text-gray-300'}`}>
                            {emailNotif ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <h4 className="font-semibold text-gray-800">SMS Notifications</h4>
                            <p className="text-xs text-gray-500">Get text messages for delivery updates.</p>
                        </div>
                        <button onClick={() => setSmsNotif(!smsNotif)} className={`text-3xl transition-colors ${smsNotif ? 'text-primary' : 'text-gray-300'}`}>
                            {smsNotif ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Feature 2: Privacy Settings */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FaLock className="text-primary" /> Privacy
                </h3>
                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
                        <span className="label-text text-gray-700">Make my profile public</span>
                    </label>
                </div>
                <div className="form-control mt-2">
                    <label className="label cursor-pointer justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text text-gray-700">Allow search engines to index my profile</span>
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature 3: Appearance */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaPalette className="text-primary" /> Appearance
                    </h3>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setDarkMode(false)}
                            className={`flex-1 p-4 rounded-lg border-2 flex flex-col items-center gap-2 ${!darkMode ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-gray-200'}`}
                        >
                            <FaSun className="text-yellow-500 text-xl" />
                            <span className="font-semibold text-sm">Light</span>
                        </button>
                        <button 
                            onClick={() => setDarkMode(true)}
                            className={`flex-1 p-4 rounded-lg border-2 flex flex-col items-center gap-2 ${darkMode ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-gray-200'}`}
                        >
                            <FaMoon className="text-indigo-500 text-xl" />
                            <span className="font-semibold text-sm">Dark</span>
                        </button>
                    </div>
                </div>

                {/* Feature 4: Language & Region */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaGlobe className="text-primary" /> Language & Region
                    </h3>
                    <div className="space-y-4">
                        <select className="select select-bordered w-full bg-gray-50">
                            <option>English (United States)</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                        <select className="select select-bordered w-full bg-gray-50">
                            <option>United States (Dollar $)</option>
                            <option>Europe (Euro €)</option>
                            <option>United Kingdom (Pound £)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Feature 5: Danger Zone */}
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
                    <FaTrash /> Danger Zone
                </h3>
                <p className="text-sm text-red-500 mb-6">
                    Once you delete your account, there is no going back. Please be certain.
                </p>
                <div className="flex justify-end">
                    <button className="btn btn-error btn-outline btn-sm">Delete Account</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
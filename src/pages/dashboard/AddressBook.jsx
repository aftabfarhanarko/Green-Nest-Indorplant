import React from 'react';
import { FaPlus, FaMapMarkerAlt, FaHome, FaBriefcase, FaTrash, FaPen } from 'react-icons/fa';

const AddressBook = () => {
    // Feature 1: Sample Address Data
    const addresses = [
        { id: 1, type: 'Home', name: 'John Doe', phone: '+1 234 567 890', address: '123 Green Street, Plant City, PC 12345', default: true },
        { id: 2, type: 'Work', name: 'John Doe', phone: '+1 987 654 321', address: '456 Office Plaza, Suite 100, Business Town, BT 67890', default: false },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Address Book</h2>
                    <p className="text-gray-500">Manage your shipping and billing addresses.</p>
                </div>
                {/* Feature 2: Add New Button */}
                <button className="btn btn-primary text-white gap-2">
                    <FaPlus /> Add New Address
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Feature 3: Address List Grid */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addresses.map((addr) => (
                        <div key={addr.id} className={`bg-white p-6 rounded-xl border-2 transition-all ${addr.default ? 'border-primary shadow-md' : 'border-transparent shadow-sm hover:border-gray-200'}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <div className={`p-2 rounded-full ${addr.type === 'Home' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                                        {addr.type === 'Home' ? <FaHome /> : <FaBriefcase />}
                                    </div>
                                    <span className="font-bold text-gray-700">{addr.type}</span>
                                </div>
                                {addr.default && <span className="badge badge-primary badge-sm">Default</span>}
                            </div>
                            
                            <div className="space-y-2 mb-6">
                                <p className="font-bold text-gray-800">{addr.name}</p>
                                <p className="text-gray-500 text-sm">{addr.address}</p>
                                <p className="text-gray-500 text-sm">Phone: {addr.phone}</p>
                            </div>

                            <div className="flex gap-2 pt-4 border-t border-gray-50">
                                <button className="btn btn-sm btn-ghost text-gray-600 flex-1 hover:bg-gray-50">
                                    <FaPen className="mr-2" /> Edit
                                </button>
                                <button className="btn btn-sm btn-ghost text-red-500 flex-1 hover:bg-red-50">
                                    <FaTrash className="mr-2" /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    
                    {/* Add New Placeholder */}
                    <button className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-gray-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all h-full min-h-[200px]">
                        <div className="p-3 bg-gray-100 rounded-full group-hover:bg-white transition-colors">
                            <FaPlus className="text-xl" />
                        </div>
                        <span className="font-medium">Add Another Address</span>
                    </button>
                </div>

                {/* Feature 4: Map Overview (Static) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary" /> Delivery Area
                    </h3>
                    <div className="w-full h-64 bg-gray-200 rounded-lg relative overflow-hidden group">
                        <img 
                            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" 
                            alt="Map" 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                             <FaMapMarkerAlt className="text-red-500 text-2xl animate-bounce" />
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        We currently ship to all locations within the highlighted zone.
                    </p>
                </div>
            </div>

            {/* Feature 5: Delivery Instructions */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-2">Delivery Instructions</h3>
                <div className="form-control">
                    <textarea 
                        className="textarea textarea-bordered bg-white h-24" 
                        placeholder="e.g. Leave package at the front porch, code for gate is 1234..."
                    ></textarea>
                </div>
                <div className="mt-4 flex justify-end">
                    <button className="btn btn-sm btn-primary text-white">Save Instructions</button>
                </div>
            </div>
        </div>
    );
};

export default AddressBook;
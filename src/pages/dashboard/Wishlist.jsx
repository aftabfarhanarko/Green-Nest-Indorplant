import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaTrash, FaShareAlt, FaList, FaTh } from 'react-icons/fa';

const Wishlist = () => {
    const [viewMode, setViewMode] = useState('grid');

    // Sample Wishlist Data
    const wishlistItems = [
        { id: 1, name: 'Monstera Deliciosa', price: '$45.00', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=300' },
        { id: 2, name: 'Fiddle Leaf Fig', price: '$120.00', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1617173944883-66336716b91c?auto=format&fit=crop&q=80&w=300' },
        { id: 3, name: 'Snake Plant', price: '$35.00', stock: 'Out of Stock', image: 'https://images.unsplash.com/photo-1598887142487-3c854d53d26b?auto=format&fit=crop&q=80&w=300' },
        { id: 4, name: 'Aloe Vera', price: '$25.00', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1628126235206-526053ea64e6?auto=format&fit=crop&q=80&w=300' },
    ];

    return (
        <div className="space-y-6">
            {/* Feature 1: Header & Stats */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>
                    <p className="text-gray-500">{wishlistItems.length} items saved for later</p>
                </div>
                
                {/* Feature 2: View Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                    <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
                    >
                        <FaTh />
                    </button>
                    <button 
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
                    >
                        <FaList />
                    </button>
                </div>
            </div>

            {/* Feature 3: Wishlist Grid/List */}
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
                {wishlistItems.map((item) => (
                    <div key={item.id} className={`group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all ${viewMode === 'list' ? 'flex flex-row items-center p-4 gap-6' : ''}`}>
                        {/* Image */}
                        <div className={`relative ${viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'h-64 w-full'}`}>
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {viewMode === 'grid' && (
                                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full text-red-500 hover:bg-white transition-colors">
                                    <FaTrash size={14} />
                                </button>
                            )}
                        </div>

                        {/* Content */}
                        <div className={`p-4 ${viewMode === 'list' ? 'flex-grow flex justify-between items-center' : ''}`}>
                            <div className="space-y-2">
                                <h3 className="font-bold text-gray-800">{item.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-primary text-lg">{item.price}</span>
                                    {item.stock === 'Out of Stock' && <span className="text-xs text-red-500 font-medium bg-red-50 px-2 py-1 rounded">Out of Stock</span>}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className={`${viewMode === 'list' ? 'flex gap-3' : 'mt-4 grid grid-cols-2 gap-2'}`}>
                                <button className="btn btn-primary btn-sm text-white w-full">
                                    <FaShoppingCart className="mr-1" /> Add
                                </button>
                                {viewMode === 'list' && (
                                     <button className="btn btn-outline btn-error btn-sm">
                                        <FaTrash /> Remove
                                    </button>
                                )}
                                {viewMode === 'grid' && (
                                    <button className="btn btn-outline btn-sm w-full">
                                        <FaShareAlt /> Share
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Feature 4: Empty State (Conditional - shown for demo structure) */}
            {wishlistItems.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                    <div className="bg-white p-4 rounded-full inline-block shadow-sm mb-4">
                        <FaHeart className="text-4xl text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Your wishlist is empty</h3>
                    <p className="text-gray-500 mt-2 mb-6">Explore our plants and save your favorites here.</p>
                    <button className="btn btn-primary text-white">Explore Plants</button>
                </div>
            )}

            {/* Feature 5: Share Wishlist Banner */}
            <div className="bg-primary text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Share your green dreams!</h3>
                    <p className="text-primary-100">Send your wishlist to friends or family for gift ideas.</p>
                </div>
                <div className="flex gap-3 relative z-10">
                    <input type="text" value="https://greennest.com/u/wishlist/8392" readOnly className="input input-sm text-gray-800 w-64" />
                    <button className="btn btn-sm bg-white text-primary border-none hover:bg-gray-100">Copy Link</button>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
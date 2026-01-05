import React, { useState } from 'react';
import { FaSearch, FaFilter, FaDownload, FaEye, FaBoxOpen } from 'react-icons/fa';

const MyOrders = () => {
    const [filter, setFilter] = useState('All');

    // 1. Order Stats
    const stats = [
        { label: 'Total Orders', value: '24', color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Pending', value: '3', color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { label: 'Completed', value: '18', color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Returned', value: '3', color: 'text-red-600', bg: 'bg-red-50' },
    ];

    const orders = [
        { id: '#ORD-7829', date: 'Oct 24, 2023', total: '$145.00', status: 'Delivered', items: 3 },
        { id: '#ORD-7830', date: 'Oct 28, 2023', total: '$45.00', status: 'Processing', items: 1 },
        { id: '#ORD-7831', date: 'Nov 02, 2023', total: '$210.00', status: 'Cancelled', items: 5 },
        { id: '#ORD-7832', date: 'Nov 10, 2023', total: '$85.00', status: 'Shipped', items: 2 },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">My Orders</h2>

            {/* Feature 1: Order Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className={`${stat.bg} p-4 rounded-xl border border-opacity-20 border-gray-200`}>
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                        <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
                    </div>
                ))}
            </div>

            {/* Feature 2: Search & Filter */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search by Order ID or Product..." 
                        className="input input-bordered w-full pl-10 bg-gray-50 focus:bg-white"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <select className="select select-bordered w-full md:w-auto bg-gray-50">
                        <option>Last 30 Days</option>
                        <option>Last 3 Months</option>
                        <option>All Time</option>
                    </select>
                    <button className="btn btn-outline gap-2">
                        <FaFilter /> Filter
                    </button>
                </div>
            </div>

            {/* Feature 3: Orders List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Items</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="font-bold text-gray-700">{order.id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.items} items</td>
                                    <td className="font-semibold">{order.total}</td>
                                    <td>
                                        <span className={`badge ${
                                            order.status === 'Delivered' ? 'badge-success text-white' : 
                                            order.status === 'Processing' ? 'badge-warning text-white' : 
                                            order.status === 'Cancelled' ? 'badge-error text-white' : 'badge-info text-white'
                                        } badge-sm`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button className="btn btn-square btn-sm btn-ghost text-primary tooltip" data-tip="View Details">
                                                <FaEye />
                                            </button>
                                            <button className="btn btn-square btn-sm btn-ghost text-gray-500 tooltip" data-tip="Invoice">
                                                <FaDownload />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Feature 4: Pagination */}
                <div className="p-4 border-t border-gray-100 flex justify-center">
                    <div className="join">
                        <button className="join-item btn btn-sm">«</button>
                        <button className="join-item btn btn-sm btn-active">1</button>
                        <button className="join-item btn btn-sm">2</button>
                        <button className="join-item btn btn-sm">3</button>
                        <button className="join-item btn btn-sm">»</button>
                    </div>
                </div>
            </div>

            {/* Feature 5: Need Help Banner */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                        <FaBoxOpen className="text-2xl" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">Problem with an order?</h4>
                        <p className="text-sm text-gray-600">Our support team is available 24/7 to assist you.</p>
                    </div>
                </div>
                <button className="btn btn-primary text-white btn-sm">Contact Support</button>
            </div>
        </div>
    );
};

export default MyOrders;
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { FaWallet, FaShoppingBag, FaTruck, FaCheckCircle, FaArrowUp, FaBell, FaPlus, FaBox } from 'react-icons/fa';

const DashboardHome = () => {
    // 1. Charts Data
    const salesData = [
        { name: 'Jan', sales: 4000, revenue: 2400 },
        { name: 'Feb', sales: 3000, revenue: 1398 },
        { name: 'Mar', sales: 2000, revenue: 9800 },
        { name: 'Apr', sales: 2780, revenue: 3908 },
        { name: 'May', sales: 1890, revenue: 4800 },
        { name: 'Jun', sales: 2390, revenue: 3800 },
        { name: 'Jul', sales: 3490, revenue: 4300 },
    ];

    const activityData = [
        { name: 'Mon', visits: 120, orders: 40 },
        { name: 'Tue', visits: 132, orders: 35 },
        { name: 'Wed', visits: 101, orders: 20 },
        { name: 'Thu', visits: 134, orders: 50 },
        { name: 'Fri', visits: 190, orders: 70 },
        { name: 'Sat', visits: 230, orders: 90 },
        { name: 'Sun', visits: 210, orders: 85 },
    ];

    const stats = [
        { title: 'Total Revenue', value: '$24,500', icon: <FaWallet />, color: 'bg-green-100 text-green-600' },
        { title: 'Total Orders', value: '1,240', icon: <FaShoppingBag />, color: 'bg-blue-100 text-blue-600' },
        { title: 'Pending Delivery', value: '45', icon: <FaTruck />, color: 'bg-yellow-100 text-yellow-600' },
        { title: 'Delivered', value: '1,195', icon: <FaCheckCircle />, color: 'bg-purple-100 text-purple-600' },
    ];

    // 2. Recent Orders Data
    const recentOrders = [
        { id: '#ORD-001', product: 'Snake Plant', date: '2024-03-10', amount: '$45.00', status: 'Delivered' },
        { id: '#ORD-002', product: 'Monstera', date: '2024-03-09', amount: '$120.00', status: 'Processing' },
        { id: '#ORD-003', product: 'Fiddle Leaf Fig', date: '2024-03-08', amount: '$85.00', status: 'Shipped' },
    ];

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                    <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
                </div>
                <div className="flex gap-2">
                     <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaBell className="text-xl text-gray-600" />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <button className="btn btn-primary text-white btn-sm md:btn-md rounded-lg gap-2">
                        <FaPlus /> New Order
                    </button>
                </div>
            </div>

            {/* Feature 1: Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.color} p-3 rounded-lg text-xl`}>
                                {stat.icon}
                            </div>
                            <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded flex items-center gap-1">
                                <FaArrowUp /> 2.5%
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                        <p className="text-gray-500 text-sm">{stat.title}</p>
                    </div>
                ))}
            </div>

            {/* Feature 2: Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Revenue Analytics</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} cursor={{ fill: '#f9fafb' }} />
                                <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} name="Revenue" />
                                <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Sales" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Weekly Activity</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={activityData}>
                                <defs>
                                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                <Area type="monotone" dataKey="visits" stroke="#10B981" fillOpacity={1} fill="url(#colorVisits)" strokeWidth={3} />
                                <Area type="monotone" dataKey="orders" stroke="#3B82F6" fillOpacity={0} strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Feature 3: Recent Orders Table */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Recent Orders</h3>
                        <button className="text-primary text-sm font-semibold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr className="text-gray-400 border-b border-gray-100">
                                    <th>Order ID</th>
                                    <th>Product</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50 border-b border-gray-50 last:border-none">
                                        <td className="font-semibold text-gray-700">{order.id}</td>
                                        <td>{order.product}</td>
                                        <td className="text-gray-500">{order.date}</td>
                                        <td className="font-bold">{order.amount}</td>
                                        <td>
                                            <span className={`badge ${
                                                order.status === 'Delivered' ? 'badge-success text-white' : 
                                                order.status === 'Processing' ? 'badge-warning text-white' : 'badge-info text-white'
                                            } badge-sm`}>{order.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Feature 4: Top Selling / Trending */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Trending Products</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <FaBox className="text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Indoor Fern</h4>
                                    <p className="text-xs text-gray-500">240 sales this week</p>
                                </div>
                                <span className="ml-auto font-bold text-primary">$24</span>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-outline btn-primary btn-block btn-sm mt-6">View All Products</button>
                </div>
            </div>
            
            {/* Feature 5: Quick Tips / Notifications */}
             <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-6 rounded-xl border border-primary/20 flex items-center justify-between">
                <div>
                    <h4 className="font-bold text-gray-800">Complete your profile</h4>
                    <p className="text-sm text-gray-600 mt-1">Add your shipping address to speed up checkout.</p>
                </div>
                <button className="btn btn-primary btn-sm text-white">Update Now</button>
            </div>
        </div>
    );
};

export default DashboardHome;
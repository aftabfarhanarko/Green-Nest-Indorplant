import React from 'react';
import { FaTicketAlt, FaQuestionCircle, FaEnvelope, FaPhone, FaSearch, FaPlus } from 'react-icons/fa';

const SupportTickets = () => {
    // Sample Data
    const tickets = [
        { id: '#TCK-9281', subject: 'Order #ORD-7829 not received', status: 'Open', date: '2 hours ago', priority: 'High' },
        { id: '#TCK-9234', subject: 'Item damaged upon arrival', status: 'Closed', date: '2 days ago', priority: 'Medium' },
    ];

    const faqs = [
        { question: 'How do I track my order?', answer: 'You can track your order in the "My Orders" section.' },
        { question: 'What is your return policy?', answer: 'We accept returns within 30 days of delivery.' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Support Tickets</h2>
                    <p className="text-gray-500">Track and manage your support requests.</p>
                </div>
                {/* Feature 1: Create Ticket Button */}
                <button className="btn btn-primary text-white gap-2">
                    <FaPlus /> Create New Ticket
                </button>
            </div>

            {/* Feature 2: Support Stats / Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-center gap-4">
                    <div className="p-3 bg-white text-blue-600 rounded-full shadow-sm">
                        <FaEnvelope />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">Email Us</h4>
                        <p className="text-sm text-gray-600">support@greennest.com</p>
                    </div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex items-center gap-4">
                    <div className="p-3 bg-white text-green-600 rounded-full shadow-sm">
                        <FaPhone />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">Call Us</h4>
                        <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
                    </div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex items-center gap-4">
                    <div className="p-3 bg-white text-purple-600 rounded-full shadow-sm">
                        <FaQuestionCircle />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">Help Center</h4>
                        <p className="text-sm text-gray-600">View Documentation</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Feature 3: Active Tickets List */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-gray-800">Recent Tickets</h3>
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="text" placeholder="Search tickets..." className="input input-sm input-bordered pl-9 bg-gray-50" />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>Subject</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket) => (
                                    <tr key={ticket.id} className="hover:bg-gray-50 cursor-pointer">
                                        <td className="font-bold text-primary">{ticket.id}</td>
                                        <td>
                                            <div className="font-medium text-gray-800">{ticket.subject}</div>
                                            <div className="text-xs text-gray-500">{ticket.priority} Priority</div>
                                        </td>
                                        <td>
                                            <span className={`badge ${ticket.status === 'Open' ? 'badge-success text-white' : 'badge-ghost'} badge-sm`}>
                                                {ticket.status}
                                            </span>
                                        </td>
                                        <td className="text-gray-500 text-sm">{ticket.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Feature 4: FAQ Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
                    <h3 className="font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                    <div className="join join-vertical w-full">
                        {faqs.map((faq, index) => (
                            <div key={index} className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked={index === 0} /> 
                                <div className="collapse-title text-sm font-medium">
                                    {faq.question}
                                </div>
                                <div className="collapse-content"> 
                                    <p className="text-xs text-gray-500">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-ghost btn-sm w-full mt-4 text-primary">View All FAQs</button>
                </div>
            </div>

            {/* Feature 5: Create Ticket Form (Inline) */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FaTicketAlt className="text-primary" /> Submit a Request
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label text-gray-500 text-sm">Subject</label>
                        <input type="text" placeholder="Brief description of the issue" className="input input-bordered bg-gray-50" />
                    </div>
                    <div className="form-control">
                        <label className="label text-gray-500 text-sm">Order ID (Optional)</label>
                        <input type="text" placeholder="e.g. #ORD-1234" className="input input-bordered bg-gray-50" />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label text-gray-500 text-sm">Message</label>
                        <textarea className="textarea textarea-bordered bg-gray-50 h-32" placeholder="Describe your issue in detail..."></textarea>
                    </div>
                    <div className="form-control md:col-span-2">
                         <label className="label text-gray-500 text-sm">Attachments</label>
                         <input type="file" className="file-input file-input-bordered w-full bg-gray-50" />
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button className="btn btn-primary text-white px-8">Submit Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default SupportTickets;
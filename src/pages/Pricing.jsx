import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaLeaf, FaTimes, FaQuestionCircle, FaStar, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Pricing = () => {
    const plans = [
        {
            name: "Sprout",
            price: "Free",
            description: "Perfect for plant beginners.",
            features: ["Access to Plant Database", "Basic Care Guides", "Community Forum Access", "Monthly Newsletter"],
            recommended: false
        },
        {
            name: "Bloom",
            price: "$9.99",
            period: "/month",
            description: "For the dedicated green thumb.",
            features: ["Everything in Sprout", "Unlimited Virtual Consultations", "Priority Support", "10% Discount on Plants", "Exclusive Workshops"],
            recommended: true
        },
        {
            name: "Garden",
            price: "$29.99",
            period: "/month",
            description: "Full service for your indoor jungle.",
            features: ["Everything in Bloom", "Quarterly Home Visits", "Personal Plant Stylist", "Free Delivery", "Early Access to Rare Plants"],
            recommended: false
        }
    ];

    const faqs = [
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes! You can pause or cancel your subscription at any time from your account settings with no hidden fees."
        },
        {
            question: "What does the 'Personal Plant Stylist' include?",
            answer: "Our stylist will review your space via video or photos and recommend specific plants and pots that match your decor and lighting conditions."
        },
        {
            question: "Is the 10% discount applicable to sale items?",
            answer: "The Bloom plan discount applies to all regular-priced plants and pots. It cannot be combined with other promotional codes."
        },
        {
            question: "Do you offer refunds if I'm not satisfied?",
            answer: "Absolutely. We offer a 30-day money-back guarantee on your first month of any paid plan."
        }
    ];

    return (
        <div className="pt-28 pb-20 px-4 min-h-screen bg-gray-50">
            <div className="w-11/12 max-w-7xl mx-auto">
                {/* Section 1: Hero & Plans */}
                <div className="text-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-4"
                    >
                        Grow With Us
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Choose a plan that fits your plant parenting journey. No hidden fees, cancel anytime.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative bg-white rounded-3xl p-8 border ${plan.recommended ? 'border-primary shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-xl'} flex flex-col`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500">{plan.period}</span>}
                                </div>
                                <p className="text-gray-500 mt-4">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="bg-emerald-100 p-1 rounded-full mt-0.5">
                                            <FaCheck className="text-primary text-xs" />
                                        </div>
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                                plan.recommended 
                                ? 'bg-primary text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}>
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Section 2: Comparison Table */}
                <div className="mb-24 bg-white rounded-3xl shadow-lg p-8 md:p-12 overflow-x-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Compare Features</h2>
                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left py-4 text-gray-500 font-medium">Features</th>
                                <th className="py-4 text-gray-800 font-bold">Sprout</th>
                                <th className="py-4 text-primary font-bold">Bloom</th>
                                <th className="py-4 text-gray-800 font-bold">Garden</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: "Plant Database", sprout: true, bloom: true, garden: true },
                                { name: "Community Access", sprout: true, bloom: true, garden: true },
                                { name: "Virtual Consults", sprout: false, bloom: "Unlimited", garden: "Unlimited" },
                                { name: "Store Discount", sprout: false, bloom: "10%", garden: "20%" },
                                { name: "Home Visits", sprout: false, bloom: false, garden: "Quarterly" },
                                { name: "Free Delivery", sprout: false, bloom: false, garden: true },
                            ].map((row, idx) => (
                                <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                    <td className="py-4 text-gray-600">{row.name}</td>
                                    <td className="py-4 text-center">
                                        {row.sprout === true ? <FaCheck className="text-primary mx-auto" /> : row.sprout === false ? <FaTimes className="text-gray-300 mx-auto" /> : <span className="text-gray-800 font-medium">{row.sprout}</span>}
                                    </td>
                                    <td className="py-4 text-center">
                                        {row.bloom === true ? <FaCheck className="text-primary mx-auto" /> : row.bloom === false ? <FaTimes className="text-gray-300 mx-auto" /> : <span className="text-primary font-bold">{row.bloom}</span>}
                                    </td>
                                    <td className="py-4 text-center">
                                        {row.garden === true ? <FaCheck className="text-primary mx-auto" /> : row.garden === false ? <FaTimes className="text-gray-300 mx-auto" /> : <span className="text-gray-800 font-medium">{row.garden}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Section 3: Money Back Guarantee */}
                <div className="mb-24 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
                    <div className="text-6xl text-emerald-200">
                        <FaShieldAlt />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-2">30-Day Money-Back Guarantee</h2>
                        <p className="text-emerald-100 text-lg">
                            We're confident you'll love being part of the GreenNest family. If you're not 100% satisfied with your premium membership, we'll refund your first month—no questions asked.
                        </p>
                    </div>
                </div>

                {/* Section 4: Success Stories */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Member Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p className="text-gray-600 italic mb-6">"The Bloom plan saved my fiddle leaf fig! The virtual consultation was a game-changer. The expert diagnosed the root rot immediately."</p>
                            <div className="flex items-center gap-4">
                                <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Emily R.</h4>
                                    <p className="text-sm text-gray-500">Bloom Member since 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p className="text-gray-600 italic mb-6">"I travel a lot for work, so the Garden plan's maintenance visits are a lifesaver. I come home to a thriving jungle every time."</p>
                            <div className="flex items-center gap-4">
                                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Michael T.</h4>
                                    <p className="text-sm text-gray-500">Garden Member since 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: FAQ */}
                <div className="mb-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-3">
                                    <FaQuestionCircle className="text-primary" />
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 mt-3 pl-8">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Section 6: Enterprise CTA (Modified) */}
                <div className="text-center bg-emerald-50 rounded-3xl p-10 md:p-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Need a Custom Solution?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We offer tailored plantscaping services for offices, hotels, and large residences.</p>
                    <Link to="/services" className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all">
                        Contact Sales
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
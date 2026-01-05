import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaGlobeAmericas, FaHistory, FaHandshake, FaNewspaper, FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="pt-28 pb-20 px-4 min-h-screen bg-gray-50">
            <div className="w-11/12 max-w-7xl mx-auto">
                {/* Section 1: Hero Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Story</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 leading-tight">
                            Bringing Nature <br/>
                            <span className="text-primary">Indoors</span>, Since 2020.
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            GreenNest started as a small passion project in a tiny apartment. Today, we're a community of thousands of plant lovers, dedicated to making the world a greener place, one leaf at a time.
                        </p>
                        <div className="flex gap-8 pt-4">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800">50k+</h3>
                                <p className="text-gray-500 text-sm">Happy Customers</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800">100+</h3>
                                <p className="text-gray-500 text-sm">Plant Varieties</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800">4.9</h3>
                                <p className="text-gray-500 text-sm">Average Rating</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=2070&auto=format&fit=crop" 
                            alt="GreenNest Team" 
                            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                            <p className="italic text-gray-600">"Plants are not just decoration, they are companions that bring life to our spaces."</p>
                            <p className="mt-4 font-bold text-gray-800">- Sarah Jenkins, Founder</p>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-emerald-50 p-8 rounded-3xl text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-6 shadow-sm">
                            <FaLeaf />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Quality First</h3>
                        <p className="text-gray-600">We source our plants from sustainable, ethical growers to ensure you get the healthiest greens.</p>
                    </div>
                    <div className="bg-emerald-50 p-8 rounded-3xl text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-6 shadow-sm">
                            <FaUsers />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                        <p className="text-gray-600">We believe in growing together. Our forums and workshops help you connect with fellow plant parents.</p>
                    </div>
                    <div className="bg-emerald-50 p-8 rounded-3xl text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-6 shadow-sm">
                            <FaGlobeAmericas />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
                        <p className="text-gray-600">From biodegradable pots to carbon-neutral shipping, we are committed to protecting our planet.</p>
                    </div>
                </div>

                {/* Section 3: Our History (Timeline) */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-100 hidden md:block"></div>
                        
                        <div className="space-y-12">
                            {[
                                { year: "2020", title: "The Seed is Planted", desc: "GreenNest launches from a small garage with just 10 plant varieties." },
                                { year: "2021", title: "First Retail Store", desc: "We opened our flagship store in downtown, expanding our team to 15 members." },
                                { year: "2022", title: "Going National", desc: "Launched nationwide shipping with custom eco-friendly packaging." },
                                { year: "2023", title: "GreenExpert App", desc: "Released our companion app for plant care tracking and diagnostics." }
                            ].map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className={`bg-white p-6 rounded-2xl shadow-md border border-gray-100 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <span className="text-primary font-bold text-xl block mb-2">{item.year}</span>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 shrink-0 border-4 border-white shadow-lg">
                                        <FaHistory />
                                    </div>
                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 4: Sustainability Impact */}
                <div className="mb-24 bg-gray-900 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">Sustainability</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Growing Greener</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                We don't just sell plants; we plant them too. For every order placed, we plant one tree in deforested areas around the world.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-4xl font-bold text-emerald-400">100k+</h4>
                                    <p className="text-gray-400 text-sm mt-1">Trees Planted</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-emerald-400">0%</h4>
                                    <p className="text-gray-400 text-sm mt-1">Plastic Packaging</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 md:h-full bg-emerald-800/30 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                             <FaLeaf className="text-9xl text-emerald-500/20" />
                        </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Section 5: Team Section (Enhanced) */}
                <div className="mb-24 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet the Experts</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                         {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group cursor-pointer">
                                <div className="overflow-hidden rounded-2xl mb-4 relative">
                                    <img 
                                        src={`https://i.pravatar.cc/300?img=${item + 25}`} 
                                        alt="Team Member" 
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><FaUsers size={12} /></div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="font-bold text-lg text-gray-800">Alex Johnson</h4>
                                <p className="text-primary text-sm">Senior Botanist</p>
                            </div>
                         ))}
                    </div>
                </div>

                {/* Section 6: Press & Media */}
                <div className="mb-24 border-t border-b border-gray-100 py-12">
                    <p className="text-center text-gray-400 font-medium mb-8 uppercase tracking-widest text-sm">As Featured In</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="text-2xl font-bold font-serif text-gray-600 flex items-center gap-2"><FaNewspaper /> VOGUE</div>
                        <div className="text-2xl font-bold font-mono text-gray-600 flex items-center gap-2"><FaNewspaper /> Forbes</div>
                        <div className="text-2xl font-bold font-sans text-gray-600 flex items-center gap-2"><FaNewspaper /> WIRED</div>
                        <div className="text-2xl font-bold font-serif italic text-gray-600 flex items-center gap-2"><FaNewspaper /> ELLE</div>
                    </div>
                </div>

                {/* Section 7: Careers CTA */}
                <div className="bg-emerald-50 rounded-3xl p-10 md:p-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        We are always looking for passionate people to join our mission. Check out our open positions and grow with us.
                    </p>
                    <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-800 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 hover:border-primary transition-all">
                        View Openings <FaArrowRight className="text-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaTools, FaLaptop, FaHandsHelping, FaTruck, FaQuoteLeft, FaClipboardCheck, FaPencilRuler, FaWater, FaMapMarkerAlt, FaAward, FaCertificate } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaSeedling />,
            title: "Landscape Design",
            description: "Transform your outdoor or indoor space with our professional design services. We create sustainable and beautiful green environments tailored to your lifestyle."
        },
        {
            icon: <FaTools />,
            title: "Plant Care & Maintenance",
            description: "Don't have a green thumb? No problem. Our experts visit your space to water, prune, and care for your plants to ensure they thrive year-round."
        },
        {
            icon: <FaLaptop />,
            title: "Virtual Consultations",
            description: "Get expert advice from the comfort of your home. Video call with our botanists to diagnose plant issues or get styling recommendations."
        },
        {
            icon: <FaHandsHelping />,
            title: "Plant Boarding",
            description: "Going on vacation? Leave your plants with us! We provide a safe, climate-controlled environment with daily care while you're away."
        },
        {
            icon: <FaTruck />,
            title: "White Glove Delivery",
            description: "We don't just drop a box. Our team delivers, unpacks, and places your large plants exactly where you want them, mess-free."
        },
        {
            icon: <FaQuoteLeft />,
            title: "Corporate Gifting",
            description: "Sustainable gifts for your clients and employees. We handle branding, packaging, and delivery for bulk orders."
        }
    ];

    return (
        <div className="pt-28 pb-20 px-4 min-h-screen bg-gray-50">
            <div className="w-11/12 max-w-7xl mx-auto">
                {/* Section 1: Hero & Services Grid */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-4">Our Services</h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Beyond just selling plants, we provide comprehensive care and design solutions to help you cultivate your perfect green space.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Section 2: How It Works (Process) */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <FaClipboardCheck />, title: "Consultation", desc: "We discuss your vision, space, and lighting conditions." },
                            { icon: <FaPencilRuler />, title: "Design", desc: "Our experts create a tailored plant plan for your space." },
                            { icon: <FaTruck />, title: "Installation", desc: "We deliver and set up everything perfectly." },
                            { icon: <FaWater />, title: "Care", desc: "Ongoing maintenance to keep your green oasis thriving." }
                        ].map((step, idx) => (
                            <div key={idx} className="text-center relative">
                                <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-3xl text-primary mb-6 z-10 relative border-4 border-emerald-50">
                                    {step.icon}
                                </div>
                                {idx < 3 && <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-emerald-100 -z-0"></div>}
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm px-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Portfolio Gallery */}
                <div className="mb-24">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">Portfolio</span>
                            <h2 className="text-3xl font-bold text-gray-800 mt-2">Featured Projects</h2>
                        </div>
                        <button className="hidden md:block text-primary font-bold hover:underline">View All Projects</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group overflow-hidden rounded-3xl h-80">
                            <img src="https://images.unsplash.com/photo-1592150621744-aca64f22746b?q=80&w=2070" alt="TechHub Office Lobby" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-white text-xl font-bold">TechHub Office Lobby</h3>
                                    <p className="text-gray-300 text-sm">Corporate Design • 2023</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-3xl h-80">
                            <img src="https://images.unsplash.com/photo-1589791465223-96b1f237f374?q=80&w=2070" alt="Urban Oasis" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-white text-xl font-bold">Urban Oasis</h3>
                                    <p className="text-gray-300 text-sm">Residential • 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: Service Area Map */}
                <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">Locations</span>
                        <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-6">Serving the Greater Metro Area</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We currently provide in-person design and maintenance services in the following regions. For virtual consultations, we are available worldwide!
                        </p>
                        <ul className="grid grid-cols-2 gap-4">
                            {["Downtown", "Westside", "North Hills", "Bay Area", "Sunnyvale", "River District"].map((loc, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                                    <FaMapMarkerAlt className="text-primary" /> {loc}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="h-80 bg-emerald-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                         {/* Placeholder for Map */}
                         <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center"></div>
                         <div className="z-10 text-center">
                             <FaMapMarkerAlt className="text-5xl text-red-500 mx-auto mb-2 animate-bounce" />
                             <span className="font-bold text-gray-800">We are here!</span>
                         </div>
                    </div>
                </div>

                {/* Section 5: Team Capabilities */}
                <div className="mb-24 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Our Experts?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-emerald-50 rounded-2xl">
                            <FaAward className="text-4xl text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Award Winning</h3>
                            <p className="text-gray-600">Recognized by the National Landscape Association for excellence in indoor design.</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-2xl">
                            <FaCertificate className="text-4xl text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Certified Botanists</h3>
                            <p className="text-gray-600">Our team holds degrees in Horticulture and Botany from top universities.</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-2xl">
                            <FaHandsHelping className="text-4xl text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Dedicated Support</h3>
                            <p className="text-gray-600">We don't just leave you with a plant; we provide ongoing support to ensure it thrives.</p>
                        </div>
                    </div>
                </div>

                {/* Section 6: CTA Section */}
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white p-12 md:p-20 text-center">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your space?</h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
                            Book a free discovery call with our design team today and bring your vision to life.
                        </p>
                        <button className="px-10 py-4 bg-primary text-white rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-primary/30">
                            Book Consultation
                        </button>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
            </div>
        </div>
    );
};

export default Services;
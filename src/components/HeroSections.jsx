import React from "react";
import { Link } from "react-router";
import { FaArrowRight, FaLeaf, FaWind, FaSun, FaWater, FaSeedling, FaTree } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSections = () => {
  return (
    <div className="relative w-full min-h-[85vh] bg-gradient-to-br from-green-50 to-emerald-100 flex items-center overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-3xl transform translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-emerald-200/20 rounded-tr-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 text-primary/20 text-6xl"
         >
            <FaLeaf />
         </motion.div>
         <motion.div 
            animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 right-1/4 text-emerald-600/20 text-8xl"
         >
            <FaTree />
         </motion.div>
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 text-yellow-500/20 text-9xl"
         >
            <FaSun />
         </motion.div>
      </div>

      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 bg-white/50 backdrop-blur-sm border border-green-200 rounded-full text-sm font-semibold text-primary uppercase tracking-wider mb-4 shadow-sm">
              <FaSeedling className="inline mr-2" />
              Welcome to GreenNest
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat text-gray-800 leading-tight">
              Grow Your Own <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                Inner Peace
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Discover the joy of gardening with our curated collection of plants. 
            We provide everything you need to create your own urban jungle, 
            from low-light lovers to sun-worshipping succulents.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/plants"
              className="btn btn-primary btn-lg rounded-full px-8 text-white border-none shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              Start Exploring
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="btn btn-outline btn-primary btn-lg rounded-full px-8 hover:bg-primary/10 transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Stats / Features List */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8 grid grid-cols-3 gap-4 border-t border-gray-200/50 mt-8"
          >
             <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-800">500+</h3>
                <p className="text-sm text-gray-500">Plant Species</p>
             </div>
             <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-800">24/7</h3>
                <p className="text-sm text-gray-500">Expert Support</p>
             </div>
             <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-800">100%</h3>
                <p className="text-sm text-gray-500">Satisfaction</p>
             </div>
          </motion.div>
        </div>

        {/* Right Feature Cards (Replacing Image) */}
        <div className="relative h-[500px] hidden lg:block">
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full shadow-2xl flex items-center justify-center z-10 border-8 border-green-50">
               <div className="text-center p-8">
                  <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-5xl">
                     <FaLeaf />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Pure Nature</h3>
                  <p className="text-gray-500">Bring the freshness of nature directly into your living room.</p>
               </div>
            </div>

            {/* Orbiting Features */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 border border-dashed border-green-300 rounded-full"
            >
               {/* Item 1 */}
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 w-48 rotate-0">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-500"><FaWater /></div>
                  <div>
                     <h4 className="font-bold text-gray-800 text-sm">Smart Watering</h4>
                     <p className="text-xs text-gray-500">Guides included</p>
                  </div>
               </div>

               {/* Item 2 */}
               <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 w-48 -rotate-90 origin-center">
                  <div className="bg-yellow-100 p-3 rounded-full text-yellow-500"><FaSun /></div>
                   <div>
                     <h4 className="font-bold text-gray-800 text-sm">Light Lovers</h4>
                     <p className="text-xs text-gray-500">Sun friendly</p>
                  </div>
               </div>

                {/* Item 3 */}
                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 w-48 rotate-90 origin-center">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-500"><FaWind /></div>
                   <div>
                     <h4 className="font-bold text-gray-800 text-sm">Air Purifying</h4>
                     <p className="text-xs text-gray-500">Breath clean</p>
                  </div>
               </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;

import React, { useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const PlantsCard = ({ plant }) => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 100,
        once: true,
      });
      AOS.refresh();
    }, []);
  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-full"
      >
        <div
          data-aos="fade-up"
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
        >
          <div className="relative overflow-hidden h-64">
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-3 right-3">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                ${plant.price}
              </span>
            </div>
            {plant.availableStock < 5 && (
              <div className="absolute top-3 left-3">
                 <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  Low Stock
                 </span>
              </div>
            )}
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                  {plant.plantName}
                </h2>
                <p className="text-xs text-gray-500 font-medium bg-gray-100 inline-block px-2 py-1 rounded-md">
                  {plant.category}
                </p>
              </div>
              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                <FaRegStar className="text-yellow-400 w-3 h-3" />
                <span className="text-yellow-600 text-xs font-bold">
                  {plant.rating}
                </span>
              </div>
            </div>

            <div className="mt-auto pt-4 space-y-3">
              <div className="flex justify-between items-center text-sm text-gray-500">
                 <span>Stock: {plant.availableStock}</span>
                 <span>{plant.careLevel}</span>
              </div>
              
              <Link to={`/detlise/${plant.plantId}`} className="block">
                <button className="w-full bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-semibold py-3 rounded-xl transition-all duration-300 border border-gray-200 hover:border-primary">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default PlantsCard;

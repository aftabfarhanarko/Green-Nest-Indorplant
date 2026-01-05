import React, { useEffect } from "react";
import { FaRegStar, FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const GreenExpert = ({ plant }) => {
   useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 50,
        once: true,
      });
    }, []);

  return (
    <div
    data-aos="fade-up"
    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden relative flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-primary shadow-sm">
          {plant.category}
        </div>
        {plant.availableStock < 5 && (
             <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
             Low Stock
           </div>
        )}
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Link to={`/detlise/${plant.plantId}`} className="btn btn-circle btn-sm btn-white text-primary hover:bg-primary hover:text-white border-none shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                <FaEye />
            </Link>
            <button className="btn btn-circle btn-sm btn-white text-primary hover:bg-primary hover:text-white border-none shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <FaShoppingCart />
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-primary transition-colors">{plant.plantName}</h2>
            <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded text-xs font-bold text-yellow-600">
                <FaStar className="text-yellow-400" /> {plant.rating}
            </div>
        </div>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            Perfect for your {plant.category} collection.
        </p>

        <div className="mt-auto flex items-center justify-between">
            <div>
                <span className="text-xs text-gray-400 block">Price</span>
                <span className="text-xl font-bold text-primary">${plant.price}</span>
            </div>
            <Link to={`/detlise/${plant.plantId}`} className="btn btn-sm btn-outline btn-primary rounded-lg hover:shadow-md">
                Buy Now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default GreenExpert;

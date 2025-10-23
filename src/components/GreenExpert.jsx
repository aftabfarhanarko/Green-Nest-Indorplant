import React, { useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const GreenExpert = ({ plant }) => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 100,
        once: true,
      });
      AOS.refresh();
    }, []);

  return (
    <section
    data-aos="fade-up"
    className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg overflow-hidden  ">
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-75 object-cover object-center transition-transform duration-500 hover:scale-110"
      />

      <div className="p-5 text-accent">
        {/* Plant Name */}
        <h2 className="text-xl font-bold mb-2">{plant.plantName}</h2>

        {/* Category & Provider */}
        <p className="text-sm text-accent mb-1">Category: {plant.category}</p>
        <p className="text-sm text-accent mb-3">
          Provider: {plant.providerName}
        </p>

        {/* Rating & Stock */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <FaRegStar className="text-yellow-400 w-5 h-5 mr-1" />
            <span className="text-yellow-300 font-semibold">
              {plant.rating} ★
            </span>
          </div>
          <span className="text-sm  ">Stock: {plant.availableStock}</span>
        </div>

        {/* Care Level */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
            Care: {plant.careLevel}
          </span>
          <span className="text-lg font-bold text-green-300">
            ${plant.price}
          </span>
        </div>

        {/* Button */}
        <Link to={`/detlise/${plant.plantId}`}>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition">
            View Details
          </button>
        </Link>
      </div>
    </section>

    // ai card ta chatgpt copy kore creat kora  nije lickta hobe na hoila shomosha
  );
};

export default GreenExpert;

import React from "react";
import { FaStar, FaLeaf, FaBoxOpen, FaUserTie } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const DetliseCard = ({ data }) => {
  const p = data;

  const handelSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Book Now Plant Success");
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Top Section: Image & Info */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-1/2 bg-gray-50 relative group overflow-hidden">
            <img
              src={p.image}
              alt={p.plantName}
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-primary shadow-sm">
                {p.category}
              </span>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-5xl font-bold font-montserrat text-gray-800 mb-4">
                {p.plantName}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  <span className="text-gray-500 text-sm ml-1 font-medium">({p.rating.toFixed(1)})</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="text-2xl font-bold text-primary">${p.price}</div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {p.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="p-2 bg-white rounded-full text-primary shadow-sm">
                    <FaBoxOpen />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Stock</div>
                    <div className="font-semibold text-gray-800">{p.availableStock} Available</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="p-2 bg-white rounded-full text-primary shadow-sm">
                    <FaLeaf />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Care Level</div>
                    <div className="font-semibold text-gray-800">{p.careLevel}</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3 col-span-2">
                  <div className="p-2 bg-white rounded-full text-primary shadow-sm">
                    <FaUserTie />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Provider</div>
                    <div className="font-semibold text-gray-800">{p.providerName}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/plants" className="flex-1">
                  <button className="w-full py-4 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all">
                    Continue Shopping
                  </button>
                </Link>
                <button 
                  onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div id="booking-form" className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold font-montserrat text-gray-800 mb-3">Interested in this Plant?</h2>
          <p className="text-gray-500">Fill out the form below to book this plant. We will contact you shortly.</p>
        </div>

        <form onSubmit={handelSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
              <input
                name="name"
                type="text"
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
              <input
                name="email"
                type="email"
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
            <textarea
              name="message"
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all h-32 resize-none"
              placeholder="I'm interested in booking the..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-emerald-700 shadow-xl shadow-emerald-100 transform hover:-translate-y-1 transition-all duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetliseCard;

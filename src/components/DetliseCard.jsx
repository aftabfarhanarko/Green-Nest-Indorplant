import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const DetliseCard = ({ data }) => {
  console.log(data);
  const p = data;

  const handelSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success(" Book Now Plant Success");
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="py-10 md:w-9/12 mx-auto">
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-pink-50 rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl shadow-xl">
          <div className="md:flex md:items-start">
            {/* Image side */}
            <div className="md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-t from-green-100/40">
              <img
                src={p.image}
                alt={p.plantName}
                className="w-full max-h-[650px] rounded-2xl object-cover object-center transition-transform duration-700 ease-in-out hover:scale-110 shadow-md"
              />
            </div>

            {/* Info side */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold  text-gray-800 mb-2 tracking-tight">
                  {p.plantName}
                </h1>
                <p className="text-base text-green-600 font-medium mb-5">
                  {p.category}
                </p>

                <div className="flex items-center gap-9 mb-6">
                  <div className="flex items-center gap-2 text-xl">
                    <span className="flex gap-2 text-orange-500 animate-pulse">
                      {" "}
                      <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </span>
                    <span className="text-accent text-lg font-semibold">
                      {p.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="text-3xl font-extrabold text-green-700">
                    ${p.price}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-5">
                  <div className="bg-white/70 border border-green-100 p-4 rounded-xl text-center">
                    <div className="text-lg text-accent">Stock</div>
                    <div className="font-semibold text-xl text-gray-800">
                      {p.availableStock} available
                    </div>
                  </div>

                  <div className="bg-white/70 border border-green-100 p-4 rounded-xl text-center">
                    <div className="text-lg text-accent">Care level</div>
                    <div className="font-semibold text-xl text-gray-800">
                      {p.careLevel}
                    </div>
                  </div>
                </div>

                <div className="text-md text-gray-700 mb-4">
                  <strong className="text-gray-800">Provider:</strong>{" "}
                  {p.providerName}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                {/* <button className="px-6 py-1.5 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-200">
                  Add to cart
                </button> */}

                <Link to="/">
                  <button className="px-5 py-1.5 rounded-full border border-green-300 font-medium text-gray-700 hover:bg-green-50 transition-all duration-200">
                    Back Home
                  </button>
                </Link>

                <Link to="/plants">
                  <button className="px-6 py-1.5 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-200">
                    More Plants
                  </button>
                </Link>
              </div>
                 <div className=" ">
              <h2 className="animate-pulse text-2xl mt-5 font-semibold mb-1 text-gray-800">
                Description
              </h2>
              <p className=" text-accent p-3 md:p-2 leading-relaxed text-sm text-justify">
                {p.description}
              </p>
            </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-8 my-6 border-t border-green-300"></div>

          {/* Description full width below */}
          <div className="p-4 py-15 flex flex-col  md:flex-row items-center  justify-between gap-15">
          

         
              <div className="w-full px-4 md:px-15 ">
              <form
                onSubmit={handelSubmit}
                className="max-w-lg mx-auto bg-gradient-to-br from-green-50 via-emerald-100 to-lime-50 border border-green-200 shadow-xl rounded-xl p-8 backdrop-blur-sm"
              >
                <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
                  🌿 Get In Touch
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-emerald-700 mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full p-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-emerald-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full p-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-emerald-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full p-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all h-28 resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetliseCard;

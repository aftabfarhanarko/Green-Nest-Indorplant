import React from "react";
import notPage from "../assets/searchNotFound.jpg";

const PagesNot = () => {
  return (
    <div className="flex flex-col justify-center items-center col-span-full py-16 text-center">
      <img src={notPage} className="mx-auto w-64 h-auto mb-6 rounded-2xl shadow-sm opacity-80" alt="Not Found" />
      <h3 className="text-xl font-bold text-gray-700 mb-2">No Plants Found</h3>
      <p className="text-gray-500">We couldn't find any plants matching your search.</p>
    </div>
  );
};

export default PagesNot;

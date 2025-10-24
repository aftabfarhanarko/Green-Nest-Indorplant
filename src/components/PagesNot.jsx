import React from "react";
import notPage from "../assets/searchNotFound.jpg";

const PagesNot = () => {
  return (
    <div className="flex justify-center items-center col-span-full">
      <img src={notPage} className="mx-auto py-20"></img>
    </div>
  );
};

export default PagesNot;

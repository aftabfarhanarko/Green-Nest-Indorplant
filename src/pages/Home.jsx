import React from "react";
import { useLoaderData } from "react-router";
import GreenExpert from "../components/GreenExpert";

const Home = () => {
  const promiseDara = useLoaderData();
  const dataSlice = promiseDara.slice(0, 8);
  console.log(dataSlice);
  return (
    <div className="my-20 w-11/12 mx-auto">
      <h1 className="text"> </h1>
      <h1 className="text-4xl md:text-5xl text-center mb-15 font-semibold hover:animate-bounce  ">
        <span className="text-green-500"> Top Rated</span>{" "}
        <span className="text-lime-500"> Indoor Plants 🪴</span>{" "}
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
        {dataSlice.map((plant) => (
          <GreenExpert plant={plant} key={plant.id}></GreenExpert>
        ))}
      </div>
    </div>
  );
};

export default Home;

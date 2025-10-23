import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PlantsCard from "./PlantsCard";
import Loder from "./Loder";

const Plant = () => {
  const promiseData = useLoaderData();
  const navegit = useNavigation();

  if(navegit.state === "loading"){
    return   <Loder></Loder>
  }
  return (
    <div>
      <header className="fixed w-full z-10  bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <div className="h-[100px] bg-white"></div>

      <main className="mt-15 mb-15 w-11/12 mx-auto">
        <h1 className="text-4xl md:text-5xl text-center mb-15 font-semibold hover:animate-bounce  ">
          <span className="text-green-500"> Plants For </span>{" "}
          <span className="text-lime-500"> Home Decore 🪴</span>{" "}
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
          {promiseData.map((plant) => (
            <PlantsCard plant={plant} key={plant.plantId}></PlantsCard>
          ))}
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Plant;

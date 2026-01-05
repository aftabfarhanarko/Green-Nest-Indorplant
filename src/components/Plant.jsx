import React, { useContext, useEffect, useState } from "react";
import { data, useLoaderData, useNavigation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PlantsCard from "./PlantsCard";
import Loder from "./Loder";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { AuthContext } from "../context/AuthContex";
import PagesNot from "./PagesNot";
import DataLoder from "./DataLoder";

const Plant = () => {
  const promiseData = useLoaderData();
  const navegit = useNavigation();
  const [change, setChange] = useState("");
  const [mydata, setMydata] = useState(promiseData);
  const [dataLoding, setDataLoding] = useState(false);

  useEffect(() => {
    setDataLoding(true);
    const data = setTimeout(() => {
      const trimUser = (change || "").trim().toLowerCase();
      const plant = trimUser
        ? promiseData.filter((app) =>
           ( app.plantName || "").trim().toLowerCase().includes(trimUser)
          )
        : promiseData;
      setMydata(plant);
      setDataLoding(false);
    }, 600);

    return () => clearTimeout(data);
  }, [change, promiseData]);

  if (navegit.state === "loading") {
    return <Loder></Loder>;
  }
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar></Navbar>

      <main className="flex-grow pt-28 pb-20 w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-4">
            Discover <span className="text-primary">Green</span> Beauty
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore our wide collection of indoor plants perfect for your home decor.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-xl font-semibold text-gray-800 ml-2">
            All Plants <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-sm ml-2">{mydata.length}</span>
          </h1>
          
          <div className="relative w-full md:w-96">
            <input
              type="text"
              name="name"
              onChange={(e) => setChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Search plants..."
              required
            />
            <IoIosSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dataLoding ? (
            <DataLoder></DataLoder>
          ) : mydata.length === 0 ? (
            <div className="col-span-full">
               <PagesNot></PagesNot>
            </div>
          ) : (
            mydata.map((plant) => (
              <PlantsCard plant={plant} key={plant.plantId}></PlantsCard>
            ))
          )}
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Plant;

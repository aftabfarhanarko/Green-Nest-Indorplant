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
        <div className="flex justify-between my-16 items-center">
          <h1 className="font-normal text-md  md:font-semibold  md:text-2xl">
            Home Plants({mydata.length})
          </h1>
          <div className="relative">
            <input
              type="text"
              name="name"
              onChange={(e) => setChange(e.target.value)}
              className="input pl-7  focus:outline-none  "
              placeholder="Search a Plant "
              required
            />
            <IoIosSearch className=" absolute top-3.5 z-2 left-2" />

            {/* <FaRegUser className=" absolute top-8.5 left-3 z-4 w-[14px] h-[11px]" /> */}
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
          {dataLoding ? (
            <DataLoder></DataLoder>
          ) : mydata.length === 0 ? (
            <PagesNot></PagesNot>
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

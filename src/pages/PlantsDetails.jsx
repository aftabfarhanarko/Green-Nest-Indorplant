import React, { useContext } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContex";
import Loder from "../components/Loder";
import DetliseCard from "../components/DetliseCard";

const PlantsDetails = () => {
  const data = useLoaderData();
  const { plantId } = useParams();
  const { user } = useContext(AuthContext);
  const filterData = data.filter((one) => one.plantId == plantId);
  const navegit = useNavigation();

  if(navegit.state === "loading"){
    return  <Loder></Loder>
  }
  return (
    <div>
      <header className=" fixed w-full z-5 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg">
        <Navbar></Navbar>
      </header>
      <div className="h-[98px] bg-white"></div>
     
      <main className="min-h-screen">
        {user ? (
          filterData.map((data) => (
            <DetliseCard data={data} key={data.plantId}></DetliseCard>
          ))
        ) : (
          <Loder></Loder>
        )}
      </main>
      

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default PlantsDetails;

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
    <div className="bg-gray-50 min-h-screen">
      <Navbar></Navbar>
     
      <main className="pt-24 pb-20 w-11/12 max-w-7xl mx-auto">
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

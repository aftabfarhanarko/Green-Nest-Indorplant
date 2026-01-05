import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loder from "../components/Loder";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="bg-gray-50">
      <Navbar></Navbar>
      <main>
        {navigation.state === "loading" ? <Loder></Loder> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;

import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import HeroSections from "../components/HeroSections";
import Loder from "../components/Loder";

const MainLayout = () => {
  const navegit = useNavigation();

  if(navegit.state === "loading"){
    return <Loder></Loder>
  }
  return (
    
    <div>
      <header>
        <nav className="fixed w-full z-20  bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg">
          <Navbar></Navbar>
        </nav>
        <section className="hero-sections">
       <HeroSections></HeroSections>
        </section>
      </header>
      <main>
       {
        navegit.state === "loading" ? (<Loder></Loder>) 
        : <Outlet></Outlet>
       }
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;

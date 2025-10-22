import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import HeroSections from "../components/HeroSections";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg">
          <Navbar></Navbar>
        </nav>
        <section className="hero-sections">
          <HeroSections></HeroSections>
        </section>
      </header>
      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;

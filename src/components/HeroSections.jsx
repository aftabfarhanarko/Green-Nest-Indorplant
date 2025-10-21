import React from "react";
import hero from "../assets/newHero.jpg";
import hero2 from "../assets/hero.jpg";
import hero3 from "../assets/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const HeroSections = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="   md:flex w-11/12 mx-auto justify-between items-center py-10 ">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold ">
              <span className="text-green-500"> GreenNest</span>{" "}
              <span> Indoor Plant</span> <br></br>
              <span className="text-lime-500"> Care & Store</span>{" "}
            </h1>
            <p className="text-lg my-5 text-accent">
              Bring freshness and life to your home. <br></br>
              Discover handpicked indoor plants and expert care tips.<br></br>
              Grow green, live better — with GreenNest.
            </p>
            <button className="btn text-white py-6 px-7 md:px-14 font-semibold text-xl  bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg my-4">
              Explore Now Plant
            </button>
          </div>
          <div className="border border-base-300 rounded-2xl  shadow-xl">
            <img
              className=" max-w-full md:max-w-[1000px]  rounded-2xl"
              src={hero}
            ></img>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="   md:flex w-11/12 mx-auto justify-between items-center py-10 ">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold ">
              <span className="text-green-500"> GreenNest</span>{" "}
              <span> Indoor Plant</span> <br></br>
              <span className="text-lime-500"> Care & Store</span>{" "}
            </h1>
            <p className="text-lg my-5 text-accent">
              Bring freshness and life to your home. <br></br>
              Discover handpicked indoor plants and expert care tips.<br></br>
              Grow green, live better — with GreenNest.
            </p>
            <button className="btn text-white py-6 font-semibold text-xl px-7 md:px-14 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg my-4">
              Explore Now Plant
            </button>
          </div>
          <div className="border border-base-300 rounded-2xl  shadow-xl">
            <img
              className=" max-w-full md:max-w-[1000px]  rounded-2xl"
              src={hero2}
            ></img>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="   md:flex w-11/12 mx-auto justify-between items-center py-10 ">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold ">
              <span className="text-green-500"> GreenNest</span>{" "}
              <span> Indoor Plant</span> <br></br>
              <span className="text-lime-500"> Care & Store</span>{" "}
            </h1>
            <p className="text-lg my-5 text-accent">
              Bring freshness and life to your home. <br></br>
              Discover handpicked indoor plants and expert care tips.<br></br>
              Grow green, live better — with GreenNest.
            </p>
            <button className="btn text-white py-6 font-semibold text-xl px-7 md:px-14 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg my-4">
              Explore Now Plant
            </button>
          </div>
          <div className="border border-base-300 rounded-2xl  shadow-xl">
            <img
              className=" max-w-full md:max-w-[1000px]  rounded-2xl"
              src={hero3}
            ></img>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSections;

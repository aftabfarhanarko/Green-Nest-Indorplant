import React from "react";
import hero from "../assets/newHero.jpg";
import hero2 from "../assets/test.jap.jpeg";
import hero3 from "../assets/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

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
              <h1 className="text-3xl md:text-6xl font-bold ">
                <span className="text-green-500"> GreenNest</span>{" "}
                <span> Indoor Plant</span> <br></br>
                <span className="text-lime-500"> Care & Store</span>{" "}
              </h1>
              <p className="text-md md:text-lg my-5 text-accent">
                Bring freshness and life to your home. <br></br>
                Discover handpicked indoor plants and expert care tips.<br></br>
                Grow green, live better — with GreenNest.
              </p>
              <Link
                to="/plants"
                className="btn text-white py-4 md:py-5 px-4 md:px-14 font-semibold text-[16px] md:text-lg  bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg my-4"
              >
                Visite New Plant
              </Link>
            </div>
            <div className="border border-base-300 rounded-xl mt-6 md:mt-0 ">
              <img
                className=" max-w-full md:max-w-[1000px]  rounded-xl"
                src={hero}
              ></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="   md:flex w-11/12 mx-auto justify-between items-center py-10 ">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold ">
                <span className="text-green-500"> GreenNest</span>{" "}
                <span> Indoor Plant</span> <br></br>
                <span className="text-lime-500"> Care & Store</span>{" "}
              </h1>
              <p className="text-md md:text-lg my-5 text-accent">
                Bring freshness and life to your home. <br></br>
                Discover handpicked indoor plants and expert care tips.<br></br>
                Grow green, live better — with GreenNest.
              </p>
              <Link
                to="/plants"
                className="btn text-white py-4 md:py-5 px-4 md:px-14 font-semibold text-[16px] md:text-lg  bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg my-4"
              >
                Visite New Plant
              </Link>
            </div>
            <div className="border border-base-300 rounded-xl mt-6 md:mt-0  ">
              <img
                className=" max-w-full md:max-w-[1000px] h-[255px] md:h-[650px]  rounded-xl"
                src={hero2}
              ></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="   md:flex w-11/12 mx-auto justify-between items-center py-10 ">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold ">
                <span className="text-green-500"> GreenNest</span>{" "}
                <span> Indoor Plant</span> <br></br>
                <span className="text-lime-500"> Care & Store</span>{" "}
              </h1>
              <p className=" text-md md:text-lg my-5 text-accent">
                Bring freshness and life to your home. <br></br>
                Discover handpicked indoor plants and expert care tips.<br></br>
                Grow green, live better — with GreenNest.
              </p>
              <Link
                to="/plants"
                className="btn text-white py-4 md:py-5 px-4 md:px-14 font-semibold text-[16px] md:text-lg  bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg my-4"
              >
                Visite New Plant
              </Link>
            </div>
            <div className="border border-base-300 rounded-xl  mt-6 md:mt-0 ">
              <img
                className=" max-w-full md:max-w-[1000px]  rounded-xl"
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

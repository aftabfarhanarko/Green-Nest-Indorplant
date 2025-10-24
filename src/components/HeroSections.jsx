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
      <div className="h-[98px] bg-white"></div>
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
             <p className="text-md md:text-lg my-5 text-accent max-w-[500px] text-justify">
                GreenNest Indoor Plant Care & Store is your one-stop destination for all things green and serene. 🌱 From lush indoor plants to expert care tips, GreenNest helps you transform your living space into a natural retreat. Our handpicked collection and eco-friendly care products. 
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
             className=" max-w-full md:max-w-[1000px] h-[295px] md:h-[650px]  rounded-xl"
                src={hero}
              ></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="   md:flex w-11/12 mx-auto justify-between items-center py-10 ">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold ">
                <span className="text-green-500"> Plant Style Your </span>{" "}
                <span> Room and </span> <br></br>
                <span className="text-lime-500">
                  {" "}
                  Outside Of Your Room
                </span>{" "}
              </h1>
              <p className="text-md md:text-lg my-5 text-accent max-w-[500px] text-justify">
                Green Corners are a beautiful way to bring a touch of nature
                into any room. 🌿 Large leafy indoor plants or palms make the
                corners feel more vibrant and refreshing. Combined with natural
                light and cozy furniture, these green corners create a calm and
                peaceful atmosphere in your home.
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
                className=" max-w-full md:max-w-[1000px] h-[295px] md:h-[650px]  rounded-xl"
                src={hero2}
              ></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="   md:flex w-11/12 mx-auto justify-between items-center py-10 ">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold ">
                <span className="text-green-500"> Plant Care Tips</span>{" "}
                <span> Section Our Plant </span> <br></br>
                <span className="text-lime-500"> For Anyone</span>{" "}
              </h1>
              <p className="text-md md:text-lg my-5 text-accent max-w-[500px] text-justify">
                GreenNest Indoor Plant Care & Store is your one-stop destination for all things green and serene. 🌱 From lush indoor plants to expert care tips, GreenNest helps you transform your living space into a natural retreat. Our handpicked collection and eco-friendly care products. 
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
                className=" max-w-full md:max-w-[1000px] h-[295px] md:h-[650px]  rounded-xl"
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

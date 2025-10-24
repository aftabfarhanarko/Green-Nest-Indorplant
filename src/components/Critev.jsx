import React, { useEffect, useState } from "react";
import green1 from "../assets/my1.jpg";
import green2 from "../assets/my2.jpg";
import green3 from "../assets/my3.jpg";
import green4 from "../assets/my5.jpg";
import mini1 from "../assets/MinnimalStyle/mini1.jpg";
import mini2 from "../assets/MinnimalStyle/mini6.jpg";
import mini3 from "../assets/MinnimalStyle/mini3.jpg";
import mini4 from "../assets/MinnimalStyle/mini5.jpg";

import sel1 from "../assets/slef/self1.jpg";
import sel2 from "../assets/slef/self2.jpg";
import sel3 from "../assets/slef/self3.jpg";
import sel4 from "../assets/slef/self4.jpg";
import sel5 from "../assets/slef/sel6.jpg";
import sel6 from "../assets/slef/sel-7.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Critev = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center mb-15 font-semibold hover:animate-bounce  ">
        <span className="text-green-500"> Plant Style Your Room </span>{" "}
        <br></br>
        <span className="text-lime-500"> and Outside Of Your Room</span>{" "}
      </h1>

      <div>
        <div className="text-center ">
          <h1 className="text-center text-lg font-semibold">Green Corners</h1>
          <p className="text-accent  max-w-[700px] mx-auto ">
            <span className="text-lg font-semibold">How to Design : </span>{" "}
            Green Corners are a beautiful way to bring a touch of nature into
            any room. 🌿 Large leafy indoor plants or palms make the corners
            feel more vibrant and refreshing. Combined with natural light and
            cozy furniture, these green corners create a calm and peaceful
            atmosphere in your home.
          </p>
          <Marquee className=" cursor-pointer" pauseOnHover={true} speed={70}>
            <div className="flex  gap-20 mt-5">
              <img src={green1} className=" max-w-[300px] rounded-lg"></img>
              <img src={green2} className=" max-w-[300px] rounded-lg"></img>
              <img src={green3} className=" max-w-[300px] rounded-lg"></img>
              <img src={green4} className=" max-w-[300px] rounded-lg"></img>
            </div>
          </Marquee>
        </div>

        <div className=" flex flex-col md:flex-row justify-between items-center mt-15 contain-content ">
          <div data-aos="fade-up" className="flex flex-col gap-8">
            <img className="rounded-lg w-full max-w-[500px] " src={mini1}></img>
            <img className="rounded-lg w-full max-w-[500px]  " src={mini2}></img>
          </div>
          <div data-aos="fade-up" className="px-6 text-justify">
            <h1
              data-aos="fade-up"
              className="text-center text-lg font-semibold mt-10"
            >
              {" "}
              Gorgias Desing
            </h1>
            <p className="text-accent max-w-[900px]">
              Gorgias Design creates elegant and functional layouts for modern
              interiors. Each design emphasizes minimalism, harmony, and natural
              aesthetics. It blends creativity with practicality to enhance
              everyday living spaces. The result is a calm, stylish, and
              inviting environment for any home.
            </p>
          </div>
          <div data-aos="fade-up" className="flex mt-5 md:mt-0 flex-col gap-8">
            <img className="rounded-lg w-full max-w-[500px]  " src={mini3}></img>
            <img
              className=" rounded-lg w-full max-w-[500px]  "
              src={mini4}
            ></img>
          </div>
        </div>

        <div data-aos="fade-up" className="text-center">
          <h1 className="text-center text-lg mt-15 font-semibold">
            Self Design Patel
          </h1>
          <p
            data-aos="fade-up"
            className="text-accent text-justify  max-w-[700px] mx-auto "
          >
            <span className="text-lg font-semibold">How to Design : </span> Self
            Design Patel is a creative concept that focuses on unique,
            personalized design patterns inspired by traditional motifs. Each
            design reflects individuality and artistic flair. It blends modern
            aesthetics with cultural elegance. Perfect for adding a touch of
            style and sophistication to any space.
          </p>

          <div  className="hidden  md:block relative mt-12 w-full px-4">
            <div
              className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r 
            from-white via-white/70  to-transparent pointer-events-none z-10  "
            ></div>

            <div
              className="absolute right-0  top-0 h-full w-8 bg-gradient-to-l 
            from-white via-white/70  to-transparent pointer-events-none z-10  "
            ></div>

            <div
              className="
             flex gap-6 overflow-x-auto md:grid md:grid-cols-3 
             lg:grid-cols-6 md:overflow-visible scroll-smooth snap-x 
             snap-mandatory scrollbar-hide py-4  "
            >
              {[sel1, sel2, sel3, sel6, sel4, sel5].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 snap-center md:snap-none relative group "
                >
                  <img
                    src={img}
                    className="w-[220px] sm:w-[260px] md:w-full max-h-[400px]
                    rounded-2xl object-cover shadow-md transition-all 
                    duration-500 group-hover:scale-105 group-hover:shadow-xl   "
                  ></img>
                  <div
                    className="absolute inset-0 rounded-2xl 
                    bg-gradient-to-t from-black/50 via-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500      "
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className=" block md:hidden">
            <Marquee
              className=" cursor-pointer"
              pauseOnHover={true}
              speed={100}
            >
              <div className="relative mt-12 w-full px-4">
                <div
                  className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r 
            from-white via-white/70  to-transparent pointer-events-none z-10  "
                ></div>

                <div
                  className="absolute right-0  top-0 h-full w-8 bg-gradient-to-l 
            from-white via-white/70  to-transparent pointer-events-none z-10  "
                ></div>

                <div
                  className="
             flex gap-6 overflow-x-auto md:grid md:grid-cols-3 
             lg:grid-cols-6 md:overflow-visible scroll-smooth snap-x 
             snap-mandatory scrollbar-hide py-4  "
                >
                  {[sel1, sel2, sel3, sel6, sel4, sel5].map((img, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 snap-center md:snap-none relative group "
                    >
                      <img
                        src={img}
                        className="w-[220px] sm:w-[260px] md:w-full max-h-[400px]
                    rounded-2xl object-cover shadow-md transition-all 
                    duration-500 group-hover:scale-105 group-hover:shadow-xl   "
                      ></img>
                      <div
                        className="absolute inset-0 rounded-2xl 
                    bg-gradient-to-t from-black/50 via-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500      "
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Critev;

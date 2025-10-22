import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import GreenExpert from "../components/GreenExpert";
import tips1 from "../assets/tips1.jpg";
import tips3 from "../assets/tips3.jpsg.jpg";
import tips4 from "../assets/tips5.jpg";
import expart1 from "../assets/expart1.jpg";
import expart2 from "../assets/expart2.jpg";
import expart3 from "../assets/expart3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const promiseDara = useLoaderData();
  const dataSlice = promiseDara.slice(0, 8);
  console.log(dataSlice);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="my-20 w-11/12 mx-auto">
      <h1 className="text"> </h1>
      <h1 className="text-4xl md:text-5xl text-center mb-15 font-semibold hover:animate-bounce  ">
        <span className="text-green-500"> Top Rated</span>{" "}
        <span className="text-lime-500"> Indoor Plants 🪴</span>{" "}
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
        {dataSlice.map((plant) => (
          <GreenExpert plant={plant} key={plant.id}></GreenExpert>
        ))}
      </div>
      <section className="my-20">
        <h1 className="text-4xl md:text-5xl text-center mb-15 font-semibold hover:animate-bounce  ">
          <span className="text-green-500"> Plant Care</span>{" "}
          <span className="text-lime-500"> ips Section 🪴</span>{" "}
        </h1>

        <div className=" md:flex gap-10 justify-between mt-10">
          <div
            data-aos="fade-up"
            className="shadow-lg  bg-base-100 rounded-lg p-5"
          >
            <img className="w-[600px] rounded-2xl" src={tips1}></img>
            <p className="text-lg font-semibold mt-4"> Care Tips</p>
            <p className="max-w-[600px] text-accent">
              Water according to soil type: Sandy soil dries fast, clay retains
              water. Know the plant type: Succulents need little water, ferns
              and leafy plants need more. Check soil moisture: Water when the
              top 1–2 inches of soil is dry. Drainage matters: Always use pots
              with drainage to prevent root rot. Adjust by season: Water more in
              summer, less in winter.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="shadow-lg mt-6 md:mt-0  bg-base-100 rounded-lg p-5"
          >
            <img className="w-[600px] rounded-2xl" src={tips4}></img>
            <p className="text-lg font-semibold mt-4"> Care Tips</p>
            <p className="max-w-[600px] text-accent">
              Always remove dead or yellow leaves from your plant to help it
              stay healthy. Use clean, sharp scissors or pruning shears to cut
              the leaf close to the base without hurting new growth. This
              prevents pests and fungus from spreading and allows the plant to
              focus its energy on new, fresh leaves. Do this regularly to keep
              your plant looking green, healthy, and beautiful!
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="shadow-lg mt-6 md:mt-0  bg-base-100 rounded-lg p-5"
          >
            <img className="w-[600px] rounded-2xl" src={tips3}></img>
            <p className="text-lg font-semibold mt-4"> Care Tips</p>
            <p className="max-w-[600px] text-accent">
              First, make sure your hands and tools are clean. Water the soil
              lightly a day before working, so it’s soft. Use a small hand fork
              or trowel for easier digging. Start around the base of the plant,
              not too close to the stem. Gently loosen the soil to let air and
              water reach the roots. Remove weeds carefully, pulling them from
              the root.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-4xl md:text-5xl text-center mb-15 font-semibold hover:animate-bounce  ">
          <span className="text-lime-500"> Meet Our</span>{" "}
          <span className="text-green-500"> Green Experts</span>{" "}
        </h1>

        <div>
          <div className="pl-7 md:pl-0 md:flex justify-between ">
            <div className="   max-w-[400px] bg-gradient-to-br from-green-700 via-emerald-600 to-green-500 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* Profile Image */}
              <img
                className="w-[120px] h-[120px] rounded-full border-4 border-white shadow-md object-cover"
                src={expart1}
                alt="Expert"
              />

              {/* Expert Info */}
              <h3 className="text-xl font-bold mt-2">Sophia Rahman</h3>
              <p className="text-sm font-medium text-green-100">
                EcoBloom Interiors
              </p>
              <p className="text-center text-sm mt-2 leading-relaxed">
                🌿 <span className="font-semibold">Specialization:</span> Indoor
                plant styling & sustainable decor
              </p>

              {/* Decorative line */}
              <div className="w-20 h-[2px] bg-white/50 mt-2"></div>
            </div>

            <div className=" mt-5 md:mt-0 max-w-[400px] bg-gradient-to-br from-green-700 via-emerald-600 to-green-500 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* Profile Image */}
              <img
                className="w-[120px] h-[120px] rounded-full border-4 border-white shadow-md object-cover"
                src={expart2}
                alt="Expert"
              />

              {/* Expert Info */}
              <h3 className="text-xl font-bold mt-2"> Arif Hasan </h3>
              <p className="text-sm font-medium text-green-100">
                Leaf & Life Bangladesh
              </p>
              <p className="text-center text-sm mt-2 leading-relaxed">
                🌿 <span className="font-semibold">Specialization:</span> Plant
                care consultant & fertilizer expert
              </p>

              {/* Decorative line */}
              <div className="w-20 h-[2px] bg-white/50 mt-2"></div>
            </div>
            <div className=" mt-5 md:mt-0 max-w-[400px] bg-gradient-to-br from-green-700 via-emerald-600 to-green-500 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* Profile Image */}
              <img
                className="w-[120px] h-[120px] rounded-full border-4 border-white shadow-md object-cover"
                src={expart3}
                alt="Expert"
              />

              {/* Expert Info */}
              <h3 className="text-xl font-bold mt-2">Moni Mite</h3>
              <p className="text-sm font-medium text-green-100">
                Urban GreenWorks
              </p>
              <p className="text-center text-sm mt-2 leading-relaxed">
                🌿 <span className="font-semibold">Specialization:</span>{" "}
                Balcony garden & urban space landscaping
              </p>

              {/* Decorative line */}
              <div className="w-20 h-[2px] bg-white/50 mt-2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import GreenExpert from "../components/GreenExpert";
import tips1 from "../assets/tips1.jpg";
import tips3 from "../assets/tips4.jpg";
import tips4 from "../assets/tips5.jpg";
import expart1 from "../assets/expart1.jpg";
import expart2 from "../assets/expart2.jpg";
import expart3 from "../assets/expart3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const promiseDara = useLoaderData();
  const dataSlice = promiseDara.slice(0, 8);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="my-20 w-11/12 mx-auto">

         
      <section className="my-20">
        <h1 className="text-4xl md:text-5xl text-center mb-19 font-semibold hover:animate-bounce  ">
          <span className="text-green-500"> Plant Care</span>{" "}
          <span className="text-lime-500"> ips Section 🪴</span>{" "}
        </h1>

        <div className=" flex flex-col mx-auto  gap-10 justify-between mt-10">
          <div
            data-aos="fade-up"
            className=" md:flex justify-center items-center gap-20 mx-auto rounded-lg "
          >
            <img className="mx-w-[650px] rounded-md" src={tips1}></img>
            <p className="mt-6 md:0 max-w-[600px] text-accent text-justify">
              <span className="text-lg font-semibold mt-4"> Care Tips : </span>{" "}
              <br></br>
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
            className=" flex flex-col-reverse md:flex-row  justify-center items-center gap-20 mt-4 md:mt-5   "
          >
            <p className="-mt-14  md:mt-0 max-w-[600px]  text-accent text-justify">
              <span className="text-lg font-semibold mt-4"> Care Tips : </span>
              <br></br>
              Always remove dead or yellow leaves from your plant to help it
              stay healthy. Use clean, sharp scissors or pruning shears to cut
              the leaf close to the base without hurting new growth. This
              prevents pests and fungus from spreading and allows the plant to
              focus its energy on new, fresh leaves. Do this regularly to keep
              your plant looking green, healthy, and beautiful!
            </p>
            <img className="mx-w-[650px] rounded-md" src={tips4}></img>
          </div>

          <div
            data-aos="fade-up"
            className=" md:flex justify-center items-center gap-20 mx-auto rounded-lg "
          >
            <img
              className="mx-w-[650px] max-h-[405px] rounded-md"
              src={tips3}
            ></img>
            <p className="mt-6 md:mt-0 max-w-[600px] text-accent text-justify">
              <span className="text-lg font-semibold mt-4 ">Care Tips : </span>
              <br></br>
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

      <div>
        <h1 className="text-4xl md:text-5xl text-center my-15 font-semibold hover:animate-bounce  ">
          <span className="text-green-500"> Top Rated</span>{" "}
          <span className="text-lime-500"> Indoor Plants 🪴</span>{" "}
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
          {dataSlice.map((plant) => (
            <GreenExpert plant={plant} key={plant.id}></GreenExpert>
          ))}
        </div>
      </div>


      <section className="my-15">
        <h1 className="text-4xl md:text-5xl text-center mb-15 font-semibold  animate-pulse  ">
          <span className="text-lime-500"> Meet Our</span>{" "}
          <span className="text-green-500"> Green Experts</span>{" "}
        </h1>

        <section>
          <div className=" md:pl-0 md:flex justify-between ">
            <section
              data-aos="fade-up"
              className="   max-w-[400px] bg-gradient-to-br from-green-700 via-emerald-600 to-green-500 text-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-3  hover:shadow-2xl"
            >
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
              <p className="text-center text-sm mt-2 leading-relaxed animate-pulse">
                🌿{" "}
                <span className="font-semibold animate-pulse">
                  Specialization:
                </span>{" "}
                Indoor plant styling & sustainable decor
              </p>

              {/* Decorative line */}
              <div className="w-20 h-[2px] bg-white/50 mt-2"></div>
            </section>

            <section
              data-aos="fade-up"
              className=" mt-5 md:mt-0   max-w-[400px] bg-gradient-to-br from-green-700 via-emerald-600 to-green-500 text-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-3  hover:shadow-2xl"
            >
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
              <p className="text-center text-sm mt-2 leading-relaxed animate-pulse">
                🌿 <span className="font-semibold">Specialization:</span> Plant
                care consultant & fertilizer expert
              </p>

              {/* Decorative line */}
              <div className="w-20 h-[2px] bg-white/50 mt-2"></div>
            </section>
            <section
              data-aos="fade-up"
              className=" mt-5 md:mt-0   max-w-[400px] bg-gradient-to-br from-green-700 via-emerald-600 to-green-500 text-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-3  hover:shadow-2xl"
            >
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
              <p className="text-center text-sm mt-2 leading-relaxed animate-pulse">
                🌿 <span className="font-semibold">Specialization:</span>{" "}
                Balcony garden & urban space landscaping
              </p>

              {/* Decorative line */}
              <div className="w-20 h-[2px] bg-white/50 mt-2"></div>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;

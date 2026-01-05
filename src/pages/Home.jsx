import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router";
import HeroSections from "../components/HeroSections";
import GreenExpert from "../components/GreenExpert"; // This is the Plant Card
import Critev from "../components/Critev"; // Keeping existing component
import {
  FaShippingFast,
  FaLeaf,
  FaHeadset,
  FaArrowRight,
  FaQuoteLeft,
  FaInstagram,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaCalendarAlt,
  FaGift,
  FaVideo,
  FaBriefcase,
  FaSun,
  FaCloudSun,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

// Import some assets for static sections
import tips1 from "../assets/tips1.jpg";
import tips3 from "../assets/tips4.jpg";
import tips4 from "../assets/tips5.jpg";
import expart1 from "../assets/expart1.jpg";
import expart2 from "../assets/expart2.jpg";
import expart4 from "../assets/expart4.jpg";

const Home = () => {
  const allPlants = useLoaderData();
  const featuredPlants = allPlants.slice(0, 8);
  const newArrivals =
    allPlants.slice(8, 12).length > 0
      ? allPlants.slice(8, 12)
      : allPlants.slice(0, 4);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      once: true,
    });
  }, []);

  // Section 2: Stats
  const StatsSection = () => (
    <div className="bg-primary/5 py-10">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div data-aos="fade-up" data-aos-delay="0">
          <h3 className="text-4xl font-bold text-primary font-montserrat">
            10k+
          </h3>
          <p className="text-gray-600 mt-2">Happy Customers</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-4xl font-bold text-primary font-montserrat">
            5k+
          </h3>
          <p className="text-gray-600 mt-2">Plants Sold</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-4xl font-bold text-primary font-montserrat">
            100+
          </h3>
          <p className="text-gray-600 mt-2">Expert Guides</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-4xl font-bold text-primary font-montserrat">
            4.9
          </h3>
          <p className="text-gray-600 mt-2">Average Rating</p>
        </div>
      </div>
    </div>
  );

  // Section 3: Categories
  const CategoriesSection = () => (
    <section className="py-20 w-11/12 max-w-7xl mx-auto">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
          Shop by <span className="text-primary">Category</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Find the perfect plant for your space from our wide selection of
          categories.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          "Succulents",
          "Indoor Trees",
          "Ferns",
          "Hanging",
          "Flowering",
          "Pet Friendly",
        ].map((cat, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 50}
            className="group cursor-pointer"
          >
            <div className="h-40 bg-gray-100 rounded-2xl overflow-hidden relative mb-3">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center text-4xl">
                🌿
              </div>
            </div>
            <h3 className="text-center font-semibold text-gray-700 group-hover:text-primary transition-colors">
              {cat}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );

  // Section 7: Why Choose Us
  const WhyChooseUs = () => (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
            Why Choose <span className="text-primary">GreenNest</span>?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary text-2xl">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-bold mb-3">Fast & Safe Delivery</h3>
            <p className="text-gray-500">
              We ensure your plants arrive fresh and healthy right to your
              doorstep with our specialized packaging.
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary text-2xl">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-bold mb-3">Top Quality Plants</h3>
            <p className="text-gray-500">
              Sourced directly from the best nurseries, our plants are healthy,
              vibrant, and pest-free.
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary text-2xl">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Support</h3>
            <p className="text-gray-500">
              Our team of plant experts is always here to help you with care
              tips and troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Section 9: Blog
  const BlogSection = () => (
    <section className="py-20 w-11/12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
            From the <span className="text-primary">Blog</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Tips, tricks, and inspiration for your green journey.
          </p>
        </div>
        <Link
          to="/blog"
          className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
        >
          View All <FaArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item, idx) => (
          <div
            key={idx}
            className="group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="h-60 bg-gray-200 rounded-2xl overflow-hidden mb-4 relative">
              <img
                src={`https://picsum.photos/seed/${item + 50}/800/600`}
                alt="Blog"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-sm font-bold text-gray-800 shadow-md">
                Oct {20 + item}, 2024
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
              Top 10 Indoor Plants for Low Light
            </h3>
            <p className="text-gray-500 line-clamp-2">
              Discover the best plants that thrive in low-light conditions and
              how to care for them to keep them healthy.
            </p>
            <span className="text-primary font-semibold mt-3 inline-block">
              Read More
            </span>
          </div>
        ))}
      </div>
    </section>
  );

  // Section 11: Newsletter
  const NewsletterSection = () => (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl">🌿</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌵</div>
      </div>
      <div className="w-11/12 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-6">
          Join Our Green Community
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Subscribe to our newsletter for exclusive plant care tips, new
          arrivals, and special offers.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-lg rounded-full w-full md:w-96 text-gray-800"
          />
          <button className="btn btn-lg bg-yellow-400 hover:bg-yellow-500 text-black border-none rounded-full px-10">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Banner */}
      <HeroSections />

      {/* 2. Stats */}
      <StatsSection />

      {/* 3. Categories */}
      <CategoriesSection />

      {/* 4. Top Rated Plants */}
      <section className="py-20 w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-gray-800">
            Top Rated <span className="text-primary">Indoor Plants</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Customer favorites that bring life to any room.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPlants.map((plant) => (
            <GreenExpert plant={plant} key={plant.id} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/plants"
            className="btn btn-outline btn-primary px-8 rounded-full"
          >
            View All Plants
          </Link>
        </div>
      </section>

      {/* 5. New Arrivals */}
      <section className="py-20 bg-base-200">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
              New <span className="text-primary">Arrivals</span>
            </h2>
            <div className="flex gap-2">
              <button className="btn btn-circle btn-sm btn-outline">
                <FaArrowRight className="rotate-180" />
              </button>
              <button className="btn btn-circle btn-sm btn-primary text-white">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((plant) => (
              <GreenExpert plant={plant} key={`new-${plant.id}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Plant Care Tips (Restyled) */}
      <section id="care-tips" className="py-20 w-11/12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-16 font-bold font-montserrat">
          <span className="text-primary">Plant Care</span>{" "}
          <span className="text-secondary">Tips 🪴</span>
        </h2>
        <div className="space-y-16">
          {/* Tip 1 */}
          <div
            data-aos="fade-right"
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-2 bg-primary/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform"></div>
              <img
                className="w-full rounded-2xl shadow-xl relative z-10"
                src={tips1}
                alt="Watering"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Mastering Watering
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Water according to soil type: Sandy soil dries fast, clay
                retains water. Check soil moisture: Water when the top 1–2
                inches of soil is dry. Always use pots with drainage to prevent
                root rot.
              </p>
            </div>
          </div>

          {/* Tip 2 */}
          <div
            data-aos="fade-left"
            className="flex flex-col md:flex-row-reverse gap-10 items-center"
          >
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-2 bg-secondary/20 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform"></div>
              <img
                className="w-full rounded-2xl shadow-xl relative z-10"
                src={tips4}
                alt="Pruning"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Pruning for Growth
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Always remove dead or yellow leaves to help it stay healthy. Use
                clean, sharp scissors. This prevents pests and fungus from
                spreading and allows the plant to focus on new growth.
              </p>
            </div>
          </div>

          {/* Tip 3 */}
          <div
            data-aos="fade-right"
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-2 bg-primary/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform"></div>
              <img
                className="w-full max-h-[400px] object-cover rounded-2xl shadow-xl relative z-10"
                src={tips3}
                alt="Soil"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Soil & Repotting
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Make sure your hands and tools are clean. Gently loosen the soil
                to let air and water reach the roots. Repot when roots start
                growing out of the drainage holes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Design Ideas / Critev (Updated Wrapper) */}
      <section className="py-20 bg-gray-50">
        <div className="w-11/12 max-w-7xl mx-auto">
          <Critev />
        </div>
      </section>

      {/* 9. Blog */}
      <BlogSection />

      {/* 10. Gallery (Masonry style grid) */}
      <section className="py-20 w-11/12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold font-montserrat">
          Follow Us <span className="text-primary">@GreenNest</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/${item + 100}/400`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Gallery"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-3xl">
                <FaInstagram />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Newsletter */}
      <NewsletterSection />

      {/* 13. Green Experts (Marquee) */}
      <section className="py-20 w-11/12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-15 font-bold font-montserrat">
          Meet Our <span className="text-primary">Green Experts</span>
        </h2>
        <Marquee
          gradient={true}
          gradientColor="white"
          pauseOnHover={true}
          speed={50}
        >
          {[
            { name: "Sophia Rahman", role: "Interior Stylist", img: expart1 },
            { name: "Arif Hasan", role: "Plant Care Specialist", img: expart2 },
            { name: "Miss Smith", role: "Botanist", img: expart4 },
            { name: "John Doe", role: "Landscape Architect", img: expart1 },
          ].map((expert, idx) => (
            <div
              key={idx}
              className="mx-6 w-80 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:border-primary transition-colors"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20 group-hover:border-primary transition-colors">
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{expert.name}</h3>
              <p className="text-primary font-medium text-sm">{expert.role}</p>
              <p className="text-gray-400 text-sm mt-2">
                Passionate about bringing nature into every home.
              </p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* 14. Seasonal Favorites */}
      <section className="py-20 bg-green-50">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
              Seasonal <span className="text-primary">Favorites</span> 🌸
            </h2>
            <p className="text-gray-500 mt-2">
              Perfect plants for the current season.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <img
                    src={`https://picsum.photos/seed/season${item}/400/500`}
                    alt="Seasonal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full text-black">
                    Spring Special
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">
                  Blooming Beauty {item}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-primary font-bold">$2{item}.99</p>
                  <button className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Plant of the Month */}
      <section className="py-20 w-11/12 max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-3xl overflow-hidden text-white flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 relative h-96 md:h-auto overflow-hidden group">
            <img
              src="https://picsum.photos/seed/monstera/800/800"
              alt="Plant of Month"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 bg-primary px-4 py-2 rounded-full font-bold shadow-lg">
              Plant of the Month 🏆
            </div>
          </div>
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-gray-900 to-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              Monstera Deliciosa
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Known as the "Swiss Cheese Plant", this beauty is perfect for
              adding a tropical vibe to any room. Easy to care for and stunning
              to look at.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <FaSun className="text-yellow-400" /> Bright Indirect
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <FaCloudSun className="text-blue-400" /> Weekly Water
              </div>
            </div>
            <button className="btn btn-primary btn-lg rounded-full w-fit border-none shadow-lg shadow-primary/30 hover:shadow-primary/50">
              Get It Now - $45.00
            </button>
          </div>
        </div>
      </section>

      {/* 16. Gift Guide */}
      <section className="py-20 bg-orange-50">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
              Curated <span className="text-primary">Gift Guides</span> 🎁
            </h2>
            <p className="text-gray-500 mt-2">
              Find the perfect gift for every plant lover in your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "For Beginners",
                icon: <FaCheckCircle />,
                color: "bg-blue-100",
                text: "text-blue-600",
              },
              {
                title: "Pet Friendly",
                icon: <FaLeaf />,
                color: "bg-green-100",
                text: "text-green-600",
              },
              {
                title: "Low Light",
                icon: <FaCloudSun />,
                color: "bg-purple-100",
                text: "text-purple-600",
              },
            ].map((gift, idx) => (
              <div
                key={idx}
                className={`${gift.color} p-8 rounded-3xl hover:-translate-y-2 transition-transform cursor-pointer group`}
              >
                <div
                  className={`text-4xl ${gift.text} mb-4 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm`}
                >
                  {gift.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {gift.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  Handpicked selection perfect for this category.
                </p>
                <span className="font-bold text-gray-800 border-b-2 border-gray-800 pb-1 group-hover:text-primary group-hover:border-primary transition-colors">
                  Shop Collection
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. Virtual Consultation */}
      <section className="py-20 w-11/12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <FaVideo className="text-6xl mx-auto mb-6 text-emerald-200 animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">
              Need Expert Advice?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-emerald-100">
              Book a 1-on-1 virtual consultation with our botanists to diagnose
              plant issues or plan your indoor jungle.
            </p>
            <button className="btn bg-white text-emerald-700 hover:bg-gray-100 border-none btn-lg rounded-full px-10 shadow-lg">
              Book a Session
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section>

      {/* 18. Workshops */}
      <section className="py-20 bg-white">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
                Upcoming <span className="text-primary">Workshops</span> 📅
              </h2>
              <p className="text-gray-500 mt-2">
                Learn, create, and connect with fellow plant lovers.
              </p>
            </div>
            <button className="text-primary font-bold mt-4 md:mt-0 hover:underline">
              View All Events
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((ws, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/workshop${ws}/400/400`}
                    alt="Workshop"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <span className="text-primary font-bold text-sm mb-2">
                    SAT, OCT {20 + ws} • 2:00 PM
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Terrarium Building Masterclass
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Learn to create your own self-sustaining ecosystem in a jar.
                  </p>
                  <button className="btn btn-sm btn-outline btn-primary w-fit rounded-full">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19. Office Greenery */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm font-bold mb-6 text-primary border border-gray-700">
              <FaBriefcase /> GreenNest for Business
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              Green Your Workspace
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Boost productivity and well-being in your office with our curated
              plant packages. We offer installation and maintenance services for
              businesses of all sizes.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-primary" /> Custom Design
                Consultation
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-primary" /> Weekly Maintenance
                Plans
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-primary" /> Volume Discounts
              </li>
            </ul>
            <button className="btn btn-primary rounded-full px-8 border-none hover:bg-emerald-700">
              Get a Corporate Quote
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="https://picsum.photos/seed/office1/400/500"
              className="rounded-2xl w-full h-64 object-cover translate-y-8 shadow-xl"
              alt="Office"
            />
            <img
              src="https://picsum.photos/seed/office2/400/500"
              className="rounded-2xl w-full h-64 object-cover shadow-xl"
              alt="Office"
            />
          </div>
        </div>
      </section>

      {/* 20. Community Showcase */}
      <section className="py-20 w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
            Grown by <span className="text-primary">You</span> 📸
          </h2>
          <p className="text-gray-500 mt-2">
            See how our community styles their GreenNest plants.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((user, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/user${user}/100/100`}
                    alt="User"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    PlantLover_{user}99
                  </h4>
                  <p className="text-xs text-gray-500">Verified Buyer</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={`https://picsum.photos/seed/plantuser${user}/500/500`}
                  alt="User Plant"
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-600 text-sm italic">
                "Absolutely love my new Fiddle Leaf Fig! It arrived in perfect
                condition and really ties the room together. 💚"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

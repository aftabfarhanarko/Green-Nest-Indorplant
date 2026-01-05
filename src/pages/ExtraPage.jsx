import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLeaf, FaStar, FaHeart, FaUser, FaEnvelope, FaImage } from "react-icons/fa";

// Import Images
import heroImg from "../assets/newHero.jpg";
import contentImg from "../assets/tips1.jpg";
import gallery1 from "../assets/MinnimalStyle/mini1.jpg";
import gallery2 from "../assets/MinnimalStyle/mini2.jpg";
import gallery3 from "../assets/Wall Hanging Planters/wall1.jpg";
import gallery4 from "../assets/seasonalRoom/specil1.jpg";
import user1 from "../assets/expart1.jpg";
import user2 from "../assets/expart2.jpg";
import user3 from "../assets/expart3.jpg";

const ExtraPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      once: true,
    });
  }, []);

  // Section 1: Hero Section
  const HeroSection = () => (
    <div className="bg-green-50 py-20 lg:py-32">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-gray-800 mb-6 leading-tight">
            Bring Nature <br className="hidden lg:block" />
            <span className="text-primary">Into Your Home</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Discover our curated collection of plants that will breathe life into your living space. Start your green journey today.
          </p>

          {/* Hero Features */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                <FaLeaf />
              </div>
              <span className="font-medium">100% Organic</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                <FaStar />
              </div>
              <span className="font-medium">Top Rated</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                <FaUser />
              </div>
              <span className="font-medium">Expert Care</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                <FaHeart />
              </div>
              <span className="font-medium">Love & Care</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Now
            </button>
            <button className="bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-full hover:bg-gray-50 transition duration-300 font-medium">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="flex-1" data-aos="fade-left">
          <div className="relative">
             <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
             <img 
               src={heroImg} 
               alt="Hero Plant" 
               className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition duration-500"
             />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce hidden md:block">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full text-primary">
                      <FaLeaf />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500">Plant of the Month</p>
                      <p className="font-bold text-gray-800">Monstera</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Section 2: Features Section
  const FeaturesSection = () => (
    <div className="py-20 w-11/12 max-w-7xl mx-auto">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold font-montserrat text-gray-800">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Eco Friendly", desc: "We prioritize sustainable practices in every step of our process.", icon: <FaLeaf /> },
          { title: "Quality Plants", desc: "Hand-picked and cared for by experts to ensure they thrive.", icon: <FaStar /> },
          { title: "Expert Support", desc: "Our team is here to help you with any plant care questions.", icon: <FaUser /> }
        ].map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Section 3: About/Content Section
  const ContentSection = () => (
    <div className="bg-gray-50 py-20">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <img 
            src={contentImg} 
            alt="Our Mission" 
            className="rounded-lg shadow-lg w-full h-80 object-cover" 
          />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold font-montserrat text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We believe that everyone deserves to experience the joy of gardening. Our mission is to make plant care accessible, enjoyable, and rewarding for everyone, regardless of their experience level.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <FaHeart className="text-primary mr-3" /> Passionate Community
            </li>
            <li className="flex items-center text-gray-700">
              <FaStar className="text-primary mr-3" /> Quality Products
            </li>
            <li className="flex items-center text-gray-700">
              <FaLeaf className="text-primary mr-3" /> Sustainable Growth
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Section 4: Gallery Section
  const GallerySection = () => {
    const galleryImages = [gallery1, gallery2, gallery3, gallery4];
    return (
      <div className="py-20 w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold font-montserrat text-gray-800">Our Collection</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg h-64 bg-gray-200" data-aos="zoom-in" data-aos-delay={index * 100}>
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white">
                <span className="font-bold text-lg">View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Section 5: Testimonials Section
  const TestimonialsSection = () => {
    const testimonials = [
      { name: "Sarah Johnson", role: "Plant Enthusiast", img: user1, text: "Amazing service and beautiful plants! Highly recommended for anyone looking to green up their space." },
      { name: "Michael Chen", role: "Interior Designer", img: user2, text: "The quality of the plants is outstanding. They arrived fresh and healthy. Will definitely order again." },
      { name: "Emily Davis", role: "Gardener", img: user3, text: "I love the variety of pots and planters. Great customer support as well!" }
    ];

    return (
      <div className="bg-primary/5 py-20">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold font-montserrat text-gray-800">What People Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{item.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-primary">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Section 6: Newsletter/Contact Section
  const NewsletterSection = () => (
    <div className="py-20 w-11/12 max-w-7xl mx-auto">
      <div className="bg-primary rounded-2xl p-12 text-center text-white relative overflow-hidden" data-aos="zoom-in">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Stay in the Loop</h2>
          <p className="mb-8 text-green-100 max-w-2xl mx-auto">Subscribe to our newsletter for the latest updates, gardening tips, and exclusive offers delivered straight to your inbox.</p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 font-medium flex items-center justify-center">
              Subscribe <FaEnvelope className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default ExtraPage;

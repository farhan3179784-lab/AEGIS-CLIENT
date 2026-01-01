import { FaArrowRight } from "react-icons/fa";
import LiveCard from "./LiveCard";
import heroBg from "../assets/banner.jpg";
import { BiRightTopArrowCircle } from "react-icons/bi";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import StatsBadge from "./StatsBadges";
const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-4 sm:px-10 pt-24 sm:pt-40 max-w-3xl text-white">
        
        {/* === Avatars + Join Badge === */}
        <div className="flex items-center gap-3 mb-6 flex-wrap sm:flex-nowrap">
          <div className="flex -space-x-2 sm:-space-x-3">
            <img src={avatar1} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" alt="" />
            <img src={avatar2} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" alt="" />
            <img src={avatar3} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" alt="" />
            <img src={avatar4} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" alt="" />
          </div>

          <div className="bg-black/60 backdrop-blur px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
            Join thousands building a smarter city
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold leading-snug sm:leading-tight pb-3 sm:pb-5 md:w-3/4">
          Safety isn't a <span className="text-yellow-400">luxury.</span>
          <br />
          It's a human right.
        </h1>

        {/* Description */}
        <p className="text-gray-300 w-full sm:w-[400px] mt-3 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed">
          AEGIS transforms real-world data into smart, meaningful awareness.
          Helping people, communities, and professionals stay informed,
          connected and safe.
        </p>

        {/* Button */}
        <button className="mt-4 sm:mt-8 bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3 font-medium text-sm sm:text-base">
          Get Early Access
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white text-yellow-300 text-2xl sm:text-3xl font-light rounded-full">
            <BiRightTopArrowCircle />
          </div>
        </button>
      </div>

      {/* Floating Elements */}
      <StatsBadge />
      <LiveCard />
    </section>
  );
};

export default Hero;

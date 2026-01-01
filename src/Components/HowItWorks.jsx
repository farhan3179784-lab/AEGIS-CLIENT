import { FaShieldAlt, FaLink, FaHeart } from "react-icons/fa";
import dashboard from "../assets/dashboard .png";
import dashboard1 from "../assets/dashbord1.png";

 function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-white">

      <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
        <span className="text-yellow-500">⚡</span>
        <span className="font-medium">How it Works</span>
      </div>

      <h2 className="text-center text-4xl md:text-5xl font-semibold text-slate-900">
        Connected. Intelligent. Always On
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-center text-gray-500">
        AEGIS is not just another safety app — it’s a smart ecosystem where data,
        communication, and protection come together in real time.
      </p>

      <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SECTION */}
        <div className="relative w-[320px] h-[220px] mx-auto howitworks-wrapper">

          <div className="absolute inset-0 rounded-2xl bg-white border-2 border-yellow-400 shadow-lg -translate-x-4 -translate-y-4 z-10" />

          <img
            src={dashboard1}
            alt="Dashboard"
            className="relative z-40 w-[85%] h-[85%] object-cover rounded-2xl shadow-xl
             top-18 left-54 -translate-x-1/2 howitworks-main"
          />

          <img
            src={dashboard}
            alt="Dashboard Overlay"
            className="absolute z-30 w-[85%] h-[85%] object-cover rounded-xl shadow-2xl
            -top-12 left-1/7 -translate-x-1/2 howitworks-overlay"
          />
        </div>

        {/* FEATURES */}
        <div className="space-y-10">
          <Feature
            icon={<FaShieldAlt size={22} />}
            title="Awareness"
            text="Real-time, meaningful insights about your surroundings so you can act not react."
          />
          <Feature
            icon={<FaLink size={22} />}
            title="Connection"
            text="Instantly connect with trusted responders, communities, and verified professionals."
          />
          <Feature
            icon={<FaHeart size={22} />}
            title="Confidence"
            text="Move freely knowing you are part of an intelligent network."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 flex items-center justify-center rounded-full
      bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-md">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        <p className="text-sm text-gray-500 mt-1">{text}</p>
      </div>
    </div>
  );
}
export default HowItWorks;
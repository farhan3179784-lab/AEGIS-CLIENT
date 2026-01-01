import {
  FaUserGraduate,
  FaBriefcase,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import BackgroundImage from "../assets/Background.jpg";
import { FaLock } from "react-icons/fa";

 function WhoItsFor() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="relative rounded-2xl overflow-hidden bg-[#0B1C2D]">

        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-10 py-16">

          {/* Label */}
          <div className="flex justify-center items-center gap-2 text-sm mb-3">
            <span className="text-yellow-500"><FaLock /></span> 
            <span className="font-medium text-white">AEGIS is built for</span>
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl sm:text-4xl md:text-4xl font-semibold text-white mb-12">
            Who It’s For
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            <Card
              icon={<FaUserGraduate />}
              title="Students & Educators"
              text="Safer campuses through real-time alerts and coordination."
            />

            <Card
              icon={<FaBriefcase />}
              title="Travelers & Professionals"
              text="Confidence and awareness wherever work takes you."
            />

            <Card
              icon={<FaShieldAlt />}
              title="Security Teams & Responders"
              text="Faster, coordinated response with verified intelligence."
            />

            <Card
              icon={<FaUsers />}
              title="Everyday People"
              text="Because peace of mind should belong to everyone."
            />

          </div>
        </div>
      </div>
    </section>
  );
}
function Card({ icon, title, text }) {
  return (
    <div className="flex gap-3 sm:gap-4 items-start bg-white rounded-xl p-4 sm:p-6 shadow-md">

      <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg
      bg-yellow-100 text-yellow-500 text-lg">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-lg sm:text-2xl text-slate-900">{title}</h4>
        <p className="text-sm text-gray-500 mt-1">{text}</p>
      </div>
    </div>
  );
}
export default WhoItsFor; 

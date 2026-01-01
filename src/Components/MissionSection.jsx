import { FaLock } from "react-icons/fa";
import missionImg from "../assets/mission.jpg"; // apni image path

const MissionSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaLock className="text-yellow-500 text-xs" />
          <span className="text-xs font-semibold text-gray-500">
            The Mission
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto">
          Safety is the foundation of <br />
          freedom, dignity, and opportunity.
        </h2>

        {/* Content */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-12 relative">

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={missionImg}
              alt="Mission"
              className="inverted-radius max-w-xs md:max-w-none"
            />
          </div>

          {/* Text Card */}
          <div
            className="
              w-full md:w-1/2
              bg-white
              relative md:absolute
              rounded-2xl shadow-lg
              p-6 md:p-12
              mt-8 md:mt-0
              md:right-44
            "
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              When people feel secure, they can move freely, learn confidently,
              travel further, and experience the world without hesitation.
              AEGIS exists to make that possible — using technology as a bridge
              between people, awareness, and trust so everyone can live with
              confidence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;

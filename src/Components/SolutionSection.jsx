import { FaEye, FaUsers, FaShieldAlt, FaBolt } from "react-icons/fa";
import solutionImg from "../assets/solutionImg.jpg"; 
import { FaLock } from "react-icons/fa";

const SolutionSection = () => {
  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <span className="text-xs font-semibold text-gray-500 uppercase flex gap-1">
        <span className="text-yellow-500"><FaLock /></span> 
 The Solution
        </span>

        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 max-w-2xl leading-tight">
          AEGIS turns real-world data <br />
          into collective intelligence.
        </h2>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Image Card */}
          <div className="relative bg-white rounded-2xl shadow-lg p-4">
            <img
              src={solutionImg}
              alt="solution"
              className="rounded-xl"
            />

            {/* Vertical Badge */}
            <div className="absolute top-6 left-0 -translate-x-1/2 bg-white shadow-md rounded-xl px-3 py-4 flex flex-col items-center">
              <span className="text-xl font-extrabold text-gray-900">
                20+
              </span>
              <span className="text-[10px] font-semibold text-gray-500 writing-mode-vertical rotate-180">
                Use cases
              </span>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <FeatureCard
              icon={<FaEye />}
              title="Real-time Insights"
            />

            {/* Card 2 */}
            <FeatureCard
              icon={<FaUsers />}
              title="Connected Platform"
            />

            {/* Card 3 */}
            <FeatureCard
              icon={<FaShieldAlt />}
              title="Verified Protection"
            />

            {/* Card 4 */}
            <FeatureCard
              icon={<FaBolt />}
              title="Instant Response"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md pt-10 pb-6 px-6 flex flex-col items-center text-center">
      
      {/* Icon – Top Center Floating */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 
                      w-10 h-10 flex items-center justify-center 
                      rounded-full bg-yellow-500 text-white text-lg shadow-md">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-sm font-semibold text-gray-900 mt-4">
        {title}
      </h4>

    </div>
  );
};

export default SolutionSection;

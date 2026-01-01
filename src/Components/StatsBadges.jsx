import { FaClock } from "react-icons/fa";
import statsImg from "../assets/Background+Border.png";

const StatsBadges = () => {
  return (
    <div
      className="
        absolute 
        right-4 top-40        /* mobile */
        sm:right-20 sm:top-60 /* small screens */
        md:right-86 md:top-80 /* desktop (original) */
        z-50 shadow-lg 
        w-20 sm:w-[111px] 
        h-20 sm:h-[116px]
      "
    >
      <img src={statsImg} alt="stats" className="w-full h-full object-cover" />
    </div>
  );
};

export default StatsBadges;

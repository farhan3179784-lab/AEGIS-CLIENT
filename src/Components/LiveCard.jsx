import { FaPlay } from "react-icons/fa";
import body from "../assets/body .png";

const LiveCard = () => {
  return (
    <div>
      <div
        className="
          absolute 
          bottom-0 right-0
          h-48 w-[280px]          /* mobile */
          sm:h-56 sm:w-[320px]   /* small screens */
          md:h-64 md:w-[380px]   /* desktop (original) */
          rounded-tl-[40px] 
          bg-white p-3 sm:p-4
        "
      >
        <div className="h-full w-full rounded-[30px] bg-black/50 border border-white/10 overflow-hidden relative">
          <img
            src={body}
            alt="preview"
            className="h-full w-full object-cover rounded-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveCard;

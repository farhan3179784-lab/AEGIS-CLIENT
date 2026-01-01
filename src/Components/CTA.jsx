import { FaLock } from "react-icons/fa";
import Lock from "../assets/lock.png";
import { BiRightTopArrowCircle } from "react-icons/bi";

 function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div
        className="relative rounded-2xl overflow-hidden shadow-xl"
        style={{
            backgroundImage: `url(${Lock})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-16">

          <div className="flex items-center gap-2 text-xs text-gray-300 mb-5 mt-4">
            <FaLock className="text-yellow-400 text-sm" />
            <span className="tracking-wide">Contact Us</span>
          </div>

          <h2 className="text-white font-semibold text-2xl md:text-3xl mb-3">
            Help shape the future of connected safety.
          </h2>

          <p className="text-gray-300 text-sm md:text-base max-w-xl mb-6 leading-relaxed">
            Because safety isn’t a privilege — it’s a human right.
            <br />
            Built for privacy-first access. Always secure.
          </p>

          {/* Button */}
          <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold px-6 py-3 rounded-full transition">
            Get Early Access
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white text-yellow-300 text-2xl sm:text-3xl font-light rounded-full">
                       <BiRightTopArrowCircle />
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}
export default CTA;
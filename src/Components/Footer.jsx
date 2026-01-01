import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa";
import logo from "../assets/logofooter.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-white mt-24">

      {/* CURVED WRAPPER */}
      <div className="curved-edge w-full">

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 pt-44 pb-10">

          {/* TOP ROW */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">

            {/* LEFT LINKS */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white">About us</a>
              <a href="#" className="hover:text-white">Use cases</a>
              <a href="#" className="hover:text-white">Feature</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>

            {/* RIGHT SOCIAL ICONS */}
            <div className="flex gap-4 text-white text-lg">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaVimeoV className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* ✅ DIVIDER LINE — NOW BELOW (DRMYAN → NICHY) */}
          <div className="w-full h-px bg-gray-400 opacity-40 my-8"></div>

          {/* BOTTOM ROW */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">

            <p>© 2024 ARS. All rights reserved.</p>

            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

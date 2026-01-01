import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiRightTopArrowCircle } from "react-icons/bi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `cursor-pointer hover:text-yellow-400 ${
      isActive ? "text-yellow-400" : "text-black"
    }`;

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      
      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        {/* Left Box */}
        <div className="bg-white flex items-center pr-3 w-[1050px] h-[80px] px-4 justify-between rounded-br-[30px] shadow-lg">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 pr-24 mx-auto text-[18px] font-semibold">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/platform" className={linkClass}>Platform</NavLink></li>
            <li><NavLink to="/use-cases" className={linkClass}>Use Cases</NavLink></li>
            <li><NavLink to="/features" className={linkClass}>Features</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>About us</NavLink></li>
            <li><NavLink to="/contact" className={linkClass}>Contact us</NavLink></li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* DESKTOP BUTTON */}
        <NavLink
          to="/contact"
          className="hidden md:flex bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-medium items-center gap-2 m-1 mr-8"
        >
          Contact us
          <div className="text-yellow-300 bg-white text-3xl rounded-full">
            <BiRightTopArrowCircle />
          </div>
        </NavLink>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-6 p-6">
            <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/platform">Platform</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/use-cases">Use Cases</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/features">Features</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about">About us</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact">Contact us</NavLink>
          </ul>

          {/* MOBILE BUTTON */}
          <div className="px-6 pb-6 ">
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="w-full flex justify-center items-center gap-2 bg-yellow-400 text-black py-3 rounded-full font-medium"
            >
              Contact us
              <div className="text-yellow-300 bg-white text-3xl rounded-full ">
                <BiRightTopArrowCircle />
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

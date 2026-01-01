import { FaLock } from "react-icons/fa";

// Images (replace paths if needed)
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";

 function TrustSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">

      {/* Label + Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-2">
          <FaLock className="text-yellow-400" />
          <span>Trust / Credibility</span>
        </div>

        <h2 className="font-semibold text-3xl md:text-4xl text-slate-900">
          Built on trust. Growing every day
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

        {/* Left Big Card */}
        <Card
          image={img1}
          text="Trusted by partners in education, transportation & private security"
          className="md:row-span-2 h-[220px] md:h-full"
        />

        {/* Top Middle */}
        <Card
          image={img2}
          text="Featured in pilot programs across campuses and city networks"
          className="h-[250px]"
        />

        {/* Top Right */}
        <Card
          image={img3}
          text="Backed by experts in safety, technology, and AI"
          className="h-[250px]"
        />

        {/* Bottom Wide */}
        <Card
          image={img4}
          text="Supported by a growing community of users & responders"
          className="md:col-span-2 h-[250px]"
        />

      </div>
    </section>
  );
}


function Card({ image, text, className }) {
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}>
      <img
        src={image}
        alt={text}
        className="w-full h-full object-cover brightness-75 hover:brightness-90 transition duration-300"
      />
      <div className="absolute bottom-3 left-3 right-3 bg-black/60 rounded-md p-3">
        <p className="text-white text-sm font-medium leading-snug">
          {text}
        </p>
      </div>
    </div>
  );
}
export default TrustSection;
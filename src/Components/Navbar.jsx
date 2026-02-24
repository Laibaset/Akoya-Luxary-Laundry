import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Use a URL-friendly path
  const isVisionMission = location.pathname === "/vision-mission";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-10 h-[80px] w-full flex gap-[130px] justify-center items-center transition-colors duration-500 ${
        isVisionMission
          ? "bg-[#1D2433]"
          : scrolled
          ? "bg-black/20 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div>
        <img
          className="h-[40px] w-[100px]"
          src="/Images/companylogo.png"
          alt="Company Logo"
        />
      </div>

      {/* Links */}
      <div className="flex justify-center items-center gap-8 text-white">
        <Link to="/">
          <p className="text-[15px] hover:scale-110 transition-transform cursor-pointer">
            HOME
          </p>
        </Link>
        <Link to="/services">
          <p className="text-[15px] hover:scale-110 transition-transform cursor-pointer">
            SERVICES
          </p>
        </Link>
        <Link to="/about">
          <p className="text-[15px] hover:scale-110 transition-transform cursor-pointer">
            ABOUT
          </p>
        </Link>
        <Link to="/vision-mission">
          <p className="text-[15px] hover:scale-110 transition-transform cursor-pointer">
            VISION & MISSION
          </p>
        </Link>
        <Link to="/contact">
          <p className="text-[15px] hover:scale-110 transition-transform cursor-pointer">
            CONTACT
          </p>
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center items-center">
        <button className="border border-[#D4AF37] rounded-4xl text-white px-5 py-2">
          English
        </button>
        <button className="border border-[#D4AF37] rounded-4xl text-white py-2 px-6 hover:scale-110 transition-transform">
          Client Login
        </button>
        <button className="bg-[#D4AF37] border border-[#D4AF37] rounded-4xl px-6 py-2 hover:scale-110 transition-transform">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
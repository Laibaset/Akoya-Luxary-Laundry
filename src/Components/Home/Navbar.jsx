import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const isVisionMission = location.pathname === "/vision-mission";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("home"), path: "/" },
    { label: t("services"), path: "/services" },
    { label: t("about"), path: "/about" },
    { label: t("visionMission"), path: "/vision-mission" },
    { label: t("contact"), path: "/contact" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full h-[80px] flex justify-between items-center px-6 md:px-12 transition-colors duration-500 ${isVisionMission
        ? "bg-[#1D2433]"
        : scrolled
          ? "bg-black/20 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          className="h-[40px] w-[100px] object-contain"
          src="/Images/companylogo.png"
          alt="Company Logo"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 text-white">
        {[
          t("home"),
          t("services"),
          t("about"),
          t("visionMission"),
          t("contact"),
        ].map(
          (item, idx) => {
            const paths = ["/", "/services", "/about", "/vision-mission", "/contact"];
            return (
              <Link key={idx} to={paths[idx]}>
                <p className="text-[13px] xl:text-[15px] hover:scale-110 transition-transform cursor-pointer whitespace-nowrap">
                  {item}
                </p>
              </Link>
            );
          }
        )}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-3 xl:gap-4 items-center">
        <button
          onClick={() =>
            changeLanguage(i18n.language === "en" ? "ur" : "en")
          }
          className="border border-[#D4AF37] rounded-4xl text-white px-4 xl:px-5 py-2 text-[13px] xl:text-[15px]"
        >
          {i18n.language === "en" ? "اردو" : "English"}
        </button>
        <Link to="/ClientLogin">
          <button className="border border-[#D4AF37] rounded-4xl text-white py-2 px-4 xl:px-6 hover:scale-110 transition-transform text-[13px] xl:text-[15px] whitespace-nowrap">
            {t("clientLogin")}
          </button>
        </Link>
        <Link to="/Booking">
          <button className="bg-[#D4AF37] border border-[#D4AF37] rounded-4xl px-4 xl:px-6 py-2 hover:scale-110 transition-transform text-[13px] xl:text-[15px] whitespace-nowrap">
            {t("bookNow")}
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full h-screen bg-black/60 backdrop-blur-sm flex flex-col items-center pt-6 gap-6 text-white lg:hidden transition-all duration-300">
          {[
            t("home"),
            t("services"),
            t("about"),
            t("visionMission"),
            t("contact"),
          ].map(
            (item, idx) => {
              const paths = ["/", "/services", "/about", "/vision-mission", "/contact"];
              return (
                <Link
                  key={idx}
                  to={paths[idx]}
                  onClick={() => setMenuOpen(false)}
                  className="text-[16px] font-medium hover:text-[#D4AF37] transition-colors"
                >
                  {item}
                </Link>
              );
            }
          )}

          <button
            onClick={() =>
              changeLanguage(i18n.language === "en" ? "ur" : "en")
            }
            className="border border-[#D4AF37] rounded-4xl text-white px-4 xl:px-5 py-2 text-[13px] xl:text-[15px]"
          >
            {i18n.language === "en" ? "اردو" : "English"}
          </button>

          <Link to="/ClientLogin" onClick={() => setMenuOpen(false)} className="w-full">
            <button className="border border-[#D4AF37] rounded-4xl text-white py-2 px-6 mt-2 w-full">
              Client Login
            </button>
          </Link>

          <Link to="/Booking" onClick={() => setMenuOpen(false)} className="w-full">
            <button className="bg-[#D4AF37] border border-[#D4AF37] rounded-4xl px-6 py-2 mt-2 w-full">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
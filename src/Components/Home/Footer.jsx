import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation("Footertranslation");

  return (
    <footer className="bg-[#1C1C1C] text-gray-300 px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img
              src="/Images/companylogo.png"
              alt="Akoya Luxury Laundry"
              className="h-12"
            />
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            {t("brandDescription")}
          </p>

          <div className="flex gap-4 mt-6 text-xl text-gray-400">
            <i className="ri-twitter-x-line hover:translate-y-[-4px] translation duration-500  hover:text-[#d4af37] cursor-pointer"><RiTwitterXFill /></i>
            <i className="ri-instagram-line hover:translate-y-[-4px] translation duration-500  hover:text-[#d4af37] cursor-pointer"><FaInstagram /></i>
            <i className="ri-facebook-fill hover:translate-y-[-4px] translation duration-500  hover:text-[#d4af37] cursor-pointer"><FaFacebook /></i>
          </div>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-semibold mb-6 tracking-wide">
            {t("servicesHeading")}
          </h3>
          <ul className="space-y-4">
            {[
              t("services.premiumLaundry"),
              t("services.dryCleaning"),
              t("services.steamPressing"),
              t("services.fragranceInfusion"),
              t("services.coutureCare"),
              t("services.vipClub"),
            ].map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:translate-x-3 translation duration-500 hover:text-[#d4af37] cursor-pointer"
              >
                <span className="text-[#d4af37]"><FaChevronRight /></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#d4af37] font-semibold mb-6 tracking-wide">
            {t("contactHeading")}
          </h3>

          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <span className="text-[#d4af37]"><GrLocation /></span>
              {t("contact.address")}
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4af37]"><IoCallOutline /></span>
              {t("contact.phone")}
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4af37]"><CiMail /></span>
              {t("contact.email")}
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#d4af37] font-semibold mb-6 tracking-wide">
            {t("newsletterHeading")}
          </h3>

          <p className="text-sm text-gray-400 mb-6">
            {t("newsletterDescription")}
          </p>

          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md mb-4 focus:outline-none focus:border-[#d4af37]"
          />

          <button className="w-full bg-[#d4af37] text-black font-semibold py-3 rounded-md hover:opacity-90 transition">
            {t("subscribeButton")}
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
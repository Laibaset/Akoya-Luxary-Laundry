import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";


const Footer = () => {
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
            Luxury garment care redefined.
            <br />
            Serving Doha's discerning clients with
            unparalleled quality and service.
          </p>

          <div className="flex gap-4 mt-6 text-xl text-gray-400">
            <i className="ri-twitter-x-line hover:translate-y-[-4px] translation duration-500  hover:text-[#d4af37] cursor-pointer"><RiTwitterXFill /></i>
            <i className="ri-instagram-line hover:translate-y-[-4px] translation duration-500  hover:text-[#d4af37] cursor-pointer"><FaInstagram /></i>
            <i className="ri-facebook-fill hover:translate-y-[-4px] translation duration-500  hover:text-[#d4af37] cursor-pointer"><FaFacebook /></i>
          </div>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-semibold mb-6 tracking-wide">
            OUR SERVICES
          </h3>
          <ul className="space-y-4">
            {[
              "Premium Laundry",
              "Dry Cleaning",
              "Steam Pressing",
              "Fragrance Infusion",
              "Couture Care",
              "VIP Club",
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
            CONTACT US
          </h3>

          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <span className="text-[#d4af37]"><GrLocation /></span>
              West Bay, Doha, Qatar
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4af37]"><IoCallOutline /></span>
              +974 3368 9993
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4af37]"><CiMail /></span>
              Akoyaluxurylaundry@gmail.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#d4af37] font-semibold mb-6 tracking-wide">
            NEWSLETTER
          </h3>

          <p className="text-sm text-gray-400 mb-6">
            Subscribe for exclusive offers and garment care tips.
          </p>

          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md mb-4 focus:outline-none focus:border-[#d4af37]"
          />

          <button className="w-full bg-[#d4af37] text-black font-semibold py-3 rounded-md hover:opacity-90 transition">
            Subscribe
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

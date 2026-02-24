import { HiOutlineSparkles } from "react-icons/hi";

const LandingP = () => {
  return (
    <div>

      {/* TOP FADE BORDER */}
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent relative top-14"></div>

      {/* MAIN SECTION */}
      <div className="h-[850px] w-full bg-[#1C1C1C] flex items-center justify-center">

        {/* CONTENT WRAPPER */}
        <div className="w-[90%] flex items-center gap-24">

          {/* LEFT IMAGE CARD */}
          <div className="h-[500px] w-[520px] relative rounded-2xl ">
            <img
              src="/public/Images/aquaClub.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <button className="bg-[#D4AF37] z-30 rounded-full text-[17px] flex gap-2 font-medium px-6 py-2 absolute -top-4 -right-4">
              <HiOutlineSparkles className="mt-1" />
              EXCLUSIVE
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[520px] text-white flex flex-col gap-6">

            <h2 className="text-[#D4AF37] text-5xl font-light">
              Akoya Club
            </h2>

            <p className="tracking-widest text-sm text-gray-300">
              FOR THE FEW WHO KNOW
            </p>

            <div className="w-[70px] h-[2px] bg-[#D4AF37]"></div>

            <p className="text-gray-300 leading-relaxed">
              Our invitation-only membership program offers unparalleled benefits
              for those who demand the absolute best in garment care and
              convenience.
            </p>

            <ul className="flex flex-col gap-4 text-gray-200">
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">✓</span>
                Priority scheduling with 2-hour pickup windows
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">✓</span>
                Dedicated garment concierge
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">✓</span>
                Complimentary fragrance infusion
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">✓</span>
                Luxury packaging as standard
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">✓</span>
                Bi-annual complimentary couture care
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">✓</span>
                Exclusive seasonal offers
              </li>
            </ul>

            <div className="flex gap-6 mt-6">
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition">
                Request Invitation +
              </button>

              <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-medium">
                Learn More ⓘ
              </button>
            </div>

          </div>
        </div>
      </div>

     
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

    </div>
  );
};

export default LandingP;

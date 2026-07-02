import { HiOutlineSparkles } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const LandingP = () => {
  const { t } = useTranslation("Akoyaclubtranslation");

  return (
    <div>
      {/* TOP FADE BORDER */}
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent relative "></div>

      {/* MAIN SECTION */}
      <div className="min-h-[850px] w-full bg-[#1C1C1C] flex items-center justify-center py-20">
        
        {/* CONTENT WRAPPER */}
        <div className="w-[90%] flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT IMAGE CARD */}
          <div className="h-[400px] sm:h-[450px] lg:h-[500px] w-full sm:w-[420px] lg:w-[520px] relative rounded-2xl">
            <img
              src="/public/Images/aquaClub.jpg"
              alt="Akoya Club"
              className="w-full h-full object-cover rounded-2xl"
            />

            <button className="bg-[#D4AF37] z-30 rounded-full text-[15px] sm:text-[17px] flex gap-2 font-medium px-5 py-2 absolute -top-4 -right-4">
              <HiOutlineSparkles className="mt-1" />
              {t("badge")}
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[520px] text-white flex flex-col gap-6 text-center lg:text-left">
            
            <h2 className="text-[#D4AF37] text-4xl sm:text-5xl font-light">
              {t("title")}
            </h2>

            <p className="tracking-widest text-xs sm:text-sm text-gray-300">
              {t("tagline")}
            </p>

            <div className="w-[70px] h-[2px] bg-[#D4AF37] mx-auto lg:mx-0"></div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {t("description")}
            </p>

            <ul className="flex flex-col gap-4 text-gray-200 text-sm sm:text-base">
              {[
                t("benefits.priorityScheduling"),
                t("benefits.concierge"),
                t("benefits.fragrance"),
                t("benefits.packaging"),
                t("benefits.coutureCare"),
                t("benefits.seasonalOffers"),
              ].map((item, i) => (
                <li key={i} className="flex gap-3 justify-center lg:justify-start">
                  <span className="text-[#D4AF37]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center lg:justify-start">
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition">
                {t("requestInvitation")}
              </button>

              <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-medium">
                {t("learnMore")}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM FADE BORDER */}
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
    </div>
  );
};

export default LandingP;
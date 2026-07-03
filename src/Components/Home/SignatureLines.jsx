import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const LP = () => {
  const { t, i18n: i18nInstance } = useTranslation("SignatureLinestranslation");
  const isRtl = i18nInstance.language === "ur";
  const dir = isRtl ? "rtl" : "ltr";

  return (
    <div className="w-full" dir={dir}>
      {/* Signature Lines Section */}



      <div className="w-full bg-[#FAF9F7] relative pb-16 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-light mt-10 text-center">
            <span className="text-3xl sm:text-4xl md:text-5xl block">{t("signatureLines")}</span>
          </p>

          <div className="flex items-center justify-center font-mono mt-4 gap-3 sm:gap-5 flex-wrap px-4">
            <div className="w-[30px] sm:w-[70px] h-[1px] bg-[#D4AF37]"></div>
            <div className="text-[16px] sm:text-[20px] md:text-[25px] font-light text-[#D4AF37] text-center">
              {t("collectionName")}
            </div>
            <div className="w-[30px] sm:w-[70px] h-[1px] bg-[#D4AF37]"></div>
          </div>
        </motion.div>
        {/* Collection Cards */}
        <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8 mt-10 md:mt-12 px-4">
          {/* Platinum Care */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative transition-transform duration-500 hover:-translate-y-2 w-full sm:w-[320px] max-w-[320px]">
              <img
                className="h-[300px] w-full z-0 rounded-2xl object-cover"
                src="/Images/platinumCare.jpg"
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-2xl bg-gradient-to-r from-[#1C1C1C]/40 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
              <div className="absolute top-12 left-6">
                <div className="h-[55px] w-[55px] flex text-3xl items-center justify-center rounded-full bg-[#D4AF37]">
                  ✨
                </div>
                <p className="text-2xl mt-2 text-white font-medium">
                  {t("platinum.title")}
                </p>
                <p className="text-[13px] text-white mt-3">
                  {t("platinum.description")}
                </p>
                <Link to="/services">
                  <button className="hover:bg-black transition duration-700 hover:text-[#D4AF37] bg-[#D4AF37] mt-4 px-7 py-2 rounded-4xl flex items-center justify-center gap-2">
                    {t("platinum.cta")} <FaChevronRight className="text-[12px] mt-1" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>




          {/* Executive Collection */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="relative transition-transform duration-500 hover:-translate-y-2 w-full sm:w-[320px] max-w-[320px]">
              <img
                className="h-[300px] w-full z-0 rounded-2xl object-cover"
                src="/Images/exectiveCollection.jpg"
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-2xl bg-gradient-to-r from-[#1C1C1C]/40 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
              <div className="absolute top-12 left-6">
                <div className="h-[55px] w-[55px] flex text-3xl items-center justify-center rounded-full bg-[#D4AF37]">
                  👔
                </div>
                <p className="text-2xl mt-2 text-white font-medium">
                  {t("executive.title")}
                </p>
                <p className="text-[13px] text-white mt-3">
                  {t("executive.description")}
                </p>
                <Link to="/services">
                  <button className="hover:bg-black transition duration-700 hover:text-[#D4AF37] bg-[#D4AF37] mt-4 px-7 py-2 rounded-4xl flex items-center justify-center gap-2">
                    {t("executive.cta")} <FaChevronRight className="text-[12px] mt-1" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>





          {/* Couture Preservation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >


            <div className="relative transition-transform duration-500 hover:-translate-y-2 w-full sm:w-[320px] max-w-[320px]">
              <img
                className="h-[300px] w-full z-0 rounded-2xl object-cover"
                src="/Images/professionalCollection.jpg"
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-2xl bg-gradient-to-r from-[#1C1C1C]/40 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
              <div className="absolute top-12 left-6">
                <div className="h-[55px] w-[55px] flex text-3xl items-center justify-center rounded-full bg-[#D4AF37]">
                  🧵
                </div>
                <p className="text-2xl mt-2 text-white font-medium">
                  {t("couture.title")}
                </p>
                <p className="text-[13px] text-white mt-3">
                  {t("couture.description")}
                </p>
                <Link to="/services">
                  <button className="hover:bg-black transition duration-700 hover:text-[#D4AF37] bg-[#D4AF37] mt-4 px-7 py-2 rounded-4xl flex items-center justify-center gap-2">
                    {t("couture.cta")} <FaChevronRight className="text-[12px] mt-1" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>


        {/* View All Collection Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <Link to="/services">
            <button className="hover:bg-black transition duration-500 hover:text-white h-[50px] flex justify-center items-center gap-4 rounded-4xl w-[230px] border">
              {t("viewAllCollection")} <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>

      {/* How Would You Like it Washed */}
      <div className="flex flex-col justify-center items-center mt-16 md:mt-24 relative text-center px-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("washSection.heading")}</p>
        <p className="text-[16px] md:text-[18px] mt-4 font-medium text-[#D4AF37]">
          {t("washSection.subheading")}
        </p>
      </div>

      {/* Wash Options */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-12 px-4">
        <div className="hover:shadow-2xl transition duration-500 bg-[#F5E1DA] h-auto md:h-[260px] w-full sm:w-[520px] max-w-[520px] rounded-3xl flex flex-col justify-center gap-4 p-6">
          <div className="text-[40px]">🧼</div>
          <p className="text-2xl font-bold">{t("standardWash.title")}</p>
          <p>
            {t("standardWash.description")}
          </p>
          <p className="text-[18px] font-medium text-[#DDBD65]">
            {t("standardWash.price")}
          </p>
        </div>

        <div className="hover:shadow-2xl transition duration-500 bg-[#F5E1DA] h-auto md:h-[260px] w-full sm:w-[520px] max-w-[520px] rounded-3xl flex flex-col justify-center gap-4 p-6">
          <div className="text-[40px]">⚡</div>
          <p className="text-2xl font-bold">{t("expressWash.title")}</p>
          <p>
            {t("expressWash.description")}
          </p>
          <p className="text-[18px] font-medium text-[#DDBD65]">
            {t("expressWash.price")}
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center mt-10 md:mt-12 mb-10 px-4">
        <Link to="/services">
          <button className="hover:scale-105 transition duration-700 font-medium bg-[#D4AF37] px-9 py-4 rounded-4xl flex items-center justify-center gap-2 w-full sm:w-auto">
            {t("continueButton")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LP;
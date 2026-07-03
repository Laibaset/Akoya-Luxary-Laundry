import { IoMdCheckmark } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Landpag = () => {
  const { t, i18n: i18nInstance } = useTranslation("Fragrancetrans");
  const isRtl = i18nInstance.language === "ur";
  const dir = isRtl ? "rtl" : "ltr";

  return (
    <div>
     
  

      {/* Hero + Fragrance Cards Section */}
      <div className="flex top-20 relative flex-col gap-5 justify-center items-center bg-[#F3F4F6] w-[100%] min-h-[700px] py-16 px-4">
        
        
         <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">{t("hero.title")}</p>
        <p className="text-gray-600 text-[16px] sm:text-[18px] mb-6 text-center">
          {t("hero.subtitle")}
        </p>

        </motion.div>

        {/* Cards - scrollable on mobile, wrap on tablet, row on desktop */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-7 justify-center items-center w-full max-w-[1200px]">



          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  


          <div className="hover:scale-105 transition duration-700 h-[430px] w-[260px] bg-white rounded-2xl shadow-lg overflow-hidden shrink-0">
            <img
              className="w-full h-48 object-cover"
              src="/Images/maknoun.jpg"
              alt="Fragrance"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{t("fragrances.maknoun.name")}</h3>
              <p className="text-gray-600 text-[13px] mb-4">
                {t("fragrances.maknoun.description")}
              </p>
              <div className="flex gap-24">
                <p className="text-[18px] font-bold text-[#DDBD65]">{t("fragrances.maknoun.price")}</p>
                <button className="bg-[#D4AF37] text-white px-4 py-1 rounded-4xl hover:bg-yellow-600 transition">
                  {t("fragrances.addButton")}
                </button>
              </div>
            </div>
          </div>
</motion.div>






          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

          <div className="hover:scale-105 transition duration-700 h-[430px] w-[260px] bg-white rounded-2xl shadow-lg overflow-hidden shrink-0">
            <img
              className="w-full h-48 object-cover"
              src="/Images/mad.jpg"
              alt="Fragrance"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{t("fragrances.mad.name")}</h3>
              <p className="text-gray-600 text-[13px] mb-4">
                {t("fragrances.mad.description")}
              </p>
              <div className="flex gap-24 mt-10">
                <p className="text-[18px] font-bold text-[#DDBD65]">{t("fragrances.mad.price")}</p>
                <button className="bg-[#D4AF37] text-white px-4 py-1 rounded-4xl hover:bg-yellow-600 transition">
                  {t("fragrances.addButton")}
                </button>
              </div>
            </div>
          </div>
</motion.div>



          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5 }}
>

          <div className="hover:scale-105 transition duration-700 h-[430px] w-[260px] bg-white rounded-2xl shadow-lg overflow-hidden shrink-0">
            <img
              className="w-full h-48 object-cover"
              src="/Images/lulwa.jpg"
              alt="Fragrance"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{t("fragrances.lulwa.name")}</h3>
              <p className="text-gray-600 text-[13px] mb-4">
                {t("fragrances.lulwa.description")}
              </p>
              <div className="flex gap-24">
                <p className="text-[18px] font-bold text-[#DDBD65]">{t("fragrances.lulwa.price")}</p>
                <button className="bg-[#D4AF37] text-white px-4 py-1 rounded-4xl hover:bg-yellow-600 transition">
                  {t("fragrances.addButton")}
                </button>
              </div>
            </div>
          </div>
</motion.div>


 <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
>

          <div className="hover:scale-105 transition duration-700 h-[430px] w-[260px] bg-white rounded-2xl shadow-lg overflow-hidden shrink-0">
            <img
              className="w-full h-48 object-cover"
              src="/Images/sadf.jpg"
              alt="Fragrance"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{t("fragrances.sadf.name")}</h3>
              <p className="text-gray-600 text-[13px] mb-4">
                {t("fragrances.sadf.description")}
              </p>
              <div className="flex gap-24 mt-14">
                <p className="text-[18px] font-bold text-[#DDBD65]">{t("fragrances.sadf.price")}</p>
                <button className="bg-[#D4AF37] text-white px-4 py-1 rounded-4xl hover:bg-yellow-600 transition">
                  {t("fragrances.addButton")}
                </button>
              </div>
            </div>
          </div>
</motion.div>
        </div>
      </div>

      {/* Packaging Section */}
      <div className="flex flex-col justify-center items-center gap-3 relative top-0 lg:top-[-150px] mt-14 sm:mt-24 lg:mt-80 px-4 ">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-center">{t("packaging.heading")}</p>
        <div className="flex justify-center items-center gap-4">
          <div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
          <div className="text-[16px] sm:text-[20px] font-medium text-[#D4AF37] whitespace-nowrap">{t("packaging.subheading")}</div>
          <div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
        </div>

        {/* Packaging Cards */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-8 justify-center items-center w-full max-w-[1200px] mt-4">

          <div className="hover:scale-103 hover:cursor-pointer transition duration-700 h-[600px] w-[338px] bg-white rounded-2xl shadow-lg shrink-0">
            <div className="relative w-full h-[380px]">
              <img
                src="/Images/suit-plastic.jpeg"
                alt="Fragrance"
                className="w-70% h-full ms-10 hover:scale-130"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <button className="bg-[#D4AF37] relative px-4 py-1 rounded-4xl ms-4 bottom-[50px]">
                {t("packaging.includedButton")}
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{t("packaging.plasticWrap.title")}</h3>
              <p className="text-gray-600 text-[13px] mb-4">
                {t("packaging.plasticWrap.description")}
              </p>
              <div className="flex flex-col gap-2">
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.plasticWrap.features.transparency")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.plasticWrap.features.antiStatic")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.plasticWrap.features.recyclable")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.plasticWrap.features.tamperEvident")}
                </div>
              </div>
            </div>
          </div>

          <div className="hover:scale-103 hover:cursor-pointer transition duration-700 h-[600px] w-[338px] bg-white rounded-2xl shadow-lg shrink-0">
            <div className="relative w-full h-[380px]">
              <img
                src="/Images/package.jpg"
                alt="Fragrance"
                className="w-70% h-full ms-10 hover:scale-130"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <button className="bg-[#D4AF37] relative px-4 py-1 rounded-4xl ms-4 bottom-[50px]">
                {t("packaging.includedButton")}
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{t("packaging.fabricWrap.title")}</h3>
              <p className="text-gray-600 text-[13px] mb-4">
                {t("packaging.fabricWrap.description")}
              </p>
              <div className="flex flex-col gap-2">
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.fabricWrap.features.transparency")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.fabricWrap.features.antiStatic")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.fabricWrap.features.recyclable")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.fabricWrap.features.tamperEvident")}
                </div>
              </div>
            </div>
          </div>

          <div className="hover:scale-103 hover:cursor-pointer transition duration-700 h-[600px] w-[338px] bg-white rounded-2xl shadow-lg shrink-0">
            <div className="relative w-full h-[380px]">
              <img
                src="/Images/BOX.jpeg"
                alt="Fragrance"
                className="w-70% relative top-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <button className="bg-[#D4AF37] relative px-4 py-1 rounded-4xl ms-4 top-[110px]">
                {t("packaging.includedButton")}
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{t("packaging.giftBox.title")}</h3>
              <p className="text-gray-600 text-[13px] mb-4">
                {t("packaging.giftBox.description")}
              </p>
              <div className="flex flex-col gap-2">
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.giftBox.features.sandalwood")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.giftBox.features.velvetLining")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.giftBox.features.scentCapsule")}
                </div>
                <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
                  <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
                  {t("packaging.giftBox.features.heirloom")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Landpag;
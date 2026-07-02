import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

const Swiperr = () => {
  const { t, i18n: i18nInstance } = useTranslation("Swipertranslation");
  const isRtl = i18nInstance.language === "ur";
  const dir = isRtl ? "rtl" : "ltr";

  return (
    <div className="w-full overflow-hidden bg-[white]" dir={dir}>
      <div className="w-full h-[600px]">
        <Swiper
          key={i18nInstance.language} // force remount on language change, same as before
          dir={dir}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          navigation={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          className="w-full h-full relative"
        >
          {/* Slide 1 */}
          <SwiperSlide className="relative w-full h-full">
            <img className="h-full w-full object-cover" src="/Images/platinumCare.jpg" alt={t("slide1.title")} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
            <div className={`absolute top-1/4 md:top-40 z-20 text-style ${isRtl ? "right-4 md:right-20 text-right" : "left-4 md:left-20 text-left"}`}>
              <p className="text-3xl md:text-6xl text-white font-sans font-light">{t("slide1.title")}</p>
              <p className="text-lg md:text-2xl text-[#D4AF37] mt-3 md:mt-5">{t("slide1.subtitle")}</p>
              <Link to="/Booking">
                <button className="mt-4 md:mt-7 text-[14px] md:text-[18px] bg-[#D4AF37] text-black font-medium rounded-3xl md:rounded-4xl px-5 py-2 md:px-7 md:py-3 hover:scale-105 transition-transform">
                  {t("button")}
                </button>
              </Link>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="relative w-full h-full">
            <img className="h-full w-full object-cover" src="/Images/eco.jpg" alt={t("slide2.title")} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
            <div className={`absolute top-1/4 md:top-40 z-20 text-style ${isRtl ? "right-4 md:right-20 text-right" : "left-4 md:left-20 text-left"}`}>
              <p className="text-3xl md:text-6xl text-white font-sans font-light">{t("slide2.title")}</p>
              <p className="text-lg md:text-2xl text-[#D4AF37] mt-3 md:mt-5">{t("slide2.subtitle")}</p>
              <Link to="/Booking">
                <button className="mt-4 md:mt-7 text-[14px] md:text-[18px] bg-[#D4AF37] text-black font-medium rounded-3xl md:rounded-4xl px-5 py-2 md:px-7 md:py-3 hover:scale-105 transition-transform">
                  {t("button")}
                </button>
              </Link>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="relative w-full h-full">
            <img className="h-full w-full object-cover" src="/Images/pressing.jpg" alt={t("slide3.title")} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
            <div className={`absolute top-1/4 md:top-40 z-20 text-style ${isRtl ? "right-4 md:right-20 text-right" : "left-4 md:left-20 text-left"}`}>
              <p className="text-3xl md:text-6xl text-white font-sans font-light">{t("slide3.title")}</p>
              <p className="text-lg md:text-2xl text-[#D4AF37] mt-3 md:mt-5">{t("slide3.subtitle")}</p>
              <Link to="/Booking">
                <button className="mt-4 md:mt-7 text-[14px] md:text-[18px] bg-[#D4AF37] text-black font-medium rounded-3xl md:rounded-4xl px-5 py-2 md:px-7 md:py-3 hover:scale-105 transition-transform">
                  {t("button")}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swiperr;
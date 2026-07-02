import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("Contacttranslation");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("form.successAlert"));
  };

  return (
    <div className="w-full bg-[#FAF9F7]">
      <div className="w-[100%] h-[607px] bg-[#FAF9F7]">
      <Swiper
        pagination={{
          clickable: true,
       }}

         modules={[ Autoplay, Pagination]}
      
      
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      speed={800}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="relative h-[560px]"
      >
      <SwiperSlide className=''><img className='h-[600px] w-[100%] bg-black z-0' src="/Images/platinumCare.jpg" alt="" /> 
      <div class="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
      <div className='absolute top-40 z-20 left-25 '>
      <p className='text-6xl text-white font-sans font-light'> {t("slides.slide1.title")}</p>
      <p className='text-2xl text-[#D4AF37] mt-5'>{t("slides.slide1.subtitle")}</p>
      <button className='text-[18px] mt-7 bg-[#D4AF37] rounded-4xl px-7 py-3'>{t("slides.slide1.button")}</button>
     </div>
     </SwiperSlide>
      <SwiperSlide><img className='h-[600px] w-[100%] z-0' src="/Images/eco.jpg" alt="" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
       <div className='absolute top-40 z-20 left-25 '>
      <p className='text-6xl text-white font-sans font-light'> {t("slides.slide2.title")}</p>
      <p className='text-2xl text-[#D4AF37] mt-5'>{t("slides.slide2.subtitle")}</p>
      <button className='text-[18px] mt-7 bg-[#D4AF37] rounded-4xl px-7 py-3'>{t("slides.slide2.button")}</button>
     </div>
      </SwiperSlide>
      <SwiperSlide ><img className='h-[600px] w-[100%] z-0' src="/Images/pressing.jpg" alt="" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
       <div className='absolute top-40 z-20 left-25 '>
      <p className='text-6xl text-white font-sans font-light'> {t("slides.slide3.title")}</p>
      <p className='text-2xl text-[#D4AF37] mt-5'>{t("slides.slide3.subtitle")}</p>
      <button className='text-[18px] mt-7 bg-[#D4AF37] rounded-4xl px-7 py-3'>{t("slides.slide3.button")}</button>
     </div>
      </SwiperSlide>
    </Swiper>
    </div>
    
      
      {/* CONTACT SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t("contactInfo.heading")}</h2>

          <p className="text-gray-600 max-w-md mb-12">
            {t("contactInfo.description")}
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F4EEDC]">
              <CiLocationOn className="text-[#D4AF37] text-2xl" />
            </div>
            <div>
              <p className="font-semibold">{t("contactInfo.location.label")}</p>
              <p className="text-gray-600">{t("contactInfo.location.value")}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F4EEDC]">
              <FaPhoneAlt className="text-[#D4AF37] text-2xl" />
            </div>
            <div>
              <p className="font-semibold">{t("contactInfo.phone.label")}</p>
              <p className="text-gray-600">{t("contactInfo.phone.value")}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F4EEDC]">
              <CiMail className="text-[#D4AF37] text-2xl" />
            </div>
            <div>
              <p className="font-semibold">{t("contactInfo.email.label")}</p>
              <p className="text-gray-600">{t("contactInfo.email.value")}</p>
            </div>
          </div>

          <p className="font-semibold mb-4">{t("contactInfo.followUs")}</p>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
              <FaTwitter />
            </div>
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
              <FaWhatsapp />
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="flex items-center justify-center p-6">
          <div className="w-full max-w-2xl bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="text-2xl font-semibold mb-8">{t("form.heading")}</h2>

            <form onSubmit={handleSubmit}>
              <input
                className="w-full mb-4 px-5 py-4 rounded-xl border bg-[#FAFAFA]"
                placeholder={t("form.namePlaceholder")}
              />
              <input
                className="w-full mb-4 px-5 py-4 rounded-xl border bg-[#FAFAFA]"
                placeholder={t("form.emailPlaceholder")}
              />
              <textarea
                rows="6"
                className="w-full mb-6 px-5 py-4 rounded-xl border bg-[#FAFAFA]"
                placeholder={t("form.messagePlaceholder")}
              ></textarea>

              <button className="w-full bg-black text-white py-4 rounded-xl">
                {t("form.sendButton")}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
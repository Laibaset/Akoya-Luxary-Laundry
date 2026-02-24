import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
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
      <p className='text-6xl text-white font-sans font-light'> Premium Garment Care</p>
      <p className='text-2xl text-[#D4AF37] mt-5'>Expert Cleaning for your most delicate fabrics</p>
      <button className='text-[18px] mt-7 bg-[#D4AF37] rounded-4xl px-7 py-3'>Schdeule Pickup</button>
     </div>
     </SwiperSlide>
      <SwiperSlide><img className='h-[600px] w-[100%] z-0' src="/Images/eco.jpg" alt="" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
       <div className='absolute top-40 z-20 left-25 '>
      <p className='text-6xl text-white font-sans font-light'> Eco Conscious Cleaning</p>
      <p className='text-2xl text-[#D4AF37] mt-5'>Sustainable methods without compromising quality</p>
      <button className='text-[18px] mt-7 bg-[#D4AF37] rounded-4xl px-7 py-3'>Schdeule Pickup</button>
     </div>
      </SwiperSlide>
      <SwiperSlide ><img className='h-[600px] w-[100%] z-0' src="/Images/pressing.jpg" alt="" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
       <div className='absolute top-40 z-20 left-25 '>
      <p className='text-6xl text-white font-sans font-light'> Prcision Pressing</p>
      <p className='text-2xl text-[#D4AF37] mt-5'>Impeccable finishes for business and formal wear</p>
      <button className='text-[18px] mt-7 bg-[#D4AF37] rounded-4xl px-7 py-3'>Schdeule Pickup</button>
     </div>
      </SwiperSlide>
    </Swiper>
    </div>
    
      
      {/* CONTACT SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">How to reach us</h2>

          <p className="text-gray-600 max-w-md mb-12">
            Our concierge team is available to assist you with any inquiries
            about our luxury laundry services.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F4EEDC]">
              <CiLocationOn className="text-[#D4AF37] text-2xl" />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">West Bay, Doha, Qatar</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F4EEDC]">
              <FaPhoneAlt className="text-[#D4AF37] text-2xl" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+974 1234 5678</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F4EEDC]">
              <CiMail className="text-[#D4AF37] text-2xl" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">info@akoyalaundry.com</p>
            </div>
          </div>

          <p className="font-semibold mb-4">Follow Us</p>
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
            <h2 className="text-2xl font-semibold mb-8">Send us a message</h2>

            <form onSubmit={handleSubmit}>
              <input
                className="w-full mb-4 px-5 py-4 rounded-xl border bg-[#FAFAFA]"
                placeholder="Full Name"
              />
              <input
                className="w-full mb-4 px-5 py-4 rounded-xl border bg-[#FAFAFA]"
                placeholder="Email"
              />
              <textarea
                rows="6"
                className="w-full mb-6 px-5 py-4 rounded-xl border bg-[#FAFAFA]"
                placeholder="Message"
              ></textarea>

              <button className="w-full bg-black text-white py-4 rounded-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
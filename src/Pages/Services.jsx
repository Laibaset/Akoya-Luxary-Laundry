import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { BsChatDots } from "react-icons/bs";

const slides = [
  {
    image: "/Images/eco.jpg",
    title: "Premium Garment Care",
    subtitle: "Experience the Akoya Difference",
  },
  {
    image: "/Images/pCollection.jpg",
    title: "Luxury Laundry Services",
    subtitle: "For the Most Discerning Clients",
  },
  {
    image: "/Images/expert.jpg",
    title: "Precision Fabric Care",
    subtitle: "Tailored to your garment needs",
  },
];


const Products = [

  {
   image: "/Images/dryCleaning.jpg",
    title: "  Dry Cleaning",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🧥"
  },
   {
   image: "/Images/exectivePressing.jpg",
    title: "Executive Pressing",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👔"
  },
   {
   image: "/Images/care.jpg",
    title: "Coture Care",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👗"
  },
   {
   image: "/Images/resturation.jpg",
    title: "Bisht Restoration",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🕌"
  },
   {
   image: "/Images/sehedulePickup.jpg",
    title: "Express Service",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "⚡"
  },
   {
   image: "/Images/fragrance.jpg",
    title: "Fragrance Infusion",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🌸"
  },
   {
   image: "/Images/dishdasha.webp",
    title: "Dishdasha",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👳‍♀️"
  },
   {
   image: "/Images/child_dishdasha.jpg",
    title: "Child Dishdasha",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👦"
  },
   {
   image: "/Images/bisht.jpg",
    title: "Bisht",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🪔"
  },
   {
   image: "/Images/ghutra.jpg",
    title: "Ghutra",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🧕"
  },
   {
   image: "/Images/kurta.jpg",
    title: "Kurta",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👘"
  },
   {
   image: "/Images/kurtaPajama.jpg",
    title: "Kurta Pyjama (Set)",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👖"
  },
   {
   image: "/Images/kameez.jpg",
    title: "Kameez",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👕"
  },
   {
   image: "/Images/jalabiya.jpg",
    title: "Jalabiya",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👚"
  },
   {
   image: "/Images/abaya.jpg",
    title: "Abaya",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🧕"
  },
   {
   image: "/Images/abaya_special.jpg",
    title: "Abaya Special",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "✨"
  },
   {
   image: "/Images/hijab.png",
    title: "Hijab",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🧣"
  },
   {
   image: "/Images/gent_suit.jpg",
    title: "Gent Suit",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👔"
  },
   {
   image: "/Images/dress.jpg",
    title: "Dres(Short)",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👗"
  },
   {
   image: "/Images/dressLong.jpg",
    title: "Dress(Long)",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👰"
  },
   {
   image: "/Images/overcoat.jpg",
    title: "Overcoat",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🧥"
  },
   {
   image: "/Images/military_suite.jpg",
    title: "Military Uniform",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "🎖️"
  },
   {
   image: "/Images/blouse.jpg",
    title: "Blouse Special",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji: "👚"
  },
  {
image: "/Images/bathrob.jpg",
    title: "BathRobe",
    price: "From 3QAR",
    subtitle: "Experience the Akoya Difference",
    emoji:"🛁"
  },










]

const Services = () => {
   const [activeIndex, setActiveIndex] = useState(0);
    console.log(Products.length);

  return (
    <div>







      
      <div className="w-[100%] h-[607px] bg-[#FAF9F7]">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => console.log(swiper)}
          className="relative h-[560px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img className="h-[600px] w-[100%] z-0" src={slide.image} alt={slide.title} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
              <div className="absolute inset-0 z-40 flex flex-col justify-center items-center" >
                 <p key={activeIndex} className="slide-up text-6xl text-white font-sans font-light">{slide.title}</p>
               <div className='flex justify-center items-center mt-5 gap-5'>
                <div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
                <p className="text-2xl text-[#D4AF37] ">{slide.subtitle}</p>
                <div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
                </div> 
                <button className="text-[18px] mt-7 bg-[#D4AF37] rounded-4xl px-7 py-3">
                  Book a Collection
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


<div className="w-full h-[150px] bg-[#FAF9F7] flex flex-col items-center justify-center gap-4">
  <p className="text-4xl font-light">Our Services</p>

  <div className="flex items-center w-full max-w-[400px]">
    <div className="flex-grow h-[1px] bg-[#D4AF37]"></div>
    <div className="px-4 text-[20px] font-light text-[#D4AF37] text-center">
      OUR LUXUARY GARMENT CARE
    </div>
    <div className="flex-grow h-[1px] bg-[#D4AF37]"></div>
  </div>
</div>


 <div className="flex justify-center bg-[#FAF9F7] gap-4">
      <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-[#1C1C1C]/10 transition-colors duration-300">
        All
      </button>
      <button className="px-4 py-2 bg-white text-black rounded-full  hover:bg-[#1C1C1C]/10 transition-colors duration-300">
        Dry Cleaning
      </button>
      <button className="px-4 py-2 bg-white text-black rounded-full  hover:bg-[#1C1C1C]/10transition-colors duration-300">
        Pressing
      </button>
      <button className="px-4 py-2 bg-white text-black rounded-full  hover:bg-[#1C1C1C]/10 transition-colors duration-300">
        Specialty
      </button>
      <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-[#1C1C1C]/10 transition-colors duration-300">
        Traditional
      </button>
      <button className="px-4 py-2 bg-white text-black rounded-full  hover:bg-[#1C1C1C]/10 transition-colors duration-300">
        Express
      </button>
      <button className="px-4 py-2 bg-white text-black rounded-full  hover:bg-[#1C1C1C]/10 transition-colors duration-300">
        Add‑on
      </button>
    </div>



  
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-30 py-16 bg-[#FAF9F7]">
  {Products.map((product, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      
      {/* IMAGE */}
      <div className="relative hover:scale-110 transition duration-400 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[220px] object-cover"
        />

        {/* ICON */}
        <div className="absolute top-4 right-4 w-10 h-10 overflow-hidden rounded-full bg-[#D4AF37] flex items-center justify-center">
         {product.emoji}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">{product.title}</p>
          <p className="text-[#D4AF37] font-medium">{product.price}</p>
        </div>

        <p className="text-gray-600 mt-3">
          {product.subtitle}
        </p>

        <div className="h-[1px] bg-[#EAD9A6] my-6"></div>

        <button className="w-full bg-[#D4AF37] text-black hover:bg-black hover:text-[#D4AF37] py-3 rounded-xl font-medium flex justify-center items-center gap-2">
          Order <span className="text-xl">+</span>
        </button>
      </div>

    </div>
  ))}
  
</div>

 


<div className="bg-[#1C1C1C] text-center border-b-2 border-white py-20 px-4">
      {/* Heading */}
      <h2 className="text-[#D4AF37] text-4xl md:text-5xl font-light mb-4">
        Need Personalized Service?
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-[17px] md:text-xl max-w-2xl mx-auto mb-8">
        Our VIP concierge team is available 24/7 to handle special requests, delicate items, or bulk orders for businesses and residences.
      </p>

      {/* Button */}
      <button className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold py-3 px-8 rounded-full hover:opacity-90 transition duration-300">
        Contact Concierge <BsChatDots />
      </button>
      </div>














    </div>
  );
};

export default Services;
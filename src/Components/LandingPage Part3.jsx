import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

const Landpag = () => {
  return (
    <div>

      <div className="flex top-72 relative flex-col gap-5 justify-center items-center bg-[#F3F4F6] w-[100%] h-[700px] ">
        <p className="text-5xl font-bold">Akoya Signature Fragrances</p>
        <p className="text-gray-600 text-[18px] mb-6">
          Premium scents crafted to elevate your laundry experience
        </p>

       <div className="flex gap-7">
        <div className="hover:scale-105 transition duration-700  h-[430px] w-[260px]  bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="/public/Images/maknoun.jpg"
            alt="Fragrance"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Maknoun</h3>
            <p className="text-gray-600 text-[13px] mb-4">
              A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber, leaving an unforgettable signature.
            </p>
            <div className="flex gap-24">
            <p className="text-[18px]  font-bold text-[#DDBD65]">7 QAR</p>
            <button className="bg-[#D4AF37] text-white px-4 py-1 rounded-4xl hover:bg-yellow-600 transition">
              Add
            </button>
            </div>
          </div>
        </div>




 <div className="hover:scale-105 transition duration-700  h-[430px] w-[260px]  bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="/public/Images/mad.jpg"
            alt="Fragrance"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Mad</h3>
            <p className="text-gray-600 text-[13px] mb-4">
             A powerful masculine fragrance that radiates prestige and luxury. Its unique composition blends saffron, jasmine, and incense, with a leathery amber base for a timeless presence
            </p>
            <div className="flex gap-24 mt-10">
            <p className="text-[18px]  font-bold text-[#DDBD65]">7 QAR</p>
            <button className="bg-[#D4AF37] text-white px-4 py-1 rounded-4xl hover:bg-yellow-600 transition">
              Add
            </button>
            </div>
          </div>
        </div>




         <div className="hover:scale-105 transition duration-700  h-[430px] w-[260px]  bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="/public/Images/lulwa.jpg"
            alt="Fragrance"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Lulwa</h3>
            <p className="text-gray-600 text-[13px] mb-4">
             The fragrance of radiant femininity, combining modern freshness with timeless elegance. A stunning blend of bergamot, ginger, and patchouli with a soft musky touch, leaving a memorable sparkle.
            </p>
            <div className="flex gap-24 ">
            <p className="text-[18px]  font-bold text-[#DDBD65]">7 QAR</p>
            <button className="bg-[#D4AF37] text-white px-4 py-1 rounded-4xl hover:bg-yellow-600 transition">
              Add
            </button>
            </div>
          </div>
        </div>




         <div className="hover:scale-105 transition duration-700  h-[430px] w-[260px]  bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="/public/Images/sadf.jpg"
            alt="Fragrance"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Sadf</h3>
            <p className="text-gray-600 text-[13px] mb-4">
              A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris for an elegant and long-lasting touch.
            </p>
            <div className="flex gap-24 mt-14">
            <p className="text-[18px]  font-bold text-[#DDBD65]">7 QAR</p>
            <button className="bg-[#D4AF37] text-white px-4 py-1 rounded-4xl hover:bg-yellow-600 transition">
              Add
            </button>
            </div>
          </div>
        </div>

</div>
      </div>



<div className="relative flex flex-col justify-center items-center gap-3 top-80">
<p className="text-5xl font-light">   The Final Touch</p>
<div className="flex justify-center items-center gap-4">
<div className="flex items-center font-mono  "></div>
<div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
<div className="text-[20px] font-medium text-[#D4AF37]">Packaging Options</div>
<div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
</div>

<div className="flex gap-13">

<div className="hover:scale-103 hover:cursor-pointer transition duration-700 
                h-[600px] w-[338px] bg-white rounded-2xl shadow-lg ">

 
  <div className="relative w-full h-[380px] ">
    <img
      src="/Images/suit-plastic.jpeg"
      alt="Fragrance"
      className="w-70% h-full ms-10 hover:scale-130 "
    />
     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    <button className="bg-[#D4AF37] relative px-4 py-1 rounded-4xl ms-4 bottom-[50px]">
              Included
            </button>
   
  </div>



  
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2">Plastic Wrap</h3>

    <p className="text-gray-600 text-[13px] mb-4">
      Crystal-clear protective wrapping with our embossed gold seal for discreet luxury
    </p>

    <div className="flex flex-col gap-2">
      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Medical-grade transparency
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Anti-static interior
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Recyclable material
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Tamper-evident closure
      </div>
    </div>
  </div>
</div>





<div className="hover:scale-103 hover:cursor-pointer transition duration-700 
                h-[600px] w-[338px] bg-white rounded-2xl shadow-lg ">

 
  <div className="relative w-full h-[380px] ">
    <img
      src="/Images/package.jpg"
      alt="Fragrance"
      className="w-70% h-full ms-10 hover:scale-130 "
    />
     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    <button className="bg-[#D4AF37] relative px-4 py-1 rounded-4xl ms-4 bottom-[50px]">
              Included
            </button>
   
  </div>



  
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2">Luxury Fabric Wrap</h3>

    <p className="text-gray-600 text-[13px] mb-4">
      Crystal-clear protective wrapping with our embossed gold seal for discreet luxury
    </p>

    <div className="flex flex-col gap-2">
      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Medical-grade transparency
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Anti-static interior
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Recyclable material
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Tamper-evident closure
      </div>
    </div>
  </div>
</div>





<div className="hover:scale-103 hover:cursor-pointer transition duration-700 
                h-[600px] w-[338px] bg-white rounded-2xl shadow-lg ">

 
  <div className="relative w-full h-[380px] ">
    <img
      src="/Images/BOX.jpeg"
      alt="Fragrance"
      className="w-70% relative top-20 "
    />
     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    <button className="bg-[#D4AF37] relative px-4 py-1 rounded-4xl ms-4 top-[110px]">
              Included
            </button>
   
  </div>



  
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2">Premium Gift Box</h3>

    <p className="text-gray-600 text-[13px] mb-4">
     Handcrafted wooden presentation case with velvet interior and scent capsule.
    </p>

    <div className="flex flex-col gap-2">
      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Sandalwood construction
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
       French velvet lining
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Integrated scent capsule
      </div>

      <div className="hover:translate-x-2 transition duration-400 text-[14px] flex gap-3">
        <span className="text-[#DDBD65] mt-[3px]"><IoMdCheckmark /></span>
        Heirloom quality
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

import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { TiFlashOutline } from "react-icons/ti";
import { useRef } from "react";
import { HiOutlineCalendar } from "react-icons/hi";

const Lapage = () => {
  const videoRef = useRef(null);
  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div>

      <div className="relative flex justify-center items-center">
        <div>
          <button className="bg-black relative transition duration-700 text-white mt-[368px] px-8 py-3 rounded-4xl flex items-center justify-center gap-2">
            Book Your Order <HiOutlineShoppingBag />
          </button>
        </div>
      </div>

      <div className="bg-[#F8F5F2] w-full shadow-2xl relative h-[2200px] top-14">
        <div className="relative flex flex-col items-center gap-3 top-15">
          <p className="text-5xl font-light">How It Works</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center font-mono"></div>
            <div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
            <div className="text-[20px] font-medium text-[#D4AF37]">SEAMLESS PICKUP PROCESS</div>
            <div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
          </div>
        </div>


  <div className="h-[320px] w-[500px] hover:scale-105 transition duration-500 top-[140px] left-25 relative rounded-2xl bg-amber-800 rounded-2xl ">
        
        <video
          ref={videoRef}
          src="/Images/Pickup.mp4"
          autoPlay
          muted
          loop
          playsInline
          onClick={toggleVideo}
          className="absolute inset-0 rounded-2xl w-full h-full object-cover cursor-pointer"
        />
         <div className="h-[50px] w-[50px] font-bold text-2xl rounded-full flex justify-center items-center text-white bg-[#D4AF37] absolute hover:scale-110 transition duration-200 right-[-20px] top-[40%]">1</div>
      </div>
     


         <div className="absolute flex flex-col justify-center gap-4 items-center h-[250px] w-[500px] shadow-2xl rounded-2xl right-20 top-[13%] bg-white">
          <div className="flex gap-5">
            <p><HiOutlineCalendar className="text-[#D4AF37] mt-1 text-3xl"/> </p><p className="text-[25px] mr-25 font-medium">  Schedule Your Pickup</p></div>
      <p >Book through our app, WhatsApp, or website. We offer <br /> flexible 2-hour pickup windows.</p>
      <div className="h-[1px] bg-gray-200 w-[400px]"></div>
      <div className="flex gap-2 mr-50">
      <IoMdCheckmark  className="text-[#DDBD65] mt-1 "/>
        <p className="text-[#3E3E3E]">24/7 booking availability</p></div>
        <div className="flex gap-2 mr-28">
          <IoMdCheckmark  className="text-[#DDBD65] mt-1 "/>
      <p  className="text-[#3E3E3E]">Recurring pickup scheduling available</p>
      </div>


     </div>


 <div className="h-[50px] w-[50px] font-bold text-2xl rounded-full flex justify-center items-center text-white bg-[#D4AF37] absolute hover:scale-110 transition duration-200  top-[40%]">2</div>


  <div className="absolute flex flex-col justify-center gap-4 items-center h-[250px] w-[500px] shadow-2xl rounded-2xl left-25 top-[35%] bg-white">
          <div className="flex gap-5">
            <p><HiOutlineCalendar className="text-[#D4AF37] mt-1 text-3xl"/> </p><p className="text-[25px] mr-25 font-medium"> Professional Collection</p></div>
      <p >Our uniformed valets arrive in discreet luxury vehicles with <br /> garment bags.</p>
      <div className="h-[1px] bg-gray-200 w-[400px]"></div>
      <div className="flex gap-2 mr-50">
      <IoMdCheckmark  className="text-[#DDBD65] mt-1 "/>
        <p className="text-[#3E3E3E]">Contactless pickup available</p></div>
        <div className="flex gap-2 mr-58 ">
          <IoMdCheckmark  className="text-[#DDBD65] mt-1 "/>
      <p  className="text-[#3E3E3E]">Digital receipt provided</p>
      </div>


     </div>


 <div className="h-[320px] w-[500px] hover:scale-105 transition duration-500  right-20 top-[33%] absolute rounded-2xl bg-amber-800 rounded-2xl ">
        
        <video
          ref={videoRef}
          src="/Images/professional_collection.mp4"
          autoPlay
          muted
          loop
          playsInline
          onClick={toggleVideo}
          className="absolute inset-0 rounded-2xl w-full h-full object-cover cursor-pointer"
        />
      </div>



<div className="h-[320px] w-[500px] hover:scale-105 transition duration-500 top-[35%] left-25 relative rounded-2xl bg-amber-800 rounded-2xl ">
        
        <video
          ref={videoRef}
          src="/Images/ExpertProcessing.mp4"
          autoPlay
          muted
          loop
          playsInline
          onClick={toggleVideo}
          className="absolute inset-0 rounded-2xl w-full h-full object-cover cursor-pointer"
        />
         <div className="h-[50px] w-[50px] font-bold text-2xl rounded-full flex justify-center items-center text-white bg-[#D4AF37] absolute hover:scale-110 transition duration-200 right-[-20px] top-[40%]">3</div>
      </div>
     



        <div className="absolute flex flex-col justify-center gap-4 items-center h-[250px] w-[500px] shadow-2xl rounded-2xl right-20 top-[57%] bg-white">
          <div className="flex gap-5 mr-22">
            <p><TiFlashOutline className="text-[#D4AF37] mt-1 text-3xl"/> </p><p className="text-[25px] mr-25 font-medium"> Expert Processing</p></div>
      <p >Your garments receive specialized care at our state-of-the-art <br /> facility.</p>
      <div className="h-[1px] bg-gray-200 w-[400px]"></div>
      <div className="flex gap-2 mr-50">
      <IoMdCheckmark  className="text-[#DDBD65] mt-1 "/>
        <p className="text-[#3E3E3E]">Individual garment tracking</p></div>
        <div className="flex gap-2 mr-48">
          <IoMdCheckmark  className="text-[#DDBD65] mt-1 "/>
      <p  className="text-[#3E3E3E]">Quality control at every stage</p>
      </div>


     </div>


 <div className="h-[50px] w-[50px] font-bold text-2xl rounded-full flex justify-center items-center text-white bg-[#D4AF37] absolute hover:scale-110 transition duration-200  top-[85%]">4</div>


 <div className="absolute flex flex-col justify-center gap-4 items-center h-[250px] w-[500px] shadow-2xl rounded-2xl left-25 top-[80%] bg-white">
          <div className="flex gap-5">
            <p><HiOutlineCalendar className="text-[#D4AF37] mt-1 text-3xl"/> </p><p className="text-[25px] mr-25 font-medium"> Professional Collection</p></div>
      <p >Our uniformed valets arrive in discreet luxury vehicles with <br /> garment bags.</p>
      <div className="h-[1px] bg-gray-200 w-[400px]"></div>
      <div className="flex gap-2 mr-50">
      <IoMdCheckmark  className="text-[#DDBD65] mt-1 "/>
        <p className="text-[#3E3E3E]">Contactless pickup available</p></div>
        <div className="flex gap-2 mr-58 ">
          <IoMdCheckmark  className="text-[#DDBD65] mt-1 "/>
      <p  className="text-[#3E3E3E]">Digital receipt provided</p>
      </div>


     </div>



<div className="h-[320px] w-[500px] hover:scale-105 transition duration-500  right-20 top-[78%] absolute rounded-2xl bg-amber-800 rounded-2xl ">
        
      <img src="/public/Images/luxury.jpg" alt="" className="w-full h-full rounded-2xl"/></div>


<div className="relative h-[82%] w-0.5 left-[51%] bg-[#D4AF37] bottom-[23%] ">

</div>


<div className="relative flex justify-center items-center top-[-430px]">
        <div>
          <button className="bg-black hover:scale-105 transition duration-200 relative transition duration-700 text-white px-8 py-3 rounded-4xl flex items-center justify-center gap-2">
            Schedule Your Pickup +
          </button>
        </div>
      </div>





      </div>

    


    













    </div>
  );
};

export default Lapage;

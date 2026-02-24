import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";




const LP =() =>{
    return(
<div>
<div className="w-[100%] h-[650px] bg-[#FAF9F7]">
<p className="text-5xl font-light mt- ms-[465px]">Signature Lines</p>
<div className="flex items-center font-mono ms-[384px] mt-4 gap-5">
<div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
<div className="text-[25px] font-light text-[#D4AF37]">THE  AKOYA  COLLECTION</div>
<div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
</div>

<div className="flex justify-center items-center  gap-12 mt-20">
    <div className="relative transition-transform duration-500  hover:translate-y-[-10px]">

        <img className="h-[300px] w-[320px] z-0 rounded-2xl" src="/public/Images/platinumCare.jpg" alt="" />
        <div class="absolute left-0 top-0 h-full w-[100%] rounded-2xl bg-gradient-to-r from-[#1C1C1C]/40 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
        <div className="absolute top-[60px] left-6 ">
       <div className="h-[55px] w-[55px] flex text-3xl items-center justify-center rounded-full bg-[#D4AF37]">✨</div>
       <p className="text-2xl mt-2 text-white font-medium">The Platinum Care</p>
       <p className="text-[13px] text-white  mt-3">Our highest tier service for your most precious <br /> garments. Hand-washed, steamed, and <br /> wrapped in protective tissue.</p>
     <button className="  hover:bg-black transition duration-700 hover:text-[#D4AF37]  bg-[#D4AF37] mt-4  px-7 py-2 rounded-4xl flex items-center justify-center gap-2">
        Discover <FaChevronRight className="text-[12px] mt-1" /></button>
        
    
        </div>
    </div>



    <div className="relative transition-transform duration-500  hover:translate-y-[-10px]">

        <img className="h-[300px] w-[320px] z-0 rounded-2xl" src="/public/Images/exectiveCollection.jpg" alt="" />
        <div class="absolute left-0 top-0 h-full w-[100%] rounded-2xl bg-gradient-to-r from-[#1C1C1C]/40 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
        <div className="absolute top-[60px] left-6 ">
       <div className="h-[55px] w-[55px] flex text-3xl items-center justify-center rounded-full bg-[#D4AF37]">👔</div>
       <p className="text-2xl mt-2 text-white font-medium">Executive Collection</p>
       <p className="text-[13px] text-white  mt-3">Precision care for business attire. Perfect <br /> creases, stain removal, and fabric revitalization <br />for your professional image.</p>
     <button className=" hover:bg-black transition duration-700 hover:text-[#D4AF37]  bg-[#D4AF37] mt-4  px-7 py-2 rounded-4xl flex items-center justify-center gap-2">
        Discover <FaChevronRight className="text-[12px] mt-1" /></button>
        
    
        </div>
    </div>



    <div className="relative transition-transform duration-800  hover:translate-y-[-10px]">

        <img className="h-[300px] w-[320px] z-0 rounded-2xl" src="/public/Images/professionalCollection.jpg" alt="" />
        <div class="absolute left-0 top-0 h-full w-[100%] rounded-2xl bg-gradient-to-r from-[#1C1C1C]/40 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
        <div className="absolute top-[60px] left-6 ">
       <div className="h-[55px] w-[55px] flex text-3xl items-center justify-center rounded-full bg-[#D4AF37]">🧵</div>
       <p className="text-2xl mt-2 text-white font-medium">Couture Preservation</p>
       <p className="text-[13px] text-white  mt-3">Specialized care for designer pieces and <br /> delicate fabrics. Museum-quality cleaning to <br /> maintain texture and color integrity.</p>
     <button className=" hover:bg-black transition duration-700 hover:text-[#D4AF37]  bg-[#D4AF37] mt-4 px-7 py-2 rounded-4xl flex items-center justify-center gap-2">
        Discover <FaChevronRight className="text-[12px] mt-1" /></button>
        
    
        </div>
    </div>
</div>


 <button className=" hover:bg-black transition duration-500 hover:text-white h-[50px] relative left-[42%] top-[60px] flex justify-center items-center gap-4 rounded-4xl w-[230px] border-1">View all Collection <FaArrowRightLong /></button>
</div>

<div className="relative flex flex-col justify-center items-center top-23 ">
<div className="absolute"><p className="text-5xl font-bold ">How Would You Like it Washed?</p>
<p className="text-[18px] ms-60 mt-4 font-medium text-[#D4AF37]">CHOOSE YOUR EXPERIENCE</p></div>

</div>


<div className="flex gap-12 relative top-50 ms-25 ">
    <div className=" hover:shadow-2xl hover:shadow-lg transition duration-500 bg-[#F5E1DA] h-[260px] w-[520px] rounded-3xl flex flex-col justify-center gap-4 ">
        <div className="text-[40px] ms-7">🧼</div>
        <p className="text-2xl ms-7 font-bold">Standard Wash</p>
        <p className="ms-7">Our signature 48-hour service with gentle cleaning, eco-friendly detergents, and basic folding.</p>
        <p className="text-[18px] ms-7 font-medium text-[#DDBD65]">From 50 QAR</p>
    </div>
     <div className="bg-[#F5E1DA] transition duration-500 hover:shadow-lg hover:shadow-2xl h-[260px] w-[520px] rounded-3xl flex flex-col justify-center gap-4 ">
        <div className="text-[40px] ms-7">⚡</div>
        <p className="text-2xl ms-7 font-bold">Express Wash</p>
        <p className="ms-7">Need it fast? Get 24-hour turnaround, priority processing, and premium care.</p>
        <p className="text-[18px] ms-7 font-medium text-[#DDBD65]">From 80 QAR</p>
    </div>
</div>

 <button className="  hover:scale-105 transition duration-700 font-medium bg-[#D4AF37] relative top-60 px-9 py-4 ms-[39%] rounded-4xl flex items-center justify-center gap-2">
        Continue to Garment Section</button>






</div>

    )
}



export default LP
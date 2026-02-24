import { FaShieldAlt } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaPumpSoap } from "react-icons/fa6";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaBox } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";







const About = () => {
    return(
        <div>
             <div className="h-[600px] bg-gradient-to-r from-[#6F6F6F] to-[#D7D7D7] w-[full] flex flex-col gap-5 justify-center items-center">
              <h1 className="text-6xl font-light text-white">Luxuary Laundry Reimagined</h1>
               <div className="flex items-center w-full max-w-[400px]">
    <div className="flex-grow h-[1px] bg-[#D4AF37]"></div>
    <div className="px-4 text-[22px] font-medium text-[#D4AF37] text-center">
      AKOYA COLLLECTION
    </div>
    <div className="flex-grow h-[1px] bg-[#D4AF37]"></div>
  </div>
              <button className="text-[18px] mt-3 bg-[#D4AF37] font-medium rounded-4xl px-8 py-3">
                  Schedule Your PickUp
                </button>
             </div>

 
 <p className="flex text-4xl font-light justify-center items-center py-20 ">Why Choose <p className="text-[#D4AF37] ms-3"> Akoya</p></p>
<div className="flex gap-10 justify-center items-center">
    <div className=" h-60 w-80 gap-4 bg-[#F8F5F2] flex flex-col justify-center items-center p-10 rounded-2xl ">
       <p className="text-[#D4AF37] text-4xl"><FaShieldAlt /></p>
      <p className="font-medium  text-[19px]">Premium Quality</p>
      <p className="text-center">We use only the finest eco-friendly detergents and state-of-the-art equipment</p>
    </div>

    <div className=" h-60 w-80 gap-4 bg-[#F8F5F2] flex flex-col justify-center items-center p-10 rounded-2xl ">
       <p className="text-[#D4AF37] text-4xl"><BsFillPersonCheckFill /></p>
      <p className="font-medium  text-[19px]">Personalized Service</p>
      <p className="text-center">We use only the finest eco-friendly detergents and state-of-the-art equipment</p>
    </div>

    <div className=" h-60 w-80 gap-4 bg-[#F8F5F2] flex flex-col justify-center items-center p-10 rounded-2xl ">
       <p className="text-[#D4AF37] text-4xl"><FaClock /></p>
      <p className="font-medium  text-[19px]">Convenience</p>
      <p className="text-center">We use only the finest eco-friendly detergents and state-of-the-art equipment</p>
    </div>
</div>



<div className="bg-[#F8F5F2] w-full h-[630px] mt-20 ">
  <p className="text-4xl relative top-18 font-light text-center">
    Our Services Journey
  </p>

  <div className="flex flex-wrap gap-5 justify-center items-center  mt-35 ">
    <div className="h-[180px] w-[250px] bg-white rounded-2xl shadow-2xl relative ">
      
      {/* Icon */}
      <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
        <FaTshirt />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14">
        <p className="text-[20px] font-medium">
          1. Select Wash type
        </p>
        <p className="text-[#4c4e4c] text-[15px]">
          Standard or Express wash <br /> options to suit your needs
        </p>
      </div>
</div>

      <div className="h-[180px] w-[250px] bg-white rounded-2xl shadow-2xl relative p-6">
      
      {/* Icon */}
      <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
        <FaBoxOpen />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14">
        <p className="text-[20px] font-medium">
          1. Select Wash type
        </p>
        <p className="text-[#4c4e4c] text-[15px]">
          Standard or Express wash <br /> options to suit your needs
        </p>
      </div>

    </div>


    <div className="h-[180px] w-[250px] bg-white rounded-2xl shadow-2xl relative ">
      
      {/* Icon */}
      <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
       <FaPumpSoap />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14">
        <p className="text-[20px] font-medium">
          1. Select Wash type
        </p>
        <p className="text-[#4c4e4c] text-[15px]">
          Standard or Express wash <br /> options to suit your needs
        </p>
      </div>

    </div>



    <div className="h-[180px] w-[250px] bg-white rounded-2xl shadow-2xl relative ">
      
      {/* Icon */}
      <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
       <GiDelicatePerfume />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14">
        <p className="text-[20px] font-medium">
          1. Select Wash type
        </p>
        <p className="text-[#4c4e4c] text-[15px]">
          Standard or Express wash <br /> options to suit your needs
        </p>
      </div>

    </div>




    <div className="h-[180px] w-[250px] bg-white rounded-2xl shadow-2xl relative ">
      
      {/* Icon */}
      <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
       <FaBox />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14">
        <p className="text-[20px] font-medium">
          1. Select Wash type
        </p>
        <p className="text-[#4c4e4c] text-[15px]">
          Standard or Express wash <br /> options to suit your needs
        </p>
      </div>

    </div>

    <div className="h-[180px] w-[250px] bg-white rounded-2xl shadow-2xl relative ">
      
      {/* Icon */}
      <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
       <FaGift />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14">
        <p className="text-[20px] font-medium">
          1. Select Wash type
        </p>
        <p className="text-[#4c4e4c] text-[15px]">
          Standard or Express wash <br /> options to suit your needs
        </p>
      </div>

    </div>

    <div className="h-[180px] w-[250px] bg-white rounded-2xl shadow-2xl relative ">
      
      {/* Icon */}
      <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
        <FaWhatsapp />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14">
        <p className="text-[20px] font-medium">
          1. Select Wash type
        </p>
        <p className="text-[#4c4e4c] text-[15px]">
          Standard or Express wash <br /> options to suit your needs
        </p>
      </div>

    </div>

    <div className="h-[180px] w-[250px] bg-white rounded-2xl shadow-2xl relative  ">
      
      {/* Icon */}
      <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
       <FaRobot />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14">
        <p className="text-[20px] font-medium">
          1. Select Wash type
        </p>
        <p className="text-[#4c4e4c] text-[15px]">
          Standard or Express wash <br /> options to suit your needs
        </p>
      </div>

    </div>

    </div>
  </div>






<div className="w-full bg-white py-20">
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-4xl font-light">
      Meet Our Fabric Specialists
    </h2>

    <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>

    <p className="mt-6 text-[17px] text-gray-600 leading-relaxed">
      Our team of garment care experts brings decades of combined
      experience in handling luxury fabrics
    </p>
  </div>

  {/* Cards */}
  <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

    {/* Card 1 */}
    <div className="bg-[#F8F5F2] rounded-2xl py-10 px-6 text-center">
      <img
        src="public/images/pexels-photo-769772.webp"
        alt="Ahmed Al-Mansoori"
        className="w-32 h-32 mx-auto rounded-full border-4 border-[#D4AF37] object-cover"
      />

      <h3 className="mt-6 text-xl font-semibold">
        Ahmed Al-Mansoori
      </h3>

      <p className="text-[#D4AF37] mt-1">
        Head of Couture Care
      </p>

      <p className="mt-4 text-gray-600 text-[15px]">
        20+ years in luxury garment care
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#F8F5F2] rounded-2xl py-10 px-6 text-center">
      <img
        src="public/images/pexels-photo-3763188.webp"
        alt="Layla Hassan"
        className="w-32 h-32 mx-auto rounded-full border-4 border-[#D4AF37] object-cover"
      />

      <h3 className="mt-6 text-xl font-semibold">
        Layla Hassan
      </h3>

      <p className="text-[#D4AF37] mt-1">
        Fabric Technology Expert
      </p>

      <p className="mt-4 text-gray-600 text-[15px]">
        Fabric scientist and preservation expert
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#F8F5F2] rounded-2xl py-10 px-6 text-center">
      <img
        src="public/images/pexels-photo-3785077.webp"
        alt="Yousef Ibrahim"
        className="w-32 h-32 mx-auto rounded-full border-4 border-[#D4AF37] object-cover"
      />

      <h3 className="mt-6 text-xl font-semibold">
        Yousef Ibrahim
      </h3>

      <p className="text-[#D4AF37] mt-1">
        Operations Director
      </p>

      <p className="mt-4 text-gray-600 text-[15px]">
        Ensuring seamless service delivery
      </p>
    </div>

  </div>
</div>













































        </div>
    )

}


export default About;
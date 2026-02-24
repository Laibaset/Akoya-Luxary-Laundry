
const Visionandmission = () => {
    return(
        <div>

      <section className="bg-[#f5f6f8] py-16 px-6">
  <div className="max-w-6xl top-20 relative  mx-auto text-center">
    
    
    <h2 className="text-5xl font-bold text-[#0f172a]">
      Vision & Mission
    </h2>

    <p className="text-lg text-[#D0AA31] mt-3 font-medium">
      Akoya Premium Laundry
    </p>

    <p className="text-gray-500 mt-3 italic">
      Redefining Fabric Care and Personal Luxury in Qatar
    </p>

    <div className="w-16 h-1 bg-[#D0AA31] mx-auto mt-4 rounded"></div>
  </div>

  <div className="bg-white w-[790px] h-[250px] absolute right-[30px] top-[350px] rounded-2xl shadow-xl flex overflow-hidden">
  
  {/* Gold Vision Side */}
  <div className="bg-[#D0AA31] w-[330px] flex items-center justify-center text-white">
    <h3 className="text-5xl  font-bold text-center leading-tight">
      Our <br /> Vision
    </h3>
  </div>

  {/* Text Side */}
  <div className="flex-1 flex items-center px-9">
    <p className="text-gray-600 text-[19px] leading-relaxed">
      To redefine fabric care and personal luxury in Qatar through
      innovation, fragrance, and flawless service — making Akoya Premium
      Laundry the symbol of elegance and trust in every home.
    </p>
  </div>

</div>
</section>
<div className="w-full bg-[#F6F7F9] py-20 px-6">
  <div className="max-w-7xl lg:grid-cols-2 gap-12">

   
    <div className="w-[380px] h-[600px]">

      
      <div className="relative h-[730px] rounded-2xl overflow-hidden shadow-xl">
        <img
          src="public/images/ourmission.jpeg"
          alt="Akoya"
          className="w-full h-[730px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
          <h2 className="text-white text-3xl font-semibold">
            Excellence in Every Detail
          </h2>
          <p className="text-white/90 mt-2">
            Technology, Artistry, and Care
          </p>
        </div>
      </div>

   
      <div className="bg-[#D4AF37] rounded-2xl py-5  mt-6 flex flex-col gap-4 justify-center items-center text-white shadow-xl">
        <h3 className="text-[20px] text-start font-bold">
          Experience Excellence Today
        </h3>

        <button className="hover:scale-110 transition duration-500  w-[80%] bg-white text-[#D4AF37] py-3 rounded-[10px] font-bold">
          Book Now
        </button>
      </div>
    </div>

    {/* RIGHT COLUMN */}

    <div>
    <div className="bg-white w-[790px] flex gap-10 h-[290px] absolute right-[30px] top-[630px] rounded-2xl shadow-xl">

      {/* Mission Section */}
      
        <div className="lg:col-span-2 text-gray-700 p-14 text-[19px]">
          <p>
            At Akoya Premium Laundry, we strive to offer premium laundry,
            delivery, and custom perfume solutions that combine technology,
            artistry, and care. Our mission is to transform daily routines
            into refined experiences through exceptional service, attention
            to detail, and sustainable practices.
          </p>
        </div>

       <div className="bg-gradient-to-br from-[#0F1B2E] to-[#1E2F4D] rounded-e-2xl flex items-center justify-center
                w-full -ml-12">
          <h2 className="text-white px-15 text-5xl font-bold text-center">
            Our <br /> Mission
          </h2>
        </div>
     
       </div>

      {/* Core Values */}
      <div className=" ms-[420px]  bg-white shadow-xl p-12 rounded-2xl w-[800px]">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Our Core Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Value Card */}
        <div className="flex gap-6 bg-white rounded-2xl p-8 shadow-md relative">
          <div className="w-2 bg-[#D4AF37] rounded-full absolute left-0 "></div>
          <div className="w-26 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Every item, every wash, every fragrance meets the highest standards.
            </p>
          </div>
        </div>

        <div className="flex gap-6 bg-white rounded-2xl p-8 shadow-md relative">
          
          <div className="w-33 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We use advanced systems and smart logistics to deliver faster and cleaner results.
            </p>
          </div>
        </div>

        <div className="flex gap-6 bg-white rounded-2xl p-8 shadow-md relative">
          
          <div className="w-26 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We commit to eco-friendly methods and responsible operations.
            </p>
          </div>
        </div>

        <div className="flex gap-6 bg-white rounded-2xl p-8 shadow-md relative">
          
          <div className="w-16 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction drives everything we do.
            </p>
          </div>
        </div>

      </div>
      </div>
   </div>
  </div>
</div>
  </div>
    )
}



export default Visionandmission;

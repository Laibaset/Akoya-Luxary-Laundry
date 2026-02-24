
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css'
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';



const LandingPage = () => {

  return (

    <div>
<div className="w-[100%] h-[607px] bg-[#FAF9F7]">
      <Swiper
        pagination={{
          clickable: true,
       }}

         modules={[Navigation, Autoplay, Pagination]}
      
      navigation={true}
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
    </div >
  )
}
export default LandingPage 
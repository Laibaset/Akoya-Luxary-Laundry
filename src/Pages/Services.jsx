import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { BsChatDots } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const slides = [
  {
    image: "/Images/eco.jpg",
    title: "slides.slide1.title",
    subtitle: "slides.slide1.subtitle",
  },
  {
    image: "/Images/pCollection.jpg",
    title: "slides.slide2.title",
    subtitle: "slides.slide2.subtitle",
  },
  {
    image: "/Images/expert.jpg",
    title: "slides.slide3.title",
    subtitle: "slides.slide3.subtitle",
  },
];

const FILTER_CATEGORIES = [
  { id: "all", label: "categories.all" },
  { id: "dryCleaning", label: "categories.dryCleaning" },
  { id: "pressing", label: "categories.pressing" },
  { id: "specialty", label: "categories.specialty" },
  { id: "traditional", label: "categories.traditional" },
  { id: "express", label: "categories.express" },
  { id: "addOn", label: "categories.addOn" },
];

const Products = [
  { image: "/Images/dryCleaning.jpg", titleKey: "products.dryCleaning.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🧥", category: "dryCleaning" },
  { image: "/Images/exectivePressing.jpg", titleKey: "products.executivePressing.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👔", category: "pressing" },
  { image: "/Images/care.jpg", titleKey: "products.coutureCare.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👗", category: "specialty" },
  { image: "/Images/resturation.jpg", titleKey: "products.bishtRestoration.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🕌", category: "specialty" },
  { image: "/Images/sehedulePickup.jpg", titleKey: "products.expressService.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "⚡", category: "express" },
  { image: "/Images/fragrance.jpg", titleKey: "products.fragranceInfusion.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🌸", category: "addOn" },
  { image: "/Images/dishdasha.webp", titleKey: "products.dishdasha.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👳‍♀️", category: "traditional" },
  { image: "/Images/child_dishdasha.jpg", titleKey: "products.childDishdasha.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👦", category: "traditional" },
  { image: "/Images/bisht.jpg", titleKey: "products.bisht.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🪔", category: "traditional" },
  { image: "/Images/ghutra.jpg", titleKey: "products.ghutra.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🧕", category: "traditional" },
  { image: "/Images/kurta.jpg", titleKey: "products.kurta.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👘", category: "traditional" },
  { image: "/Images/kurtaPajama.jpg", titleKey: "products.kurtaPyjama.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👖", category: "traditional" },
  { image: "/Images/kameez.jpg", titleKey: "products.kameez.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👕", category: "traditional" },
  { image: "/Images/jalabiya.jpg", titleKey: "products.jalabiya.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👚", category: "traditional" },
  { image: "/Images/abaya.jpg", titleKey: "products.abaya.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🧕", category: "traditional" },
  { image: "/Images/abaya_special.jpg", titleKey: "products.abayaSpecial.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "✨", category: "specialty" },
  { image: "/Images/hijab.png", titleKey: "products.hijab.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🧣", category: "traditional" },
  { image: "/Images/gent_suit.jpg", titleKey: "products.gentSuit.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👔", category: "dryCleaning" },
  { image: "/Images/dress.jpg", titleKey: "products.dressShort.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👗", category: "dryCleaning" },
  { image: "/Images/dressLong.jpg", titleKey: "products.dressLong.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👰", category: "dryCleaning" },
  { image: "/Images/overcoat.jpg", titleKey: "products.overcoat.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🧥", category: "dryCleaning" },
  { image: "/Images/military_suite.jpg", titleKey: "products.militaryUniform.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🎖️", category: "specialty" },
  { image: "/Images/blouse.jpg", titleKey: "products.blouseSpecial.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "👚", category: "pressing" },
  { image: "/Images/bathrob.jpg", titleKey: "products.bathrobe.title", price: "products.commonPrice", subtitle: "products.commonSubtitle", emoji: "🛁", category: "specialty" },
];

const Services = () => {
  const { t } = useTranslation("Servicestranslation");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = activeFilter === "all"
    ? Products
    : Products.filter((p) => p.category === activeFilter);

  return (
    <div>

      {/* HERO SWIPER */}
      <div className="w-full h-auto bg-[#FAF9F7]">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="relative h-[400px] sm:h-[500px] lg:h-[560px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                className="h-full w-full object-cover z-0"
                src={slide.image}
                alt={t(slide.title)}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
              <div className="absolute inset-0 z-40 flex flex-col justify-center items-center px-4 text-center">
                <p
                  key={activeIndex}
                  className="slide-up text-3xl sm:text-4xl lg:text-6xl text-white font-sans font-light"
                >
                  {t(slide.title)}
                </p>
                <div className="flex justify-center items-center mt-4 gap-3 sm:gap-5 flex-wrap">
                  <div className="w-10 sm:w-[70px] h-[1px] bg-[#D4AF37]"></div>
                  <p className="text-base sm:text-xl lg:text-2xl text-[#D4AF37]">{t(slide.subtitle)}</p>
                  <div className="w-10 sm:w-[70px] h-[1px] bg-[#D4AF37]"></div>
                </div>
               <Link to="/Booking" > <button className="text-sm sm:text-[18px] mt-5 sm:mt-7 bg-[#D4AF37] hover:cursor-pointer rounded-full px-5 sm:px-7 py-2.5 sm:py-3">
                  {t("bookCollectionButton")}
                </button></Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SECTION HEADING */}
      <div className="w-full min-h-[120px] sm:h-[150px] bg-[#FAF9F7] flex flex-col items-center justify-center gap-4 py-6 px-4">
        <p className="text-3xl sm:text-4xl font-light">{t("sectionHeading")}</p>
        <div className="flex items-center w-full max-w-[320px] sm:max-w-[400px]">
          <div className="flex-grow h-[1px] bg-[#D4AF37]"></div>
          <div className="px-3 sm:px-4 text-sm sm:text-[20px] font-light text-[#D4AF37] text-center">
            {t("sectionSubheading")}
          </div>
          <div className="flex-grow h-[1px] bg-[#D4AF37]"></div>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-start sm:justify-center bg-[#FAF9F7] gap-2 sm:gap-4 overflow-x-auto px-4 sm:px-0 pb-3 sm:pb-0 scrollbar-hide">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base transition-colors duration-300 ${
              activeFilter === cat.id
                ? "bg-[#D4AF37] text-black font-medium"
                : "bg-white text-black hover:bg-[#1C1C1C]/10"
            }`}
          >
            {t(cat.label)}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-10 lg:px-30 py-10 sm:py-16 bg-[#FAF9F7]">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative hover:scale-110 transition duration-400 overflow-hidden">
              <img
                src={product.image}
                alt={t(product.titleKey)}
                className="w-full h-[200px] sm:h-[220px] object-cover"
              />
              <div className="absolute top-4 right-4 w-10 h-10 overflow-hidden rounded-full bg-[#D4AF37] flex items-center justify-center">
                {product.emoji}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-6">
              <div className="flex justify-between items-center">
                <p className="text-lg sm:text-xl font-semibold">{t(product.titleKey)}</p>
                <p className="text-[#D4AF37] font-medium">{t(product.price)}</p>
              </div>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">{t(product.subtitle)}</p>
              <div className="h-[1px] bg-[#EAD9A6] my-5 sm:my-6"></div>
              <Link to="/Booking"><button className="w-full bg-[#D4AF37] text-black hover:bg-black hover:text-[#D4AF37] hover:cursor-pointer py-3 rounded-xl font-medium flex justify-center items-center gap-2 transition-colors duration-300">
                {t("orderButton")} <span className="text-xl">+</span>
              </button></Link>
            </div>
          </div>
        ))}
      </div>

      {/* CONCIERGE SECTION */}
      <div className="bg-[#1C1C1C] text-center border-b-2 border-white py-16 sm:py-20 px-4">
        <h2 className="text-[#D4AF37] text-3xl sm:text-4xl md:text-5xl font-light mb-4">
          {t("concierge.heading")}
        </h2>
        <p className="text-gray-300 text-base sm:text-[17px] md:text-xl max-w-2xl mx-auto mb-8">
          {t("concierge.description")}
        </p>
        <button className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold py-3 px-6 sm:px-8 rounded-full hover:opacity-90 transition duration-300">
          {t("concierge.button")} <BsChatDots />
        </button>
      </div>

    </div>
  );
};

export default Services;
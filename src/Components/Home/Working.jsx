import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { TiFlashOutline } from "react-icons/ti";
import { useRef } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Lapage = () => {
  const { t, i18n } = useTranslation("Workingtranslation");
  const isRtl = i18n.language === "ur";
  const textDir = isRtl ? "rtl" : "ltr";

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
    <div dir="ltr">

      <div className="relative top-[-90px] flex justify-center items-center">
        <div>
          <button className={`bg-black relative transition duration-700 text-white  px-8 py-3 rounded-4xl flex items-center justify-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
            <span dir={textDir}>{t("bookOrder")}</span> <HiOutlineShoppingBag />
          </button>
        </div>
      </div>

      {/* ─── DESKTOP LAYOUT (lg and up) ─── */}
      <div className="hidden lg:block bg-[#F8F5F2] w-full shadow-2xl relative h-[2200px] top-[-20px]">
        <div className="relative flex flex-col items-center gap-3 top-15">
          <p className="text-5xl font-light" dir={textDir}>{t("sectionHeading")}</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center font-mono"></div>
            <div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
            <div className="text-[20px] font-medium text-[#D4AF37]" dir={textDir}>{t("sectionSubheading")}</div>
            <div className="w-[70px] h-[1px] bg-[#D4AF37]"></div>
          </div>
        </div>

        <div className="h-[320px] w-[500px] hover:scale-105 transition duration-500 top-[140px] left-25 relative rounded-2xl bg-amber-800">
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
          <div className={`flex gap-5 ${isRtl ? "flex-row-reverse" : ""}`}>
            <p><HiOutlineCalendar className="text-[#D4AF37] mt-1 text-3xl"/></p>
            <p className="text-[25px] mr-25 font-medium" dir={textDir}>{t("steps.schedule.title")}</p>
          </div>
          <p dir={textDir}>{t("steps.schedule.description")}</p>
          <div className="h-[1px] bg-gray-200 w-[400px]"></div>
          <div className={`flex gap-2 mr-50 ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-1"/>
            <p className="text-[#3E3E3E]" dir={textDir}>{t("steps.schedule.checks.availability")}</p>
          </div>
          <div className={`flex gap-2 mr-28 ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-1"/>
            <p className="text-[#3E3E3E]" dir={textDir}>{t("steps.schedule.checks.recurring")}</p>
          </div>
        </div>

        <div className="h-[50px] w-[50px] font-bold text-2xl rounded-full flex justify-center items-center text-white bg-[#D4AF37] absolute hover:scale-110 transition duration-200 top-[40%]">2</div>

        <div className="absolute flex flex-col justify-center gap-4 items-center h-[250px] w-[500px] shadow-2xl rounded-2xl left-25 top-[35%] bg-white">
          <div className={`flex gap-5 ${isRtl ? "flex-row-reverse" : ""}`}>
            <p><HiOutlineCalendar className="text-[#D4AF37] mt-1 text-3xl"/></p>
            <p className="text-[25px] mr-25 font-medium" dir={textDir}>{t("steps.collection.title")}</p>
          </div>
          <p dir={textDir}>{t("steps.collection.description")}</p>
          <div className="h-[1px] bg-gray-200 w-[400px]"></div>
          <div className={`flex gap-2 mr-50 ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-1"/>
            <p className="text-[#3E3E3E]" dir={textDir}>{t("steps.collection.checks.contactless")}</p>
          </div>
          <div className={`flex gap-2 mr-58 ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-1"/>
            <p className="text-[#3E3E3E]" dir={textDir}>{t("steps.collection.checks.receipt")}</p>
          </div>
        </div>

        <div className="h-[320px] w-[500px] hover:scale-105 transition duration-500 right-20 top-[33%] absolute rounded-2xl bg-amber-800">
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

        <div className="h-[320px] w-[500px] hover:scale-105 transition duration-500 top-[35%] left-25 relative rounded-2xl bg-amber-800">
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
          <div className={`flex gap-5 mr-22 ${isRtl ? "flex-row-reverse" : ""}`}>
            <p><TiFlashOutline className="text-[#D4AF37] mt-1 text-3xl"/></p>
            <p className="text-[25px] mr-25 font-medium" dir={textDir}>{t("steps.processing.title")}</p>
          </div>
          <p dir={textDir}>{t("steps.processing.description")}</p>
          <div className="h-[1px] bg-gray-200 w-[400px]"></div>
          <div className={`flex gap-2 mr-50 ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-1"/>
            <p className="text-[#3E3E3E]" dir={textDir}>{t("steps.processing.checks.tracking")}</p>
          </div>
          <div className={`flex gap-2 mr-48 ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-1"/>
            <p className="text-[#3E3E3E]" dir={textDir}>{t("steps.processing.checks.qualityControl")}</p>
          </div>
        </div>

        <div className="h-[50px] w-[50px] font-bold text-2xl rounded-full flex justify-center items-center text-white bg-[#D4AF37] absolute hover:scale-110 transition duration-200 top-[85%]">4</div>

        <div className="absolute flex flex-col justify-center gap-4 items-center h-[250px] w-[500px] shadow-2xl rounded-2xl left-25 top-[80%] bg-white">
          <div className={`flex gap-5 ${isRtl ? "flex-row-reverse" : ""}`}>
            <p><HiOutlineCalendar className="text-[#D4AF37] mt-1 text-3xl"/></p>
            <p className="text-[25px] mr-25 font-medium" dir={textDir}>{t("steps.collection.title")}</p>
          </div>
          <p dir={textDir}>{t("steps.collection.description")}</p>
          <div className="h-[1px] bg-gray-200 w-[400px]"></div>
          <div className={`flex gap-2 mr-50 ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-1"/>
            <p className="text-[#3E3E3E]" dir={textDir}>{t("steps.collection.checks.contactless")}</p>
          </div>
          <div className={`flex gap-2 mr-58 ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-1"/>
            <p className="text-[#3E3E3E]" dir={textDir}>{t("steps.collection.checks.receipt")}</p>
          </div>
        </div>

        <div className="h-[320px] w-[500px] hover:scale-105 transition duration-500 right-20 top-[78%] absolute rounded-2xl bg-amber-800">
          <img src="/public/Images/luxury.jpg" alt="" className="w-full h-full rounded-2xl"/>
        </div>

        <div className="relative h-[82%] w-0.5 left-[51%] bg-[#D4AF37] bottom-[23%]"></div>

        <div className="relative flex justify-center items-center top-[-430px]">
          <div>
            <button className="bg-black hover:scale-105 transition duration-200 relative transition duration-700 text-white px-8 py-3 rounded-4xl flex items-center justify-center gap-2">
              <span dir={textDir}>{t("scheduleButton")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─── MOBILE / TABLET LAYOUT (below lg) ─── */}
      <div className="lg:hidden bg-[#F8F5F2] w-full shadow-2xl mt-14 pb-16">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 pt-12 px-4">
          <p className="text-3xl sm:text-4xl font-light text-center" dir={textDir}>{t("sectionHeading")}</p>
          <div className="flex justify-center items-center gap-3">
            <div className="w-10 sm:w-[70px] h-[1px] bg-[#D4AF37]"></div>
            <div className="text-[12px] sm:text-[15px] font-medium text-[#D4AF37] text-center" dir={textDir}>{t("sectionSubheading")}</div>
            <div className="w-10 sm:w-[70px] h-[1px] bg-[#D4AF37]"></div>
          </div>
        </div>

        {/* Vertical timeline */}
        <div className="relative flex flex-col items-center mt-10 px-4 gap-10">

          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#D4AF37] -translate-x-1/2 z-0"></div>

          {/* Step 1 */}
          <StepMobile
            number="1"
            icon={<HiOutlineCalendar className="text-[#D4AF37] text-2xl mt-1"/>}
            title={t("steps.schedule.title")}
            description={t("steps.schedule.description")}
            checks={[t("steps.schedule.checks.availability"), t("steps.schedule.checks.recurring")]}
            textDir={textDir}
            media={
              <video
                src="/Images/Pickup.mp4"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            }
            videoLeft={false}
          />

          {/* Step 2 */}
          <StepMobile
            number="2"
            icon={<HiOutlineCalendar className="text-[#D4AF37] text-2xl mt-1"/>}
            title={t("steps.collection.title")}
            description={t("steps.collection.description")}
            checks={[t("steps.collection.checks.contactless"), t("steps.collection.checks.receipt")]}
            textDir={textDir}
            media={
              <video
                src="/Images/professional_collection.mp4"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            }
            videoLeft={true}
          />

          {/* Step 3 */}
          <StepMobile
            number="3"
            icon={<TiFlashOutline className="text-[#D4AF37] text-2xl mt-1"/>}
            title={t("steps.processing.title")}
            description={t("steps.processing.description")}
            checks={[t("steps.processing.checks.tracking"), t("steps.processing.checks.qualityControl")]}
            textDir={textDir}
            media={
              <video
                src="/Images/ExpertProcessing.mp4"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            }
            videoLeft={false}
          />

          {/* Step 4 */}
          <StepMobile
            number="4"
            icon={<HiOutlineCalendar className="text-[#D4AF37] text-2xl mt-1"/>}
            title={t("steps.delivery.title")}
            description={t("steps.delivery.description")}
            checks={[t("steps.delivery.checks.contactlessDelivery"), t("steps.delivery.checks.receipt")]}
            textDir={textDir}
            media={
              <img src="/public/Images/luxury.jpg" alt="Luxury delivery" className="w-full h-full object-cover rounded-2xl"/>
            }
            videoLeft={true}
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button className="bg-black hover:scale-105 transition duration-200 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2">
            <span dir={textDir}>{t("scheduleButton")}</span>
          </button>
        </div>
      </div>

    </div>
  );
};

/* ── Mobile Step Component ── */
const StepMobile = ({ number, icon, title, description, checks, media, videoLeft, textDir }) => {
  const isRtl = textDir === "rtl";
  return (
  <div className="relative z-10 w-full flex flex-col items-center gap-4">
    {/* Step number bubble */}
    <div className="h-[46px] w-[46px] font-bold text-xl rounded-full flex justify-center items-center text-white bg-[#D4AF37] z-10 shadow-md">
      {number}
    </div>

    {/* Card + video stacked on mobile, side-by-side on sm+ */}
    <div className={`flex flex-col sm:flex-row ${videoLeft ? "sm:flex-row-reverse" : ""} gap-4 w-full max-w-[700px] items-center`}>

      {/* Info card */}
      <div className="flex flex-col justify-center gap-3 bg-white shadow-xl rounded-2xl p-5 w-full sm:w-[50%]">
        <div className={`flex gap-3 items-start ${isRtl ? "flex-row-reverse" : ""}`}>
          {icon}
          <p className="text-[18px] font-medium leading-tight" dir={textDir}>{title}</p>
        </div>
        <p className="text-sm text-gray-600" dir={textDir}>{description}</p>
        <div className="h-[1px] bg-gray-200 w-full"></div>
        {checks.map((check, i) => (
          <div key={i} className={`flex gap-2 items-start ${isRtl ? "flex-row-reverse" : ""}`}>
            <IoMdCheckmark className="text-[#DDBD65] mt-0.5 shrink-0"/>
            <p className="text-[#3E3E3E] text-sm" dir={textDir}>{check}</p>
          </div>
        ))}
      </div>

      {/* Media */}
      <div className="w-full sm:w-[50%] h-[200px] sm:h-[240px] rounded-2xl overflow-hidden bg-amber-800 hover:scale-105 transition duration-500">
        {media}
      </div>
    </div>
  </div>
  );
};

export default Lapage;
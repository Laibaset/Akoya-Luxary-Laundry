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
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation("Abouttranslation");

    return (
        <div>
            {/* Hero Section */}
            <div className="h-[600px] bg-gradient-to-r from-[#6F6F6F] to-[#D7D7D7] w-full flex flex-col gap-5 justify-center items-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white text-center">
                    {t("hero.title")}
                </h1>
                <div className="flex items-center w-full max-w-[400px]">
                    <div className="flex-grow h-[1px] bg-[#D4AF37]"></div>
                    <div className="px-4 text-[18px] sm:text-[22px] font-medium text-[#D4AF37] text-center">
                        {t("hero.collection")}
                    </div>
                    <div className="flex-grow h-[1px] bg-[#D4AF37]"></div>
                </div>
                <button className="text-[16px] sm:text-[18px] mt-3 bg-[#D4AF37] font-medium rounded-4xl px-8 py-3">
                    {t("hero.scheduleButton")}
                </button>
            </div>

            {/* Why Choose Section */}
            <p className="flex flex-wrap text-3xl sm:text-4xl font-light justify-center items-center py-20 text-center px-4">
                {t("whyChoose.heading")}
                <span className="text-[#D4AF37] ms-3">{t("whyChoose.brand")}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center px-4 pb-10 flex-wrap">
                <div className="h-auto sm:h-60 w-full sm:w-80 gap-4 bg-[#F8F5F2] flex flex-col justify-center items-center p-10 rounded-2xl">
                    <p className="text-[#D4AF37] text-4xl"><FaShieldAlt /></p>
                    <p className="font-medium text-[19px]">{t("whyChoose.premiumQuality.title")}</p>
                    <p className="text-center">{t("whyChoose.premiumQuality.description")}</p>
                </div>

                <div className="h-auto sm:h-60 w-full sm:w-80 gap-4 bg-[#F8F5F2] flex flex-col justify-center items-center p-10 rounded-2xl">
                    <p className="text-[#D4AF37] text-4xl"><BsFillPersonCheckFill /></p>
                    <p className="font-medium text-[19px]">{t("whyChoose.personalizedService.title")}</p>
                    <p className="text-center">{t("whyChoose.personalizedService.description")}</p>
                </div>

                <div className="h-auto sm:h-60 w-full sm:w-80 gap-4 bg-[#F8F5F2] flex flex-col justify-center items-center p-10 rounded-2xl">
                    <p className="text-[#D4AF37] text-4xl"><FaClock /></p>
                    <p className="font-medium text-[19px]">{t("whyChoose.convenience.title")}</p>
                    <p className="text-center">{t("whyChoose.convenience.description")}</p>
                </div>
            </div>

            {/* Services Journey Section */}
            <div className="bg-[#F8F5F2] w-full py-16 mt-20">
                <p className="text-3xl sm:text-4xl font-light text-center mb-12 sm:mb-16">
                    {t("journey.heading")}
                </p>

                <div className="flex flex-wrap gap-5 justify-center items-center px-4">
                    {[
                        { icon: <FaTshirt />, title: t("journey.steps.selectWash") },
                        { icon: <FaBoxOpen />, title: t("journey.steps.schedulePickup") },
                        { icon: <FaPumpSoap />, title: t("journey.steps.expertCleaning") },
                        { icon: <GiDelicatePerfume />, title: t("journey.steps.fragranceFinish") },
                        { icon: <FaBox />, title: t("journey.steps.carefulPackaging") },
                        { icon: <FaGift />, title: t("journey.steps.giftWrapping") },
                        { icon: <FaWhatsapp />, title: t("journey.steps.whatsappUpdates") },
                        { icon: <FaRobot />, title: t("journey.steps.aiTracking") },
                    ].map((item, index) => (
                        <div key={index} className="h-[180px] w-[calc(50%-10px)] sm:w-[250px] bg-white rounded-2xl shadow-2xl relative">
                            <div className="absolute top-6 left-6 text-[#D4AF37] text-4xl">
                                {item.icon}
                            </div>
                            <div className="flex flex-col justify-center items-center h-full text-center gap-3 pt-14 px-3">
                                <p className="text-[16px] sm:text-[20px] font-medium">{item.title}</p>
                                <p className="text-[#4c4e4c] text-[13px] sm:text-[15px]">
                                    {t("journey.cardDescription")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="w-full bg-white py-20">
                <div className="text-center max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-light">
                        {t("team.heading")}
                    </h2>
                    <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
                    <p className="mt-6 text-[17px] text-gray-600 leading-relaxed">
                        {t("team.description")}
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
                    <div className="bg-[#F8F5F2] rounded-2xl py-10 px-6 text-center">
                        <img
                            src="/images/pexels-photo-769772.webp"
                            alt="Ahmed Al-Mansoori"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-[#D4AF37] object-cover"
                        />
                        <h3 className="mt-6 text-xl font-semibold">{t("team.members.ahmed.name")}</h3>
                        <p className="text-[#D4AF37] mt-1">{t("team.members.ahmed.role")}</p>
                        <p className="mt-4 text-gray-600 text-[15px]">{t("team.members.ahmed.bio")}</p>
                    </div>

                    <div className="bg-[#F8F5F2] rounded-2xl py-10 px-6 text-center">
                        <img
                            src="/images/pexels-photo-3763188.webp"
                            alt="Layla Hassan"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-[#D4AF37] object-cover"
                        />
                        <h3 className="mt-6 text-xl font-semibold">{t("team.members.layla.name")}</h3>
                        <p className="text-[#D4AF37] mt-1">{t("team.members.layla.role")}</p>
                        <p className="mt-4 text-gray-600 text-[15px]">{t("team.members.layla.bio")}</p>
                    </div>

                    <div className="bg-[#F8F5F2] rounded-2xl py-10 px-6 text-center">
                        <img
                            src="/images/pexels-photo-3785077.webp"
                            alt="Yousef Ibrahim"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-[#D4AF37] object-cover"
                        />
                        <h3 className="mt-6 text-xl font-semibold">{t("team.members.yousef.name")}</h3>
                        <p className="text-[#D4AF37] mt-1">{t("team.members.yousef.role")}</p>
                        <p className="mt-4 text-gray-600 text-[15px]">{t("team.members.yousef.bio")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
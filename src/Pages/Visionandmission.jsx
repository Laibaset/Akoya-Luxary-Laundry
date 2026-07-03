import { useTranslation } from "react-i18next";

const Visionandmission = () => {
    const { t } = useTranslation("Visiontranslation");

    return (
        <div>

            {/* ── VISION ── */}
            <section className="bg-[#f5f6f8] py-12 sm:py-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a]">
                        {t("vision.heading")}
                    </h2>

                    <p className="text-base sm:text-lg text-[#D0AA31] mt-3 font-medium">
                        {t("vision.brand")}
                    </p>

                    <p className="text-gray-500 mt-3 italic">
                        {t("vision.tagline")}
                    </p>

                    <div className="w-16 h-1 bg-[#D0AA31] mx-auto mt-4 rounded"></div>
                </div>

                <div className="bg-white w-full max-w-4xl mx-auto mt-10 sm:mt-14 rounded-2xl shadow-xl flex flex-col sm:flex-row overflow-hidden">

                    {/* Gold Vision Side */}
                    <div className="bg-[#D0AA31] w-full sm:w-[280px] md:w-[330px] flex items-center justify-center text-white py-8 sm:py-0 flex-shrink-0">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
                            {t("vision.cardTitle")}
                        </h3>
                    </div>

                    {/* Text Side */}
                    <div className="flex-1 flex items-center px-6 sm:px-9 py-6 sm:py-8">
                        <p className="text-gray-600 text-base sm:text-[19px] leading-relaxed">
                            {t("vision.text")}
                        </p>
                    </div>

                </div>
            </section>

            {/* ── MISSION + VALUES ── */}
            <div className="w-full bg-[#F6F7F9] py-14 sm:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* LEFT COLUMN — image + CTA */}
                        <div className="w-full">

                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] lg:aspect-[4/3]">
                                <img
                                    src="/Images/ourmission.jpeg"
                                    alt="Akoya"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 sm:p-8">
                                    <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                                        {t("excellence.heading")}
                                    </h2>
                                    <p className="text-white/90 mt-2">
                                        {t("excellence.subtitle")}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#D4AF37] rounded-2xl py-5 mt-6 flex flex-col gap-4 justify-center items-center text-white shadow-xl">
                                <h3 className="text-[20px] text-start font-bold">
                                    {t("cta.heading")}
                                </h3>

                                <button className="hover:scale-110 transition duration-500 w-[80%] bg-white text-[#D4AF37] py-3 rounded-[10px] font-bold">
                                    {t("cta.button")}
                                </button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN — mission text + gold panel */}
                        <div className="bg-white w-full flex flex-col sm:flex-row rounded-2xl shadow-xl overflow-hidden">

                            {/* Mission Section */}
                            <div className="text-gray-700 p-8 sm:p-10 md:p-14 text-base sm:text-[19px] flex-1">
                                <p>
                                    {t("mission.text")}
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#0F1B2E] to-[#1E2F4D] flex items-center justify-center px-8 sm:px-10 py-8 sm:py-0 sm:min-w-[220px]">
                                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                                    {t("mission.cardTitle")}
                                </h2>
                            </div>

                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="bg-white shadow-xl p-6 sm:p-10 md:p-12 rounded-2xl w-full">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12">
                            {t("coreValues.heading")}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                            {/* Value Card */}
                            <div className="flex gap-4 sm:gap-6 border-s-4 border-[#D4AF37] bg-white rounded-2xl p-6 sm:p-8 shadow-md relative">
                                <div className="w-2 bg-[#D4AF37] rounded-full absolute left-0"></div>
                                <div className="w-16 sm:w-20 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{t("coreValues.excellence.title")}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {t("coreValues.excellence.description")}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 border-s-4 border-[#D4AF37] bg-white rounded-2xl p-6 sm:p-8 shadow-md relative">
                                <div className="w-16 sm:w-20 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{t("coreValues.innovation.title")}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {t("coreValues.innovation.description")}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 border-s-4 border-[#D4AF37] bg-white rounded-2xl p-6 sm:p-8 shadow-md relative">
                                <div className="w-16 sm:w-20 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{t("coreValues.sustainability.title")}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {t("coreValues.sustainability.description")}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 border-s-4 border-[#D4AF37] bg-white rounded-2xl p-6 sm:p-8 shadow-md relative">
                                <div className="w-16 sm:w-20 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{t("coreValues.customerFocus.title")}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {t("coreValues.customerFocus.description")}
                                    </p>
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
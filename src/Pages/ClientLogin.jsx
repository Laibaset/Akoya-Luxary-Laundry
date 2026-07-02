import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ClientLogin = () => {
  const { t } = useTranslation("Logintranslation");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9e6e2]">
      
      {/* Card */}
      <div className="w-[480px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Top Header */}
        <div className="bg-gradient-to-b from-black to-[#1c1c1c] text-center py-8 px-6">
          <h1 className="text-[#d4af37] text-2xl font-semibold tracking-wide">
            {t("brand")}
          </h1>
          <div className="w-full h-[1px] bg-[#d4af37] opacity-40 my-4"></div>
          <p className="text-gray-300">{t("subtitle")}</p>
        </div>

        {/* Form Section */}
        <div className="px-8 py-8">

          {/* Email */}
          <label className="text-gray-700 font-medium">{t("emailLabel")}</label>
          <div className="flex items-center border rounded-xl px-4 py-3 mt-2 mb-6 bg-gray-50">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Password */}
          <label className="text-gray-700 font-medium">{t("passwordLabel")}</label>
          <div className="flex items-center border rounded-xl px-4 py-3 mt-2 mb-4 bg-gray-50">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder={t("passwordPlaceholder")}
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2" />
              {t("rememberMe")}
            </label>

            <button className="text-[#d4af37] text-sm font-medium">
              {t("forgotPassword")}
            </button>
          </div>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-[#caa52e] to-[#e4bd3d] text-white font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition">
            {t("signInButton")}
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <p className="px-3 text-gray-500 text-sm">{t("newToAkoya")}</p>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Create account */}
         <Link to="/CreateAccount"> <p className="text-center text-[#caa52e] font-medium cursor-pointer">
            {t("createAccount")}
          </p>
</Link>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
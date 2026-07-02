import React from "react";
import { FaUser, FaEnvelope, FaLock, FaCheck, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CreateAccount = () => {
  const { t } = useTranslation("Createtranslation");

  return (
    <div className="min-h-screen pt-10 flex items-center justify-center bg-[#e9e6e2]">

      {/* Card */}
      <div className="w-[450px]  bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header (same as login) */}
        <div className="bg-gradient-to-b from-black to-[#1C1C1C] text-center py-5 px-6">
          <h1 className="text-[#d4af37] text-2xl font-semibold tracking-wide">
            {t("brand")}
          </h1>
          <div className="w-full h-[1px] bg-[#d4af37] opacity-40 my-4"></div>
          <p className="text-gray-300">{t("subtitle")}</p>
        </div>

        {/* Form */}
        <div className="px-8 py-8">

          {/* Full Name */}
          <label className="text-gray-700 font-medium">{t("fullNameLabel")}</label>
          <div className="flex items-center border rounded-xl px-4 py-3 mt-2 mb-5 bg-gray-50">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder={t("fullNamePlaceholder")}
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Email */}
          <label className="text-gray-700 font-medium">{t("emailLabel")}</label>
          <div className="flex items-center border rounded-xl px-4 py-3 mt-2 mb-5 bg-gray-50">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Password */}
          <label className="text-gray-700 font-medium">{t("passwordLabel")}</label>
          <div className="flex items-center border rounded-xl px-4 py-3 mt-2 mb-5 bg-gray-50">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder={t("passwordPlaceholder")}
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Confirm Password */}
          <label className="text-gray-700 font-medium">{t("confirmPasswordLabel")}</label>
          <div className="flex items-center border rounded-xl px-4 py-3 mt-2 mb-5 bg-gray-50">
            <FaCheck className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder={t("confirmPasswordPlaceholder")}
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* WhatsApp */}
          <label className="text-gray-700 font-medium">{t("whatsappLabel")}</label>
          <div className="flex items-center border rounded-xl px-4 py-3 mt-2 bg-gray-50">
            <FaPhone className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder={t("whatsappPlaceholder")}
              className="bg-transparent outline-none w-full"
            />
          </div>

          <p className="text-sm text-gray-500 mt-2 mb-6">
            {t("whatsappHint")}
          </p>

          {/* Terms */}
          <label className="flex items-center text-gray-600 text-sm mb-6">
            <input type="checkbox" className="mr-2" />
            {t("termsPrefix")}{" "}
            <span className="text-[#d4af37] ml-1">{t("termsLink")}</span>
          </label>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-[#caa52e] to-[#e4bd3d] text-white font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition">
            {t("createAccountButton")}
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-500 mt-6">
            {t("alreadyHaveAccount")}{" "}
            <span className="text-[#caa52e] font-medium cursor-pointer">
              {t("signInLink")}
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
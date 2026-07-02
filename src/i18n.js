import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import naven from "./locales/eng/Navbartranslation.json";
import navur from "./locales/urdu/Navbartranslation.json";
import swiperen from "./locales/eng/Swipertranslation.json";
import swiperur from "./locales/urdu/Swipertranslation.json";
import signatureen from "./locales/eng/SignatureLinestranslation.json";
import signatureur from "./locales/urdu/SignatureLinestranslation.json";
import fragranceen from "./locales/eng/Fragrancetrans.json";
import fragranceur from "./locales/urdu/Fragrancetrans.json";
import workingen from "./locales/eng/Workingtranslation.json";
import workingur from "./locales/urdu/Workingtranslation.json";
import cluben from "./locales/eng/Akoyaclubtranslation.json";
import clubur from "./locales/urdu/Akoyaclubtranslation.json";
import footeren from "./locales/eng/Footertranslation.json";
import footerur from "./locales/urdu/Footertranslation.json"
import Abouten from "./locales/eng/Abouttranslation.json"
import Aboutur from "./locales/urdu/Abouttranslation.json"
import Boookingen from "./locales/eng/Bookingtranslation.json"
import Boookingur from "./locales/urdu/Bookingtranslation.json"
import Loginen from "./locales/eng/Logintranslation.json"
import Loginur from "./locales/urdu/Logintranslation.json"
import Contacten from "./locales/eng/Contacttranslation.json"
import Contactur from "./locales/urdu/Contacttranslation.json"
import Visionen from "./locales/eng/Visiontranslation.json"
import Visionur from "./locales/urdu/Visiontranslation.json"
import Servicesen from "./locales/eng/Servicestranslation.json"
import Servicesur from "./locales/urdu/Servicestranslation.json"
import Createen from "./locales/eng/Createtranslation.json"
import Createur from "./locales/urdu/Createtranslation.json"





i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        Navbartranslation: naven,
        Swipertranslation: swiperen,
        SignatureLinestranslation: signatureen,
        Fragrancetrans: fragranceen,
        Workingtranslation: workingen,
        Akoyaclubtranslation: cluben,
        Footertranslation: footeren,
        Abouttranslation: Abouten,
        Bookingtranslation: Boookingen,
        Contacttranslation: Contacten,
        Visiontranslation: Visionen,
        Logintranslation: Loginen,
        Servicestranslation: Servicesen,
        Createtranslation: Createen,
      },
      ur: {
        Navbartranslation: navur,
        Swipertranslation: swiperur,
        SignatureLinestranslation: signatureur,
        Fragrancetrans: fragranceur,
        Workingtranslation: workingur,
        Akoyaclubtranslation: clubur,
        Footertranslation: footerur,
        Abouttranslation: Aboutur,
        Bookingtranslation: Boookingur,
        Contacttranslation: Contactur,
        Visiontranslation: Visionur,
        Logintranslation: Loginur,
        Servicestranslation: Servicesur,
        Createtranslation: Createur,
      },
    },

    lng: "en",
    fallbackLng: "en",

    Workingtranslation: workingur,
    ns: ["Navbartranslation", "Swipertranslation", "SignatureLinestranslation", "Fragrancetrans", "Workingtranslation", "Akoyaclubtranslation", "Footertranslation", "Abouttranslation", "Bookingtranslation", "Contacttranslation", "Visiontranslation", "Servicestranslation", "Logintranslation", "Createtranslation"],
    defaultNS: "Navbartranslation",

    interpolation: {
      escapeValue: false,
    },
  });

// Set initial direction
document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.language === "ur" ? "rtl" : "ltr";

// Update direction whenever language changes
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ur" ? "rtl" : "ltr";
});

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_pt from "./Translations/pt/common.json";
import common_en from "./Translations/en/common.json";

// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    lng: 'en',                             
        resources: {
            en: {
                common: common_en              
            },
            pt: {
                common: common_pt
            },
        },
  });


export default i18n;
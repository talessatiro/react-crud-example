import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './locales/en.json';
import ptBrJson from './locales/pt-br.json';

i18n.use(initReactI18next).init({
    resources: {
        en: enJson,
        ptBr: ptBrJson,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        escapeValue: false,
    },
});

export default i18n;

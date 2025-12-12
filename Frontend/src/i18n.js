import { createI18n } from 'vue-i18n';
 
import en from '@/locales/en.json';
import kh from '@/locales/kh.json';

const messages = {
  en: en,
  kh: kh
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: 'en',
  messages,
});

export default i18n;

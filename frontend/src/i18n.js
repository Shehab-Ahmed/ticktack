import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import en from './locales/en.json'
import ar from './locales/ar.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: { en, ar }
})

document.documentElement.dir =
  i18n.global.locale.value === "ar" ? "rtl" : "ltr";

watch(i18n.global.locale, (newLang) => {
  document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", newLang); 
});

export default i18n
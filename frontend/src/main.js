import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import route from "./router";
import App from "./App.vue";
import i18n from './i18n'

import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 1500, 
  once: false, 
});

const app = createApp(App);
app.use(createPinia());
app.use(route);
app.use(i18n);
app.mount("#app");
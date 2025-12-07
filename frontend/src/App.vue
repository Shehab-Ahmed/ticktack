<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useI18n } from "vue-i18n";
import { watch, onMounted } from "vue";

const { locale } = useI18n();

function loadRTL(enable) {
  const id = "rtl-stylesheet";
  let link = document.getElementById(id);

  if (enable) {
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "/src/assets/css/rtl.css"; 
      document.head.appendChild(link);
    }
  } else {
    if (link) link.remove();
  }
}

onMounted(() => {
  loadRTL(locale.value === "ar");
});

watch(locale, (newLang) => {
  loadRTL(newLang === "ar");
});
</script>

<template>
  <div>
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
<style>
#nprogress .bar { height: 4px; top: 0; background: linear-gradient(to right, #622FFE 0%, #B08FFF 100%) }
#nprogress .peg { box-shadow: 0 0 10px #622FFE, 0 0 5px #B08FFF; }
#nprogress .spinner { display: none; }
</style>
<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <button>{{ $t('add') }}</button>
    <button @click="switchLanguage('ar')">عربي</button>
    <button @click="switchLanguage('en')">English</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function switchLanguage(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>
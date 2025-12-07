<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container py-2">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                <strong>{{ $t('main.name') }}</strong>
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" :class="langClass" @click.prevent="toggleLang" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('main.lang') }}
                        </a>
                        <ul class="dropdown-menu" :class="langClass">
                            <li><a href="#" class="dropdown-item" @click.prevent="switchLanguage('ar'); toggleLang();">عربي</a></li>
                            <li><a href="#" class="dropdown-item" @click.prevent="switchLanguage('en'); toggleLang();">English</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav" v-if="store.isLoggedIn">
                    <li class="nav-item">
                        <router-link :to="{ name: 'tasks' }" class="nav-link"
                            >{{ $t('navbar.Tasks') }}</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'summary' }" class="nav-link"
                            >{{ $t('navbar.Summary') }}</router-link
                        >
                    </li>
                </ul>
                <ul :class="['navbar-nav', isRtl ? 'me-auto' : 'ms-auto']">
                    <template v-if="!store.isLoggedIn">
                        <li class="nav-item">
                            <router-link :to="{ name: 'login' }" class="btn btn-outline-secondary ms-2 mt-2">{{ $t('navbar.Login') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'register' }" class="btn btn-danger ms-2 mt-2">{{ $t('navbar.Register') }}</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" :class="userClass" @click.prevent="toggleUser" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ store.user.name }}
                            </a>
                            <ul class="dropdown-menu" :class="userClass">
                                <li><a href="#" class="dropdown-item" @click.prevent="logout">{{ $t('navbar.Logout') }}</a></li>
                            </ul>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

const isRtl = computed(() => locale.value === 'ar')

import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { useI18n } from 'vue-i18n'

const router = useRouter()
const store = useAuthStore()
const isOpen = ref(false)
const { locale } = useI18n()

function switchLanguage(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}

const logout = async () => {
    await store.handleLogout()
    isOpen.value = false
    router.push({ name: 'login' })
}
const toggle = () => isOpen.value = !isOpen.value
const isLangOpen = ref(false)
const isUserOpen = ref(false)
const toggleLang = () => {
  isLangOpen.value = !isLangOpen.value
  if (isLangOpen.value) isUserOpen.value = false 
}
const toggleUser = () => {
  isUserOpen.value = !isUserOpen.value
  if (isUserOpen.value) isLangOpen.value = false 
}
router.afterEach(() => {
  isLangOpen.value = false
  isUserOpen.value = false

  const nav = document.getElementById("navbarNav")
  if (nav && nav.classList.contains("show")) {
    nav.classList.remove("show")
  }
})

const langClass = computed(() => isLangOpen.value ? 'show' : '')
const userClass = computed(() => isUserOpen.value ? 'show' : '')
const toggleClass = computed(() => isOpen.value === true ? 'show' : '')
</script>

<style scoped>
.nav-link.router-link-active {
    color: rgba(0, 0, 0, 0.9);
}
</style>

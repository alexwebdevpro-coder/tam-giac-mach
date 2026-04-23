<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const links = [
  { name: 'home', label: 'Accueil' },
  { name: 'house', label: 'La maison' },
  { name: 'rooms', label: 'Chambres' },
  { name: 'experiences', label: 'Expériences' },
  { name: 'contact', label: 'Contact' },
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="bg-bamboo-800 relative z-50">
    <nav class="flex items-center justify-between max-w-6xl mx-auto p-4">
      <RouterLink :to="{ name: 'home' }" @click="closeMenu" class="flex items-center">
        <img src="/images/brand/logo.svg" alt="Tam Giác Mạch" class="h-20 w-auto" />
      </RouterLink>

      <ul class="hidden md:flex gap-8">
        <li v-for="link in links" :key="link.name">
          <RouterLink
            :to="{ name: link.name }"
            class="relative pb-1 text-driedbamboo-100 transition-colors duration-200 hover:text-driedbamboo-50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-driedbamboo-100 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 [&.router-link-active]:after:scale-x-100"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <button
        @click="toggleMenu"
        class="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Ouvrir le menu"
      >
        <span class="w-6 h-0.5 bg-driedbamboo-100"></span>
        <span class="w-6 h-0.5 bg-driedbamboo-100"></span>
        <span class="w-6 h-0.5 bg-driedbamboo-100"></span>
      </button>
    </nav>

    <div
      v-if="isOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-bamboo-800 border-t border-bamboo-700 shadow-lg z-40"
    >
      <ul class="flex flex-col p-4 gap-2">
        <li v-for="link in links" :key="link.name">
          <RouterLink
            :to="{ name: link.name }"
            @click="closeMenu"
            class="block py-2 text-driedbamboo-100 transition-colors duration-200 hover:text-driedbamboo-50 [&.router-link-active]:text-driedbamboo-50 [&.router-link-active]:font-medium"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>

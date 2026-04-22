<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="border-b border-stone-300 bg-stone-50 relative z-50">
    <nav class="flex items-center justify-between max-w-6xl mx-auto p-4">
      <RouterLink :to="{ name: 'home' }" class="text-xl font-serif" @click="closeMenu">
        Tam Giác Mạch
      </RouterLink>

      <ul class="hidden md:flex gap-6">
        <li>
          <RouterLink
            :to="{ name: 'home' }"
            class="hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            Accueil
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'house' }"
            class="hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            La maison
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'rooms' }"
            class="hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            Chambres
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'experiences' }"
            class="hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            Expériences
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'contact' }"
            class="hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            Contact
          </RouterLink>
        </li>
      </ul>

      <button
        @click="toggleMenu"
        class="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Ouvrir le menu"
      >
        <span class="w-6 h-0.5 bg-stone-800"></span>
        <span class="w-6 h-0.5 bg-stone-800"></span>
        <span class="w-6 h-0.5 bg-stone-800"></span>
      </button>
    </nav>

    <div
      v-if="isOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-stone-50 border-b border-stone-300 shadow-lg z-40"
    >
      <ul class="flex flex-col p-4 gap-4">
        <li>
          <RouterLink
            :to="{ name: 'home' }"
            @click="closeMenu"
            class="block py-2 hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            Accueil
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'house' }"
            @click="closeMenu"
            class="block py-2 hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            La maison
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'rooms' }"
            @click="closeMenu"
            class="block py-2 hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            Chambres
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'experiences' }"
            @click="closeMenu"
            class="block py-2 hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            Expériences
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'contact' }"
            @click="closeMenu"
            class="block py-2 hover:text-sage-700 [&.router-link-active]:text-sage-700 [&.router-link-active]:font-medium"
          >
            Contact
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="border-b border-stone-300 bg-stone-50 p-4">
    <nav class="flex items-center justify-between max-w-6xl mx-auto">
      <RouterLink :to="{ name: 'home' }" class="text-xl font-serif"> Tam Giác Mạch </RouterLink>

      <ul class="flex gap-6">
        <li>
          <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'house' }">La maison</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'rooms' }">Chambres</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'experiences' }">Expériences</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>

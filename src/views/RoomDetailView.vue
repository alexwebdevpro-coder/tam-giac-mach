<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { rooms } from '@/data/rooms.js'

const route = useRoute()

const room = computed(() => {
  return rooms.find((r) => r.slug === route.params.slug)
})
</script>

<template>
  <section v-if="room" class="max-w-4xl mx-auto px-4 py-12">
    <img
      v-if="room.image"
      :src="room.image"
      :alt="room.name"
      class="w-full h-80 object-cover rounded-lg mb-8"
    />
    <h1 class="text-4xl font-serif mb-4">{{ room.name }}</h1>
    <p class="text-lg text-stone-600 mb-8">{{ room.shortDescription }}</p>

    <div class="prose max-w-none mb-8">
      <p>{{ room.longDescription }}</p>
    </div>

    <div class="border-t border-stone-200 pt-8 mb-8">
      <h2 class="text-2xl font-serif mb-4">Informations pratiques</h2>
      <ul class="space-y-2 text-stone-700">
        <li>Capacité : {{ room.capacity }} personnes</li>
        <li>Couchage : {{ room.bedType }}</li>
        <li>Superficie : {{ room.surface }} m²</li>
        <li>Vue : {{ room.view }}</li>
      </ul>
    </div>

    <div class="border-t border-stone-200 pt-8 mb-8">
      <h2 class="text-2xl font-serif mb-4">Équipements</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-stone-700">
        <li v-for="amenity in room.amenities" :key="amenity">
          {{ amenity }}
        </li>
      </ul>
    </div>

    <div class="border-t border-stone-200 pt-8 flex items-center justify-between">
      <p class="text-2xl font-medium">À partir de {{ room.price }} € / nuit</p>
      <RouterLink
        :to="{ name: 'contact' }"
        class="bg-stone-800 text-white px-6 py-3 rounded hover:bg-stone-700"
      >
        Nous contacter
      </RouterLink>
    </div>
  </section>

  <section v-else class="max-w-4xl mx-auto px-4 py-12 text-center">
    <h1 class="text-4xl font-serif mb-4">Chambre introuvable</h1>
    <p class="text-stone-600 mb-8">Cette chambre n'existe pas ou n'est plus disponible.</p>
    <RouterLink :to="{ name: 'rooms' }" class="text-stone-700 underline">
      Voir toutes les chambres
    </RouterLink>
  </section>
</template>

<style scoped></style>

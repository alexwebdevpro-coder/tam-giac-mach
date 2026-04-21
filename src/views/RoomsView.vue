<script setup>
import RoomCard from '@/components/rooms/RoomCard.vue'
import { rooms } from '@/data/rooms.js'
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-serif mb-4">Nos chambres</h1>
    <p class="text-stone-600 mb-12">
      Trois chambres, trois atmosphères, toutes tournées vers la vallée.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RoomCard v-for="room in rooms" :key="room.slug" :room="room" />
    </div>
  </section>
</template>

<style scoped></style>

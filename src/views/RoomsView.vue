<script setup>
import RoomCard from '@/components/rooms/RoomCard.vue'
import { rooms } from '@/data/rooms.js'
import FadeIn from '@/components/ui/FadeIn.vue'
import PageHero from '@/components/ui/PageHero.vue'
</script>

<template>
  <PageHero
    image="/images/general/maison-chambre.webp"
    alt="Chambre de la maison"
    title="Nos chambres"
    subtitle="Trois chambres, trois atmosphères, toutes tournées vers la vallée."
    object-position="object-[center_60%]"
  />

  <FadeIn>
    <section class="bg-driedbamboo-100 py-20 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard v-for="room in rooms" :key="room.slug" :room="room" />
      </div>
    </section>
  </FadeIn>
</template>

<style scoped></style>

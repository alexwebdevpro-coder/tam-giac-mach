<script setup>
import { RouterLink } from 'vue-router'
import RoomCard from '@/components/rooms/RoomCard.vue'
import FadeIn from '@/components/ui/FadeIn.vue'
import { rooms } from '@/data/rooms.js'
</script>

<template>
  <section class="relative h-[80vh] min-h-125 flex items-center justify-center px-4">
    <img
      src="/images/general/maison-riziere.webp"
      alt="Rizières en terrasses du nord du Vietnam"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative max-w-4xl mx-auto text-center text-white">
      <h1 class="text-5xl md:text-6xl font-serif mb-6">
        Une maison Hmong suspendue entre les montagnes
      </h1>
      <p class="text-lg mb-8">Maison d'hôtes au cœur des hauts plateaux de Hà Giang</p>
      <RouterLink
        :to="{ name: 'house' }"
        class="inline-block bg-white text-stone-800 px-8 py-3 rounded hover:bg-stone-100"
      >
        Découvrir le lieu
      </RouterLink>
    </div>
  </section>
  <FadeIn>
    <section class="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 class="text-3xl font-serif mb-6">Bienvenue à Tam Giác Mạch</h2>
      <p class="text-stone-700 mb-8 leading-relaxed">
        Une ancienne maison Hmong rénovée avec soin, tenue avec passion, au cœur d'une région qui
        vit au rythme des saisons et des récoltes de sarrasin. Un lieu pensé pour la rencontre,
        l'aventure et la lenteur.
      </p>
      <RouterLink :to="{ name: 'house' }" class="text-sage-700 underline hover:text-sage-800">
        En savoir plus sur la maison
      </RouterLink>
    </section>
  </FadeIn>
  <FadeIn>
    <section class="bg-stone-50 py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-serif mb-4 text-center">Nos chambres</h2>
        <p class="text-stone-600 mb-12 text-center">Trois chambres, trois atmosphères</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RoomCard v-for="room in rooms" :key="room.slug" :room="room" />
        </div>

        <div class="text-center mt-12">
          <RouterLink :to="{ name: 'rooms' }" class="text-sage-700 underline hover:text-sage-800">
            Voir toutes les chambres
          </RouterLink>
        </div>
      </div>
    </section>
  </FadeIn>
  <FadeIn>
    <section class="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 class="text-3xl font-serif mb-4">Prêt à vivre l'expérience ?</h2>
      <p class="text-stone-600 mb-8">Contactez-nous pour préparer votre séjour.</p>
      <RouterLink
        :to="{ name: 'contact' }"
        class="inline-block bg-sage-600 text-white px-8 py-3 rounded hover:bg-sage-700"
      >
        Nous contacter
      </RouterLink>
    </section>
  </FadeIn>
</template>

<style scoped></style>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="min-h-[70vh] flex items-center justify-center px-4 py-20">
    <div class="max-w-xl mx-auto text-center">
      <p class="text-sm tracking-widest text-stone-500 uppercase mb-4">Erreur 404</p>
      <h1 class="text-4xl md:text-5xl font-serif mb-6">Vous vous êtes perdu sur le chemin</h1>
      <p class="text-stone-600 leading-relaxed mb-10">
        La page que vous cherchez n'existe pas, ou s'est évanouie dans la brume des montagnes. Il
        vous reste deux chemins possibles pour retrouver votre route.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          :to="{ name: 'home' }"
          class="inline-block bg-stone-800 text-white px-6 py-3 rounded hover:bg-stone-700"
        >
          Retour à l'accueil
        </RouterLink>
        <RouterLink
          :to="{ name: 'rooms' }"
          class="inline-block border border-stone-800 text-stone-800 px-6 py-3 rounded hover:bg-stone-100"
        >
          Voir les chambres
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

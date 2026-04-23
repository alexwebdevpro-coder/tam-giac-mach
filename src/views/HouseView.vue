<script setup>
import { RouterLink } from 'vue-router'
import ValueCard from '@/components/Home/ValueCard.vue'
import FadeIn from '@/components/ui/FadeIn.vue'
import PageHero from '@/components/ui/PageHero.vue'

const values = [
  {
    title: 'Écotourisme',
    description: "Respect de l'environnement, rénovation avec matériaux locaux, circuits courts.",
  },
  {
    title: 'Cultures locales',
    description: 'Rencontres avec les communautés Hmong et Dao, guides issus des villages voisins.',
  },
  {
    title: 'Aventure',
    description: 'Randonnées, treks, routes de montagne : la région se découvre en marchant.',
  },
  {
    title: 'Gastronomie',
    description: "Cuisine locale préparée avec les produits de la ferme d'à côté.",
  },
]
</script>

<template>
  <PageHero
    image="/images/general/cour-commune-2.webp"
    alt="Cour commune de la maison"
    title="La maison"
    subtitle="Une ancienne demeure Hmong rénovée avec l'âme intacte"
    object-position="object-[center_70%]"
  />

  <FadeIn>
    <section class="max-w-5xl mx-auto px-4 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/images/general/maison-dhote.webp"
          alt="La maison d'hôtes"
          class="w-full aspect-4/3 object-cover rounded-lg"
          loading="lazy"
        />
        <div>
          <h2 class="text-3xl font-serif mb-6">Le lieu et son histoire</h2>
          <p class="text-stone-700 leading-relaxed mb-4">
            Construite il y a plus de 80 ans par une famille Hmong, la maison traverse les
            générations avant d'être lentement remise en valeur. Les murs de bois, les toitures en
            tuiles anciennes, les poutres apparentes : tout a été conservé.
          </p>
          <p class="text-stone-700 leading-relaxed">
            La rénovation s'est faite sur trois ans, main dans la main avec des artisans locaux, en
            privilégiant toujours les matériaux de la région. Chaque détail raconte ce territoire.
          </p>
        </div>
      </div>
    </section>
  </FadeIn>
  <FadeIn>
    <section class="bg-bamboo-700 py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-serif mb-4 text-white">Notre philosophie</h2>
          <p class="text-bamboo-100 max-w-2xl mx-auto">
            Quatre valeurs qui guident notre façon d'accueillir et de faire vivre ce lieu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            v-for="value in values"
            :key="value.title"
            :title="value.title"
            :description="value.description"
          />
        </div>
      </div>
    </section>
  </FadeIn>
  <FadeIn>
    <section class="max-w-5xl mx-auto px-4 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-serif mb-6">L'hôte</h2>
          <p class="text-stone-700 leading-relaxed mb-4">
            Installé dans la région il y a plusieurs années, tombé amoureux de ses paysages et de
            ses habitants, j'ai choisi d'y enraciner un projet de maison d'hôtes tourné vers la
            rencontre.
          </p>
          <p class="text-stone-700 leading-relaxed">
            Le personnel et les guides sont tous issus de la communauté locale. Rien ne se fait ici
            sans elle.
          </p>
        </div>
        <img
          src="/images/general/hmong-travaille-riziere.webp"
          alt="Hmong au travail dans les rizières"
          class="w-full aspect-square object-cover rounded-lg md:order-last order-first"
          loading="lazy"
        />
      </div>
    </section>
  </FadeIn>
  <FadeIn>
    <section class="bg-driedbamboo-100 py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-serif mb-6">La communauté et le territoire</h2>
        <p class="text-stone-700 leading-relaxed mb-8">
          La maison est ancrée dans un tissu humain. Les légumes viennent de la ferme d'à côté, le
          thé des producteurs de Shan Tuyết voisins, les tissages des femmes du village. Ce n'est
          pas un détail : c'est l'esprit du lieu.
        </p>
        <div class="grid grid-cols-3 gap-4">
          <img
            src="/images/general/danse-hmong.webp"
            alt="Danse Hmong"
            class="w-full aspect-square object-cover rounded-lg"
            loading="lazy"
          />
          <img
            src="/images/general/marche-legume.webp"
            alt="Marché de légumes"
            class="w-full aspect-square object-cover rounded-lg"
            loading="lazy"
          />
          <img
            src="/images/general/hmong-assis.webp"
            alt="Habitants Hmong"
            class="w-full aspect-square object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </FadeIn>
  <FadeIn>
    <section class="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 class="text-3xl font-serif mb-4">Prêt à découvrir les chambres ?</h2>
      <p class="text-stone-600 mb-8">Trois atmosphères, toutes tournées vers la vallée.</p>
      <RouterLink
        :to="{ name: 'rooms' }"
        class="inline-block bg-sage-600 text-white px-8 py-3 rounded hover:bg-sage-700"
      >
        Voir les chambres
      </RouterLink>
    </section>
  </FadeIn>
</template>

<style scoped></style>

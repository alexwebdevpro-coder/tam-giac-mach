<script setup>
defineProps({
  room: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="border border-stone-300 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
  >
    <div class="overflow-hidden">
      <img
        :src="room.image"
        :alt="room.name"
        loading="lazy"
        decoding="async"
        class="w-full aspect-4/3 object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-serif mb-2">{{ room.name }}</h3>
      <p class="text-stone-600 text-sm mb-4">{{ room.shortDescription }}</p>

      <div class="flex gap-4 text-sm text-stone-500 mb-4">
        <span>{{ room.capacity }} pers.</span>
        <span>{{ room.surface }} m²</span>
        <span>{{ room.view }}</span>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-lg font-medium">À partir de {{ room.price }} €</p>
        <RouterLink
          :to="{ name: 'room-detail', params: { slug: room.slug } }"
          class="text-sage-700 underline hover:text-sage-800"
        >
          Découvrir
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<style scoped></style>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  objectPosition: {
    type: String,
    default: 'object-center',
  },
  overlayOpacity: {
    type: String,
    default: 'bg-black/50',
  },
})
</script>

<template>
  <section class="relative py-24 px-4">
    <img
      :src="image"
      :alt="alt"
      :class="['absolute inset-0 w-full h-full object-cover', objectPosition]"
    />
    <div class="absolute inset-0" :class="overlayOpacity"></div>
    <div class="relative max-w-4xl mx-auto text-center text-white">
      <h1 class="text-5xl md:text-6xl font-serif mb-6">{{ title }}</h1>
      <p v-if="subtitle" class="text-lg">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped></style>

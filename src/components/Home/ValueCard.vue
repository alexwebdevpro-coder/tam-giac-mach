<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="bg-white border border-stone-200 rounded-lg p-6 text-center">
    <div class="w-12 h-12 bg-stone-200 rounded-full mx-auto mb-4"></div>
    <h3 class="text-lg font-serif mb-3">{{ title }}</h3>
    <p class="text-stone-600 text-sm leading-relaxed">{{ description }}</p>
  </article>
</template>

<style scoped></style>

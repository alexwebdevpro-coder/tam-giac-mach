<script setup>
defineProps({
  emoji: {
    type: String,
    default: '',
  },
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
  <article class="bg-white rounded-lg p-6 shadow-sm">
    <div v-if="emoji" class="text-4xl mb-4" aria-hidden="true">{{ emoji }}</div>
    <h3 class="text-xl font-serif mb-3">{{ title }}</h3>
    <p class="text-stone-600 leading-relaxed text-sm">{{ description }}</p>
  </article>
</template>

<style scoped></style>

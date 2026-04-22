<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  buttonLabel: {
    type: String,
    required: true,
  },
  buttonRoute: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="bg-bamboo-700 py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-serif mb-4 text-white">{{ title }}</h2>
      <p v-if="description" class="text-bamboo-100 mb-8">{{ description }}</p>
      <RouterLink
        :to="{ name: buttonRoute }"
        class="inline-block bg-white text-bamboo-800 px-8 py-3 rounded hover:bg-bamboo-50 transition-colors duration-200"
      >
        {{ buttonLabel }}
      </RouterLink>
    </div>
  </section>
</template>

<style scoped></style>

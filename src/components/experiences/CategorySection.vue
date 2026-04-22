<script setup>
import ExperienceCard from '@/components/experiences/ExperienceCard.vue'

defineProps({
  category: {
    type: Object,
    required: true,
  },
  experiences: {
    type: Array,
    required: true,
  },
})

defineEmits(['open'])
</script>

<template>
  <section class="mb-20">
    <div class="mb-8">
      <h2 class="text-2xl md:text-3xl font-serif mb-2">{{ category.title }}</h2>
      <p class="text-stone-600">{{ category.description }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ExperienceCard
        v-for="experience in experiences"
        :key="experience.id"
        :experience="experience"
        @open="$emit('open', $event)"
      />
    </div>
  </section>
</template>

<style scoped></style>

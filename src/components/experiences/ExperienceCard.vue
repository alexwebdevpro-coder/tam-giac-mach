<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

defineEmits(['open'])
</script>

<template>
  <article
    class="bg-white border border-stone-200 rounded-lg overflow-hidden hover:border-stone-400 transition-colors cursor-pointer"
    @click="$emit('open', experience)"
  >
    <img
      v-if="experience.image"
      :src="experience.image"
      :alt="experience.title"
      loading="lazy"
      decoding="async"
      class="w-full aspect-4/3 object-cover"
    />
    <div class="p-5">
      <h3 class="text-lg font-serif mb-2">{{ experience.title }}</h3>
      <p class="text-stone-600 text-sm mb-4 leading-relaxed">
        {{ experience.shortDescription }}
      </p>
      <div class="flex gap-3 text-xs text-stone-500">
        <span>{{ experience.duration }}</span>
        <span>·</span>
        <span>{{ experience.difficulty }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped></style>

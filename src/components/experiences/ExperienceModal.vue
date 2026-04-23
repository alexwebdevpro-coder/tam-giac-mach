<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

defineEmits(['close'])
</script>

<template>
  <div
    class="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <img
        v-if="experience.image"
        :src="experience.image"
        :alt="experience.title"
        loading="lazy"
        class="w-full aspect-video object-cover"
      />
      <div v-else class="bg-stone-200 aspect-video"></div>

      <div class="p-8">
        <div class="flex items-start justify-between mb-4">
          <h2 class="text-2xl font-serif">{{ experience.title }}</h2>
          <button
            @click="$emit('close')"
            class="text-stone-500 hover:text-stone-800 text-2xl leading-none"
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        <p class="text-stone-700 leading-relaxed mb-6">
          {{ experience.longDescription }}
        </p>

        <div class="border-t border-stone-200 pt-4 grid grid-cols-3 gap-4 text-sm">
          <div>
            <p class="text-stone-500 text-xs mb-1">Durée</p>
            <p class="text-stone-800">{{ experience.duration }}</p>
          </div>
          <div>
            <p class="text-stone-500 text-xs mb-1">Difficulté</p>
            <p class="text-stone-800">{{ experience.difficulty }}</p>
          </div>
          <div>
            <p class="text-stone-500 text-xs mb-1">Saison</p>
            <p class="text-stone-800">{{ experience.season }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

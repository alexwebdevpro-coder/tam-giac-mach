<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const element = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  )

  if (element.value) {
    observer.observe(element.value)
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div ref="element" :class="['fade-in-wrapper', { 'is-visible': isVisible }]">
    <slot />
  </div>
</template>

<style scoped>
.fade-in-wrapper {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.fade-in-wrapper.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .fade-in-wrapper {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>

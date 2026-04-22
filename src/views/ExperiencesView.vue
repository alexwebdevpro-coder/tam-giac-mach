<script setup>
import { computed, ref } from 'vue'
import CategorySection from '@/components/experiences/CategorySection.vue'
import ExperienceModal from '@/components/experiences/ExperienceModal.vue'
import { categories, experiences } from '@/data/experiences.js'
import FadeIn from '@/components/ui/FadeIn.vue'
import PageHero from '@/components/ui/PageHero.vue'
import DarkCallToAction from '@/components/ui/DarkCallToAction.vue'

const experiencesByCategory = computed(() => {
  return categories.map((category) => ({
    category,
    experiences: experiences.filter((exp) => exp.category === category.key),
  }))
})

const selectedExperience = ref(null)

function openModal(experience) {
  selectedExperience.value = experience
}

function closeModal() {
  selectedExperience.value = null
}
</script>

<template>
  <PageHero
    image="/images/general/enfant-bufle.webp"
    alt="Enfant et buffle dans la campagne vietnamienne"
    title="Vivre la région"
    subtitle="Des expériences pensées avec les habitants, au plus près du territoire."
    object-position="object-[center_58%]"
  />
  <FadeIn>
    <div class="max-w-6xl mx-auto px-4 py-20">
      <CategorySection
        v-for="group in experiencesByCategory"
        :key="group.category.key"
        :category="group.category"
        :experiences="group.experiences"
        @open="openModal"
      />
    </div>
  </FadeIn>

  <DarkCallToAction
    title="Envie d'en savoir plus ?"
    description="Toutes ces expériences sont organisées depuis la maison, avec des guides locaux."
    button-label="Nous contacter"
    button-route="contact"
  />

  <Transition name="fade">
    <ExperienceModal
      v-if="selectedExperience"
      :experience="selectedExperience"
      @close="closeModal"
    />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

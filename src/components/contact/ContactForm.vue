<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const isSubmitted = ref(false)

function handleSubmit() {
  console.log('Form submitted:', {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  })

  isSubmitted.value = true

  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}

function resetForm() {
  isSubmitted.value = false
}
</script>

<template>
  <div v-if="!isSubmitted">
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <div>
        <label for="name" class="block text-sm text-stone-700 mb-1"> Nom </label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          class="w-full border border-stone-300 rounded px-4 py-2 focus:outline-none focus:border-stone-600"
        />
      </div>

      <div>
        <label for="email" class="block text-sm text-stone-700 mb-1"> Email </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="w-full border border-stone-300 rounded px-4 py-2 focus:outline-none focus:border-stone-600"
        />
      </div>

      <div>
        <label for="subject" class="block text-sm text-stone-700 mb-1"> Sujet </label>
        <input
          id="subject"
          v-model="subject"
          type="text"
          required
          class="w-full border border-stone-300 rounded px-4 py-2 focus:outline-none focus:border-stone-600"
        />
      </div>

      <div>
        <label for="message" class="block text-sm text-stone-700 mb-1"> Message </label>
        <textarea
          id="message"
          v-model="message"
          rows="6"
          required
          class="w-full border border-stone-300 rounded px-4 py-2 focus:outline-none focus:border-stone-600 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-sage-600 text-white px-6 py-3 rounded hover:bg-sage-700"
      >
        Envoyer le message
      </button>
    </form>
  </div>

  <div v-else class="bg-stone-50 border border-stone-200 rounded-lg p-8 text-center">
    <h3 class="text-xl font-serif mb-3">Merci pour votre message</h3>
    <p class="text-stone-700 mb-6">Nous vous répondrons sous 48 heures.</p>
    <button @click="resetForm" class="text-stone-700 underline">Envoyer un autre message</button>
  </div>
</template>

<style scoped></style>

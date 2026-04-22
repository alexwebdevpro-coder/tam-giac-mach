<script setup>
import ContactForm from '@/components/contact/ContactForm.vue'
import FadeIn from '@/components/ui/FadeIn.vue'
import PageHero from '@/components/ui/PageHero.vue'
</script>

<template>
  <PageHero
    image="/images/general/viet-marche-chemin.webp"
    alt="Chemin de marché au Vietnam"
    title="Nous contacter"
    subtitle="Une question, une demande de réservation, une envie d'en savoir plus ?"
    object-position="object-[center_28%]"
  />

  <FadeIn>
    <section class="bg-driedbamboo-50 py-20 px-4">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-serif mb-6">Écrivez-nous</h2>
          <ContactForm />
        </div>

        <div>
          <h2 class="text-2xl font-serif mb-6">Informations pratiques</h2>

          <div class="space-y-6 text-stone-700">
            <div>
              <p class="text-sm text-stone-500 mb-1">Adresse</p>
              <p>Hameau de Lũng Cẩm<br />Đồng Văn, Hà Giang<br />Vietnam</p>
            </div>

            <div>
              <p class="text-sm text-stone-500 mb-1">Téléphone / WhatsApp</p>
              <p>+84 XX XXX XX XX</p>
            </div>

            <div>
              <p class="text-sm text-stone-500 mb-1">Email</p>
              <p>contact@tamgiacmach.com</p>
            </div>

            <div>
              <p class="text-sm text-stone-500 mb-1">Délai de réponse</p>
              <p>Sous 48 heures maximum</p>
            </div>

            <div class="pt-4 border-t border-stone-200">
              <p class="text-sm text-stone-500 mb-2">Comment venir</p>
              <p class="text-sm leading-relaxed">
                Depuis Hanoi : 6 à 8 heures de bus ou de voiture jusqu'à Hà Giang, puis 2 heures
                supplémentaires en direction de Đồng Văn. Nous pouvons organiser votre transport sur
                demande.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeIn>
</template>

<style scoped></style>

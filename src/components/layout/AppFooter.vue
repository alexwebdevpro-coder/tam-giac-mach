<script setup>
import { RouterLink } from 'vue-router'

const navLinks = [
  { name: 'home', label: 'Accueil' },
  { name: 'house', label: 'La maison' },
  { name: 'rooms', label: 'Chambres' },
  { name: 'experiences', label: 'Expériences' },
  { name: 'contact', label: 'Contact' },
]

const legalLinks = [
  { href: '#', label: 'Mentions légales' },
  { href: '#', label: 'Politique de confidentialité' },
  { href: '#', label: 'Crédits' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-bamboo-900 text-driedbamboo-100">
    <div class="max-w-6xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <RouterLink :to="{ name: 'home' }" class="inline-block mb-4">
            <img
              src="/images/brand/logo.svg"
              alt="Tam Giác Mạch"
              loading="lazy"
              class="h-16 w-auto"
            />
          </RouterLink>
          <p class="text-sm leading-relaxed text-driedbamboo-200">
            Maison d'hôtes au cœur des hauts plateaux de Hà Giang, dans une ancienne demeure Hmong
            rénovée avec soin.
          </p>
        </div>

        <div>
          <h3 class="font-serif text-lg mb-4 text-white">Contact</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <p class="text-driedbamboo-200">
                Hameau de Lũng Cẩm<br />Đồng Văn, Hà Giang<br />Vietnam
              </p>
            </li>
            <li>
              <a
                href="mailto:contact@tamgiacmach.com"
                class="hover:text-driedbamboo-50 transition-colors"
              >
                contact@tamgiacmach.com
              </a>
            </li>
            <li>
              <a href="tel:+84000000000" class="hover:text-driedbamboo-50 transition-colors">
                +84 XX XXX XX XX
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-lg mb-4 text-white">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in navLinks" :key="link.name">
              <RouterLink
                :to="{ name: link.name }"
                class="hover:text-driedbamboo-50 transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-lg mb-4 text-white">Mentions</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in legalLinks" :key="link.label">
              <a :href="link.href" class="hover:text-driedbamboo-50 transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-bamboo-800">
      <div
        class="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-driedbamboo-200"
      >
        <p>© {{ currentYear }} Tam Giác Mạch — Tous droits réservés.</p>
        <p>
          Site conçu par Alexis ZIRNHELT ·
          <a
            href="https://lexart-studio.fr/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-driedbamboo-50 transition-colors"
          >
            Lexart Studio
          </a>
          ·
          <a
            href="https://github.com/alexwebdevpro-coder"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-driedbamboo-50 transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>

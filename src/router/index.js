import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HouseView from '@/views/HouseView.vue'
import RoomsView from '@/views/RoomsView.vue'
import RoomDetailView from '@/views/RoomDetailView.vue'
import ExperiencesView from '@/views/ExperiencesView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/la-maison',
      name: 'house',
      component: HouseView,
    },
    {
      path: '/chambres',
      name: 'rooms',
      component: RoomsView,
    },
    {
      path: '/chambres/:slug',
      name: 'room-detail',
      component: RoomDetailView,
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ExperiencesView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router

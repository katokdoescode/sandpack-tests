import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vue',
      name: 'vue',
      component: () => import('../views/VueSandbox.vue'),
    },
    {
      path: '/react',
      name: 'react',
      component: () => import('../views/ReactSandbox.vue'),
    },
  ],
});

export default router

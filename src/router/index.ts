import { authRoutes } from '@/modules/auth/routes';
import BancoLayout from '@/modules/Banco/layout/BancoLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: { name: 'Admin' },
      component: BancoLayout,
      children: [
        {
          path: 'Admin',
          name: 'Admin',
          component: () => import('@/modules/BancoAdmin/layout/BancoList.vue'),
        },
      ],
    },
    authRoutes,
  ],
});

export default router;

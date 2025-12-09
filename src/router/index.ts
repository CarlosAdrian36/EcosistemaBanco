import { authRoute2, authRoute3, authRoutes } from '@/modules/auth/routes';
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
        {
          path: '/BancoDetalle',
          name: 'BancoDetalle',
          component: () => import('@/modules/BancoAdmin/views/BancoDetalle.vue'),
          props: true,
        },
        {
          path: 'ReactivoDetalle',
          name: 'Reactivo',
          component: () => import('@/modules/BancoAdmin/views/ReactivoDetalle.vue'),
        },
        {
          path: 'Traduccion',
          name: 'Traduccion',
          component: () => import('@/modules/BancoAdmin/views/Traduccion.vue'),
        },
      ],
    },
    authRoutes,
    authRoute2,
    authRoute3,
  ],
});

export default router;

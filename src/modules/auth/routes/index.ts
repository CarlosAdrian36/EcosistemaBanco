import type { RouteRecordRaw } from 'vue-router';
import AuthLayout from '../layout/AuthLayout.vue';

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  redirect: { name: 'login' },
  component: AuthLayout,
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/modules/auth/views/LoginView.vue'),
    },
    {
      path: 'recuperarContrasena',
      name: 'recuperarContrasena',
      component: () => import('@/modules/auth/views/RecuperarView.vue'),
    },
  ],
};

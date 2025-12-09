import type { RouteRecordRaw } from 'vue-router';
import AuthLayout from '../layout/AuthLayout.vue';
import AuthLayout2 from '../layout/AuthLayout2.vue';
import AuthLayout3 from '../layout/AuthLayout3.vue';

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
export const authRoute2: RouteRecordRaw = {
  path: '/auth2',
  name: 'auth2',
  redirect: { name: 'login2' },
  component: AuthLayout2,
  children: [
    {
      path: 'login2',
      name: 'login2',
      component: () => import('@/modules/auth/views/LoginView2.vue'),
    },
    {
      path: 'recuperarContrasena2',
      name: 'recuperarContrasena2',
      component: () => import('@/modules/auth/views/RecuperarView.vue'),
    },
  ],
};
export const authRoute3: RouteRecordRaw = {
  path: '/auth3',
  name: 'auth3',
  redirect: { name: 'login3' },
  component: AuthLayout3,
  children: [
    {
      path: 'login3',
      name: 'login3',
      component: () => import('@/modules/auth/views/login3/LoginView3.vue'),
    },
    {
      path: 'recuperarContrasena3',
      name: 'recuperarContrasena3',
      component: () => import('@/modules/auth/views/login3/RecuperarConstrasena.vue'),
    },
  ],
};

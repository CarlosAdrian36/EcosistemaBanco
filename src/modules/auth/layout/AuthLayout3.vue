<template>
  <!-- Contiene la imagen o color del fondo -->
  <div class="min-h-screen flex items-center justify-end p-4 pr-30" :style="backgroundStyle">
    <!-- Aquí se renderizan las vistas hijas (Login, Recuperar contraseña, etc.) -->
    <div
      class="relative z-10 w-full max-w-md p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl"
    >
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { RouterView } from 'vue-router';

// Puedes usar props, config o una variable reactive para cambiar el fondo
// const bgImage = '/src/assets/login/login2/gradii-1920x1080.png';
const bgImage = '/src/assets/login/logos/nx-logo.png';
// o si no quieres imagen:
// const bgColor = '#1e3a8a';
const bgColor = '#1b2274';

const backgroundStyle = computed(() => {
  return bgImage
    ? `background-image: url('${bgImage}'); background-size: cover; background-position: center; ;`
    : `background-color: ${bgColor};`;
});
</script>

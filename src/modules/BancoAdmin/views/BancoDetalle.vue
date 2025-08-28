<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Detalles del Banco {{ $route.params.id }}</h1>
    <!-- Aquí muestra la información detallada del banco -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  console.log('ID del banco:', route.params.id);
  // Aquí puedes cargar los datos específicos del banco
});
</script>

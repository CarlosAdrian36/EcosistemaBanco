<script setup lang="ts">
import FooterComponent from '../common/components/FooterComponent.vue';
import TopMenu from '../common/components/TopMenu.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="fixed top-0 left-0 w-full z-50">
      <TopMenu />
    </div>
    <main class="flex-grow pt-16 pb-6">
      <RouterView />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

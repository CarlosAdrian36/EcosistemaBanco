import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBancosStore = defineStore('Bancos', () => {
  const bancos = ref([]);

  return {
    bancos,
  };
});

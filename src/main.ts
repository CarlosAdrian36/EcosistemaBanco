import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);

app.use(router);

app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // Desactiva la recarga automática de datos cuando la ventana del navegador recupera el foco.
        staleTime: 1000 * 60 * 2, // 5 mituos los que considera los datos frescos no se haran peticiones mientras se consideren frescos los datos
      },
    },
  },
});
app.mount('#app');

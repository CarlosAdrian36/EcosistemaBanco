<template class="sin">
  <!-- Titulo y boton de crear -->
  <div class="bg-info-content h-60 flex items-center rounded-b-xl relative">
    <div class="flex flex-col sm:flex-row justify-between p-5 w-full">
      <div class="text-xl font-bold mb-4 sm:mb-0 border-base-300 text-neutral-content">
        Banco de Reactivos
      </div>
      <button @click="modalOpen = true" class="btn w-full sm:w-auto">
        Agregar Banco de Reactivos
      </button>
    </div>
  </div>

  <!-- "-------------------------------------------------------------  TARJETAS DE INFORNACION ------------------------------------------------------------" -->

  <div v-if="!isLoading" class="flex flex-wrap gap-6 justify-center -mt-14 relative z-10">
    <div class="card bg-base-200 w-80 h-44 shadow-sm">
      <div class="card-body">
        <div class="stats shadow bg-base-100">
          <div class="stat">
            <div class="stat-title">Bancos</div>
            <div class="stat-value">{{ bancos?.length }}</div>
            <div class="stat-desc">Bancos creados</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-base-200 w-80 h-44 shadow-sm">
      <div class="card-body">
        <div class="stats shadow bg-base-100">
          <div class="stat">
            <div class="stat-title">Terminado</div>
            <div class="stat-value">3</div>
            <div class="stat-desc">Bancos Revisados y listos para usar</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-base-200 shadow-sm">
      <div class="card-body">
        <div class="stats shadow bg-base-100">
          <div class="stat">
            <div class="stat-title">Construccion</div>
            <div class="stat-value">7</div>
            <div class="stat-desc">Bancos aun en revision o pendientes</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isLoading" class="flex flex-wrap gap-6 justify-center -mt-14 relative z-10">
    <div class="card bg-base-200 skeleton w-80 h-44 shadow-sm"></div>
    <div class="card bg-base-200 skeleton w-80 h-44 shadow-sm"></div>
    <div class="card bg-base-200 skeleton w-80 h-44 shadow-sm"></div>
  </div>

  <!-- Modal de Creacion de Banco -->
  <!-- <ModalCustom :open="modalOpen" /> -->

  <!-- "------------------------------------------------------------- FILTROS  ------------------------------------------------------------" -->

  <!-- Filtros de Seleccion -->
  <div class="flex flex-row justify-center mt-10">
    <form class="filter">
      <input class="btn btn-square" type="reset" value="" />
      <input class="btn" type="radio" name="frameworks" aria-label="Terminado" />
      <input class="btn" type="radio" name="frameworks" aria-label="Construccion" />
    </form>
    <!-- Busqueda -->
    <div class="ml-10">
      <label class="input w-full">
        <svg class="h-[2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input ref="searchInput" type="search" class="grow" placeholder="Search" />
        <kbd class="kbd kbd-sm">Ctrl</kbd>+
        <kbd class="kbd kbd-sm">K</kbd>
      </label>
    </div>
  </div>
  <!-- "------------------------------------------------------------- TABLA ------------------------------------------------------------" -->
  <div class="overflow-x-auto p-5 flex justify-center">
    <table class="table max-w-[1400px]">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Banco</th>
          <th>Traducción</th>
          <th>Estatus</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- Estado de carga -->
        <tr v-if="isPending">
          <td colspan="4" class="text-center py-4">
            <span class="loading loading-spinner loading-lg"></span>
            <p>Cargando bancos de reactivos...</p>
          </td>
        </tr>
        <!-- Estado de error -->
        <tr v-else-if="isError">
          <td colspan="4" class="text-center text-error py-4">
            Error al cargar los datos: {{ error?.message }}
          </td>
        </tr>
        <template v-else>
          <tr class="hover:bg-base-300" v-for="(banco, index) in bancos" :key="banco.bancoId">
            <th>{{ index + 1 }}</th>
            <td>
              <div class="break-words">
                {{ banco.nombre }}
              </div>
            </td>
            <td>
              <!-- <div class="break-words">{{ banco.lenguaje }}</div> -->
              <div class="flex flex-wrap gap-1">
                <template v-for="idioma in banco.lenguaje" :key="idioma">
                  <div
                    v-if="idiomasConfig[idioma]"
                    class="tooltip"
                    :data-tip="idiomasConfig[idioma].tooltip"
                  >
                    <img
                      :src="idiomasConfig[idioma].bandera"
                      :alt="`Bandera ${idioma}`"
                      class="w-6 h-4 object-cover"
                    />
                  </div>
                </template>
              </div>
            </td>
            <td>
              <BancoEstatus :bancoId="banco.bancoId" />
            </td>
            <th>
              <RouterLink class="btn btn-xs" :to="``"> Detalles </RouterLink>
              <div class="flex ps-4">
                <RouterLink class="btn btn-xs" :to="``"><ConfigIcon /> </RouterLink>
              </div>
            </th>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { RouterLink } from 'vue-router';
import { obtenerBancosReactivos } from '../actions/get-banco.action';
import { useQuery } from '@tanstack/vue-query';
import type { BancoReactivos } from '../interfaces/banco.interface';
import BancoEstatus from '../components/BancoEstatus.vue';
import ConfigIcon from '@/modules/common/icons/configIcon.vue';

// import ValidadoIcon from '@/modules/common/icon/validadoIcon.vue';
// import WarnIcon from '@/modules/common/icon/warnIcon.vue';
// import ModalCustom from '@/modules/common/components/ModalCustom.vue';

const modalOpen = ref(false);
// Funcionalidad para habilitar el Ctrl + k
const searchInput = ref<HTMLInputElement | null>(null);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault(); // Evita abrir búsqueda del navegador
    if (searchInput.value) {
      searchInput.value.focus();
    }
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});

// Obtener datos de los bancos
const {
  isPending,
  isLoading,
  isError,
  data: bancos,
  error,
} = useQuery<BancoReactivos[]>({
  queryKey: ['bancos-reactivos'],
  queryFn: () => obtenerBancosReactivos(),
  refetchOnWindowFocus: false,
});

//Idioma
const idiomasConfig = {
  inglés: {
    bandera: '/src/assets/banderas/estados-unidos-de-america.png',
    tooltip: 'Inglés',
  },
  francés: {
    bandera: '/src/assets/banderas/francia.png',
    tooltip: 'Francés',
  },
  // Puedes agregar más idiomas aquí
  español: {
    bandera: '/src/assets/banderas/espana.png',
    tooltip: 'Español',
  },
};
</script>
<style scoped>
.sin {
  box-sizing: border-box;
}
</style>

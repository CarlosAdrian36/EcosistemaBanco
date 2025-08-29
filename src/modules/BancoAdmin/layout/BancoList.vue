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
            <div class="stat-value">{{ 7 }}</div>
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
            <div class="stat-value">{{ 5 }}</div>
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
  <CrearbancoModal :open="modalOpen" @close="modalOpen = false" />

  <ConfigBanco :openedit="modalConfig" @close="modalConfig = false" />

  <!-- "------------------------------------------------------------- FILTROS  ------------------------------------------------------------" -->

  <!-- Filtros de Seleccion -->
  <div class="flex flex-row justify-center mt-10">
    <form class="filter">
      <input class="btn btn-square" type="reset" value="×" @click="resetFiltros" />
      <input class="btn" type="radio" name="frameworks" aria-label="Aprobado" value="Aprobado" />
      <input class="btn" type="radio" name="frameworks" aria-label="Pendiente" value="Pendiente" />
      <input class="btn" type="radio" name="frameworks" aria-label="Proceso" value="Proceso" />
      <input class="btn" type="radio" name="frameworks" aria-label="Terminado" value="Terminado" />
      <input class="btn" type="radio" name="frameworks" aria-label="Revision" value="Revision" />
      <input class="btn" type="radio" name="frameworks" aria-label="Rechazado" value="Rechazado" />
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
        <tr v-if="isLoading">
          <td colspan="4" class="text-center py-4">
            <span class="loading loading-spinner loading-lg"></span>
            <p>Cargando bancos de reactivos...</p>
          </td>
        </tr>
        <!-- Estado de error -->
        <tr v-if="isError">
          <td colspan="4" class="text-center text-error py-4">Error al cargar los datos</td>
        </tr>

        <tr
          v-for="(banco, index) in bancos"
          :key="banco.bancoId"
          class="hover:bg-base-300 cursor-pointer"
        >
          <th>{{ index }}</th>
          <td>
            <div class="break-words">{{ banco.Titulo }}</div>
          </td>
          <td>
            <!-- <div class="break-words">{{ banco.lenguaje }}</div> -->
            <div class="flex flex-wrap gap-1">
              <template v-for="idioma in banco.lenguaje" :key="idioma">
                <div
                  v-if="idioma === 2 || idioma === 3"
                  class="tooltip"
                  :data-tip="idiomaTraduccion[idioma].tooltip"
                >
                  <img :src="idiomaTraduccion[idioma].bandera" class="w-6 h-4 object-cover" />
                </div>
              </template>
            </div>
          </td>
          <td>
            <BancoEstatus :bancoId="banco.bancoId" />
          </td>
          <td>
            <button @click="modalConfig = true" class="btn btn-ghost btn-circle">
              <ConfigIcon />
            </button>
          </td>
          <td>
            <div class="avatar-group -space-x-6">
              <div class="avatar avatar-placeholder">
                <div class="bg-neutral text-neutral-content w-8 rounded-full">
                  <span class="text-xs">UI</span>
                </div>
              </div>
              <div class="avatar avatar-placeholder">
                <div class="bg-neutral text-neutral-content w-8 rounded-full">
                  <span class="text-xs">UI</span>
                </div>
              </div>
            </div>
          </td>

          <td>
            <button class="btn btn-soft btn-error btn-circle"><DeleteIcon /></button>
          </td>
          <!--  -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import CrearbancoModal from '@/modules/common/components/CrearbancoModal.vue';
import ConfigIcon from '@/modules/common/icons/configIcon.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { obtenerBancos } from '../actions';
import { useQuery } from '@tanstack/vue-query';
import BancoEstatus from '../views/BancoEstatus.vue';
import DeleteIcon from '@/modules/common/icons/deleteIcon.vue';
import ConfigBanco from '../views/ConfigBanco.vue';

const modalOpen = ref(false);
const modalConfig = ref(false);
const filtroEstado = ref('');
const terminoBusqueda = ref('');
// Funcion para acceso rapido para el buscador
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

// obtener bancos
const {
  data: bancos,
  isLoading,
  isError,
} = useQuery({
  queryKey: ['bancos'],
  queryFn: () => obtenerBancos(),
});
// banderas
const idiomaTraduccion = {
  2: {
    bandera: 'src/assets/banderas/estados-unidos-de-america.png',
    tooltip: 'Inglés',
  },
  3: {
    bandera: '/src/assets/banderas/francia.png',
    tooltip: 'Francés',
  },
};

// Función para resetear filtros
const resetFiltros = () => {
  filtroEstado.value = '';
  terminoBusqueda.value = '';
};
</script>
<style scoped>
.sin {
  box-sizing: border-box;
}
</style>

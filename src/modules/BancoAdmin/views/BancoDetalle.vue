<template>
  <div class="px-20 pt-10">
    <div class="flex flex-row">
      <div class="basis-2/3">
        <div class="flex flex-row justify-between items-center">
          <h1 class="text-5xl font-bold flex">Banco</h1>
          <div class="flex justify-end">
            <div v-if="selectedOptions.includes('opcionA')">
              <button @click="modalOpen = true" class="btn btn-soft btn-success">Editar</button>
            </div>
          </div>
          <div class="flex flex-row items-center pe-11">
            <p class="font-semibold pe-4">Idiomas</p>
            <div class="flex gap-2 w-8 h-8">
              <img src="/src/assets/banderas/estados-unidos-de-america.png" alt="" />
              <img src="/src/assets/banderas/francia.png" alt="" />
            </div>
          </div>
        </div>
        <div class="pt-4">
          <div class="text-justify">
            <h3 class="text-[24px] font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sint tempora numquam
              itaque excepturi dolorem ab error impedit. Id autem aliquid fugit optio, rerum fuga
              modi a nulla labore soluta.
            </h3>
            <p class="text-justify pt-4 text-gray-500 text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsa exercitationem
              error dolores quisquam consequatur magni soluta illo architecto repellat, autem, animi
              accusamus in. In deserunt possimus ducimus doloremque vel?
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="divider lg:divider-horizontal"></div> -->
      <div class="basis-1/3 flex content-center justify-center">
        <div class="">
          <div class="">
            <h2 class="text-3xl font-bold">Flujo de trabajo</h2>
            <div class="flex flex-col pt-8 ps-8">
              <!--  -->
              <div class="space-y-6">
                <div class="relative flex items-start">
                  <div class="flex items-center">
                    <div
                      class="flex justify-center w-8 h-8 items-center rounded-full bg-success z-10"
                    >
                      <span class="text-white font-bold">
                        <ChecksimpleIcon class="w-4 h-4" />
                      </span>
                    </div>
                    <div class="ml-4">
                      <h3 class="font-semibold text-success">Elaboración</h3>
                    </div>
                    <div class="absolute top-9 left-4 w-0.5 h-4 bg-gray-300 z-10"></div>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center">
                    <div
                      class="flex justify-center w-8 h-8 items-center rounded-full bg-success z-10"
                    >
                      <span class="text-white font-bold">
                        <ChecksimpleIcon class="w-4 h-4" />
                      </span>
                    </div>
                    <div class="ml-4">
                      <h3 class="font-semibold text-success">Revisión</h3>
                    </div>
                    <div class="absolute top-9 left-4 w-0.5 h-4 bg-gray-300 z-10"></div>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center">
                    <div
                      class="flex justify-center w-8 h-8 items-center rounded-full bg-neutral z-10"
                    >
                      <span class="text-white font-bold"> 3 </span>
                    </div>
                    <div class="ml-4">
                      <h3 class="font-semibold">Traducción</h3>
                      <span class=""></span>
                    </div>
                    <div class="absolute top-9 left-4 w-0.5 h-4 bg-gray-300 z-10"></div>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center">
                    <div
                      class="flex justify-center w-8 h-8 items-center rounded-full bg-base-300 z-10"
                    >
                      <span class="text-gray-500 font-bold"> 4 </span>
                    </div>
                    <div class="ml-4">
                      <h3 class="font-semibold">Revisión</h3>
                    </div>
                    <div class="absolute top-9 left-4 w-0.5 h-4 bg-gray-300 z-10"></div>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center">
                    <div
                      class="flex justify-center w-8 h-8 items-center rounded-full bg-base-300 z-10"
                    >
                      <span class="text-gray-500 font-bold"> 5 </span>
                    </div>
                    <div class="ml-4">
                      <h3 class="font-semibold">Terminado</h3>
                    </div>
                  </div>
                </div>
              </div>

              <!--  -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between pt-4">
      <div class="avatar-group -space-x-6" v-if="selectedOptions.includes('opcionA')">
        <button @click="Miembrosopen = true" class="btn btn-soft btn-info">Miembros</button>
      </div>
      <div v-if="selectedOptions.includes('opcionC')">
        <button @click="Agregaropen = true" class="btn btn-soft btn-warning">
          Agregar observacion
        </button>
      </div>
      <div v-if="selectedOptions.includes('opcionB') || selectedOptions.includes('opcionD')">
        <button @click="SolicituddOpen = true" class="btn btn-soft btn-warning">
          Solicitar Revision
        </button>
      </div>
    </div>
  </div>

  <div class="divider"></div>
  <ConfirmacionDeSolicitud :open="SolicituddOpen" @close="SolicituddOpen = false" />
  <CrearbancoModal :open="modalOpen" @close="modalOpen = false" :traduccion="true" />
  <BancoMiembros :open="Miembrosopen" @close="Miembrosopen = false" />
  <AgregarReactivo :open="Agregaropen" @close="Agregaropen = false" />
  <div class="">
    <div class="px-10 py-5">
      <div v-if="selectedOptions.includes('opcionB')"></div>
      <div class="collapse collapse-plus bg-base-300 border-base-300 border">
        <input type="checkbox" />
        <div class="collapse-title font-semibold flex justify-center">Crear Reactivo</div>
        <div class="collapse-content text-sm">
          <div class="flex">
            <div class="p-6">{{ data?.length ?? 0 }}.-</div>
            <div class="w-full">
              <textarea
                @input="handleResize"
                class="textarea w-full"
                placeholder="Pregunta"
              ></textarea>

              <div class="grid grid-cols-[4rem_auto_4rem] pt-7">
                <div class="flex justify-center items-center">
                  <input type="checkbox" class="checkbox checkbox-success" />
                </div>
                <div class="">
                  <div class="form-control">
                    <textarea
                      @input="handleResize"
                      class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                      placeholder="Opcion 1"
                      :rows="1"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-[4rem_auto_4rem] pt-7">
                <div class="flex justify-center items-center">
                  <input type="checkbox" class="checkbox checkbox-success" />
                </div>
                <div class="">
                  <div class="form-control">
                    <textarea
                      @input="handleResize"
                      class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                      placeholder="Opcion 2"
                      :rows="1"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-[4rem_auto_4rem] pt-7">
                <div class="flex justify-center items-center">
                  <input type="checkbox" class="checkbox checkbox-success" />
                </div>
                <div class="">
                  <div class="form-control">
                    <textarea
                      @input="handleResize"
                      class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                      placeholder="Opcion 3"
                      :rows="1"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-[4rem_auto_4rem] pt-7">
                <div class="flex justify-center items-center">
                  <input type="checkbox" class="checkbox checkbox-success" />
                </div>
                <div class="">
                  <div class="form-control">
                    <textarea
                      @input="handleResize"
                      class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                      placeholder="Opcion 4"
                      :rows="1"
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- nuevo -->
            </div>
          </div>
          <div class="flex justify-end pt-4 gap-4">
            <div class="flex w-2xs gap-4">
              <select class="select select-sm">
                <option disabled selected>Etapa</option>
                <option>E1</option>
                <option>E2</option>
                <option>E3</option>
              </select>
              <select class="select select-sm">
                <option disabled selected>Nivel Cognitivo</option>
                <option>Nivel 1</option>
                <option>Nivel 2</option>
                <option>Nivel 3</option>
              </select>
            </div>
            <button class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-[4rem_auto_4rem] justify-stretch ...">
        <div></div>
        <div><h1 class="text-5xl font-bold flex justify-center p-4">Reactivos</h1></div>
      </div>
      <!-- <BaseModal :open="flujoOpen" @close="flujoOpen = false" /> -->
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="lg:w-2/3 flex flex-col gap-6">
          <div class="card rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
            <div class="relative w-full md:w-1/2">
              <label class="input">
                <SearchIcon />
                <input type="search" class="grow" placeholder="Buscar Reactivo ..." />
                <kbd class="kbd kbd-sm">Ctrl</kbd>+
                <kbd class="kbd kbd-sm">K</kbd>
              </label>
            </div>
            <div class="relative w-full md:w-1/4">
              <select class="select">
                <option disabled selected>Filtrar por estatus</option>
                <option>Terminado</option>
                <option>Reviision</option>
                <option>Rechazado</option>
              </select>
            </div>
            <div class="relative w-full md:w-1/4">
              <select class="select">
                <option disabled selected>Ordenar por</option>
                <option>Fecha (Asc)</option>
                <option>Fecha (Desc)</option>
                <option>Estatus</option>
              </select>
            </div>
          </div>
          <div class="card rounded-lg shadow-md overflow-x-auto flex-grow">
            <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
              <table class="table w-full" ref="tableRef">
                <thead>
                  <tr>
                    <th class="bg-base-200">#</th>
                    <td class="bg-base-200">Reactivo</td>
                    <td class="bg-base-200">Estatus</td>
                    <td class="bg-base-200 w-40">Traducción</td>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(reactivo, index) in data"
                    :key="reactivo.ReactivoId"
                    class="cursor-pointer hover:bg-base-300"
                    :class="[
                      'transition-all duration-300 ease-in-out cursor-pointer',
                      selectedIndex === index
                        ? 'relative -translate-y-2 shadow-xl bg-base-300 rounded-lg z-10 scale-[1.01] '
                        : 'bg-transparent',
                    ]"
                    @click="handleReactivoClick(reactivo, index)"
                  >
                    <th>{{ index + 1 }}</th>
                    <td class="max-w-md truncate overflow-hidden whitespace-nowrap">
                      {{ reactivo.Reactivo }}
                    </td>
                    <td>
                      <div class="badge gap-1" :class="getEstatus(reactivo.estatus)">
                        <component :is="estatusIcon(reactivo.estatus)" class="w-4 h-4" />
                        {{ reactivo.estatus }}
                      </div>
                    </td>
                    <td class="w-40">
                      <div class="flex items-center gap-2">
                        <progress
                          class="progress [&::-webkit-progress-value]:bg-[#4B0082] [&::-moz-progress-bar]:bg-[#4B0082]"
                          value="40"
                          max="100"
                        ></progress>
                        <div class="font-semibold">65%</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="lg:w-1/3 flex flex-col gap-4 rounded-lg">
          <div
            class="card-body bg-base-200 shadow-lg sticky top-[4rem] flex flex-col gap-4 card rounded-lg max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div v-if="!selectedReactivo" class="text-center text-gray-500">
              <h2 class="card-title justify-center">
                Seleccione un reactivo para ver sus detalles
              </h2>
              <!-- Seleccione un reactivo para ver sus detalles -->
            </div>
            <div v-else>
              <div class="flex justify-between items-center mb-4">
                <h2 class="card-title text-2xl">Reactivo</h2>
                <div class="flex justify-end">
                  <div class="badge gap-1" :class="getEstatus(selectedReactivo.estatus)">
                    <component :is="estatusIcon(selectedReactivo.estatus)" class="w-4 h-4" />
                    {{ selectedReactivo.estatus }}
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div>
                  <!-- <h3 class="font-semibold mb-2">Pregunta:</h3> -->
                  <p class="text-justify">{{ selectedReactivo.Reactivo }}</p>
                  <div class="pt-3">
                    <div class="ps-5">
                      <div class="pt-1 flex">
                        <span class="rounded-md px-2 flex">
                          1) <span class="ps-2">psicológico</span></span
                        >
                      </div>
                      <div class="pt-1 flex">
                        <span class="bg-[#2ECC71] rounded-md px-2 flex">
                          2) <span class="ps-2">Actual</span></span
                        >
                      </div>
                      <div class="pt-1 flex">
                        <span class="rounded-md px-2 flex">
                          3) <span class="ps-2">anisocronía</span></span
                        >
                      </div>
                      <div class="pt-1">
                        <span class="rounded-md px-2 flex">
                          4)
                          <span class="ps-2"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                            temporibus? Magnam, facilis in ut explicabo sint ex numquam saepe? Earum
                            laborum repudiandae deserunt velit nisi eligendi ipsam! Maiores,
                            officiis in.</span
                          ></span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 pt-3">
                  <BookmarkIcon /> Etapa: <span class="font-semibold">3</span>
                </div>
                <div class="flex items-center gap-2">
                  <BrainIcon /> Nivel Cognitivo: <span class="font-semibold">Nivel 1</span>
                </div>

                <!-- Añade más detalles según la estructura de tus datos -->

                <div classs="pt-10">
                  <div class="pt-7">
                    <h3 class="font-semibold mb-2">Progreso de Traducción:</h3>
                    <div class="flex justify-between items-center">
                      <div class="font-semibold">Ingles</div>
                      <div class="font-medium">50%</div>
                    </div>
                    <progress
                      class="progress [&::-webkit-progress-value]:bg-[#E81224] [&::-moz-progress-bar]:bg-[#E81224] w-full"
                      value="50"
                      max="100"
                    ></progress>
                    <div class="flex justify-between items-center">
                      <div class="font-semibold">Frances</div>
                      <div class="font-medium">80%</div>
                    </div>
                    <progress
                      class="progress [&::-webkit-progress-value]:bg-[#01007C] [&::-moz-progress-bar]:bg-[#01007C] w-full"
                      value="80"
                      max="100"
                    ></progress>
                  </div>
                </div>
              </div>
              <div class="justify-end card-actions mt-9">
                <button class="btn btn-primary w-16">Editar</button>
                <button class="btn text-white bg-[#F44336] w-z">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div></div>
</template>
<script lang="ts" setup>
import BancoMiembros from './components/BancoMiembros.vue';
import AgregarReactivo from './components/AgregarReactivo.vue';
import { useReactivosQuery } from '../composables/useListReactivos';
import { onMounted, onUnmounted, ref } from 'vue';
import ClockIcon from '@/modules/common/icons/iconsEstatus/clockIcon.vue';
import ArrowPathIcon from '@/modules/common/icons/iconsEstatus/arrowPathIcon.vue';
import CheckCircleIcon from '@/modules/common/icons/iconsEstatus/CheckCircleIcon.vue';
import ShieldCheckIcon from '@/modules/common/icons/iconsEstatus/shieldCheckIcon.vue';
import XCircleIcon from '@/modules/common/icons/iconsEstatus/xCircleIcon.vue';
import EyeIcon from '@/modules/common/icons/iconsEstatus/eyeIcon.vue';
import QuestionMarkCircleIcon from '@/modules/common/icons/iconsEstatus/questionMarkCircleIcon.vue';
import CrearbancoModal from '@/modules/common/components/CrearbancoModal.vue';
import ConfirmacionDeSolicitud from './components/ConfirmacionDeSolicitud.vue';

import SearchIcon from '@/modules/common/icons/searchIcon.vue';
import type { Reactivos } from '../interfaces/reactivos.interface';
import BookmarkIcon from '@/modules/common/icons/bookmarkIcon.vue';
import BrainIcon from '@/modules/common/icons/brainIcon.vue';
import InfoIcon from '@/modules/common/icons/infoIcon.vue';
import BaseModal from '@/modules/common/components/BaseModal.vue';
import ChecksimpleIcon from '@/modules/common/icons/checksimpleIcon.vue';

const flujoOpen = ref(false);
const SolicituddOpen = ref(false);

const tableRef = ref<HTMLElement | null>(null);
const selectedReactivo = ref<Reactivos | null>(null);
const selectedIndex = ref<number>(0);

const scrollToSelected = () => {
  if (!tableRef.value) return;

  const selectedRow = tableRef.value.querySelector(`tr:nth-child(${selectedIndex.value + 1})`);
  if (selectedRow) {
    selectedRow.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }
};
const handleKeyDown = (event: KeyboardEvent) => {
  if (!data.value?.length) return;

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      if (selectedIndex.value > 0) {
        selectedIndex.value--;
        handleReactivoClick(data.value[selectedIndex.value]);
        scrollToSelected();
      }
      break;
    case 'ArrowDown':
      event.preventDefault();
      if (selectedIndex.value < data.value.length - 1) {
        selectedIndex.value++;
        handleReactivoClick(data.value[selectedIndex.value]);
        scrollToSelected();
      }
      break;
  }
};

// Funciion para el click
const handleReactivoClick = (reactivo: Reactivos, index?: number) => {
  selectedReactivo.value = reactivo;
  if (index !== undefined) {
    selectedIndex.value = index;
  }
};
// Añadir onMounted para el event listener
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

// Añadir onUnmounted para limpiar el event listener
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

const deleteOpen = ref(false);

const modalOpen = ref(false);
const Miembrosopen = ref(false);
const Agregaropen = ref(false);

const { data } = useReactivosQuery();

const handleResize = (event: { target: any }) => {
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};
const getEstatus = (estatus: string) => {
  console.log(estatus);
  if (!estatus) return 'badge-ghost';

  switch (estatus) {
    case 'Pendiente':
      return 'badge ';
    case 'En proceso':
      return 'badge-info   min-w-[111px]';
    case 'Terminado':
      return 'badge-success min-w-[111px]';
    case 'Aprobado':
      return 'badge-accent   min-w-[111px]';
    case 'Rechazado':
      return 'badge-error    min-w-[111px]';
    case 'Revision':
      return 'badge-warning  min-w-[111px]';
    default:
      return 'badge-ghost';
  }
};
const estatusIcon = (estatus: string) => {
  if (!estatus) return 'div';

  switch (estatus) {
    case 'Pendiente':
      return ClockIcon;
    case 'En proceso':
      return ArrowPathIcon;
    case 'Terminado':
      return CheckCircleIcon;
    case 'Aprobado':
      return ShieldCheckIcon;
    case 'Rechazado':
      return XCircleIcon;
    case 'Revision':
      return EyeIcon;
    default:
      return QuestionMarkCircleIcon;
  }
};

type OpcionType = 'opcionA' | 'opcionB' | 'opcionC' | 'opcionD';
const selectedOptions = ref<OpcionType[]>([]);

const expandedReactivo = ref<number | null>(null);

const toggleReactivo = (index: number) => {
  expandedReactivo.value = expandedReactivo.value === index ? null : index;
};
</script>

<template>
  <div class="">
    <div class="px-20 pt-10">
      <h1 class="text-5xl font-bold flex justify-center p-4">Banco</h1>
      <div class="flex justify-end">
        <button @click="modalOpen = true" class="btn btn-soft btn-success">Editar</button>
      </div>
      <div class="card bg-base-300 shadow-lg card-sm">
        <div class="card-body text-justify">
          <h3 class="card-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sint tempora numquam
            itaque excepturi dolorem ab error impedit. Id autem aliquid fugit optio, rerum fuga modi
            a nulla labore soluta.
          </h3>
          <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsa exercitationem
            error dolores quisquam consequatur magni soluta illo architecto repellat, autem, animi
            accusamus in. In deserunt possimus ducimus doloremque vel?
          </p>
        </div>
      </div>
      <div class="flex justify-between pt-4">
        <div class="avatar-group -space-x-6">
          <button @click="Miembrosopen = true" class="btn btn-soft btn-info">Miembros</button>
        </div>
        <button @click="Agregaropen = true" class="btn btn-soft btn-warning">
          Agregar observacion
        </button>
      </div>
    </div>
  </div>
  <div class="divider"></div>
  <CrearbancoModal :open="modalOpen" @close="modalOpen = false" :traduccion="true" />
  <BancoMiembros :open="Miembrosopen" @close="Miembrosopen = false" />
  <AgregarReactivo :open="Agregaropen" @close="Agregaropen = false" />
  <div class="">
    <div class="px-30 py-5">
      <div class="collapse collapse-plus bg-neutral-content border-base-300 border">
        <input type="checkbox" />
        <div class="collapse-title font-semibold flex justify-center">Crear Reactivo</div>
        <div class="collapse-content text-sm">
          <div class="flex">
            <div class="p-6">{{ data?.length + 1 }}.-</div>
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
            <button class="btn btn-primary">Aceptar</button>
          </div>
        </div>
      </div>
      <h1 class="text-5xl font-bold flex justify-center p-4">Reactivos</h1>

      <div class="overflow-x-auto">
        <table class="table table-pin-cols">
          <!-- head -->
          <thead>
            <tr>
              <th class="sticky top-0 bg-base-200 z-100">#</th>
              <th class="sticky top-0 bg-base-200 z-50">Reactivo</th>
              <th class="sticky top-0 bg-base-200 z-50">Estatus</th>
              <th class="sticky top-0 bg-base-200 z-50">Traduccion</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr
              v-for="(reactivo, index) in data"
              :key="reactivo.ReactivoId"
              class="hover:bg-base-300 cursor-pointer"
            >
              <th>{{ index + 1 }}</th>
              <td>{{ reactivo.Reactivo }}</td>
              <td>
                <div class="badge gap-1" :class="getEstatus(reactivo.estatus)">
                  <component :is="estatusIcon(reactivo.estatus)" class="w-4 h-4" />
                  {{ reactivo.estatus }}
                </div>
              </td>
              <td>
                <div class="flex items-center">
                  <img
                    src="/src/assets//banderas/francia.png"
                    class="w-6 h-4 object-cover"
                    alt=""
                  />
                  <div class="ps-2">
                    <progress class="progress progress-primary w-56" value="4" max="100"></progress>
                  </div>
                </div>
                <div class="flex items-center">
                  <img
                    src="/src/assets//banderas/estados-unidos-de-america.png"
                    class="w-6 h-4 object-cover"
                    alt=""
                  />
                  <div class="ps-2">
                    <progress
                      class="progress progress-primary w-56"
                      value="88"
                      max="100"
                    ></progress>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BancoMiembros from './components/BancoMiembros.vue';
import AgregarReactivo from './components/AgregarReactivo.vue';
import { useReactivosQuery } from '../composables/useListReactivos';
import { ref } from 'vue';
import ClockIcon from '@/modules/common/icons/iconsEstatus/clockIcon.vue';
import ArrowPathIcon from '@/modules/common/icons/iconsEstatus/arrowPathIcon.vue';
import CheckCircleIcon from '@/modules/common/icons/iconsEstatus/CheckCircleIcon.vue';
import ShieldCheckIcon from '@/modules/common/icons/iconsEstatus/shieldCheckIcon.vue';
import XCircleIcon from '@/modules/common/icons/iconsEstatus/xCircleIcon.vue';
import EyeIcon from '@/modules/common/icons/iconsEstatus/eyeIcon.vue';
import QuestionMarkCircleIcon from '@/modules/common/icons/iconsEstatus/questionMarkCircleIcon.vue';
import CrearbancoModal from '@/modules/common/components/CrearbancoModal.vue';

const modalOpen = ref(false);

const Miembrosopen = ref(false);
const Agregaropen = ref(false);

const { data } = useReactivosQuery();

const handleResize = (event) => {
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
    case 'Proceso':
      return 'badge-info  ';
    case 'Terminado':
      return 'badge-success min-w-[111px]';
    case 'Aprobado':
      return 'badge-accent min-w-[111px]';
    case 'Rechazado':
      return 'badge-error min-w-[111px]';
    case 'Revision':
      return 'badge-warning ';
    default:
      return 'badge-ghost';
  }
};
const estatusIcon = (estatus: string) => {
  if (!estatus) return 'div';

  switch (estatus) {
    case 'Pendiente':
      return ClockIcon;
    case 'Proceso':
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
      console.log(data.value.estatus, '#');
      return QuestionMarkCircleIcon;
  }
};
</script>

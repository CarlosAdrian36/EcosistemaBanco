<template>
  <div class="">
    <div class="px-20 pt-10">
      <div class="flex justify-end gap-5">
        <!-- <button class="btn btn-soft btn-info"><MembersIcon /></button> -->
        <button class="btn btn-soft btn-success"><EditIcon /></button>
      </div>
      <div class="card bg-base-300 shadow-lg card-sm">
        <div class="card-body items-center text-center">
          <h3 class="card-title">
            Bamo : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sint tempora
            numquam itaque excepturi dolorem ab error impedit. Id autem aliquid fugit optio, rerum
            fuga modi a nulla labore soluta.
          </h3>
          <p>
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
        <button @click="Agregaropen = true" class="btn btn-soft btn-primary">
          Agregar Reactivo
        </button>
      </div>
    </div>
  </div>
  <BancoMiembros :open="Miembrosopen" @close="Miembrosopen = false" />
  <AgregarReactivo :open="Agregaropen" @close="Agregaropen = false" />
  <div class="">
    <div class="px-30 py-5">
      <div class="collapse bg-base-200 border-base-300 border">
        <input type="checkbox" />
        <div class="collapse-title font-semibold flex justify-center">Crear Reactivo</div>
        <div class="collapse-content text-sm">
          <div class="flex">
            <div class="p-6">{{ data?.length + 1 }}.-</div>
            <div class="w-full">
              <textarea class="textarea w-full" placeholder="Pregunta"></textarea>
              <div class="grid grid-cols-[4rem_auto_4rem] pt-7">
                <div class="flex justify-center items-center">
                  <input type="checkbox" class="checkbox checkbox-success" />
                </div>
                <div class="form-control mt-4">
                  <label class="label">
                    <!-- <span class="label-text">Respuesta 1</span> -->
                  </label>
                  <textarea
                    @input="handleResize"
                    class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                    placeholder="Opcion 1"
                    :rows="1"
                  ></textarea>
                </div>
              </div>
              <div class="grid grid-cols-[4rem_auto_4rem] pt-7">
                <div class="flex justify-center items-center">
                  <input type="checkbox" class="checkbox checkbox-success" />
                </div>
                <div>
                  <textarea
                    @input="handleResize"
                    class="textarea textarea-bordered w-84 resize-none overflow-hidden min-h-[1rem]"
                    placeholder="Opcion 1"
                    :rows="1"
                  ></textarea>
                </div>
              </div>
              <div class="grid grid-cols-[4rem_auto_4rem] pt-7">
                <div class="flex justify-center items-center">
                  <input type="checkbox" class="checkbox checkbox-success" />
                </div>
                <div>
                  <input type="text" placeholder="Opcion1" class="input input-sm" />
                </div>
              </div>
              <div class="grid grid-cols-[4rem_auto_4rem] pt-7">
                <div class="flex justify-center items-center">
                  <input type="checkbox" class="checkbox checkbox-success" />
                </div>
                <div>
                  <input type="text" placeholder="Opcion1" class="input input-sm" />
                </div>
              </div>
              <div class="pt-6flex"></div>
            </div>
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
              <td>{{ reactivo.estatus }}</td>
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
import EditIcon from '@/modules/common/icons/editIcon.vue';
import { ref } from 'vue';
import BancoMiembros from './components/BancoMiembros.vue';
import AgregarReactivo from './components/AgregarReactivo.vue';
import { useReactivosQuery } from '../composables/useListReactivos';

const Miembrosopen = ref(false);
const Agregaropen = ref(false);

const { data } = useReactivosQuery();

const handleResize = (event) => {
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};
</script>

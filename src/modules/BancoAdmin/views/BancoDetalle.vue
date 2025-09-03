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
          <!-- <div class="avatar">
            <div class="w-12 rounded-xl">
              <img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div> -->
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
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
                    <progress class="progress progress-primary w-56" value="4" max="100"></progress>
                  </div>
                </div>
              </td>
            </tr>
            <!-- row 2 -->
            <tr class="hover:bg-base-300 cursor-pointer">
              <th>2</th>
              <td>
                <p class="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officiis qui
                  atque nostrum nesciunt nam voluptas delectus velit excepturi! Tenetur omnis quasi
                  quos, possimus aliquid numquam adipisci itaque temporibus facere! Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Perspiciatis reiciendis sit sunt
                  voluptatum quod. Repellendus, eum totam. Eum animi, odit cumque fuga at iusto
                  dolorem eaque voluptates itaque ad. Molestiae. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Nesciunt at id iusto impedit esse laboriosam
                  asperiores dolorum inventore natus quod dolorem doloribus autem consectetur
                  molestiae, est consequatur voluptatibus, quaerat alias.
                </p>
              </td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>

            <tr>
              <th>9</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>11</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>12</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>13</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>14</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>15</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>16</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
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

const Miembrosopen = ref(false);
const Agregaropen = ref(false);
</script>

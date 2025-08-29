<template>
  <div class="">
    <div class="px-20 pt-10">
      <div class="flex justify-end gap-5">
        <button class="btn btn-soft btn-info"><MembersIcon /></button>
        <button class="btn btn-soft btn-success"><EditIcon /></button>
      </div>
      <div class="card bg-base-300 shadow-lg">
        <div class="card-body">
          <h3 class="card-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sint tempora numquam
            itaque excepturi dolorem ab error impedit. Id autem aliquid fugit optio, rerum fuga modi
            a nulla labore soluta.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsa exercitationem
            error dolores quisquam consequatur magni soluta illo architecto repellat, autem, animi
            accusamus in. In deserunt possimus ducimus doloremque vel?
          </p>
        </div>
      </div>
      <div class="flex justify-end pt-4">
        <button class="btn btn-soft btn-primary">Agregar Reactivo</button>
      </div>
    </div>
  </div>
  <div class="">
    <div class="px-30 py-5">
      <h1 class="text-5xl font-bold flex justify-center p-4">Reactivos</h1>

      <div class="overflow-x-auto">
        <table class="table table-pin-cols">
          <!-- head -->
          <thead>
            <tr>
              <th class="sticky top-0 bg-base-200 z-50">#</th>
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
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover:bg-base-300 cursor-pointer">
              <th>2</th>
              <td>Hart Hagerty</td>
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
              <th>8</th>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium,
                totam numquam aliquid culpa deleniti doloremque. Ipsam similique, ex aperiam et, ea
                labore sapiente rem accusamus corrupti officiis eum modi. Swyre Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Labore quisquam vel cum nulla non quae,
                veritatis deserunt ullam dolores hic optio! Iste eius dolorum minus quod accusamus
                blanditiis quo. Non? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores error esse unde velit consequatur dignissimos, deleniti tempore veritatis
                officiis? Temporibus odio enim, dolorem veritatis ex consequatur ducimus
                perspiciatis fuga esse. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente harum itaque illo repellat, laborum porro optio deserunt officiis delectus
                voluptates enim, natus explicabo odit voluptatum ipsam, exercitationem et saepe
                minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate
                in iure laborum est autem ab nesciunt magnam, repellat dignissimos assumenda,
                aliquid quos ut beatae doloremque nulla officiis facilis minus. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Dolores, itaque dignissimos rerum impedit
                odio inventore sit quos aspernatur magnam, nesciunt officia voluptatum enim suscipit
                tenetur, corrupti eaque doloremque amet? Inventore. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cum laudantium ipsa saepe omnis excepturi nesciunt!
                Obcaecati nam inventore esse ducimus corporis, aperiam, maxime animi repellendus
                quas porro molestias ratione nisi! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Aspernatur aliquam quod mollitia eos hic quaerat quos nisi cumque
                perspiciatis sed. Repellat officia voluptatum, illum placeat sapiente voluptatibus.
                Repellat, atque velit.
              </td>
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

  <div class="border-4">
    <div class="px-20 pt-12">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae illo, culpa, modi
      corrupti ducimus facere molestiae itaque minima veniam voluptatem, officiis eveniet. Iure
      harum voluptate asperiores nulla ea pariatur iste.
    </div>
  </div>
  <div class="h-80"></div>
</template>
<script lang="ts" setup>
import EditIcon from '@/modules/common/icons/editIcon.vue';
import MembersIcon from '@/modules/common/icons/membersIcon.vue';
</script>

<script setup lang="ts">
import CheckBlackIcon from '@/modules/common/icons/checkBlackIcon.vue';
import ConfigIcon from '@/modules/common/icons/configIcon.vue';
import DeleteIcon from '@/modules/common/icons/deleteIcon.vue';
import DocumenIcon from '@/modules/common/icons/documenIcon.vue';
import WrenchIcon from '@/modules/common/icons/wrenchIcon.vue';
import SearchIcon from '@/modules/common/icons/searchIcon.vue';
import XCricle from '@/modules/common/icons/xCricle.vue';
import CheckIcon from '@/modules/common/icons/checkIcon.vue';
</script>

<template>
  <main class="container mx-auto px-6 py-8">
    <!-- Las 3 tarjetas -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="card rounded-lg shadow-md p-6 flex space-x-4 bg-base-100">
        <div class="flex">
          <div class="bg-blue-100 p-3 rounded-full flex items-center">
            <span class="text-blue-500 text-3xl">
              <DocumenIcon class="w-10 h-10" />
            </span>
          </div>
          <div class="ps-5">
            <p class="text-sm text-gray-500">Bancos</p>
            <p class="text-3xl font-bold">16</p>
            <p class="text-xs text-gray-500">Bancos Creados</p>
          </div>
        </div>
      </div>
      <div class="card rounded-lg shadow-md p-6 flex space-x-4 bg-base-100">
        <div class="flex">
          <div class="bg-green-100 p-3 rounded-full flex items-center">
            <span class="text-success text-3xl">
              <CheckBlackIcon class="w-10 h-10" />
            </span>
          </div>
          <div class="ps-5">
            <p class="text-sm text-gray-500">Bancos</p>
            <p class="text-3xl font-bold">3</p>
            <p class="text-xs text-gray-500">Bancos Terminados</p>
          </div>
        </div>
      </div>
      <div class="card rounded-lg shadow-md p-6 flex space-x-4 bg-base-100">
        <div class="flex">
          <div class="bg-yellow-100 p-3 rounded-full flex items-center">
            <span class="text-warning text-3xl">
              <WrenchIcon class="w-10 h-10" />
            </span>
          </div>
          <div class="ps-5">
            <p class="text-sm text-gray-500">Bancos</p>
            <p class="text-3xl font-bold">13</p>
            <p class="text-xs text-gray-500">Bancos En Construccion</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="card p-4 rounded-lg shadow-md mb-6 bg-base-100">
      <div class="flex flex-row gap-6">
        <div class="basis-full">
          <form class="filter flex space-x-2 p-4">
            <input class="btn btn-square" type="reset" value="×" />
            <input class="btn" type="radio" name="frameworks" aria-label="Elaboracion" />
            <input class="btn" type="radio" name="frameworks" aria-label="Revision" />
            <input class="btn" type="radio" name="frameworks" aria-label="Traduccion" />
            <input class="btn" type="radio" name="frameworks" aria-label="Terminado" />
          </form>
        </div>
        <div class="basis-full flex items-center justify-center">
          <button class="btn btn-wide">Crear Banco de reactivos</button>
        </div>
        <div class="basis-full flex items-center justify-center">
          <button class="btn w-[307px] btn-outline flex justify-between mt-2">
            <div class="flex justify-between">
              <div class="flex text-sm"><SearchIcon /> Buscar...</div>
            </div>
            <div>
              <kbd class="kbd"> Ctrl </kbd> +
              <kbd class="kbd"> K </kbd>
            </div>
          </button>
        </div>
      </div>
    </div> -->
    <div class="card p-4 rounded-lg shadow-md mb-6 bg-base-100">
      <div class="flex flex-col gap-4 md:flex-row md:gap-6 md:items-center">
        <!-- Filtros -->
        <div class="w-full md:flex-1">
          <form class="filter flex flex-wrap gap-2 p-4 md:flex-nowrap md:space-x-2 md:gap-0">
            <input class="btn btn-square" type="reset" value="×" />
            <input class="btn" type="radio" name="frameworks" aria-label="Elaboracion" />
            <input class="btn" type="radio" name="frameworks" aria-label="Revision" />
            <input class="btn" type="radio" name="frameworks" aria-label="Traduccion" />
            <input class="btn" type="radio" name="frameworks" aria-label="Terminado" />
          </form>
        </div>

        <!-- Crear -->
        <div class="w-full md:flex-1 flex items-center justify-center">
          <button class="btn w-full md:btn-wide">Crear Banco de reactivos</button>
        </div>

        <!-- Buscar -->
        <div class="w-full md:flex-1 flex items-center justify-center">
          <button class="btn w-full md:w-[307px] btn-outline flex justify-between">
            <div class="flex text-sm items-center gap-2">
              <SearchIcon />
              <span>Buscar...</span>
            </div>
            <div class="hidden sm:block">
              <kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">K</kbd>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="card ronuded-lg shadow-md p-6 flex flex-col justify-between bg-base-100">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-semibold text-gray-500">#1</span>
          <span class="badge badge-soft badge-error">
            <div class="flex">
              <XCricle class="" />
              <span class="ms-2">Rechazado</span>
            </div>
          </span>
        </div>
        <h3 class="text-lg font-bold mb-2">Matemáticas 1</h3>
        <div class="flex space-x-2 mb-4">
          <span class="flex items-center space-x-2 mb-4">Traduccion:</span>

          <img class="w-5 h-5" src="/src/assets/banderas/estados-unidos-de-america.png" alt="" />
          <img class="w-5 h-5" src="/src/assets/banderas/francia.png" alt="" />
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-error w-40px"><DeleteIcon /></button>
          <button class="btn btn-primary"><ConfigIcon /></button>
        </div>
      </div>
      <div class="card rounded-lg shadow-md p-6 flex flex-col justify-between bg-base-100">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-semibold text-gray-500">#2</span>
          <span class="badge badge-soft badge-success">
            <div class="flex">
              <CheckIcon class="" />
              <span class="ms-2">Terminado</span>
            </div>
          </span>
        </div>
        <h3 class="text-lg font-bold mb-2">Matemáticas 1</h3>
        <div class="flex space-x-2 mb-4">
          <span class="flex items-center space-x-2 mb-4">Traduccion:</span>

          <img class="w-5 h-5" src="/src/assets/banderas/estados-unidos-de-america.png" alt="" />
          <img class="w-5 h-5" src="/src/assets/banderas/francia.png" alt="" />
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-error w-40px"><DeleteIcon /></button>
          <button class="btn btn-primary"><ConfigIcon /></button>
        </div>
      </div>
      <div class="card rounded-lg shadow-md p-6 flex flex-col justify-between bg-base-100">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-semibold text-gray-500">#3</span>
          <span class="badge badge-soft badge-success">
            <div class="flex">
              <CheckIcon class="" />
              <span class="ms-2">Terminado</span>
            </div>
          </span>
        </div>
        <h3 class="text-lg font-bold mb-2">Cuestionario de Biología</h3>

        <div class="card-actions justify-end">
          <button class="btn btn-error w-40px"><DeleteIcon /></button>
          <button class="btn btn-primary"><ConfigIcon /></button>
        </div>
      </div>
    </div>
  </main>
</template>

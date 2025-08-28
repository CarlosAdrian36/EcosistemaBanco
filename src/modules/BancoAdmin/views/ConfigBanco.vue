<template>
  <dialog :open="openedit" class="modal">
    <div class="modal-box p-4 m-2 overflow-y-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold">Editar Banco</h3>
        <button @click="$emit('close')" class="btn btn-sm btn-circle btn-ghost">✕</button>
      </div>

      <div>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Nombre del banco</legend>
          <input ref="inputRef" type="text" class="input min-w-full" placeholder="Titulo" />
          <legend class="fieldset-legend">Descripcion</legend>
          <input type="text" class="input min-w-full" placeholder="Descripcion" />

          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box min-w-full border p-4">
            <legend class="fieldset-legend">Traducciones</legend>
            <div class="flex flex-col pt-2 gap-4">
              <div class="flex items-center gap-2">
                Inglés
                <input type="checkbox" class="toggle toggle-md" />
              </div>

              <div class="gap-2">
                Francés
                <input type="checkbox" class="toggle toggle-md" />
              </div>
            </div>
          </fieldset>
        </fieldset>
      </div>
      <div class="flex justify-between items-center mt-4 mb-4">
        <h3 class="text-lg font-bold">Integrantes</h3>
      </div>
      <div>
        <label class="input">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
          <input type="search" class="grow" placeholder="Search" />
          <kbd class="kbd kbd-sm">⌘</kbd>
          <kbd class="kbd kbd-sm">K</kbd>
        </label>
      </div>

      <!-- Footer -->
      <div class="modal-action mt-4">
        <button @click="$emit('close')" class="btn btn-sm btn-ghost">Cancelar</button>
        <!-- <button @click="crearBanco" class="btn btn-sm btn-primary">Crear</button> -->
      </div>
    </div>

    <div class="modal-backdrop" @click="$emit('close')">
      <button>close</button>
    </div>
  </dialog>
</template>
<script lang="ts" setup>
interface Props {
  openedit: boolean;
}
defineProps<Props>();
</script>

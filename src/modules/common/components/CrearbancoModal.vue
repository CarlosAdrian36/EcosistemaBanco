<template>
  <dialog class="modal modal-bottom sm:modal-middle" :open="open">
    <div class="modal-box">
      <form method="dialog" @submit.prevent="Submit">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Nombre del banco</legend>
          <input
            ref="inputRef"
            type="text"
            class="input min-w-full"
            placeholder="Titulo"
            v-model="titulo"
          />
          <legend class="fieldset-legend">Descripcion</legend>
          <input
            type="text"
            class="input min-w-full"
            placeholder="Descripcion"
            v-model="descripcion"
          />
          <div v-if="traduccion === false">
            <fieldset
              class="fieldset bg-base-200 border-base-300 rounded-box min-w-full border p-4"
            >
              <legend class="fieldset-legend">Traducciones</legend>
              <div class="flex flex-col pt-2 gap-4">
                <div class="flex items-center gap-2">
                  Inglés
                  <input type="checkbox" class="toggle toggle-md" v-model="ingles" />
                </div>

                <div class="gap-2">
                  Francés
                  <input type="checkbox" class="toggle toggle-md" v-model="frances" />
                </div>
              </div>
            </fieldset>
          </div>
        </fieldset>
        <div class="modal-action">
          <button type="submit" @click="$emit('close')" class="btn">Close</button>
          <button type="submit" class="btn btn-primary">Aceptar</button>
        </div>
      </form>
    </div>
  </dialog>
</template>
<script lang="ts" setup>
import type { Banco } from '@/modules/BancoAdmin/interfaces/banco.interface';
import { ref } from 'vue';

const inputRef = ref<HTMLInputElement | null>(null);

const titulo = ref('');
const descripcion = ref('');
const ingles = ref(2);
const frances = ref(3);

interface Props {
  open: boolean;
  traduccion?: boolean;
}
defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit', banco: Banco): void;
}>();

const Submit = () => {
  if (!titulo.value || !descripcion.value) {
    inputRef.value?.focus();
    return;
  }

  // Crear el objeto BancoReactivos
  const nuevoBanco: Banco = {
    bancoId: '23',
    Titulo: titulo.value.trim(),
    descripcion: descripcion.value.trim(),

    lenguaje: [
      ...(ingles.value ? [2] : []), // Asumo que 2 representa inglés
      ...(frances.value ? [3] : []), // Asumo que 3 representa francés
    ], // Filtra valores falsy y asegura el tipo
  };
  console.log(nuevoBanco);
  emit('submit', nuevoBanco);
  emit('close');

  // Resetear valores
  titulo.value = '';
  descripcion.value = '';
  ingles.value = 0;
  frances.value = 0;
};
</script>

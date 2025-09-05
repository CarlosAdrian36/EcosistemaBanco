<template>
  <dialog id="my_modal_1" class="modal w-full" :open="open">
    <div class="modal-box">
      <ul class="steps">
        <li class="step step-primary">Crear Reactivo</li>
        <li class="step">Elije la correcta</li>
        <li class="step">Verificar</li>
        <li class="step">Listo</li>
      </ul>
      <h3 class="text-lg font-bold">Reactivo</h3>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script lang="ts" setup>
// import type { Banco } from '@/modules/BancoAdmin/interfaces/banco.interface';

interface Props {
  open: boolean;
}
defineProps<Props>();

// const emit = defineEmits<{
//   (e: 'close'): void;
//   (e: 'submit', banco: Banco): void;
// }>();
</script>

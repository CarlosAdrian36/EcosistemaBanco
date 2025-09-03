<template>
  <dialog class="modal modal-bottom sm:modal-middle" :open="open">
    <div class="modal-box">
      <h1>Aqui se crearan los reactivos</h1>
    </div>
    <div class="modal-action">
      <button type="submit" @click="$emit('close')" class="btn">Close</button>
      <button type="submit" class="btn btn-primary">Aceptar</button>
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

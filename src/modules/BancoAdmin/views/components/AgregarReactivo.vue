<template>
  <dialog id="my_modal_1" class="modal w-full" :open="open">
    <div class="modal-box">
      <h1 class="text-2xl font-bold flex justify-center p-4">Observaciones</h1>

      <!-- <div class="chat chat-start pb-3">
        <div class="chat-header">Obi-Wan Kenobi</div>
        <div class="chat-bubble">Aanco le faltaron</div>
      </div> -->

      <div class="chat chat-end pb-3">
        <div class="chat-header">Obi-Wan Kenobi</div>
        <div class="chat-bubble">
          Que sea la ultima vez que pasa esto no quiero que vuelva a pasar y ponga mas atencion para
          la otra porque no tolerare la forma en que trabaja
        </div>
      </div>
      <div class="chat chat-end pb-3">
        <div class="chat-header">Obi-Wan Kenobi</div>
        <div class="chat-bubble">
          Como hacer que entiendan la forma en que se tiene que trabajar
        </div>
      </div>

      <div class="flex">
        <input class="input w-full" placeholder="Observacion" />
        <button class="btn rounded-full">
          <SendIcon />
        </button>
      </div>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script lang="ts" setup>
import SendIcon from '@/modules/common/icons/sendIcon.vue';

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

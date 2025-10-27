<template>
  <dialog id="my_modal_3" class="modal" :open="open">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-lg font-bold">Eliminacion</h3>
      <p class="py-4">Estas seguro que se va a eliminar</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Cerrar</button>
          <button class="btn">Enviar</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
interface Props {
  open: boolean;
}
defineProps<Props>();
</script>

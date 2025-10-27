<template>
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Flujo de trabajo</h3>
      <div class="flex flex-col gap-4">
        <ul class="steps steps-vertical">
          <li class="step step-success">
            <span class="step-icon"><ChecksimpleIcon class="" /></span>
            <div class="text-accent">Elaboracion</div>
          </li>
          <li class="step step-success">
            <span class="step-icon"><ChecksimpleIcon class="" /></span>
            <div class="text-accent">Revisión</div>
          </li>
          <li class="step step-info">
            <div class="text-info">Traducción</div>
          </li>

          <li class="step">Revisión</li>
          <li class="step">Terminado</li>
        </ul>
      </div>

      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script lang="ts" setup>
import ChecksimpleIcon from '../icons/checksimpleIcon.vue';
</script>

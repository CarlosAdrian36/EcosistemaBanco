<script setup lang="ts">
import SendIcon from '@/modules/common/icons/sendIcon.vue';
</script>

<template>
  <div class="grid grid-flow-row-dense grid-cols-3 gap-5">
    <div class="col-span-2 border-2 bg-base-100">
      <div class="p-9">
        <div class="flex justify-end pt-4 gap-4">
          <div class="flex w-2xs gap-4 pb-4">
            <select class="select select-sm">
              <option disabled selected>Etapa</option>
              <option>E1</option>
              <option>E2</option>
              <option>E3</option>
            </select>
            <select class="select select-sm">
              <option disabled selected>Nivel Cognitivo</option>
              <option>Nivel 1</option>
              <option>Nivel 2</option>
              <option>Nivel 3</option>
              <option>Nivel 4</option>
            </select>
          </div>
          <!-- <button class="btn btn-primary">Aceptar</button> -->
        </div>
        <div>
          <div class="card card-dash shadow-lg">
            <div class="card-body">
              <!-- <h2 class="card-title">Card Title</h2> -->
              <div class="flex">
                <div class="font-bold pe-2">36.-</div>
                <div>
                  <p>
                    Lee el siguiente texto e identifica correctamente a que género literario
                    corresponde. Aquella noche, en la hora de la rata, el emperador soñó que había
                    salido de su palacio y que en la oscuridad caminaba por el jardín, bajo los
                    árboles en flor. Algo se arrodilló a sus pies y le pidió amparo. El emperador
                    accedió; el suplicante dijo que era un dragón y que los astros le habían
                    revelado que al día siguiente, antes de la caída de la noche, Wei Cheng,
                    ministro del emperador, le cortaría la cabeza. En el sueño, el emperador juró
                    protegerlo. Al despertarse, el emperador preguntó por Wei Cheng. Le dijeron que
                    no estaba en el palacio; el emperador lo mandó buscar y lo tuvo atareado el día
                    entero, para que no matara al dragón, y hacia el atardecer le propuso que
                    jugaran al ajedrez. La partida era larga, el ministro estaba cansado y se quedó
                    dormido. Un estruendo conmovió la tierra. Poco después irrumpieron dos
                    capitanes, que traían una inmensa cabeza de dragón empapada en sangre. La
                    arrojaron a los pies del emperador y gritaron: -¡Cayó del cielo! Wei Cheng, que
                    había despertado, la miró con perplejidad y observó: -Qué raro, yo soñé que
                    mataba a un dragón así.
                  </p>

                  <div class="pt-6 w-fit">
                    <p class="p-1">1) Dramatico</p>
                    <p class="p-1">2) Didactico</p>
                    <p class="p-1">3) Lirico</p>
                    <p class="p-1 bg-success rounded-4xl">4) Narrativo</p>
                  </div>
                </div>
              </div>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- chat de observaciones -->
    <div class="border-2">
      <div class="p-9">
        <!-- Cuadro donde estan los mensajes -->
        <!-- <div class="">
          <div class="max-h-full">
            <div class="chat chat-end">
              <div class="chat-image avatar"></div>
              <div class="chat-header">
                Obi-Wan Kenobi
                <time class="text-xs opacity-50">12:45</time>
              </div>
              <div class="chat-bubble">You were the Chosen One!</div>
              <div class="chat-footer opacity-50">Delivered</div>
            </div>
            <div class="chat chat-end">
              <div class="chat-header">Anakin</div>
              <div class="chat-bubble">I hate you!</div>
            </div>
          </div>
          <div class="flex pt-3">
            <input type="input" placeholder="Observacion" class="input w-full" />
            <div class="ps-2">
              <button class="btn btn-active btn-circle btn-primary"><SendIcon /></button>
            </div>
          </div>
        </div> -->
        <div class="grid max-h-screen grid-cols-1">
          <div class="max-h-screen">
            <div class="chat chat-end">
              <div class="chat-bubble">You underestimate my power!</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 content-end gap-4">
          <div>
            <div class="flex pt-3">
              <input type="input" placeholder="Observacion" class="input w-full" />
              <div class="ps-2">
                <button class="btn btn-active btn-circle btn-primary"><SendIcon /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="card card-border bg-base-100 w-96">
      <div class="card-body">
        <h2 class="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are title and actions
          parts
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="ts" setup></style>

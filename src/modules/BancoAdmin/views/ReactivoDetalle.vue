<script setup lang="ts">
import SendIcon from '@/modules/common/icons/sendIcon.vue';
import { ref } from 'vue';
type OpcionType = 'opcionA' | 'opcionB' | 'opcionC' | 'opcionD';
const selectedOptions = ref<OpcionType[]>([]);
const handleResize = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};

const texto: string = 'Aun se puede editar el reactivo ';
</script>

<template>
  <div class="grid grid-flow-row-dense grid-cols-3 gap-5">
    <div class="col-span-2 bg-base-100">
      <div class="p-9">
        <div class="flex justify-end pt-4 gap-4">
          <div class="flex w-2xs gap-4 pb-4">
            <div
              v-if="selectedOptions.includes('opcionA') || selectedOptions.includes('opcionC')"
              class="grid grid-cols-2"
            >
              <div class="badge badge-info">Etapa 2</div>
              <div class="badge badge-info">Nivel Cognitivo 2</div>
            </div>

            <select v-if="selectedOptions.includes('opcionB')" class="select select-sm">
              <option disabled selected>Etapa</option>
              <option>E1</option>
              <option>E2</option>
              <option>E3</option>
            </select>
            <select v-if="selectedOptions.includes('opcionB')" class="select select-sm">
              <option disabled selected>Nivel Cognitivo</option>
              <option>Nivel 1</option>
              <option>Nivel 2</option>
              <option>Nivel 3</option>
              <option>Nivel 4</option>
            </select>
          </div>
        </div>
        <div>
          <div v-if="selectedOptions.includes('opcionB')">
            <!-- editor -->
            <div class="card card-dash shadow-lg">
              <div class="card-body">
                <div class="">
                  <div class="flex">
                    <div class="font-bold pe-2">36.-</div>
                    <textarea
                      @input="handleResize"
                      class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                      placeholder="Opcion 3"
                      :rows="1"
                      v-model="texto"
                    ></textarea>
                  </div>
                  <div>
                    <div class="pt-6 w-fit">
                      <div class="flex">
                        <p class="p-2">1)</p>
                        <textarea
                          @input="handleResize"
                          class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                          placeholder="Opcion 1"
                          :rows="1"
                        ></textarea>
                      </div>
                      <div class="flex pt-6">
                        <p class="p-2">2)</p>
                        <textarea
                          @input="handleResize"
                          class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                          placeholder="Opcion 2"
                          :rows="1"
                        >
                        </textarea>
                      </div>
                      <div class="flex pt-6">
                        <p class="p-2">3)</p>
                        <textarea
                          @input="handleResize"
                          class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                          placeholder="Opcion 3"
                          :rows="1"
                        ></textarea>
                      </div>
                      <div class="flex pt-6">
                        <p class="p-2">4)</p>
                        <textarea
                          @input="handleResize"
                          class="textarea textarea-bordered w-full resize-none overflow-hidden min-h-[2.5rem]"
                          placeholder="Opcion 4"
                          :rows="1"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-actions justify-end">
                  <!-- <button class="btn btn-primary">Guardar</button> -->
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="selectedOptions.includes('opcionC') || selectedOptions.includes('opcionA')"
            class="card card-dash shadow-lg"
          >
            <div class="card-body">
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
                <!-- <button class="btn btn-primary">Guardar</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedOptions.includes('opcionC') || selectedOptions.includes('opcionA')">
      <div class="p-9">
        <div class="grid max-h-screen grid-cols-1">
          <div class="max-h-screen">
            <div class="chat chat-end">
              <div class="chat-bubble">Corriije la ortografia</div>
            </div>
            <div class="chat chat-end">
              <div class="chat-bubble">Corriije la ortografia</div>
            </div>
            <div class="chat chat-end">
              <div class="chat-bubble">Corriije la ortografia</div>
            </div>
            <div class="chat chat-end">
              <div class="chat-bubble">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga accusantium deleniti,
                ullam iure asperiores quis commodi qui sit aspernatur harum quia dolor optio
                quibusdam in nemo quo! Numquam, delectus a.
              </div>
            </div>
          </div>
        </div>

        <div v-if="selectedOptions.includes('opcionC')" class="grid grid-cols-1 content-end gap-4">
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

    <div v-if="selectedOptions.includes('opcionC')" class="flex justify-center">
      <div class="">
        <button class="btn btn-success">Aprobado</button>
      </div>
      <div class="ps-5">
        <button class="btn btn-error">Rechazado</button>
      </div>
    </div>
  </div>
  <div class="pt-5">
    <!-- Grupo de checkboxes -->
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">administrador</span>
        <input type="checkbox" v-model="selectedOptions" value="opcionA" class="checkbox" checked />
      </label>

      <label class="label cursor-pointer">
        <span class="label-text">Elaborador</span>
        <input type="checkbox" v-model="selectedOptions" value="opcionB" class="checkbox" />
      </label>

      <label class="label cursor-pointer">
        <span class="label-text">Revisor</span>
        <input type="checkbox" v-model="selectedOptions" value="opcionC" class="checkbox" />
      </label>

      <label class="label cursor-pointer">
        <span class="label-text">Traductor</span>
        <input type="checkbox" v-model="selectedOptions" value="opcionD" class="checkbox" />
      </label>
    </div>
  </div>
</template>

<style lang="ts" setup></style>

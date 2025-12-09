<template>
  <dialog class="modal modal-bottom sm:modal-middle" :open="open">
    <div
      class="modal-box w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl max-h-[80vh]"
    >
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>

      <h3 class="font-bold text-lg mb-6 text-center">Integrantes</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Columna 1 - Lista de miembros disponibles -->
        <div class="border-2 p-4 rounded-lg">
          <h2 class="text-xl font-semibold mb-4 text-center">Disponibles</h2>
          <div class="overflow-y-auto max-h-[300px] space-y-2">
            <div
              v-for="person in availableMembers"
              :key="person.id"
              class="flex items-center justify-between p-3 bg-base-200 rounded-lg"
            >
              <div class="flex items-center">
                <!-- <div class="avatar placeholder mr-3">
                  <div class="bg-neutral text-neutral-content rounded-full w-10">
                    <span>{{ person.name.charAt(0) }}</span>
                  </div>
                </div> -->
                <div class="avatar avatar-placeholder mr-3">
                  <div class="bg-neutral text-neutral-content w-10 rounded-full">
                    <span class="text-xs">{{ person.name.charAt(0) }}</span>
                  </div>
                </div>
                <div>
                  <div class="font-medium">{{ person.name }}</div>
                </div>
              </div>
              <button @click="assignMember(person)" class="btn btn-soft btn-primary btn-sm">
                Asignar →
              </button>
            </div>
          </div>
        </div>

        <!-- Columna 2 - Miembros asignados -->
        <div class="border-2 p-4 rounded-lg">
          <h2 class="text-xl font-semibold mb-4 text-center">Asignados</h2>
          <div class="overflow-y-auto max-h-[300px] space-y-2">
            <div
              v-for="person in assignedMembers"
              :key="person.id"
              class="flex items-center justify-between p-3 bg-base-200 rounded-lg"
            >
              <div class="flex items-center">
                <div class="avatar avatar-placeholder mr-3">
                  <div class="bg-neutral text-neutral-content w-10 rounded-full">
                    <span class="text-xs">{{ person.name.charAt(0) }}</span>
                  </div>
                </div>
                <div>
                  <div class="font-medium">{{ person.name }}</div>
                </div>
              </div>
              <select class="select max-w-48">
                <option disabled selected>Rol a asignar</option>
                <option>Revisor</option>
                <option>Traductor</option>
                <option>Elaborador</option>
              </select>

              <button @click="unassignMember(person)" class="btn btn-error btn-sm">← Quitar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-action mt-6">
        <button type="button" @click="openModal = false" class="btn">Cancelar</button>
        <button type="submit" @click="saveSelection" class="btn btn-primary">Aceptar</button>
      </div>
    </div>

    <!-- Cerrar al hacer clic fuera del modal -->
    <form method="dialog" class="modal-backdrop">
      <!-- <button @click="openModal = false">Cerrar</button> -->
    </form>
  </dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

interface Member {
  id: number;
  name: string;
}

interface Props {
  open: boolean;
}
defineProps<Props>();
const openModal = ref(false);

// Datos de ejemplo
const availableMembers = ref<Member[]>([
  { id: 1, name: 'Ana García' },
  { id: 2, name: 'Carlos López' },
  { id: 3, name: 'Elena Martínez' },
  { id: 4, name: 'Javier Rodríguez' },
  { id: 5, name: 'María Fernández' },
  { id: 6, name: 'Pedro Sánchez' },
  { id: 7, name: 'Laura Gómez' },
  { id: 8, name: 'Miguel Torres' },
  { id: 9, name: 'Sofía Ruiz' },
  { id: 10, name: 'David Pérez' },
]);

const assignedMembers = ref<Member[]>([]);

// Método para asignar un miembro
const assignMember = (person: Member) => {
  availableMembers.value = availableMembers.value.filter((p) => p.id !== person.id);
  assignedMembers.value.push(person);
};

// Método para quitar un miembro asignado
const unassignMember = (person: Member) => {
  assignedMembers.value = assignedMembers.value.filter((p) => p.id !== person.id);
  availableMembers.value.push(person);
};

// Guardar la selección
const saveSelection = () => {
  console.log('Miembros asignados:', assignedMembers);
  openModal.value = false;
  assignMember.length;
};
</script>

<template>
  <div v-if="isLoading" class="badge badge-ghost animate-pulse">
    <clock-icon />
    Cargando...
  </div>
  <div v-else-if="isError" class="badge badge-error">
    <x-circle-icon />
    Error
  </div>
  <div v-else class="badge gap-1" :class="estatusClass">
    <component :is="estatusIcon" class="w-4 h-4" />
    {{ data?.estatus }}
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import ClockIcon from '@/modules/common/icons/iconsEstatus/clockIcon.vue';
import ArrowPathIcon from '@/modules/common/icons/iconsEstatus/arrowPathIcon.vue';
import CheckCircleIcon from '@/modules/common/icons/iconsEstatus/CheckCircleIcon.vue';
import ShieldCheckIcon from '@/modules/common/icons/iconsEstatus/shieldCheckIcon.vue';
import XCircleIcon from '@/modules/common/icons/iconsEstatus/xCircleIcon.vue';
import EyeIcon from '@/modules/common/icons/iconsEstatus/eyeIcon.vue';
import QuestionMarkCircleIcon from '@/modules/common/icons/iconsEstatus/questionMarkCircleIcon.vue';
import { useEstatusBanco } from '../composables/useEstatusBanco';

const props = defineProps<{
  bancoId: string;
}>();
const emit = defineEmits(['estatus-change']);

const { data, isLoading, isError } = useEstatusBanco(props.bancoId);

watch(
  data,
  (newData) => {
    if (newData?.estatus) {
      emit('estatus-change', {
        bancoId: props.bancoId,
        estatus: newData.estatus,
      });
    }
  },
  { immediate: true },
);
const estatusClass = computed(() => {
  console.log(data.value?.estatus);
  if (!data.value) return 'badge-ghost';

  switch (data.value.estatus) {
    case 'Pendiente':
      return 'badge min-w-[111px]';
    case 'Proceso':
      return 'badge-info min-w-[111px] ';
    case 'Terminado':
      return 'badge-success min-w-[111px]';
    case 'Aprobado':
      return 'badge-accent min-w-[111px]';
    case 'Rechazado':
      return 'badge-error min-w-[111px]';
    case 'Revision':
      return 'badge-warning min-w-[111px]';
    default:
      return 'badge-ghost';
  }
});

const estatusIcon = computed(() => {
  if (!data.value) return 'div';

  switch (data.value.estatus) {
    case 'Pendiente':
      return ClockIcon;
    case 'Proceso':
      return ArrowPathIcon;
    case 'Terminado':
      return CheckCircleIcon;
    case 'Aprobado':
      return ShieldCheckIcon;
    case 'Rechazado':
      return XCircleIcon;
    case 'Revision':
      return EyeIcon;
    default:
      console.log(data.value.estatus, '#');
      return QuestionMarkCircleIcon;
  }
});
</script>

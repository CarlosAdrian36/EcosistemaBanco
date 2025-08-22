import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import type { Estatus } from '../interfaces/estatus.interface';
import { obtenerEtatusPorId } from '../actions/get-estatusbanco.action';

export function useEstatusBanco(bancoId: string) {
  const enabled = computed(() => !!bancoId);

  return useQuery<Estatus, Error>({
    queryKey: ['bancoEstatus', bancoId],
    queryFn: () => obtenerEtatusPorId(bancoId),
    enabled: enabled.value,
    staleTime: 2 * 60 * 1000, // 2 minutos de cache
    // refetchInterval: 10 * 1000, // Refrescar cada 30 segundos (opcional)
  });
}

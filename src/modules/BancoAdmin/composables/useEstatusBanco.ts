import { useQuery } from '@tanstack/vue-query';
import { obtenerEstatusBanco } from '@/modules/BancoAdmin/actions/get-estatusbanco.action';

export const useEstatusBanco = (bancoId: string) => {
  return useQuery({
    queryKey: ['estatus-banco', bancoId],
    queryFn: () => obtenerEstatusBanco(bancoId),
    staleTime: 1000 * 60 * 5, // 5 minutos antes de considerar los datos obsoletos
    refetchOnWindowFocus: false,
  });
};

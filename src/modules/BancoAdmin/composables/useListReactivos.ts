import { useQuery } from '@tanstack/vue-query';
import { obtenerReactivos } from '../actions/get-reactivos';

export const useReactivosQuery = () => {
  return useQuery({
    queryKey: ['reactivos'], // Key única para esta query
    queryFn: obtenerReactivos, // Tu función que ya tienes
    staleTime: 5 * 60 * 1000, // 5 minutos en cache
  });
};

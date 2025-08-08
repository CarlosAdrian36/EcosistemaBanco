import type { EstatusBanco } from '../interfaces/banco.interface';

const posiblesEstatus = [
  'Pendiente',
  'Proceso',
  'Terminado',
  'Aprobado',
  'Rechazado',
  'Revision',
] as const;

export const obtenerEstatusBanco = (
  bancoId: string,
  delay: number = 7000,
): Promise<EstatusBanco> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulamos que el estatus depende del ID del banco para que sea consistente
      const hash = bancoId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const estatusIndex = hash % posiblesEstatus.length;

      resolve({
        bancoId,
        estatus: posiblesEstatus[estatusIndex],
        ultimaActualizacion: new Date().toISOString(),
      });
    }, delay);
  });
};

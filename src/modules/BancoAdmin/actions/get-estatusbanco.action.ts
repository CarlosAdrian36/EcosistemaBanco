import type { Estatus } from '../interfaces/estatus.interface';

export const obtenerEtatusPorId = async (bancoId: string): Promise<Estatus> => {
  await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000));

  // Los primeros 6 bancos tienen estados fijos
  const estatusFijo = ['Pendiente', 'Proceso', 'Terminado', 'Aprobado', 'Rechazado', 'Revision'];

  let estatus;

  if (parseInt(bancoId) <= 6) {
    // Para los primeros 6 IDs, usamos estados fijos
    estatus = estatusFijo[parseInt(bancoId) - 1];
  } else {
    // Para IDs mayores a 6, estado aleatorio
    const estatusRandom = [
      'Pendiente',
      'Proceso',
      'Terminado',
      'Aprobado',
      'Rechazado',
      'Revision',
    ];
    estatus = estatusRandom[Math.floor(Math.random() * estatusRandom.length)];
  }

  // Retornamos el objeto con la estructura Estatus
  return {
    bancoid: bancoId.toString(),
    estatus: estatus,
  };
};

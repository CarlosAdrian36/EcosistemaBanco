export interface BancoReactivos {
  nombre: string;
  bancoId: string;
  lenguaje: (3 | 2)[];
}

export type EstatusBanco = {
  bancoId: string;
  estatus: 'Pendiente' | 'Proceso' | 'Terminado' | 'Aprobado' | 'Rechazado' | 'Revision';
  ultimaActualizacion: string;
};

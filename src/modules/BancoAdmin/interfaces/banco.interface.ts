export interface BancoReactivos {
  nombre: string;
  bancoId: string;
  lenguaje: ('francés' | 'inglés')[];
}

export type EstatusBanco = {
  bancoId: string;
  estatus: 'Pendiente' | 'Proceso' | 'Terminado' | 'Aprobado' | 'Rechazado' | 'Revision';
  ultimaActualizacion: string;
};

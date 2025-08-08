// services/mockReactivosService.ts
import type { BancoReactivos } from '@/modules/BancoAdmin/interfaces/banco.interface';

const nombres: string[] = [
  'Banco de Matemáticas',
  'Reactivos de Historia',
  'Cuestionario de Biología',
  'Evaluación de Química',
  'Banco de Física',
  'Fisica III',
];

export const obtenerBancosReactivos = (cantidad: number = 6): Promise<BancoReactivos[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bancos: BancoReactivos[] = Array.from({ length: cantidad }, (_, i) => ({
        nombre: nombres[i % nombres.length],
        bancoId: `REACT-${1000 + i}`,
        lenguaje:
          Math.random() > 0.66
            ? ['francés']
            : Math.random() > 0.33
              ? ['inglés']
              : ['francés', 'inglés'],
      }));
      resolve(bancos);
    }, 5000);
  });
};

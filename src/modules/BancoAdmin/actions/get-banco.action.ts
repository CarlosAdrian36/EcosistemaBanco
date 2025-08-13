// services/mockReactivosService.ts
import type { BancoReactivos } from '@/modules/BancoAdmin/interfaces/banco.interface';

const nombres: string[] = [
  'Banco de Matemáticas',
  'Reactivos de Historia',
  'Cuestionario de Biología',
  'Evaluación de Química',
  'Banco de Física',
  'Fisica III',
  'Fisica II',
  'Fisica I',
  'Fisica',
];

export const obtenerBancosReactivos = (cantidad: number = 9): Promise<BancoReactivos[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bancos: BancoReactivos[] = Array.from({ length: cantidad }, (_, i) => {
        const random = Math.random();
        let lenguaje: (2 | 3)[] = []; // Inicialmente vacío (cumple con la interfaz)

        if (random < 0.25) {
          // 25%: Sin lenguaje (array vacío)
          lenguaje = [];
        } else if (random < 0.5) {
          // 25%: Solo inglés (2)
          lenguaje = [2];
        } else if (random < 0.75) {
          // 25%: Solo francés (3)
          lenguaje = [3];
        } else {
          // 25%: Ambos (2 y 3)
          lenguaje = [2, 3];
        }

        return {
          nombre: nombres[i % nombres.length],
          bancoId: `REACT-${1000 + i}`,
          lenguaje,
        };
      });
      resolve(bancos);
    }, 5000);
  });
};

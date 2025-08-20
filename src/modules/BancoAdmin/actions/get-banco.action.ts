// services/mockReactivosService.ts
import type { Banco } from '@/modules/BancoAdmin/interfaces/banco.interface';
import { v4 as uuidv4 } from 'uuid';

const nombres: string[] = [
  'Banco de Matemáticas',
  'Reactivos de Historia',
  'Cuestionario de Biología',
  'Evaluación de Química',
  'Banco de Física',
  'Fisica III',
  'Fisica II',
  'Fisica I',
  'Quimica',
  'Historia moderna de la inovacion ',
  'Procedimientos lejitimos de la justicia ',
  'Orientacion vocacional',
  'Comportamientos del ser humano',
  'Tenedencias en los jovenes  para el futuro de mexico',
  'Vida y el proceso natural de la vida que nos envuelve en este mundo',
  'Filosofia de la educaccion ',
];

export const obtenerBancos = (cantidad: number = 16): Promise<Banco[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bancos: Banco[] = Array.from({ length: cantidad }, (_, i) => {
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
          Titulo: nombres[i % nombres.length],
          bancoId: uuidv4(),
          descripcion: 'xx',
          lenguaje,
        };
      });
      resolve(bancos);
    }, 5000);
  });
};

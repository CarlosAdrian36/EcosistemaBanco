import type { Reactivos } from '../interfaces/reactivos.interface';

export const obtenerReactivos = (): Promise<Reactivos[]> => {
  return new Promise((resolve) => {
    // Simular delay de API
    setTimeout(() => {
      const reactivos: Reactivos[] = [
        {
          Reactivo:
            'Analiza críticamente el impacto de la Revolución Industrial en la sociedad europea del siglo XIX, considerando aspectos económicos, sociales y ambientales. Explica cómo los cambios tecnológicos transformaron las relaciones laborales y la urbanización.',
          ReactivoId: 'AC-001',
          estatus: 'Proceso',
        },
        {
          Reactivo:
            'Desarrolla un ensayo sobre la importancia de la biodiversidad en los ecosistemas tropicales, mencionando al menos cinco especies endémicas y explicando cómo la deforestación afecta el equilibrio ecológico y las cadenas tróficas en estas regiones.',
          ReactivoId: 'HS-002',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Resuelve el siguiente problema de cálculo integral: ∫(3x² + 2x - 5) dx desde x=0 hasta x=4. Incluye todos los pasos del procedimiento, aplica las reglas de integración adecuadas y verifica tu resultado mediante derivación.',
          ReactivoId: 'SC-003',
          estatus: 'Aprobado',
        },
        {
          Reactivo:
            'Explica el proceso de fotosíntesis en las plantas, detallando las fases lumínica y oscura, los organelos celulares involucrados, los productos resultantes y la importancia de este proceso para el equilibrio de oxígeno y dióxido de carbono en la atmósfera.',
          ReactivoId: 'NA-004',
          estatus: 'Rechazado',
        },
        {
          Reactivo:
            'Describe el sistema circulatorio humano, identificando las principales arterias y venas, la función del corazón como bomba muscular, el proceso de oxigenación de la sangre y cómo el sistema linfático complementa la circulación.',
          ReactivoId: 'CS-005',
          estatus: 'Revision',
        },
      ];
      resolve(reactivos);
    }, 1000); // 1 segundo de delay
  });
};

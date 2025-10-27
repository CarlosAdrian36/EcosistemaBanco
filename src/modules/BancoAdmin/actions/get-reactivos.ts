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
          estatus: 'Terminado',
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
          estatus: 'Terminado',
        },
        {
          Reactivo:
            'Explica el proceso de fotosíntesis en las plantas, detallando las fases lumínica y oscura, los organelos celulares involucrados, los productos resultantes y la importancia de este proceso para el equilibrio de oxígeno y dióxido de carbono en la atmósfera.',
          ReactivoId: 'NA-004',
          estatus: 'Rechazado',
        },
        {
          Reactivo:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          ReactivoId: 'CS-005',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Explica el proceso de la fotosíntesis, identificando las fases luminosa y oscura, los organelos celulares implicados, los reactivos y productos de cada etapa, y su importancia en los ecosistemas.',
          ReactivoId: 'BIO-012',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Describe la estructura y función del sistema nervioso humano, diferenciando entre sistema nervioso central y periférico, la transmisión del impulso nervioso, y los principales neurotransmisores.',
          ReactivoId: 'NS-008',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Explica el proceso de la digestión humana, identificando cada órgano del tracto digestivo, las enzimas implicadas en la descomposición de nutrientes, y los mecanismos de absorción en el intestino delgado.',
          ReactivoId: 'DIG-015',
          estatus: 'En proceso',
        },
        {
          Reactivo:
            'Describe el ciclo celular, identificando las fases de la mitosis y meiosis, sus diferencias fundamentales, y la importancia de los puntos de control para prevenir enfermedades como el cáncer.',
          ReactivoId: 'CEL-023',
          estatus: 'Rechazado',
        },
        {
          Reactivo:
            'Explica los principios de la genética mendeliana, definiendo los conceptos de gen, alelo, dominancia, recesividad, y cómo se manifiestan en los patrones de herencia.',
          ReactivoId: 'GEN-007',
          estatus: 'Aprobado',
        },
        {
          Reactivo:
            'Describe el sistema endocrino humano, identificando las glándulas principales, las hormonas que secretan, sus órganos blanco y las funciones que regulan en el organismo.',
          ReactivoId: 'END-011',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Explica la teoría de la evolución por selección natural de Darwin, los mecanismos de especiación, y las evidencias fósiles, anatómicas y moleculares que la sustentan.',
          ReactivoId: 'EVO-019',
          estatus: 'Aprobado',
        },
        {
          Reactivo:
            'Describe la respuesta inmunológica del cuerpo humano, diferenciando entre inmunidad innata y adaptativa, y el papel de linfocitos, anticuerpos y vacunas.',
          ReactivoId: 'INM-014',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Describe la estructura atómica y la tabla periódica, explicando la configuración electrónica, las propiedades periódicas y los diferentes tipos de enlaces químicos.',
          ReactivoId: 'QUIM-003',
          estatus: 'Aprobado',
        },
        {
          Reactivo:
            'Explica el sistema respiratorio humano, detallando el proceso de ventilación pulmonar, el intercambio gaseoso a nivel alveolar y el transporte de oxígeno y dióxido de carbono en la sangre.',
          ReactivoId: 'RESP-009',
          estatus: 'Revision',
        },

        {
          Reactivo:
            'Describe los ecosistemas , identificando las zonas litoral, nerítica y oceánica, así como las adaptaciones de los organismos en cada una de estas zonas.',
          ReactivoId: 'ECO-023',
          estatus: 'Rechazado',
        },
        {
          Reactivo:
            'Explica la termodinámica en los seres vivos, definiendo los conceptos de metabolismo, catabolismo, anabolismo y las leyes de la termodinámica que rigen estos procesos.',
          ReactivoId: 'BIOQ-021',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Describe el proceso de la replicación del ADN, identificando las enzimas participantes, la dirección de síntesis y los mecanismos de corrección de errores.',
          ReactivoId: 'GEN-025',
          estatus: 'Rechazado',
        },
        {
          Reactivo:
            'Explica los diferentes biomas terrestres, sus características climáticas, flora y fauna representativa, y los factores que determinan su distribución geográfica.',
          ReactivoId: 'ECOL-013',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Describe la fisiología muscular, incluyendo los tipos de tejido muscular, el mecanismo de contracción y la relación entre el sistema nervioso y muscular.',
          ReactivoId: 'FIS-028',
          estatus: 'Terminado',
        },
        {
          Reactivo:
            'Explica los principios de la ecología de poblaciones, definiendo crecimiento poblacional, capacidad de carga, relaciones interespecíficas y factores limitantes.',
          ReactivoId: 'ECOP-032',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Describe el sistema esquelético humano, identificando los principales huesos, tipos de articulaciones y las funciones de soporte, protección y movimiento.',
          ReactivoId: 'ANAT-006',
          estatus: 'Rechazado',
        },
        {
          Reactivo:
            'Explica los procesos geológicos internos de la Tierra, incluyendo la tectónica de placas, vulcanismo y sismicidad, y su relación con la formación del relieve.',
          ReactivoId: 'GEO-042',
          estatus: 'Aprobado',
        },
        {
          Reactivo:
            'Describe el ciclo del agua en la naturaleza, identificando los procesos de evaporación, condensación, precipitación e infiltración, y su importancia para los ecosistemas.',
          ReactivoId: 'HID-035',
          estatus: 'En proceso',
        },
        {
          Reactivo:
            'Explica la teoría celular moderna, describiendo la estructura y función de los organelos celulares en células procariotas y eucariotas.',
          ReactivoId: 'CEL-019',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Describe los principios de la herencia no mendeliana, incluyendo la codominancia, dominancia incompleta, herencia ligada al sexo y pleiotropía.',
          ReactivoId: 'GEN-027',
          estatus: 'Terminado',
        },
        {
          Reactivo:
            'Explica los mecanismos de evolución molecular, incluyendo mutaciones, deriva génica, flujo genético y su papel en la especiación.',
          ReactivoId: 'EVOL-038',
          estatus: 'Revision',
        },
        {
          Reactivo:
            'Describe el sistema excretor humano, detallando la estructura del nefrón, el proceso de formación de la orina y los mecanismos de regulación de líquidos y electrolitos.',
          ReactivoId: 'EXCR-016',
          estatus: 'Rechazado',
        },
      ];
      resolve(reactivos);
    }, 1000); // 1 segundo de delay
  });
};

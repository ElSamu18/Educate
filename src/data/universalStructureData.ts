import { UniversalStep } from '../types';

export const UNIVERSAL_STEPS: UniversalStep[] = [
  {
    stepNumber: 1,
    id: 'portada',
    title: 'Portada Institucional',
    subtitle: 'Presentación formal y estandarizada',
    description: 'Es la cara visible de la investigación. Debe contener información clara, sobria y generalmente centrada en la página.',
    badge: 'Página 1 (Sin número visible)',
    details: [
      'Encabezado: Nombre de la Institución educativa (acompañado del logo oficial si se requiere).',
      'Centro: Título del trabajo (claro, conciso y fielmente representativo del tema).',
      'Lateral / Inferior: Datos del Facilitador/Profesor y datos de los Integrantes (Nombre, Apellido y Cédula de Identidad o Matrícula).',
      'Pie de página: Fecha y Lugar de presentación (Ciudad, Año).'
    ],
    example: 'UNIVERSIDAD NACIONAL / FACULTAD DE CIENCIAS\n[Título Centrado]\nFacilitador: Prof. Dr. Gómez | Alumno: Juan Pérez (C.I. 12.345.678)\nMadrid, 2026'
  },
  {
    stepNumber: 2,
    id: 'indice',
    title: 'Índice o Tabla de Contenido',
    subtitle: 'Mapa jerárquico de navegación',
    description: 'Permite organizar los capítulos, apartados temáticos y subniveles de forma jerárquica para ubicar la información con rapidez.',
    badge: 'Numeración Romana (i, ii...) o Arábiga',
    details: [
      'Debe coincidir milimétricamente con los títulos y subtítulos del cuerpo del trabajo.',
      'Incluye el número de página exacto alineado a la derecha con línea punteada.',
      'Si el trabajo contiene más de 3 tablas o figuras, se debe añadir un Índice de Tablas e Índice de Figuras anexo.'
    ],
    example: '1. Introducción ..................................... 3\n2. Marco Teórico ................................... 5\n   2.1. Antecedentes Históricos .......... 7\n   2.2. Modelos Actuales .................... 9\n3. Metodología ..................................... 12'
  },
  {
    stepNumber: 3,
    id: 'introduccion',
    title: 'Introducción',
    subtitle: 'El gancho y justificación',
    description: 'Expone el propósito del trabajo, la justificación de la investigación y un breve preámbulo de lo que el lector encontrará.',
    badge: 'Comienza la paginación arábiga (Pág. 1)',
    details: [
      'Propósito y justificación: ¿Por qué es relevante investigar o exponer este tema?',
      'Objetivos: Qué metas persigue el documento y qué preguntas responde.',
      'Preámbulo o mapa de ruta: Breve descripción de los capítulos o secciones que integran el cuerpo.'
    ],
    example: 'El presente documento tiene como objetivo examinar el impacto de... Para ello, se justifica en la necesidad de... En el primer capítulo se abordará... mientras que en el segundo...'
  },
  {
    stepNumber: 4,
    id: 'desarrollo',
    title: 'Desarrollo (Cuerpo del Trabajo)',
    subtitle: 'Jerarquía decimal obligatoria',
    description: 'Es el núcleo de la investigación. Exige un uso riguroso y sistemático de la jerarquía numérica decimal.',
    badge: 'Núcleo Central',
    details: [
      'Títulos principales: Se enumeran con números enteros (ej. 1., 2., 3., 4.). En negrita y tamaño destacado.',
      'Subtítulos de segundo nivel: Se derivan del nivel principal utilizando un decimal (ej. 1.1., 1.2., 2.1.).',
      'Subtítulos de tercer nivel: Se subdividen añadiendo un segundo decimal (ej. 1.1.1., 1.2.1.). No abusar más allá de 3 niveles.',
      'Párrafos articulados con citas bibliográficas directas e indirectas.'
    ],
    example: '1. Fundamentos de la Energía Renovable\n  1.1. Energía Solar Fotovoltaica\n    1.1.1. Eficiencia de Células de Silicio\n    1.1.2. Costes Nivelados de Generación\n  1.2. Energía Eólica Marina'
  },
  {
    stepNumber: 5,
    id: 'conclusion',
    title: 'Conclusión',
    subtitle: 'Cierre y síntesis integradora',
    description: 'Ofrece el cierre del trabajo, sintetizando los hallazgos principales y reflexiones finales sin introducir jamás temas nuevos.',
    badge: 'Síntesis Final',
    details: [
      'Sintetiza cómo se cumplieron los objetivos planteados en la introducción.',
      'Resalta la lección principal aprendida o el aporte del trabajo.',
      'Prohibido introducir citas nuevas o temas no tratados previamente en el desarrollo.'
    ],
    example: 'A la luz de los datos expuestos, se concluye que la viabilidad del modelo híbrido supera en un 30% a las alternativas tradicionales. Se confirma la hipótesis planteada...'
  },
  {
    stepNumber: 6,
    id: 'bibliografia',
    title: 'Bibliografía / Referencias',
    subtitle: 'Normas de citación y rigor académico',
    description: 'Para garantizar el rigor académico y evitar el plagio, se debe utilizar estrictamente el estilo APA (5ª / 7ª edición).',
    badge: 'Rigor y Ética',
    details: [
      'Todas las obras citadas en el texto deben figurar en la lista final y viceversa.',
      'Ordenación estrictamente alfabética por el apellido del primer autor.',
      'Uso de sangría francesa (1.27 cm) a partir de la segunda línea de cada referencia.'
    ],
    example: 'Smith, J. (2020). La Revolución Industrial en Europa (2.ª ed.). Editorial Alianza.\nUNESCO. (2023). Informe mundial sobre educación superior. UNESCO Publishing.'
  }
];

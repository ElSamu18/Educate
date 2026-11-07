import { ApaCitationGuide, LethalChecklistItem } from '../types';

export const APA_GUIDES: ApaCitationGuide[] = [
  {
    id: 'cita-corta',
    title: 'Cita Textual Corta (< 40 palabras)',
    rule: 'Va incorporada en el mismo párrafo, encerrada entre comillas dobles, seguida de autor, año y página.',
    structure: '"[Texto textual]" (Apellido, Año, p. XX).',
    example: 'Como señala el autor, "el cambio de una economía agraria a una industrial generó un crecimiento económico sin precedentes" (Smith, 2020, p. 14).',
    explanation: 'No abras punto y aparte. No cambies la fuente ni el tamaño. Si hay omisión de palabras, usa puntos suspensivos entre corchetes [...].'
  },
  {
    id: 'cita-bloque',
    title: 'Cita en Bloque (> 40 palabras)',
    rule: 'Se escribe en un párrafo independiente, sin comillas, con sangría izquierda de 1.27 cm (0.5 pulg) en todo el bloque.',
    structure: '[Párrafo aparte con sangría izquierda de 1.27 cm, interlineado 1.15 o doble, sin comillas]. (Apellido, Año, p. XX)',
    example: 'La mecanización de las fábricas no solo alteró la producción textil, sino que reconfiguró por completo la dinámica familiar y los horarios comunitarios de los trabajadores del siglo XIX. Las jornadas de más de catorce horas diarias impidieron la conciliación, generando las primeras protestas obreras organizadas en los centros fabriles de Manchester. (Smith, 2020, p. 88)',
    explanation: 'El punto final se coloca antes del paréntesis de la cita bibliográfica, a diferencia de las citas cortas.'
  },
  {
    id: 'referencia-libro',
    title: 'Referencia Básica de Libro',
    rule: 'En la lista final de referencias alfabéticas. Título de la obra en cursiva. Sangría francesa de 1.27 cm.',
    structure: 'Apellido, Inicial.(es). (Año). Título del libro en cursiva (Edición si aplica). Editorial.',
    example: 'Smith, J. (2020). La Revolución Industrial y la sociedad moderna (2.ª ed.). Editorial Alianza.',
    explanation: 'Para capítulos de libros o artículos con DOI: incluir el enlace HTTPS activo al final (ej. https://doi.org/10.xxxx).'
  }
];

export const INVERTED_PYRAMID = {
  title: 'Principio de la Pirámide Invertida',
  subtitle: 'Regla de oro para textos profesionales y ejecutivos',
  summary: 'Coloca la información más importante o la conclusión principal en el primer párrafo. Los directivos y clientes leen primero el inicio; si no capta la atención o no da el contexto inmediato, abandonarán la lectura.',
  layers: [
    {
      level: 1,
      width: 'w-full',
      color: 'bg-blue-600 dark:bg-blue-500 text-white',
      title: '1. El Núcleo / Conclusión (Lead & Decisiones)',
      desc: 'Qué pasó, cuál es la recomendación y la acción requerida. El "Quién, Qué, Cuándo, Dónde y Por qué".'
    },
    {
      level: 2,
      width: 'w-4/5',
      color: 'bg-indigo-500 dark:bg-indigo-600 text-white',
      title: '2. Datos Duros y Hallazgos Principales',
      desc: 'Métricas, porcentajes, causas, riesgos identificados y cronograma operativo.'
    },
    {
      level: 3,
      width: 'w-3/5',
      color: 'bg-slate-400 dark:bg-slate-600 text-white',
      title: '3. Contexto, Antecedentes e Información Secundaria',
      desc: 'Detalles técnicos de respaldo, consideraciones menores y anexos para consulta opcional.'
    }
  ]
};

export const LANGUAGE_ECONOMY_TIPS = [
  {
    title: 'Voz Activa vs. Voz Pasiva',
    bad: '"El proyecto fue completado por el equipo de diseño en tiempo récord."',
    good: '"El equipo de diseño completó el proyecto en tiempo récord."',
    reason: 'La voz activa ahorra palabras, elimina pesadez burocrática y asigna responsabilidad directa.'
  },
  {
    title: 'Regla: Un pensamiento = Una oración',
    bad: '"Considerando que las variables climáticas han variado y debido a que el presupuesto se redujo, determinamos suspender la prueba."',
    good: '"Las variables climáticas empeoraron y el presupuesto se redujo. Por ello, suspendimos la prueba."',
    reason: 'Evita frases subordinadas en cascada. Puntos seguidos aportan dinamismo y comprensión veloz.'
  },
  {
    title: 'Eliminación de Relleno y Pleonasmos',
    bad: '"En base a la recopilación de datos que pudimos obtener previamente en el pasado..."',
    good: '"Según los datos obtenidos..."',
    reason: 'Cada palabra debe justificar su espacio. La concisión demuestra claridad mental.'
  }
];

export const REVISION_PRACTICES = [
  {
    id: 'cajon',
    name: 'La Prueba del Cajón (24h de Reposo)',
    badge: 'Técnica Psicológica',
    icon: 'Archive',
    description: 'Si es un documento trascendente (TFG, propuesta o informe directivo), déjalo reposar 24 horas antes de la última lectura. Una mente descansada detecta inconsistencias invisibles para un cerebro saturado.'
  },
  {
    id: 'inversa',
    name: 'Lectura Inversa (Proofreading)',
    badge: 'Cero Faltas',
    icon: 'RotateCcw',
    description: 'Para detectar errores ortográficos recurrentes, lee tu texto desde la última palabra hasta la primera (o de abajo hacia arriba por párrafos). Esto desactiva el modo de autocompletado del cerebro.'
  },
  {
    id: 'herramientas',
    name: 'Correctores Asistidos con Criterio Humano',
    badge: 'Herramientas',
    icon: 'ShieldCheck',
    description: 'Utiliza correctores ortotipográficos avanzados (LanguageTool, Grammarly o Word), pero nunca delegues la aprobación final a la IA. El contexto humano, el tono y la intención son insustituibles.'
  }
];

export const PDF_EXPORT_PROMPT = `Por favor, aplica el siguiente estilo de formato a este documento antes de exportarlo a PDF:
1. Tamaño de página: A4 (210 x 297 mm).
2. Márgenes: Normales o moderados (2.5 cm en los cuatro bordes).
3. Tipografía principal: Usa una fuente sans-serif profesional para los títulos (ej. Arial, Helvetica o Montserrat) y una serif altamente legible para el cuerpo del texto (ej. Times New Roman, Garamond o Georgia). Tamaño del cuerpo: 11 o 12 pt. Interlineado: 1.15 o 1.5.
4. Jerarquía visual:
   - H1 (Título principal): 24 pt, Negrita, Centrado.
   - H2 (Secciones mayores): 18 pt, Negrita, color de contraste oscuro (ej. Azul marino).
   - H3 (Nombres de documentos): 14 pt, Negrita.
5. Diseño de Portada: Dedica una página exclusiva para el título principal, subtítulo, y añade un espacio para el nombre del autor y la fecha actual.
6. Paginación: Inserta números de página en la esquina inferior derecha a partir de la página de introducción.
7. Saltos de página: Asegúrate de que los títulos de la sección (A, B y C) comiencen siempre en una nueva página impar para dar un respiro visual al lector.`;

export const GLOSSARY_TERMS = [
  { term: 'Abstract', def: 'Resumen muy estructurado (200-300 palabras) de un artículo científico o TFG que condensa objetivos, metodología, resultados y conclusiones.' },
  { term: 'Argumento', def: 'Razonamiento estructurado utilizado para demostrar, probar o convencer sobre una tesis determinada con evidencia empírica.' },
  { term: 'Boilerplate', def: 'Párrafo estándar al final de un comunicado de prensa que sintetiza la identidad corporativa, año de fundación y misión de la empresa.' },
  { term: 'Call to Action (CTA)', def: 'Llamada a la acción. Frase directa que indica al lector el siguiente paso exacto (ej. "Por favor, aprueben el presupuesto antes del martes").' },
  { term: 'Memo', def: 'Abreviatura de memorándum. Documento corporativo interno ultra-directo para comunicar directrices, nombramientos o cambios operativos.' },
  { term: 'Patchwriting', def: 'Práctica deficiente de resumir o parafrasear cambiando solo dos o tres palabras del texto original. Es clasificada formalmente como plagio involuntario.' },
  { term: 'Tesis', def: 'En un ensayo o investigación: la proposición o postura original argumentativa que el autor se compromete a defender a lo largo del texto.' }
];

export const LETHAL_CHECKLIST_ITEMS: LethalChecklistItem[] = [
  {
    id: 'ortografia',
    label: 'Cero faltas de ortografía, tildes y signos de puntuación',
    consequence: 'Motivo #1 de descarte inmediato de CVs y pérdida instantánea de autoridad académica.',
    tip: 'Aplica la lectura inversa desde el último párrafo al primero.'
  },
  {
    id: 'plagio',
    label: 'Sin citas no atribuidas ni patchwriting (Plagio involuntario)',
    consequence: 'Suspensión académica inmediata o demandas legales por derechos de autor.',
    tip: 'Verifica que cada idea no propia lleve su cita (Apellido, Año) y comillas si es textual.'
  },
  {
    id: 'adjuntos',
    label: 'Comprobación crítica de archivos adjuntos y enlaces funcionales',
    consequence: 'Bloqueo operativo en propuestas de negocio y correos de alta dirección.',
    tip: 'Envía un correo de prueba a ti mismo y verifica la descarga de cada anexo.'
  },
  {
    id: 'tono',
    label: 'Tono y registro coherente con el destinatario (Sin informalismos)',
    consequence: 'Proyecta falta de respeto o arrogancia ante comités y tribunales.',
    tip: 'Elimina jerga coloquial, excesos de signos de exclamación y expresiones emotivas.'
  },
  {
    id: 'alineacion',
    label: 'Alineación perfecta entre objetivos formulados y conclusiones finales',
    consequence: 'Invalidación metodológica en defensas de TFG, TFM y peritajes técnicos.',
    tip: 'Coteja cada objetivo específico en la introducción con su párrafo de respuesta en conclusiones.'
  }
];

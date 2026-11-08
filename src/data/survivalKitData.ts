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

export const WORD_EXPORT_PROMPTS = {
  unellez: `Actúa como un maquetador editorial y formateador académico profesional en Microsoft Word. Transforma el contenido adjunto en un documento editable de Microsoft Word (.docx) listo para descargar y editar directamente, cumpliendo estrictamente con la Normativa Oficial UNELLEZ (Resolución CD330 / CD300 para Trabajos Técnicos, Trabajos Especiales de Grado, Trabajos de Grado y Tesis Doctorales):

1. Formato de entrega:
   - Entrega el documento en formato Microsoft Word (.docx) 100% editable y descargable (o genera el archivo descargable con todos los estilos de Word pre-configurados).
   - Asigna los estilos nativos de Word: "Título 1" para capítulos principales, "Título 2" para subtítulos decimales (1.1, 1.2), "Título 3" para subapartados (1.1.1) y "Normal" para el cuerpo del texto.

2. Tamaño de página y papel:
   - Tamaño: Carta (Letter, 21.59 cm × 27.94 cm / 8.5 × 11 pulgadas).
   - Orientación: Vertical obligatoria.

3. Configuración de Márgenes en Word (Disposición > Márgenes personalizados):
   - Margen Izquierdo: 4.0 cm (destinado a encuadernación oficial obligatoria).
   - Margen Derecho: 3.0 cm.
   - Margen Superior: 3.0 cm.
   - Margen Inferior: 3.0 cm.
   - Encuadernación adicional: 0 cm (ya contemplado en los 4.0 cm izquierdos).

4. Tipografía y Estilos de Fuente en Word:
   - Fuente única y uniforme en todo el documento: Arial, Times New Roman o Courier New (elige una sola).
   - Cuerpo de texto normal: 12 puntos, texto justificado en ambos márgenes.
   - Títulos de capítulos (Título 1): 12 o 14 puntos en Negrita destacada, centrado o justificado según el capítulo.
   - Subtítulos de desarrollo (Título 2 y 3): 12 puntos en negrita con numeración decimal (1.1, 1.1.1).
   - Tablas y Figuras: 10 a 12 puntos según volumen de datos.
   - Notas al pie de página: 10 puntos a renglón sencillo (1.0).

5. Espaciado e Interlineado en Word (Inicio > Párrafo):
   - Texto general y desarrollo: 1.5 líneas (espacio y medio).
   - Espacio simple (1.0): Para Resumen, Bibliografía, Notas al pie, títulos multilínea y citas textuales largas.
   - Espaciado entre párrafos: Anterior 0 pto, Posterior 0 pto (sin dobles saltos artificiales).

6. Sangrías de Párrafo:
   - Párrafos sin sangría inicial (0 cm / "sin sangrar").
   - Prevalece el margen de encuadernación izquierdo de 4.0 cm.
   - Citas textuales largas (>40 palabras o más de tres líneas): párrafo aparte con sangría en bloque izquierda de 1.0 cm, tamaño 10 u 11 pt, interlineado sencillo (1.0) y en letra cursiva, sin comillas.

7. Paginación y Estructura:
   - Números de página ubicados en la esquina superior derecha (o inferior según la estructura).
   - Páginas preliminares numeradas en romanos en minúscula (i, ii, iii...); cuerpo del trabajo en números arábigos (1, 2, 3...).
   - Anexos / Apéndices alfabéticos (Anexo A, Anexo B...) iniciando obligatoriamente en salto de página individual.

Genera y entrega este documento en formato Microsoft Word (.docx) descargable, editable, limpio y con todos los estilos de Word configurados para que el autor pueda abrirlo, editar el texto y guardarlo de inmediato.`,

  apa: `Actúa como un maquetador editorial y formateador académico profesional en Microsoft Word. Transforma el contenido adjunto en un documento editable de Microsoft Word (.docx) listo para descargar y editar directamente, cumpliendo estrictamente con las Normas APA (7.ª Edición Oficial):

1. Formato de entrega:
   - Entrega el documento en formato Microsoft Word (.docx) 100% editable y descargable (o genera el archivo descargable con todos los estilos y plantillas nativas de Word aplicados).
   - Asigna los estilos de Microsoft Word: "Título 1" (Nivel 1 APA), "Título 2" (Nivel 2 APA), "Título 3" (Nivel 3 APA) y "Normal" (Cuerpo APA).

2. Tamaño de página y papel:
   - Tamaño: Carta (Letter, 21.59 cm × 27.94 cm / 8.5 × 11 pulgadas).
   - Orientación: Vertical.

3. Configuración de Márgenes en Word (Disposición > Márgenes):
   - 2.54 cm (1.0 pulgada) simétricos en los 4 bordes: Superior, Inferior, Izquierdo y Derecho.

4. Tipografía permitida en Word (mantener una sola en todo el archivo):
   - Con serifa: Times New Roman 12 pt o Georgia 11 pt.
   - Sin serifa: Calibri 11 pt o Arial 11 pt.
   - Color de fuente: Automático / Negro.

5. Espaciado e Interlineado en Word (Inicio > Párrafo):
   - Interlineado Doble (2.0) estricto en todo el documento (portada, cuerpo, citas en bloque y lista de referencias).
   - Sin espacio extra entre párrafos (Espaciado Anterior: 0 pto, Posterior: 0 pto).
   - Alineación del texto: Alineado a la izquierda ("ragged right", margen derecho irregular, sin justificar).

6. Sangrías de Párrafo (Pestaña Disposición > Párrafo):
   - Sangría de primera línea obligatoria: 1.27 cm (0.5 pulgadas / tecla Tab) en la primera línea de cada párrafo del cuerpo.
   - Citas en bloque (>40 palabras): Párrafo independiente sin comillas, con sangría izquierda de 1.27 cm en todo el bloque, manteniendo interlineado doble (2.0).
   - Lista de Referencias finales: Orden alfabético con Sangría Francesa de 1.27 cm (0.5 pulgadas).

7. Jerarquía de Títulos APA 7 en Word:
   - Nivel 1: Centrado, Negrita, Título con Mayúsculas y Minúsculas.
   - Nivel 2: Alineado a la izquierda, Negrita, Mayúsculas y Minúsculas.
   - Nivel 3: Alineado a la izquierda, Negrita, Cursiva, Mayúsculas y Minúsculas.

8. Paginación y Encabezado:
   - Número de página ubicado en la esquina superior derecha del encabezado en todas las páginas comenzando desde la Portada (Página 1).

Genera y entrega este documento en formato Microsoft Word (.docx) descargable, editable y listo para abrir en Word, completar los datos y guardar.`
};

export const PDF_EXPORT_PROMPTS = WORD_EXPORT_PROMPTS;
export const PDF_EXPORT_PROMPT = WORD_EXPORT_PROMPTS.unellez;
export const WORD_EXPORT_PROMPT = WORD_EXPORT_PROMPTS.unellez;

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

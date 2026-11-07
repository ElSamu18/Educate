export interface WordConfigCategory {
  title: string;
  icon: string;
  wordMenuPath: string;
  badge: string;
  items: {
    label: string;
    value: string;
    unit: string;
    note?: string;
    highlight?: boolean;
  }[];
}

export interface AcademicLimitItem {
  program: string;
  docType: string;
  maxPages: string;
  note?: string;
}

export interface TypographicException {
  title: string;
  fontSize: string;
  spacing: string;
  style: string;
  description: string;
}

export const WORD_RECIPE_CONFIG: {
  summary: string;
  institution: string;
  scope: string;
  categories: WordConfigCategory[];
  exceptions: TypographicException[];
  extensionLimits: AcademicLimitItem[];
  annexRule: {
    title: string;
    description: string;
  };
  fullPromptText: string;
} = {
  institution: 'UNELLEZ (Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora)',
  scope: 'Trabajos Técnicos, Especiales de Grado, Trabajos de Grado y Tesis Doctorales',
  summary: 'Parámetros de formato académico exigidos por la UNELLEZ para garantizar uniformidad, legibilidad y rigor formal en Microsoft Word.',
  categories: [
    {
      title: 'A. Márgenes de Página y Papel Carta',
      icon: 'Square',
      badge: 'Disposición > Márgenes Personalizados',
      wordMenuPath: 'Vaya a Disposición (o Diseño de página) > Márgenes > Márgenes personalizados...',
      items: [
        { label: 'Margen Izquierdo', value: '4.0', unit: 'cm', note: 'Margen amplio para encuadernación obligatoria', highlight: true },
        { label: 'Margen Derecho', value: '3.0', unit: 'cm', note: 'Margen lateral derecho estándar', highlight: true },
        { label: 'Margen Superior', value: '3.0', unit: 'cm', note: 'Espacio superior desde el borde de la hoja', highlight: true },
        { label: 'Margen Inferior', value: '3.0', unit: 'cm', note: 'Espacio inferior desde el borde de la hoja', highlight: true },
        { label: 'Tamaño de Papel', value: 'Carta', unit: 'Letter', note: '21.59 × 27.94 cm (8.5 × 11 pulg)', highlight: true },
        { label: 'Orientación', value: 'Vertical', unit: 'Retrato', note: 'Página vertical obligatoria' }
      ]
    },
    {
      title: 'B. Tipografía y Fuentes Permitidas',
      icon: 'Type',
      badge: 'Inicio > Fuente',
      wordMenuPath: 'En la pestaña Inicio, grupo Fuente. Seleccione una de las 3 fuentes autorizadas para todo el trabajo.',
      items: [
        { label: 'Fuentes Permitidas', value: 'Arial / Times / Courier', unit: 'New', note: 'Arial, Times New Roman o Courier New', highlight: true },
        { label: 'Regla de Oro', value: 'Única Fuente', unit: 'Uniforme', note: 'Se debe mantener la misma fuente en todo el documento', highlight: true },
        { label: 'Tamaño Base Cuerpo', value: '12', unit: 'puntos', note: 'Para el texto principal y párrafos de desarrollo', highlight: true }
      ]
    },
    {
      title: 'C. Espaciado Interlineal',
      icon: 'AlignLeft',
      badge: 'Inicio > Párrafo > Interlineado',
      wordMenuPath: 'En Inicio > Párrafo, seleccione 1.5 para el texto general, y 1.0 (sencillo) para excepciones.',
      items: [
        { label: 'Texto General', value: '1.5', unit: 'espacio y medio', note: 'Interlineado general obligatorio', highlight: true },
        { label: 'Espacio Simple (1.0)', value: '1.0', unit: 'sencillo', note: 'Para Resumen, Bibliografía, Notas al pie, citas largas y títulos multilínea', highlight: true }
      ]
    },
    {
      title: 'D. Sangrías y Párrafos',
      icon: 'Indent',
      badge: 'Disposición > Párrafo',
      wordMenuPath: 'En Disposición > Párrafo, configure Sangría Izquierda y Derecha a 0 cm.',
      items: [
        { label: 'Inicio de Párrafo', value: '0', unit: 'cm (Sin sangría)', note: 'Los párrafos deben comenzar sin sangría ("sin sangrar")', highlight: true },
        { label: 'Alineación Izquierda', value: 'Prevalece 4 cm', unit: 'encuadernación', note: 'Margen de 4 cm en margen izquierdo', highlight: true }
      ]
    }
  ],
  exceptions: [
    {
      title: 'Títulos de Capítulos',
      fontSize: '12 o 14 pt',
      spacing: '1.5 líneas',
      style: 'Negrita destacada',
      description: 'Pueden destacarse utilizando un tamaño de fuente de 12 o 14 puntos, preferiblemente en negrita para marcar jerarquía.'
    },
    {
      title: 'Citas Textuales Largas (>40 palabras)',
      fontSize: '10 u 11 pt',
      spacing: '1.0 (Simple)',
      style: 'Cursiva y márgenes reducidos',
      description: 'Si la cita excede las 40 palabras (más de tres líneas), debe escribirse a un solo espacio interlineal (1.0), en tamaño más pequeño (10pt u 11pt), en cursiva y con sangría en bloque.'
    },
    {
      title: 'Tablas y Figuras',
      fontSize: '10 a 12 pt',
      spacing: '1.0 o 1.15',
      style: 'Ajustado a datos',
      description: 'El texto contenido dentro de tablas y figuras puede utilizar un tamaño ajustado para mejorar la presentación (Mínimo 10 pt y Máximo 12 pt).'
    },
    {
      title: 'Notas al Pie de Página',
      fontSize: '10 pt estricto',
      spacing: '1.0 (Simple)',
      style: 'Reducido al pie',
      description: 'Deben redactarse a un solo espacio (1.0) y utilizar un tamaño de fuente reducido, estrictamente de 10 puntos.'
    }
  ],
  extensionLimits: [
    {
      program: 'Especialización Técnica',
      docType: 'Trabajo Técnico',
      maxPages: '70 páginas',
      note: 'Incluye todo el cuerpo del documento y anexos'
    },
    {
      program: 'Especialización',
      docType: 'Trabajo Especial de Grado',
      maxPages: '70 páginas',
      note: 'Incluye todo el cuerpo del documento y anexos'
    },
    {
      program: 'Maestría',
      docType: 'Trabajo de Grado',
      maxPages: '150 páginas',
      note: 'Límite máximo permitido por la normativa'
    },
    {
      program: 'Doctorado',
      docType: 'Tesis Doctoral',
      maxPages: '300 páginas',
      note: 'Investigación doctoral exhaustiva'
    }
  ],
  annexRule: {
    title: 'Nota sobre los Apéndices (Anexos)',
    description: 'Los anexos forman parte integral de la paginación final del trabajo. Deben ordenarse alfabéticamente en mayúsculas (Ej: Anexo A, Anexo B) y cada uno debe comenzar obligatoriamente en una página separada.'
  },
  fullPromptText: `CONFIGURACIÓN EXACTA DE MICROSOFT WORD (NORMATIVA UNELLEZ):
- Tamaño de Papel: Carta (Letter, 21.59 × 27.94 cm / 8.5 × 11 pulg).
- Márgenes de Página:
  * Izquierdo: 4.0 cm (para correcta encuadernación)
  * Derecho: 3.0 cm
  * Superior: 3.0 cm
  * Inferior: 3.0 cm
  * Orientación: Vertical
- Tipografía Permitida:
  * Fuentes: Arial, Times New Roman o Courier New (mantener una sola en todo el trabajo)
  * Tamaño Base: 12 puntos para el cuerpo principal del texto
- Espaciado Interlineal:
  * Texto General: Espacio y medio (1.5)
  * Espacio Simple (1.0): Para Resumen, Bibliografía, Notas al pie, títulos de varias líneas y citas largas
- Sangrías y Párrafos:
  * Párrafos sin sangría inicial ("sin sangrar", 0 cm)
  * Prevalece el margen de encuadernación izquierdo de 4 cm
- Excepciones Tipográficas:
  * Títulos de Capítulos: 12 o 14 puntos en negrita
  * Citas Textuales Largas (>40 palabras / >3 líneas): 1.0 espacio interlineal, 10-11 pt, cursiva y márgenes reducidos
  * Tablas y Figuras: 10 a 12 puntos
  * Notas al Pie: 1.0 espacio, estrictamente 10 puntos
- Límites Máximos de Extensión:
  * Trabajo Técnico: 70 páginas
  * Trabajo Especial de Grado: 70 páginas
  * Trabajo de Grado (Maestría): 150 páginas
  * Tesis Doctoral: 300 páginas
- Anexos (Apéndices):
  * Orden alfabético en mayúsculas (Anexo A, Anexo B). Cada anexo comienza en página separada.`
};

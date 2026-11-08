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

export interface NormativeConfig {
  id: 'unellez' | 'apa';
  name: string;
  shortName: string;
  legalBadge: string;
  legalResolution: string;
  institution: string;
  scope: string;
  summary: string;
  paperName: string;
  paperDimensions: string;
  margins: {
    left: { value: string; num: number; unit: string; note: string };
    right: { value: string; num: number; unit: string; note: string };
    top: { value: string; num: number; unit: string; note: string };
    bottom: { value: string; num: number; unit: string; note: string };
  };
  paragraphIndent: {
    firstLine: string;
    description: string;
  };
  lineSpacing: {
    general: string;
    exceptions: string;
    paragraphSpacing: string;
  };
  typography: {
    fonts: string;
    size: string;
    rule: string;
  };
  alignment: {
    type: string;
    note: string;
  };
  pageNumbering: {
    position: string;
    rule: string;
  };
  categories: WordConfigCategory[];
  exceptions: TypographicException[];
  extensionLimits?: AcademicLimitItem[];
  annexRule?: {
    title: string;
    description: string;
  };
  fullPromptText: string;
}

export const UNELLEZ_RECIPE_CONFIG: NormativeConfig = {
  id: 'unellez',
  name: 'Normativa UNELLEZ Oficial (Resolución CD330)',
  shortName: 'UNELLEZ (Res. CD330)',
  legalBadge: 'Resolución CD330 Oficial',
  legalResolution: 'Reglamento de Trabajos y Tesis de Grado · UNELLEZ (Resolución CD330)',
  institution: 'UNELLEZ (Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora)',
  scope: 'Trabajos Técnicos, Especiales de Grado, Trabajos de Grado y Tesis Doctorales',
  summary: 'Parámetros obligatorios fijados por la Resolución CD330 de la UNELLEZ: margen izquierdo amplio de 4 cm para encuadernación, interlineado 1.5 y párrafos sin sangría inicial.',
  paperName: 'Carta (Letter)',
  paperDimensions: '21.59 × 27.94 cm (8.5 × 11 pulg)',
  margins: {
    left: { value: '4.0', num: 4.0, unit: 'cm', note: 'Margen amplio para encuadernación obligatoria' },
    right: { value: '3.0', num: 3.0, unit: 'cm', note: 'Margen lateral derecho' },
    top: { value: '3.0', num: 3.0, unit: 'cm', note: 'Margen superior estándar' },
    bottom: { value: '3.0', num: 3.0, unit: 'cm', note: 'Margen inferior estándar' }
  },
  paragraphIndent: {
    firstLine: '0 cm (Sin sangría)',
    description: 'Los párrafos comienzan sin sangría inicial ("sin sangrar"). Prevalece el margen de encuadernación de 4 cm.'
  },
  lineSpacing: {
    general: '1.5 (Espacio y medio)',
    exceptions: '1.0 (Simple) en Resumen, Bibliografía, Notas al pie y citas > 40 palabras',
    paragraphSpacing: 'Sin espaciado anterior/posterior excesivo'
  },
  typography: {
    fonts: 'Arial, Times New Roman o Courier New',
    size: '12 puntos (cuerpo de texto principal)',
    rule: 'Mantener la misma tipografía de manera estricta y uniforme en todo el documento'
  },
  alignment: {
    type: 'Justificada',
    note: 'Texto justificado homogéneo en ambos márgenes (izquierdo y derecho)'
  },
  pageNumbering: {
    position: 'Esquina superior derecha (o centrada inferior)',
    rule: 'Páginas preliminares en números romanos en minúscula; texto en números arábigos'
  },
  categories: [
    {
      title: 'A. Márgenes y Papel Carta UNELLEZ',
      icon: 'Square',
      badge: 'Disposición > Márgenes Personalizados',
      wordMenuPath: 'Vaya a Disposición > Márgenes > Márgenes personalizados...',
      items: [
        { label: 'Margen Izquierdo', value: '4.0', unit: 'cm', note: 'Encuadernación oficial UNELLEZ (CD330)', highlight: true },
        { label: 'Margen Derecho', value: '3.0', unit: 'cm', note: 'Margen lateral derecho', highlight: true },
        { label: 'Margen Superior', value: '3.0', unit: 'cm', note: 'Borde superior', highlight: true },
        { label: 'Margen Inferior', value: '3.0', unit: 'cm', note: 'Borde inferior', highlight: true },
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
      title: 'C. Espaciado Interlineal UNELLEZ',
      icon: 'AlignLeft',
      badge: 'Inicio > Párrafo > Interlineado',
      wordMenuPath: 'En Inicio > Párrafo, seleccione 1.5 para el texto general, y 1.0 (sencillo) para excepciones.',
      items: [
        { label: 'Texto General', value: '1.5', unit: 'espacio y medio', note: 'Interlineado general obligatorio', highlight: true },
        { label: 'Espacio Simple (1.0)', value: '1.0', unit: 'sencillo', note: 'Para Resumen, Bibliografía, Notas al pie, citas largas y títulos multilínea', highlight: true }
      ]
    },
    {
      title: 'D. Sangrías y Párrafos UNELLEZ',
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
  fullPromptText: `CONFIGURACIÓN EXACTA DE MICROSOFT WORD (NORMATIVA UNELLEZ - RESOLUCIÓN CD330):
- Tamaño de Papel: Carta (Letter, 21.59 × 27.94 cm / 8.5 × 11 pulg).
- Márgenes de Página:
  * Izquierdo: 4.0 cm (para correcta encuadernación institucional)
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

export const APA_RECIPE_CONFIG: NormativeConfig = {
  id: 'apa',
  name: 'Normas APA (7.ª Edición Oficial)',
  shortName: 'Normas APA 7.ª Ed.',
  legalBadge: 'Estándar Internacional APA 7',
  legalResolution: 'Manual de Publicación de la American Psychological Association (7.ª Edición)',
  institution: 'American Psychological Association (APA)',
  scope: 'Artículos científicos, tesis de grado, ensayos académicos e investigaciones internacionales',
  summary: 'Estándar global de estilo académico: márgenes uniformes de 2.54 cm (1 pulgada) en los 4 costados, sangría de primera línea obligatoria de 1.27 cm (0.5 pulg) e interlineado doble (2.0) en todo el texto.',
  paperName: 'Carta (Letter)',
  paperDimensions: '21.59 × 27.94 cm (8.5 × 11 pulg)',
  margins: {
    left: { value: '2.54', num: 2.54, unit: 'cm (1 pulg)', note: 'Margen estándar APA simétrico' },
    right: { value: '2.54', num: 2.54, unit: 'cm (1 pulg)', note: 'Margen estándar APA simétrico' },
    top: { value: '2.54', num: 2.54, unit: 'cm (1 pulg)', note: 'Margen estándar APA simétrico' },
    bottom: { value: '2.54', num: 2.54, unit: 'cm (1 pulg)', note: 'Margen estándar APA simétrico' }
  },
  paragraphIndent: {
    firstLine: '1.27 cm (0.5 pulg / Tab)',
    description: 'Sangría obligatoria en la primera línea de cada párrafo (0.5 pulgadas o una pulsación de tecla Tab).'
  },
  lineSpacing: {
    general: '2.0 (Doble espacio estricto)',
    exceptions: 'Doble en todo el documento (cuerpo, resumen, citas en bloque y referencias)',
    paragraphSpacing: '0 puntos antes y después (sin espacio extra entre párrafos)'
  },
  typography: {
    fonts: 'Times New Roman 12 pt, Calibri 11 pt, Arial 11 pt, Georgia 11 pt',
    size: '11 o 12 pt según la fuente elegida',
    rule: 'Fuentes legibles aprobadas; mantener la misma fuente en portada, cuerpo y referencias'
  },
  alignment: {
    type: 'Alineado a la Izquierda (No justificado)',
    note: 'Alineación a la izquierda con margen derecho irregular ("ragged right" / sin justificar)'
  },
  pageNumbering: {
    position: 'Esquina superior derecha (1.27 cm del borde)',
    rule: 'Números arábigos correlativos a partir de la portada (página 1)'
  },
  categories: [
    {
      title: 'A. Márgenes y Papel Carta APA 7',
      icon: 'Square',
      badge: 'Disposición > Márgenes > Normal (2.54 cm)',
      wordMenuPath: 'Vaya a Disposición > Márgenes > Normal (o Personalizados: 2.54 cm en los 4 bordes).',
      items: [
        { label: 'Margen Izquierdo', value: '2.54', unit: 'cm (1")', note: '1 pulgada en los 4 bordes', highlight: true },
        { label: 'Margen Derecho', value: '2.54', unit: 'cm (1")', note: '1 pulgada simétrica', highlight: true },
        { label: 'Margen Superior', value: '2.54', unit: 'cm (1")', note: '1 pulgada simétrica', highlight: true },
        { label: 'Margen Inferior', value: '2.54', unit: 'cm (1")', note: '1 pulgada simétrica', highlight: true },
        { label: 'Tamaño de Papel', value: 'Carta', unit: 'Letter', note: '21.59 × 27.94 cm (8.5 × 11 pulg)', highlight: true },
        { label: 'Orientación', value: 'Vertical', unit: 'Retrato', note: 'Orientación vertical en todo el texto' }
      ]
    },
    {
      title: 'B. Tipografías Oficiales Aprobadas APA 7',
      icon: 'Type',
      badge: 'Inicio > Fuente',
      wordMenuPath: 'Inicio > Fuente. APA 7 admite fuentes con o sin serifa con tamaños exactos especificados.',
      items: [
        { label: 'Times New Roman', value: '12', unit: 'pt (Serif)', note: 'Clásica y formal para impresos', highlight: true },
        { label: 'Calibri / Arial', value: '11', unit: 'pt (Sans)', note: 'Moderna y óptima para pantallas', highlight: true },
        { label: 'Georgia', value: '11', unit: 'pt (Serif)', note: 'Alta legibilidad en textos largos', highlight: true }
      ]
    },
    {
      title: 'C. Espaciado e Interlineado Doble APA 7',
      icon: 'AlignLeft',
      badge: 'Inicio > Párrafo > Interlineado 2.0',
      wordMenuPath: 'Inicio > Párrafo > Interlineado 2.0 (Doble). Espaciado anterior: 0 pto, posterior: 0 pto.',
      items: [
        { label: 'Interlineado', value: '2.0', unit: 'Doble estricto', note: 'En todo el documento sin excepciones', highlight: true },
        { label: 'Espaciado Extra', value: '0', unit: 'pto', note: 'No insertar líneas en blanco entre párrafos', highlight: true }
      ]
    },
    {
      title: 'D. Sangrías de Párrafo y Referencias',
      icon: 'Indent',
      badge: 'Disposición > Párrafo > Especial: Primera línea',
      wordMenuPath: 'En Párrafo > Sangría especial: Primera línea en 1.27 cm (0.5 pulg). Para referencias: Francesa en 1.27 cm.',
      items: [
        { label: 'Primera Línea', value: '1.27', unit: 'cm (0.5 pulg)', note: 'Al inicio de cada párrafo del cuerpo', highlight: true },
        { label: 'Sangría Francesa', value: '1.27', unit: 'cm (0.5 pulg)', note: 'Obligatoria en la lista de Referencias', highlight: true }
      ]
    }
  ],
  exceptions: [
    {
      title: 'Cita en Bloque (> 40 palabras)',
      fontSize: 'Mismo tamaño (11 o 12 pt)',
      spacing: '2.0 (Doble)',
      style: 'Sangría en bloque 1.27 cm',
      description: 'Párrafo independiente sin comillas. Todo el bloque lleva sangría izquierda de 1.27 cm (0.5 pulg). Si tiene varios párrafos, los siguientes llevan sangría adicional de 1.27 cm.'
    },
    {
      title: 'Lista de Referencias Bibliográficas',
      fontSize: 'Mismo tamaño base',
      spacing: '2.0 (Doble)',
      style: 'Sangría francesa de 1.27 cm',
      description: 'La primera línea de cada referencia va al ras del margen izquierdo y las líneas siguientes llevan sangría francesa de 1.27 cm.'
    },
    {
      title: 'Tablas y Figuras',
      fontSize: '10 a 12 pt',
      spacing: '1.0, 1.5 o 2.0',
      style: 'Flexible según claridad',
      description: 'Dentro de celdas de tablas se permite interlineado simple o 1.5 si mejora la legibilidad. Notas al pie de tablas en doble o simple.'
    },
    {
      title: 'Notas al Pie de Página',
      fontSize: '10 pt',
      spacing: '1.0 o 2.0',
      style: 'Al final de página',
      description: 'Texto breve al pie de página numerado secuencialmente en superíndice (1, 2, 3).'
    }
  ],
  fullPromptText: `CONFIGURACIÓN EXACTA DE MICROSOFT WORD (NORMAS APA 7.ª EDICIÓN):
- Tamaño de Papel: Carta (Letter, 21.59 × 27.94 cm / 8.5 × 11 pulg).
- Márgenes de Página:
  * Superior: 2.54 cm (1 pulgada)
  * Inferior: 2.54 cm (1 pulgada)
  * Izquierdo: 2.54 cm (1 pulgada)
  * Derecho: 2.54 cm (1 pulgada)
  * Simétricos en los cuatro bordes
- Tipografía Oficial Permitida (elegir una):
  * Times New Roman 12 pt
  * Calibri 11 pt
  * Arial 11 pt
  * Georgia 11 pt
- Espaciado e Interlineado:
  * Interlineado Doble (2.0) en todo el texto
  * Sin espacio adicional entre párrafos (Anterior: 0 pto / Posterior: 0 pto)
- Sangrías:
  * Primera línea de cada párrafo: 1.27 cm (0.5 pulgadas / tecla Tab)
  * Citas en bloque (>40 palabras): Sangría izquierda de 1.27 cm en todo el bloque
  * Lista de referencias: Sangría francesa de 1.27 cm
- Alineación del Texto:
  * Alineado a la izquierda ("ragged right", sin justificar)
- Paginación:
  * Número de página en la esquina superior derecha de cada página desde la portada (a 1.27 cm del borde superior).`
};

export const COMPARISON_TABLE = [
  {
    feature: 'Márgenes de Página',
    unellez: 'Izq: 4.0 cm (Encuadernación) · Der, Sup, Inf: 3.0 cm',
    apa: 'Simétrico: 2.54 cm (1 pulgada) en los 4 bordes',
    impact: 'UNELLEZ reserva 1.46 cm extra a la izquierda para empastar.'
  },
  {
    feature: 'Tamaño de Papel',
    unellez: 'Carta (Letter, 21.59 × 27.94 cm)',
    apa: 'Carta (Letter, 21.59 × 27.94 cm)',
    impact: 'Ambas normativas coinciden en formato Carta.'
  },
  {
    feature: 'Sangría de Párrafo',
    unellez: 'Sin sangría (0 cm, "sin sangrar")',
    apa: 'Sangría 1.ª línea obligatoria de 1.27 cm (0.5")',
    impact: 'En UNELLEZ no se aplica Tab; en APA el Tab es mandatorio.'
  },
  {
    feature: 'Interlineado General',
    unellez: '1.5 (Espacio y medio); 1.0 en excepciones',
    apa: '2.0 (Doble estricto en todo el trabajo)',
    impact: 'APA genera documentos con más páginas por el doble espacio.'
  },
  {
    feature: 'Alineación de Texto',
    unellez: 'Justificada en ambos márgenes',
    apa: 'Alineado a la izquierda (margen derecho irregular)',
    impact: 'UNELLEZ busca bloques sólidos; APA evita ríos de espacio.'
  },
  {
    feature: 'Fuentes Permitidas',
    unellez: 'Arial, Times New Roman o Courier New (12 pt base)',
    apa: 'Times 12 pt, Calibri 11 pt, Arial 11 pt, Georgia 11 pt',
    impact: 'Ambas exigen coherencia tipográfica de inicio a fin.'
  },
  {
    feature: 'Citas Largas (>40 pal.)',
    unellez: 'Interlineado 1.0 (Simple), 10-11 pt, cursiva',
    apa: 'Interlineado 2.0 (Doble), mismo tamaño, sin comillas ni cursiva',
    impact: 'En UNELLEZ se reduce tamaño y espacio; en APA se mantiene.'
  }
];

// Default backward compatibility export:
export const WORD_RECIPE_CONFIG = UNELLEZ_RECIPE_CONFIG;

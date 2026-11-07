import { DocumentItem } from '../types';

export const DOCUMENTS_DATA: DocumentItem[] = [
  // ==========================================
  // ÁMBITO ESCOLAR (1 - 5)
  // ==========================================
  {
    id: 1,
    category: 'escolar',
    categoryLabel: 'Ámbito Escolar',
    categoryEmoji: '🏫',
    title: 'Resumen / Síntesis',
    shortDef: 'Texto que extrae y presenta con objetividad las ideas clave de un documento original usando palabras propias o del autor.',
    purpose: 'Ideal para técnicas de estudio, preparación de exámenes o para evidenciar comprensión lectora ante un profesor.',
    length: 'Entre el 10% y el 25% del texto original (1-2 páginas máximo).',
    tone: 'Formal, objetivo e informativo.',
    structure: [
      { step: 1, title: 'Referencia del texto base', description: 'Autor, título, año y fuente del documento analizado.' },
      { step: 2, title: 'Idea principal o tema central', description: 'Planteamiento de la tesis central del autor en una frase clara.' },
      { step: 3, title: 'Ideas secundarias articuladas', description: 'Argumentos y datos secundarios organizados lógicamente con conectores.' },
      { step: 4, title: 'Conclusión o cierre original', description: 'Síntesis final reflejando el desenlace del texto fuente, sin valoraciones personales.' }
    ],
    commonErrors: [
      'Copiar y pegar fragmentos literales sin conectar ideas (patchwriting).',
      'Incluir opiniones, juicios de valor o reflexiones personales.',
      'Alterar la jerarquía de las ideas del autor original omitiendo lo esencial.'
    ],
    template: 'El texto "La Revolución Industrial" de J. Smith (2020) expone cómo la mecanización transformó la sociedad del siglo XIX. El autor argumenta que el cambio de una economía agraria a una industrial generó un crecimiento económico sin precedentes. Como ideas secundarias, destaca la creación de la máquina de vapor y el surgimiento del proletariado urbano. En conclusión, Smith afirma que este periodo sentó las bases del capitalismo moderno, a pesar de las duras condiciones laborales iniciales.',
    checklist: [
      '¿Están presentes todas las ideas clave del texto original?',
      '¿Es completamente objetivo y sin opiniones propias?',
      '¿El texto fluye de manera lógica y cohesionada?',
      '¿Se respeta la proporción de extensión sugerida (10-25%)?'
    ]
  },
  {
    id: 2,
    category: 'escolar',
    categoryLabel: 'Ámbito Escolar',
    categoryEmoji: '🏫',
    title: 'Trabajo monográfico o de investigación escolar',
    shortDef: 'Documento expositivo-argumentativo que aborda un tema específico apoyado en la consulta de fuentes bibliográficas.',
    purpose: 'Evaluar la capacidad de investigación, análisis crítico y redacción del estudiante al término de un trimestre o curso.',
    length: '5 a 15 páginas.',
    tone: 'Académico básico, formal y en tercera persona.',
    structure: [
      { step: 1, title: 'Portada', description: 'Datos del alumno, colegio, asignatura, profesor y título claro.' },
      { step: 2, title: 'Índice o Tabla de contenido', description: 'Estructura paginada con capítulos y subtemas numerados.' },
      { step: 3, title: 'Introducción', description: 'Presentación del tema, justificación y objetivos del trabajo.' },
      { step: 4, title: 'Desarrollo', description: 'Cuerpo del trabajo dividido en subtemas jerárquicos (1., 1.1, 1.2).' },
      { step: 5, title: 'Conclusión', description: 'Síntesis analítica de lo aprendido respondiendo a los objetivos.' },
      { step: 6, title: 'Bibliografía', description: 'Lista de fuentes consultadas en formato estándar (libros, artículos, webs).' }
    ],
    commonErrors: [
      'Plagiar información de internet o copiar fuentes sin citar la autoría.',
      'Falta de un hilo conductor (crear una colección inconexa de datos sueltos).',
      'No incluir una conclusión propia fundamentada, limitándose a cortar el texto.'
    ],
    template: 'Introducción: El presente trabajo investiga las causas y consecuencias del calentamiento global... Desarrollo: 1. Efecto invernadero. Los gases acumulados... 2. Impacto en la biodiversidad. Según la ONU... Conclusión: En definitiva, la acción humana es el principal acelerador de este fenómeno, por lo que es urgente tomar medidas a nivel escolar y global. Bibliografía: [Lista de libros y webs consultadas].',
    checklist: [
      '¿Tiene una portada completa y un índice exacto con números de página?',
      '¿La introducción plantea con claridad de qué trata el trabajo y sus objetivos?',
      '¿Están debidamente citadas todas las fuentes de información?',
      '¿La conclusión resume los hallazgos principales con redacción propia?'
    ]
  },
  {
    id: 3,
    category: 'escolar',
    categoryLabel: 'Ámbito Escolar',
    categoryEmoji: '🏫',
    title: 'Informe de laboratorio o de práctica',
    shortDef: 'Documento que describe paso a paso un experimento científico o práctica técnica detallando los resultados obtenidos.',
    purpose: 'Requerido en asignaturas de ciencias (Biología, Física, Química) para demostrar la aplicación del método científico empírico.',
    length: '2 a 5 páginas.',
    tone: 'Científico, descriptivo, preciso, impersonal o en primera persona del plural (nosotros).',
    structure: [
      { step: 1, title: 'Título de la práctica', description: 'Nombre descriptivo del experimento realizado.' },
      { step: 2, title: 'Objetivo', description: '¿Qué hipótesis o fenómeno se busca demostrar o cuantificar?' },
      { step: 3, title: 'Materiales e instrumental', description: 'Relación exhaustiva de reactivos, aparatos y muestras.' },
      { step: 4, title: 'Procedimiento experimental', description: 'Pasos secuenciales detallados para permitir su replicabilidad.' },
      { step: 5, title: 'Resultados', description: 'Datos cuantitativos, tablas de medición, gráficos y observaciones.' },
      { step: 6, title: 'Conclusiones', description: 'Interpretación de datos y verificación de cumplimiento del objetivo inicial.' }
    ],
    commonErrors: [
      'Omitir pasos clave en el procedimiento impidiendo que otro estudiante replique la práctica.',
      'Falsificar o inventar resultados si el experimento salió mal (en lugar de explicar las fuentes de error).',
      'Confundir "resultados" (datos objetivos observados) con "conclusiones" (interpretación científica).'
    ],
    template: 'Práctica: Observación de células vegetales. Objetivo: Identificar la pared celular y el núcleo en tejido de cebolla. Materiales: Microscopio, portaobjetos, azul de metileno, epidermis de cebolla. Procedimiento: 1. Se extrajo una fina capa... 2. Se tiñó con una gota... Resultados: Se observaron estructuras poliédricas con un punto oscuro central. Conclusión: El azul de metileno permitió contrastar y confirmar la presencia del núcleo eucariota en las células observadas.',
    checklist: [
      '¿Están listados absolutamente todos los materiales y reactivos?',
      '¿El procedimiento es claro, secuencial y reproducible?',
      '¿Los resultados incluyen medidas exactas, tablas u observaciones claras?',
      '¿Las conclusiones responden directamente a la hipótesis y objetivo inicial?'
    ]
  },
  {
    id: 4,
    category: 'escolar',
    categoryLabel: 'Ámbito Escolar',
    categoryEmoji: '🏫',
    title: 'Cuestionario y examen escrito',
    shortDef: 'Formato de evaluación donde el estudiante debe redactar respuestas argumentadas o descriptivas a preguntas abiertas.',
    purpose: 'Medir el nivel de retención, análisis y capacidad de expresión escrita bajo presión de tiempo.',
    length: 'Desde un párrafo (preguntas cortas) hasta 1-2 páginas (preguntas de ensayo).',
    tone: 'Formal, directo y riguroso.',
    structure: [
      { step: 1, title: 'Reafirmación de la pregunta', description: 'Iniciar vinculando la premisa para dar contexto directo.' },
      { step: 2, title: 'Respuesta directa (El "qué")', description: 'Declaración central e inequívoca del concepto o solución.' },
      { step: 3, title: 'Justificación o desarrollo', description: 'El "por qué" o "cómo" apoyado en teorías, causas o ejemplos de clase.' },
      { step: 4, title: 'Cierre breve', description: 'Frase conclusiva de síntesis (opcional según la extensión).' }
    ],
    commonErrors: [
      'Responder con rodeos o relleno sin llegar nunca al punto solicitado por la pregunta.',
      'Olvidar justificar la respuesta con datos, autores o conceptos técnicos vistos en clase.',
      'Redacción apresurada con tachones, letra ilegible o faltas graves de ortografía y puntuación.'
    ],
    template: 'Pregunta: Explica las causas de la Revolución Francesa. Respuesta: Las causas de la Revolución Francesa (1789) fueron de índole política, económica y social. Políticamente, el absolutismo de Luis XVI generaba descontento. Económicamente, el país atravesaba una crisis por malas cosechas y deudas de guerra. Socialmente, la burguesía exigía participación política frente a los privilegios de la nobleza. Por tanto, la suma de desigualdad social y ruina económica detonó el estallido revolucionario.',
    checklist: [
      '¿Respondí con exactitud al verbo de la instrucción (explicar, comparar, definir, justificar)?',
      '¿La idea principal está al inicio mismo de la respuesta?',
      '¿Incluí al menos un ejemplo o concepto clave del temario evaluado?',
      '¿Revisé ortografía, acentos y signos de puntuación antes de entregar?'
    ]
  },
  {
    id: 5,
    category: 'escolar',
    categoryLabel: 'Ámbito Escolar',
    categoryEmoji: '🏫',
    title: 'Carta formal escolar (a dirección o tutores)',
    shortDef: 'Comunicación oficial dirigida a autoridades educativas para formular peticiones, justificaciones o reclamos formales.',
    purpose: 'Justificar inasistencias prolongadas por causas médicas, solicitar permisos especiales o tramitar una solicitud institucional.',
    length: '1 página (corta y concisa).',
    tone: 'Muy formal, respetuoso, sobrio y cortés.',
    structure: [
      { step: 1, title: 'Lugar y fecha', description: 'Alineado a la derecha o izquierda en el encabezado.' },
      { step: 2, title: 'Destinatario', description: 'Nombre completo, título honorífico y cargo directivo exacto.' },
      { step: 3, title: 'Saludo formal', description: 'Fórmula de cortesía institucional (Estimada Directora / Distinguido Tutor).' },
      { step: 4, title: 'Cuerpo de la carta', description: 'Exposición nítida del motivo, hechos concretos y solicitud expresa.' },
      { step: 5, title: 'Despedida formal', description: 'Fórmula protocolar de cierre y agradecimiento.' },
      { step: 6, title: 'Firma y remitente', description: 'Firma manuscrita/digital, nombre completo, DNI/cédula y teléfono de contacto.' }
    ],
    commonErrors: [
      'Usar un tono coloquial, informal o excesivamente emocional / dramático.',
      'Omitir datos indispensables (nombre completo del alumno, curso, grupo, fechas exactas).',
      'Falta de firma manuscrita y ausencia de documentos probatorios adjuntos.'
    ],
    template: 'Madrid, 15 de marzo de 2024. A la atención de Dña. Marta López, Directora del IES San Juan. Estimada directora: Me dirijo a usted en calidad de representante de Carlos Pérez, alumno de 3ºA, para solicitar formalmente la justificación de sus faltas de asistencia de los días 10 a 12 de marzo, debidas a un proceso viral (adjunto certificado médico). Agradeciendo de antemano su atención, quedo a su disposición. Atentamente, [Firma] Laura Gómez.',
    checklist: [
      '¿Están correctamente escritos el nombre, cargo y centro del destinatario?',
      '¿El motivo exacto de la petición queda claro en el primer párrafo?',
      '¿Se especifica y adjunta la documentación justificativa pertinente?',
      '¿El tono mantiene el debido respeto institucional de principio a fin?'
    ]
  },

  // ==========================================
  // ÁMBITO UNIVERSITARIO (6 - 14)
  // ==========================================
  {
    id: 6,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Ensayo académico',
    shortDef: 'Texto argumentativo donde el autor analiza, interpreta o evalúa un tema defendiendo una tesis original con respaldo científico.',
    purpose: 'Desarrollar el pensamiento crítico, argumentar posturas teóricas complejas y demostrar dominio profundo de la asignatura.',
    length: '3 a 10 páginas.',
    tone: 'Analítico, persuasivo, formal y en tercera persona o infinitivo.',
    structure: [
      { step: 1, title: 'Título atractivo y descriptivo', description: 'Refleja con precisión el problema y enfoque analítico.' },
      { step: 2, title: 'Introducción con Tesis', description: 'Contextualización del problema y formulación explícita de la tesis central.' },
      { step: 3, title: 'Desarrollo argumentativo', description: 'Párrafos temáticos con argumentos, contraargumentos, evidencias y citas.' },
      { step: 4, title: 'Conclusión', description: 'Reafirmación de la tesis a la luz de los argumentos e implicaciones teóricas.' },
      { step: 5, title: 'Referencias bibliográficas', description: 'Listado estricto bajo normativa APA 7ma edición.' }
    ],
    commonErrors: [
      'Ser meramente descriptivo (un simple resumen informativo) sin defender una tesis original.',
      'Argumentar basándose en opiniones subjetivas sin evidencia empírica ni citas académicas.',
      'Falta de transiciones fluidas entre párrafos, fragmentando el hilo argumental.'
    ],
    template: 'Título: La inteligencia artificial como coautor: implicaciones éticas. Introducción: (...) Por ello, este ensayo sostiene (tesis) que la IA no debe ser considerada autora, sino una herramienta técnica, dado que carece de responsabilidad moral. Desarrollo: En primer lugar, la responsabilidad legal recae en el usuario (Bostrom, 2019). Como evidencia... Conclusión: En definitiva, otorgar autoría a algoritmos desvirtúa la responsabilidad ética humana intrínseca a la creación académica.',
    checklist: [
      '¿Tengo una tesis clara, debatible y explícita en la introducción?',
      '¿Cada párrafo del desarrollo aporta una evidencia sólida que sustenta la tesis?',
      '¿Están todas las afirmaciones respaldadas por fuentes citadas según APA?',
      '¿La conclusión sintetiza el razonamiento sin introducir nueva información?'
    ]
  },
  {
    id: 7,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Trabajo de fin de grado/máster (TFG/TFM)',
    shortDef: 'Investigación rigurosa, original y extensa que demuestra la adquisición de competencias del título, defendida ante tribunal.',
    purpose: 'Requisito indispensable y culminante para la obtención del título universitario de Grado o Máster.',
    length: 'TFG: 30-50 páginas / TFM: 50-80 páginas.',
    tone: 'Altamente académico, científico, metódico e impersonal.',
    structure: [
      { step: 1, title: 'Portada institucional', description: 'Plantilla oficial de la universidad con director, departamento y curso.' },
      { step: 2, title: 'Resumen (Abstract) y Keywords', description: 'Síntesis bilingüe (español e inglés) de 250 palabras con palabras clave.' },
      { step: 3, title: 'Índices', description: 'Sumario general paginado, índice de tablas y de figuras.' },
      { step: 4, title: 'Introducción y Objetivos', description: 'Justificación del problema, objetivos generales/específicos e hipótesis.' },
      { step: 5, title: 'Marco teórico / Estado del arte', description: 'Revisión crítica de la literatura científica actualizada (últimos 5 años).' },
      { step: 6, title: 'Metodología', description: 'Diseño de investigación, muestra, instrumentos, variables y análisis.' },
      { step: 7, title: 'Resultados y Discusión', description: 'Presentación rigurosa de hallazgos y contraste crítico con autores previos.' },
      { step: 8, title: 'Conclusiones y Líneas futuras', description: 'Respuesta punto a punto a cada objetivo planteado y limitaciones.' },
      { step: 9, title: 'Referencias y Anexos', description: 'Bibliografía normalizada y material complementario no intrusivo.' }
    ],
    commonErrors: [
      'Desalineación entre los objetivos iniciales y las conclusiones finales alcanzadas.',
      'Metodología difusa, incompleta o mal justificada que invalida los hallazgos.',
      'Plagio por mal manejo de citas textuales o paráfrasis deficientes (patchwriting).'
    ],
    template: '(Fragmento de Abstract): El presente Trabajo de Fin de Grado investiga el impacto del teletrabajo en la productividad del sector tecnológico español pospandemia. Mediante un diseño metodológico mixto (encuestas a 200 empleados y entrevistas a 10 directivos), los resultados indican un aumento del 15% en el rendimiento medido por objetivos, pero revelan un deterioro en la cohesión de equipo. Se concluye que el modelo híbrido es la solución óptima.',
    checklist: [
      '¿Cumple estrictamente con la guía de estilo y maquetación de la facultad?',
      '¿El abstract contiene los 4 elementos: objetivo, método, resultados y conclusiones?',
      '¿El marco teórico incluye literatura de los últimos 5 años?',
      '¿Las conclusiones responden puntualmente a cada uno de los objetivos formulados?',
      '¿La bibliografía cuenta con formato APA impecable en sangría y puntuación?'
    ]
  },
  {
    id: 8,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Artículo científico (Paper - Formato IMRyD)',
    shortDef: 'Documento breve y rigurosamente estructurado que reporta resultados originales para ser publicado en revistas indexadas.',
    purpose: 'Divulgar descubrimientos válidos ante la comunidad científica internacional y sumar méritos en el currículo investigador.',
    length: '15 a 25 páginas (5.000 a 8.000 palabras).',
    tone: 'Experto, denso, preciso, formal y con uso estricto de terminología científica.',
    structure: [
      { step: 1, title: 'Metadatos & Abstract', description: 'Título bilingüe, autores, filiaciones, resumen estructurado y palabras clave.' },
      { step: 2, title: 'I - Introducción', description: '¿Qué problema se estudia? Estado de la cuestión y vacíos científicos.' },
      { step: 3, title: 'M - Metodología', description: '¿Cómo se estudió? Materiales, métodos, procedimientos y análisis estadístico.' },
      { step: 4, title: 'R - Resultados', description: '¿Qué se encontró? Datos objetivos con tablas y gráficos autoexplicativos.' },
      { step: 5, title: 'D - Discusión', description: '¿Qué significan los hallazgos? Comparación con antecedentes y conclusiones.' },
      { step: 6, title: 'Agradecimientos y Referencias', description: 'Financiación, declaraciones éticas y referencias de impacto.' }
    ],
    commonErrors: [
      'Redundancia entre Resultados (solo exposición de datos) y Discusión (interpretación teórica).',
      'Título impreciso, amarillista o excesivamente genérico que no refleja la variable central.',
      'Ignorar las directrices para autores (Author Guidelines) de la revista indexada de destino.'
    ],
    template: '(Fragmento Metodología): Se realizó un ensayo clínico aleatorizado doble ciego con 150 pacientes diagnosticados con hipertensión tipo 1. El grupo de control (n=75) recibió placebo, mientras que el grupo experimental (n=75) recibió 50mg de X. Las variables fisiológicas se midieron semanalmente durante 3 meses mediante esfigmomanometría digital. Los datos se analizaron con SPSS v.26 usando pruebas T de Student (p<0.05).',
    checklist: [
      '¿El abstract respeta la extensión límite exigida por la revista (ej. 250 palabras)?',
      '¿La sección de métodos permite que cualquier científico replique el estudio?',
      '¿Todas las tablas y gráficos son comprensibles de forma autónoma sin leer el texto?',
      '¿La discusión contextualiza los hallazgos frente a literatura de vanguardia?'
    ]
  },
  {
    id: 9,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Reseña o recensión crítica',
    shortDef: 'Texto que resume y evalúa críticamente una obra académica destacando sus principales aportes y limitaciones metodológicas.',
    purpose: 'Control de lectura profunda en asignaturas teóricas o publicación en revistas especializadas como guía orientativa.',
    length: '2 a 4 páginas.',
    tone: 'Analítico, equilibrado, respetuoso pero rigurosamente crítico.',
    structure: [
      { step: 1, title: 'Ficha bibliográfica completa', description: 'Autor, título, editorial, año, edición y número de páginas.' },
      { step: 2, title: 'Introducción situacional', description: 'Presentación del autor, trayectoria y contexto de publicación.' },
      { step: 3, title: 'Resumen expositivo (50%)', description: 'Exposición equilibrada de la tesis y capítulos nodales de la obra.' },
      { step: 4, title: 'Comentario crítico (50%)', description: 'Evaluación razonada de fortalezas, lagunas teóricas e implicaciones.' },
      { step: 5, title: 'Conclusión y recomendación', description: 'Balance final y determinación del público al que le será de utilidad.' }
    ],
    commonErrors: [
      'Hacer solo un resumen descriptivo sin aportar análisis crítico ni evaluación personal fundamentada.',
      'Criticar destructivamente sin pruebas objetivas o apoyándose en meros prejuicios ideológicos.',
      'Omitir el contexto histórico o intelectual en el que se gestó la obra.'
    ],
    template: 'Ficha: Bauman, Z. (2000). Modernidad líquida. FCE. Reseña: (...) Si bien el análisis de Bauman sobre la precariedad de los vínculos modernos es lúcido y pionero, su enfoque adolece de cierto determinismo pesimista, omitiendo las nuevas formas de solidaridad digital. No obstante, la claridad de sus metáforas convierte a esta obra en una lectura obligatoria para estudiantes de sociología interesados en la posmodernidad.',
    checklist: [
      '¿Están consignados todos los datos bibliográficos técnicos de la obra?',
      '¿Se mantiene la regla de oro: 50% de resumen fiel y 50% de evaluación crítica?',
      '¿Los juicios críticos están sustentados en pasajes y argumentos concretos?',
      '¿Se especifica claramente para qué perfil de investigador o lector es recomendada?'
    ]
  },
  {
    id: 10,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Informe técnico',
    shortDef: 'Documento que expone de forma analítica el diagnóstico de un problema práctico proponiendo soluciones fundamentadas.',
    purpose: 'Frecuente en ingenierías, arquitectura o tecnologías para peritajes, estudios de viabilidad o control de obra.',
    length: 'Variable (10 a 50 páginas).',
    tone: 'Especializado, pragmático, esquemático, directo y aséptico.',
    structure: [
      { step: 1, title: 'Resumen ejecutivo', description: 'Síntesis de alto nivel en 1 página con hallazgo crítico y recomendación.' },
      { step: 2, title: 'Antecedentes y alcance', description: 'Justificación, marco contractual y objetivo de la pericia técnica.' },
      { step: 3, title: 'Análisis técnico e inspección', description: 'Protocolos de ensayo, mediciones, normativas aplicadas y datos empíricos.' },
      { step: 4, title: 'Conclusiones y recomendaciones', description: 'Diagnóstico causal y plan de acción preventivo o correctivo.' },
      { step: 5, title: 'Anexos técnicos', description: 'Planos, certificados de calibración, código fuente y memorias de cálculo.' }
    ],
    commonErrors: [
      'Abundar en teoría académica abstracta cuando se exige un documento eminentemente práctico.',
      'Omitir el resumen ejecutivo inicial (los directores técnicos y decisores solo disponen de minutos).',
      'No referenciar las normas técnicas oficiales o códigos legales vigentes (ISO, UNE, Eurocódigos).'
    ],
    template: 'Objetivo: Evaluar la viabilidad estructural del puente viejo para tráfico pesado. Análisis: Mediante ultrasonido, se detectó fatiga de materiales en las vigas maestras B y C (ver Anexo 1), con una degradación del 22% superando la norma ISO 9001. Conclusiones y recomendaciones: La estructura no soporta cargas superiores a 3 toneladas. Se recomienda cierre inmediato al tráfico de camiones y apuntalamiento preventivo de la viga B.',
    checklist: [
      '¿El resumen ejecutivo sintetiza el problema, riesgo y solución en una sola página?',
      '¿La terminología y jerga técnica están debidamente contextualizadas?',
      '¿Las soluciones recomendadas son viables económica y operativamente?',
      '¿Todos los anexos técnicos están explícitamente citados en el texto central?'
    ]
  },
  {
    id: 11,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Proyecto de investigación',
    shortDef: 'Documento prospectivo que detalla la planificación pormenorizada de una indagación antes de su ejecución.',
    purpose: 'Solicitar financiación ante agencias públicas, postular a becas de doctorado o conseguir la aprobación del tutor.',
    length: '10 a 20 páginas.',
    tone: 'Persuasivo, riguroso, prospectivo (uso preferente de tiempo futuro y condicional).',
    structure: [
      { step: 1, title: 'Título provisional y Justificación', description: 'Planteamiento de la relevancia científica, social o tecnológica del problema.' },
      { step: 2, title: 'Objetivos del proyecto', description: '1 Objetivo General y 3-4 Objetivos Específicos medibles en infinitivo.' },
      { step: 3, title: 'Marco teórico preliminar', description: 'Fundamentos teóricos que sustentan la pertinencia de las hipótesis.' },
      { step: 4, title: 'Metodología propuesta', description: 'Diseño muestral, técnicas de recolección de datos y análisis previsto.' },
      { step: 5, title: 'Cronograma (Diagrama de Gantt)', description: 'Planificación temporal realista por fases mensuales o trimestrales.' },
      { step: 6, title: 'Presupuesto y viabilidad', description: 'Costos de fungibles, personal, desplazamientos e infraestructura requerida.' },
      { step: 7, title: 'Referencias bibliográficas', description: 'Corpus teórico fundacional que valida el estado del arte inicial.' }
    ],
    commonErrors: [
      'Formular objetivos específicos vagos o no medibles (confundir tareas con objetivos).',
      'Diseñar un cronograma irrealista que subestime la complejidad de recolección o permisos éticos.',
      'Justificación endeble sin dejar claro el valor diferencial ni el impacto esperado del proyecto.'
    ],
    template: 'Planteamiento: Existe un vacío de conocimiento sobre la efectividad de las microalgas en la depuración de aguas residuales textiles en zonas áridas. Objetivos: 1. Evaluar la tasa de absorción de tintes de la cepa X. 2. Diseñar un fotobiorreactor a escala piloto. Metodología: Se empleará un enfoque experimental en fases... Cronograma: Mes 1-2 (Revisión teórica), Mes 3-5 (Fase de laboratorio)...',
    checklist: [
      '¿Todos los objetivos arrancan con verbos en infinitivo (evaluar, diseñar, analizar)?',
      '¿Queda inequívocamente demostrada la viabilidad técnica y presupuestaria?',
      '¿El cronograma contempla holguras temporales para contingencias?',
      '¿La metodología da respuesta directa a cada hipótesis planteada?'
    ]
  },
  {
    id: 12,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Presentación oral con apoyo escrito (Guion y Diapositivas)',
    shortDef: 'Conjunto coordinado de síntesis visual (diapositivas) y notas estructuradas para la exposición pública ante un auditorio.',
    purpose: 'Defensas de TFG/TFM, ponencias en congresos académicos o exposiciones de asignaturas ante docentes y compañeros.',
    length: '1 diapositiva por cada 1-2 minutos de exposición. Regla 10/20/30 (10 slides, 20 mins, fuente 30pt).',
    tone: 'Visual, directo, telegráfico en pantalla y dinámico en el discurso oral.',
    structure: [
      { step: 1, title: 'Portada visual', description: 'Título sintético, ponente, director, institución y fecha.' },
      { step: 2, title: 'Hoja de ruta (Outline)', description: 'Esquema visual de los puntos cardinales que se abordarán.' },
      { step: 3, title: 'Cuerpo temático', description: 'Regla de oro: 1 idea central por diapositiva con soporte gráfico predominante.' },
      { step: 4, title: 'Conclusiones clave', description: 'Puntos de impacto fácilmente memorables por la audiencia.' },
      { step: 5, title: 'Agradecimientos y preguntas', description: 'Diapositiva final con datos de contacto y apertura del turno de réplica.' }
    ],
    commonErrors: [
      'Saturar las diapositivas con párrafos densos y dedicarse a leer textualmente la pantalla.',
      'Abuso de transiciones estridentes, animaciones distractivas o fuentes minúsculas (<24pt).',
      'No cronometrar los ensayos previos, sobrepasando el tiempo estricto del tribunal.'
    ],
    template: '(Diapositiva 4 - Resultados) Título: Reducción de Emisiones (2020-2023) [GRÁFICO DE BARRAS CLARO Y AMPLIO] • Descenso global: 14% • Sector más eficiente: Transporte eléctrico. (Notas del orador: "Como pueden observar en el gráfico de la derecha, el año 2022 marcó un punto de inflexión. Esto no se debe al azar, sino a las políticas implementadas en el tercer trimestre, concretamente...")',
    checklist: [
      '¿El tamaño tipográfico es visible a 10 metros de distancia (mínimo 24-30 pt)?',
      '¿Se priorizan infografías y gráficos sobre bloques de texto?',
      '¿El guion del orador cuenta con conectores conversacionales ensayados?',
      '¿Se han anticipado las 3 preguntas más difíciles del tribunal?'
    ]
  },
  {
    id: 13,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Carta de motivación y CV académico',
    shortDef: 'Documentos que exponen el perfil científico, méritos y razones vocacionales para ingresar a un programa selectivo.',
    purpose: 'Postulación a másteres, doctorados, estancias de investigación o becas de excelencia (Erasmus, Fulbright).',
    length: 'CV: 2 páginas. Carta: 1 página (máximo 400-500 palabras).',
    tone: 'Profesional, apasionado, convincente pero equilibrado y humilde.',
    structure: [
      { step: 1, title: 'Encabezado formal', description: 'Datos personales y del comité evaluador de admisiones.' },
      { step: 2, title: 'Introducción de candidatura', description: 'Quién soy, titulación de origen y programa exacto que solicito.' },
      { step: 3, title: 'Trayectoria y encaje académico', description: 'Logros destacados, publicaciones, premios y cómo conectan con la línea investigadora.' },
      { step: 4, title: 'Motivación diferencial', description: 'Por qué este departamento o tutor específico y qué aportaré yo al equipo.' },
      { step: 5, title: 'Cierre protocolario', description: 'Disponibilidad para entrevista y despedida respetuosa.' }
    ],
    commonErrors: [
      'Enviar una carta genérica idéntica a múltiples universidades (error crítico de copia y pega).',
      'Parafrasear mecánicamente el CV sin aportar narrativa motivacional ni contexto cualitativo.',
      'Enfocarse exclusivamente en "lo que la universidad me dará" en vez de "el valor que yo aportaré".'
    ],
    template: 'Estimado Comité de Admisiones: Les escribo para presentar mi candidatura al Máster en Neurociencia. Durante mi Grado en Biología, mi TFG sobre plasticidad sináptica despertó mi interés por las enfermedades neurodegenerativas. Me atrae particularmente su programa por el laboratorio dirigido por la Dra. Martínez. Considero que mi experiencia previa en análisis de datos biomédicos me permitirá aportar valor a su grupo de investigación desde el primer día.',
    checklist: [
      '¿La carta cita profesores, proyectos o asignaturas específicas del máster?',
      '¿El CV prioriza el expediente, becas obtenidas e idiomas certificados?',
      '¿El tono transmite seguridad académica sin rayar en la soberbia?',
      '¿Revisión cero fallos: ni un solo desliz ortográfico en nombres o cargos?'
    ]
  },
  {
    id: 14,
    category: 'universitario',
    categoryLabel: 'Ámbito Universitario',
    categoryEmoji: '🎓',
    title: 'Acta de reunión académica',
    shortDef: 'Documento notarial y oficial que da fe de los asuntos tratados, deliberaciones y acuerdos votados en un cuerpo colegiado.',
    purpose: 'Claustros universitarios, consejos de departamento, defensas de tesis o juntas de delegados para conferir validez legal.',
    length: '1 a 3 páginas.',
    tone: 'Burocrático, objetivo, fedatario e impersonal.',
    structure: [
      { step: 1, title: 'Encabezado protocolar', description: 'Número correlativo de acta, organismo, fecha, hora de inicio y sala.' },
      { step: 2, title: 'Lista de asistencia', description: 'Presentes, excusas justificadas y quórum verificado.' },
      { step: 3, title: 'Orden del día', description: 'Relación cerrada de temas previstos para debate.' },
      { step: 4, title: 'Desarrollo de deliberaciones', description: 'Resumen sintético de posturas institucionales sin caer en diálogos coloquiales.' },
      { step: 5, title: 'Acuerdos adoptados', description: 'Redacción unívoca y registro exacto de votos a favor, en contra y abstenciones.' },
      { step: 6, title: 'Clausura y firmas', description: 'Hora de levantamiento de la sesión y rúbrica del Secretario y Presidente.' }
    ],
    commonErrors: [
      'Redactar una transcripción literal teatral de quién dijo qué en vez de sintetizar posturas.',
      'Olvidar consignar el desglose numérico exacto de votaciones en resoluciones controvertidas.',
      'Demorar la circulación del borrador del acta haciendo que los acuerdos pierdan frescura.'
    ],
    template: 'Acta 04/2024. Reunión de Departamento de Historia. Fecha: 10/05/2024. Asistentes: [Lista]. Orden del día: 1. Aprobación de presupuesto anual. 2. Asignación de TFG. Desarrollo: Se debatió la reducción del presupuesto de excursiones. Acuerdos: 1. Aprobar el presupuesto con la enmienda del Prof. Ruiz (Votos: 10 a favor, 2 en contra). 2. Asignar los TFG según anexo I. Sin más asuntos, se levanta la sesión a las 18:30h. [Firmas].',
    checklist: [
      '¿Están consignados todos los asistentes y ausencias justificadas para el quórum?',
      '¿Los acuerdos son inteligibles por sí mismos sin necesidad de contexto verbal?',
      '¿El escrutinio de cada votación está registrado fielmente?',
      '¿El documento cuenta con el visto bueno del Secretario para su lectura?'
    ]
  },

  // ==========================================
  // ÁMBITO PROFESIONAL (15 - 23)
  // ==========================================
  {
    id: 15,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Correo electrónico formal corporativo',
    shortDef: 'Medio de comunicación digital asíncrono para interacciones laborales cotidianas, solicitudes y seguimiento comercial.',
    purpose: 'Comunicación diaria con clientes, proveedores, juntas directivas o colaboradores en ecosistemas corporativos.',
    length: 'Corto (máximo 3-4 párrafos estructurados).',
    tone: 'Profesional, cordial, ejecutivo y orientado a la acción inmediata.',
    structure: [
      { step: 1, title: 'Línea de Asunto precisa', description: 'Corto, identificativo con etiquetas [ACCIÓN], [URGENTE] o [INFO].' },
      { step: 2, title: 'Saludo formal adecuado', description: 'Estimado/a + Nombre o tratamiento institucional según nivel de confianza.' },
      { step: 3, title: 'Propósito y contexto en 1 línea', description: 'Razón directa del mensaje (regla de la pirámide invertida).' },
      { step: 4, title: 'Llamada a la acción clara (CTA)', description: 'Qué decisión o entrega se necesita, de quién y para qué fecha límite.' },
      { step: 5, title: 'Despedida y firma corporativa', description: 'Cierre cortés, nombre, cargo, empresa, teléfono y redes de contacto.' }
    ],
    commonErrors: [
      'Dejar el asunto en blanco o escribir asuntos ambiguos como "Hola", "Consulta" o "Urgente".',
      'Escribir correos interminables tipo muro de texto en lugar de adjuntar un informe o agendar llamada.',
      'Abusar de "Responder a todos" o ignorar el uso de CCO (Copia Oculta) ante listas de terceros.'
    ],
    template: 'Asunto: Envío de Informe de Ventas Q3 para revisión | Acción requerida\n\nEstimado equipo directivo:\nAdjunto a este correo el Informe de Ventas correspondiente al tercer trimestre. Por favor, revisen la sección 4 referente a métricas de retención, ya que necesitaremos aprobar el nuevo presupuesto en la reunión del próximo martes.\n\nQuedo a su disposición para cualquier duda previa.\nUn cordial saludo,\n[Firma corporativa]',
    checklist: [
      '¿El asunto resume en 6 palabras el objetivo y urgencia del mensaje?',
      '¿El lector sabe exactamente qué acción se espera de él en los primeros 10 segundos?',
      '¿He adjuntado realmente el archivo al que hago mención en el cuerpo del texto?',
      '¿El saludo y despedida corresponden al nivel jerárquico de los interlocutores?'
    ]
  },
  {
    id: 16,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Carta de presentación laboral (Cover Letter)',
    shortDef: 'Documento persuasivo de 1 página que acompaña al currículum conectando logros pasados con las necesidades de la vacante.',
    purpose: 'Postularse a procesos de selección competitivos para humanizar el perfil y destacar frente a otros postulantes.',
    length: '300 a 400 palabras (menos de una cuartilla).',
    tone: 'Comercial, propositivo, profesional, proactivo y empático.',
    structure: [
      { step: 1, title: 'Datos de contacto y fecha', description: 'Remitente y datos del responsable de selección o hiring manager.' },
      { step: 2, title: 'Saludo personalizado', description: 'Dirigido con nombre propio al reclutador (evitar saludos genéricos vacíos).' },
      { step: 3, title: 'Gancho inicial', description: 'Puesto exacto al que se aplica, canal de oferta y propuesta de valor inicial.' },
      { step: 4, title: 'Casos de éxito y solución de dolores', description: 'Ejemplos cuantificables con métricas (% incremento, ahorros, hitos).' },
      { step: 5, title: 'Llamada a la acción y cierre', description: 'Propuesta proactiva de una breve reunión para profundizar detalles.' }
    ],
    commonErrors: [
      'Repetir mecánicamente los mismos puntos del CV como si fuera un duplicado en prosa.',
      'Adoptar un enfoque egocéntrico ("Yo busco aprender") en lugar de corporativo ("Yo soluciono su reto").',
      'No investigar previamente a la compañía y enviar una carta estandarizada sin personalizar.'
    ],
    template: 'Estimada Sra. García (RRHH TechSolutions): Me dirijo a usted con gran entusiasmo para presentar mi candidatura al puesto de Desarrollador Junior publicado en LinkedIn. En mi anterior proyecto, lideré la migración a la nube logrando reducir los tiempos de carga un 30%. Sabiendo que TechSolutions está en pleno proceso de digitalización corporativa, estoy convencido de que mi perfil ágil y mi dominio de AWS serán de valor inmediato para su equipo. Me encantaría discutirlo en una entrevista.',
    checklist: [
      '¿Cito con exactitud el nombre de la compañía y el puesto específico?',
      '¿Destaqué al menos un logro cuantificable con porcentaje o cifra demostrable?',
      '¿La estética tipográfica y márgenes coinciden armónicamente con mi CV?',
      '¿El párrafo final propone una conversación o entrevista de mutuo interés?'
    ]
  },
  {
    id: 17,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Memorándum / Memo interno corporativo',
    shortDef: 'Comunicación interna ágil y ejecutiva para transmitir directrices, cambios de política operativa o anuncios oficiales.',
    purpose: 'Notificar de forma vinculante modificaciones de horarios, normas de seguridad o designaciones a todo un área de trabajo.',
    length: 'Media página (máximo 1 página para normativas complejas).',
    tone: 'Institucional, asertivo, directo, claro y resolutivo.',
    structure: [
      { step: 1, title: 'Cabecera estandarizada', description: 'PARA: / DE: / FECHA: / ASUNTO: (sin saludos informales adicionales).' },
      { step: 2, title: 'Mensaje directo y motivo', description: 'Entrada en el primer enunciado con la resolución tomada.' },
      { step: 3, title: 'Detalles operativos e instrucciones', description: 'Viñetas con horarios, procedimientos y fechas de entrada en vigencia.' },
      { step: 4, title: 'Canal de dudas y seguimiento', description: 'Persona o buzón designado para consultas operativas.' }
    ],
    commonErrors: [
      'Hacerlo excesivamente largo con considerandos teóricos que diluyen el mensaje central.',
      'Utilizar redacciones ambiguas que generen interpretaciones contradictorias en el personal.',
      'Emplearlo para llamados de atención personales o reprensiones que deben ser tratadas en privado.'
    ],
    template: 'MEMORÁNDUM\nPARA: Todo el personal de la Planta 2\nDE: Dirección de Recursos Humanos\nFECHA: 12 de noviembre de 2024\nASUNTO: Modificación del horario de comedor\n\nA partir del próximo lunes 18 de noviembre, el horario de servicio de comedor se ampliará, siendo de 13:00 a 15:30 horas. Este cambio busca evitar aglomeraciones y mejorar su descanso. Para cualquier duda, contactar con Administración.',
    checklist: [
      '¿El asunto identifica inequívocamente el alcance y la urgencia de la medida?',
      '¿Se eliminaron saludos y despedidas superfluas para ir directo al grano?',
      '¿La fecha exacta de entrada en vigor se encuentra resaltada en negrita?',
      '¿Puede ser comprendido en menos de 30 segundos por cualquier empleado?'
    ]
  },
  {
    id: 18,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Informe ejecutivo (Executive Summary)',
    shortDef: 'Síntesis estratégica de alto impacto que resume hallazgos, métricas clave y decisiones recomendadas para directivos.',
    purpose: 'Facilitar a miembros del consejo directivo y directores la toma de decisiones rápidas sin leer el informe técnico de 80 páginas.',
    length: '1 a 3 páginas (habitualmente 1 sola plana de alto impacto).',
    tone: 'Estratégico, analítico, persuasivo y orientado al retorno de negocio.',
    structure: [
      { step: 1, title: 'Propósito y Alcance', description: 'Por qué se elaboró la auditoría o estudio y qué se evalúa.' },
      { step: 2, title: 'Hallazgos principales (Hard Data)', description: 'Métricas clave de desempeño, ventas, costos o desvíos con números duros.' },
      { step: 3, title: 'Análisis de impacto y riesgos', description: 'Consecuencias operativas, reputacionales o financieras de cada escenario.' },
      { step: 4, title: 'Recomendaciones estratégicas', description: 'Plan de acción priorizado con plazos y responsables asignados.' }
    ],
    commonErrors: [
      'Abusar de jerga técnica operativa de bajo nivel (los directivos deciden en términos de rentabilidad y riesgo).',
      'Exponer problemas o desvíos sin presentar de inmediato escenarios concretos de solución.',
      'Omitir viñetas, tablas comparativas y gráficos visuales que permitan lectura en diagonal.'
    ],
    template: 'Propósito: Evaluar el rendimiento de la campaña de marketing del Q1. Hallazgos: El ROI fue del 150%, superando el objetivo en un 20%. Sin embargo, el coste de adquisición por cliente (CAC) en el canal de Instagram aumentó un 35%. Impacto: Disminución proyectada del margen de beneficio neto. Recomendaciones: 1. Pausar campañas de pago en Instagram. 2. Reasignar 20.000€ del presupuesto a Email Marketing, canal que demostró mayor conversión.',
    checklist: [
      '¿Un miembro del comité puede leerlo en 3 minutos y entender qué se debe aprobar?',
      '¿Las métricas financieras y operativas están debidamente resaltadas?',
      '¿Las recomendaciones especifican claramente presupuestos y asignaciones?',
      '¿El lenguaje se concentra en el impacto sobre los objetivos del negocio?'
    ]
  },
  {
    id: 19,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Propuesta comercial o de proyecto (B2B)',
    shortDef: 'Documento de venta consultiva donde se presenta una solución técnica y económica a la medida de los dolores de un cliente.',
    purpose: 'Ganar licitaciones privadas, captar cuentas corporativas de alto ticket o convencer a inversores de financiar una iniciativa.',
    length: '5 a 20 páginas (según la envergadura del contrato).',
    tone: 'Persuasivo, empático, comercial, seguro y respaldado por un diseño visual impecable.',
    structure: [
      { step: 1, title: 'Portada de alto impacto', description: 'Título personalizado con el logotipo del cliente y del proveedor.' },
      { step: 2, title: 'Diagnóstico del dolor del cliente', description: 'Demostrar conocimiento íntimo de los cuellos de botella de su negocio.' },
      { step: 3, title: 'Solución y Valor añadido diferencial', description: 'Propuesta arquitectónica o metodológica explicando beneficios tangibles.' },
      { step: 4, title: 'Cronograma de implantación', description: 'Hitos semanales y entregables claros para minimizar la incertidumbre.' },
      { step: 5, title: 'Presupuesto desglosado (Inversión)', description: 'Esquema transparente de precios, ROI esperado y condiciones de pago.' },
      { step: 6, title: 'Llamada a la acción (Next Steps)', description: 'Procedimiento sencillo para firma del acuerdo o inicio de fase piloto.' }
    ],
    commonErrors: [
      'Centrarse en "lo excelente que es nuestra empresa" en vez de focalizarse en los problemas del cliente.',
      'Presentar presupuestos con precios cerrados sin justificar el retorno de inversión (ROI) ni el desglose.',
      'Diseño visual descuidado, texto plano sin tablas ni gráficos profesionales (la estética inspira solvencia).'
    ],
    template: 'Análisis de situación: Sabemos que su red de sucursales sufre caídas de red semanales, afectando las ventas. Nuestra propuesta: Implementación de servidores redundantes en la nube (Solución CloudX). Metodología: Fase 1 (Auditoría - Semana 1), Fase 2 (Migración nocturna - Semana 2). Presupuesto: Inversión única de $15,000 + $200/mes de mantenimiento. Beneficio: Garantía de 99.9% de operatividad, recuperando su inversión en menos de 3 meses.',
    checklist: [
      '¿La propuesta refleja una personalización total para los retos del cliente?',
      '¿El retorno de inversión (ROI) o beneficio en productividad es palmario?',
      '¿El cronograma y los entregables son medibles y alcanzables?',
      '¿El diseño visual transmite máxima solvencia corporativa?'
    ]
  },
  {
    id: 20,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Acta de reunión de trabajo (Meeting Minutes)',
    shortDef: 'Minuta ejecutiva que resume de forma ágil acuerdos, tareas asignadas, responsables y fechas límite de una reunión corporativa.',
    purpose: 'Comités de seguimiento, reuniones con clientes y células ágiles para evitar el "¿quién hacía qué?" y asegurar rendición de cuentas.',
    length: '1 página (formato tabla o viñetas telegráficas).',
    tone: 'Práctico, telegráfico, ejecutivo y estructurado.',
    structure: [
      { step: 1, title: 'Datos de la reunión', description: 'Proyecto, fecha, hora, lugar/enlace virtual y participantes presentes.' },
      { step: 2, title: 'Puntos tratados en síntesis', description: 'Breve resumen de acuerdos y temas validados durante la sesión.' },
      { step: 3, title: 'Plan de acción (Qué / Quién / Cuándo)', description: 'Tabla estricta con Tarea puntual, Responsable uninominal y Fecha límite.' },
      { step: 4, title: 'Próxima convocatoria', description: 'Fecha, hora y objetivo de la siguiente sesión de seguimiento.' }
    ],
    commonErrors: [
      'Redactar un monólogo conversacional largo en lugar de registrar exclusivamente compromisos y decisiones.',
      'Asignar tareas difusas al "equipo" sin un responsable directo con nombre y apellido.',
      'Tardar más de 24 horas en enviar la minuta a los asistentes tras finalizar el encuentro.'
    ],
    template: 'Reunión Lanzamiento Producto X. Fecha: 10/11/26. Asistentes: A. López, M. Gómez, P. Ruiz. Temas: Retraso en empaquetado. Acuerdos y Plan de acción: 1. Contactar proveedor asiático para reclamar fechas - Responsable: M. Gómez - Fecha límite: 12/11. 2. Rediseñar caja temporalmente - Responsable: P. Ruiz - Fecha límite: 15/11. Próxima reunión de revisión: 16/11 a las 10:00.',
    checklist: [
      '¿Absolutamente cada tarea tiene un único responsable asignado y una fecha tope?',
      '¿Se omitieron debates accesorios dejando exclusivamente acuerdos firmes?',
      '¿Fue enviada por correo antes de que transcurran 24 horas de la reunión?',
      '¿El formato en tabla o viñetas facilita su revisión en 60 segundos?'
    ]
  },
  {
    id: 21,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Comunicado o nota de prensa',
    shortDef: 'Texto informativo elaborado para medios de comunicación y periodistas con el objetivo de difundir una noticia empresarial de interés.',
    purpose: 'Lanzamiento de productos disruptivos, fusiones, rondas de financiación, reconocimientos o gestión de crisis.',
    length: '1 a 2 páginas (máximo 500 palabras).',
    tone: 'Periodístico, riguroso, objetivo, en tercera persona y sin autobombo.',
    structure: [
      { step: 1, title: 'Encabezado y Fecha', description: '"PARA PUBLICACIÓN INMEDIATA" y ciudad / fecha de emisión.' },
      { step: 2, title: 'Titular noticioso', description: 'Titular directo, sugestivo y con valor noticioso genuino.' },
      { step: 3, title: 'Entradilla o Lead (Las 5 Ws)', description: 'Quién, qué, cuándo, dónde y por qué en el primer párrafo.' },
      { step: 4, title: 'Cuerpo con declaraciones oficiales', description: 'Desarrollo con citas textuales encomilladas de directivos o portavoces.' },
      { step: 5, title: 'Boilerplate', description: 'Párrafo estándar de perfil corporativo: qué hace la compañía, año y misión.' },
      { step: 6, title: 'Contacto de prensa', description: 'Nombre del responsable de prensa, correo directo, teléfono y kit multimedia.' }
    ],
    commonErrors: [
      'Redactar la nota como un anuncio publicitario encubierto ("Compra el mejor producto") en vez de como una noticia informativa.',
      'Titular aburrido o genérico que no despierta el interés del redactor en el periódico.',
      'Olvidar incluir teléfono o correo directo del portavoz para solicitudes de entrevistas urgentes.'
    ],
    template: 'PARA PUBLICACIÓN INMEDIATA. 10/11/2026. Titular: EcoTech inaugura en Madrid la mayor planta de reciclaje textil de Europa. (Madrid) - La startup española EcoTech ha inaugurado hoy sus nuevas instalaciones capaces de procesar 50 toneladas de ropa diaria. "Este proyecto marca un antes y un después en la moda circular", declaró su CEO, Elena Paz. La planta generará 100 empleos directos. Sobre EcoTech: Fundada en 2021... Contacto: prensa@ecotech.es',
    checklist: [
      '¿El primer párrafo resuelve de forma inmediata las 5 Ws periodísticas?',
      '¿Contiene al menos una cita encomillada lista para ser publicada por un redactor?',
      '¿El contenido prescinde de adjetivos publicitarios superlativos?',
      '¿El contacto de prensa es directo y responderá en menos de dos horas?'
    ]
  },
  {
    id: 22,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Currículum vitae profesional (CV)',
    shortDef: 'Documento estratégico que sintetiza la trayectoria laboral, habilidades, formación y logros comprobables de un profesional.',
    purpose: 'Superar filtros de selección (ATS y reclutadores) y conseguir entrevistas de empleo en procesos competitivos.',
    length: '1 página (estándar ideal) a 2 páginas máximo (para perfiles seniors con más de 10 años).',
    tone: 'Conciso, formal, asertivo y enfocado estrictamente en logros cuantitativos.',
    structure: [
      { step: 1, title: 'Datos de contacto y LinkedIn', description: 'Nombre completo, teléfono, correo profesional, ciudad y URL limpia de LinkedIn/Portafolio.' },
      { step: 2, title: 'Perfil profesional (Extracto)', description: '3-4 líneas resumiendo especialidad, propuesta de valor y mayor logro.' },
      { step: 3, title: 'Experiencia laboral inversa', description: 'Cargos ordenados de más reciente a antiguo, con viñetas de logros e impactos.' },
      { step: 4, title: 'Formación académica', description: 'Títulos universitarios oficiales, institución y año de egreso.' },
      { step: 5, title: 'Habilidades (Hard & Soft Skills)', description: 'Software, metodologías ágiles, certificaciones y competencias clave.' },
      { step: 6, title: 'Idiomas', description: 'Nivel estandarizado marco común europeo (B2, C1, C2 o Nativo).' }
    ],
    commonErrors: [
      'Cometer faltas de ortografía o tipográficas (causa número 1 de descarte inmediato por reclutadores).',
      'Describir funciones rutinarias en lugar de logros tangibles (ej. poner "Ventas en zona norte" en vez de "Aumenté las ventas un 25% interanual").',
      'Incluir datos personales irrelevantes o susceptibles de sesgo (estado civil, número de hijos, religión).'
    ],
    template: 'Juan Pérez | Marketing Digital | [LinkedIn] | [Email]\nPerfil: Especialista en marketing B2B con 5 años de experiencia aumentando el tráfico orgánico.\n* Experiencia: Jefe de SEO - Agencia X (2021-Actual).\n  - Diseñé e implementé la estrategia de contenidos, logrando un aumento del 200% en leads calificados.\n  - Dirigí un equipo de 3 redactores.\n* Educación: Grado en Marketing (Univ. Y).\n* Skills: Google Analytics, SEMrush, Liderazgo de equipos.',
    checklist: [
      '¿El CV está adaptado con palabras clave de la oferta de trabajo específica?',
      '¿Su formato es escaneable visualmente por el reclutador en menos de 10 segundos?',
      '¿Se utilizan verbos de acción y cifras porcentuales en cada viñeta de experiencia?',
      '¿Todos los enlaces (LinkedIn, GitHub o Web) funcionan correctamente?'
    ]
  },
  {
    id: 23,
    category: 'profesional',
    categoryLabel: 'Ámbito Profesional',
    categoryEmoji: '💼',
    title: 'Manual o procedimiento interno (SOP)',
    shortDef: 'Documento normativo estandarizado que describe paso a paso la ejecución obligatoria de una tarea corporativa para garantizar calidad.',
    purpose: 'Capacitación ágil de nuevos empleados (onboarding), cumplimiento de normativas de calidad (ISO 9001) y replicabilidad operativa.',
    length: 'Variable (habitualmente 2 a 10 páginas según la complejidad del proceso).',
    tone: 'Imperativo, técnico, riguroso, inequívoco y ultra-descriptivo.',
    structure: [
      { step: 1, title: 'Título, Código y Control de Versión', description: 'Identificador del procedimiento (ej. PROC-05), versión actual y fecha de vigencia.' },
      { step: 2, title: 'Propósito y Alcance', description: 'Qué objetivo persigue la norma y a qué departamentos o puestos aplica.' },
      { step: 3, title: 'Definiciones clave y abreviaturas', description: 'Glosario rápido de siglas y términos técnicos usados en el texto.' },
      { step: 4, title: 'Instrucciones paso a paso', description: 'Secuencia estricta y cronológica con verbos de acción imperativos.' },
      { step: 5, title: 'Diagrama de flujo (Workflow)', description: 'Mapa visual con decisiones sí/no y rutas alternativas recomendadas.' },
      { step: 6, title: 'Historial de revisiones', description: 'Tabla con número de revisión, fecha, autor de la modificación y firma de gerencia.' }
    ],
    commonErrors: [
      'Dar por sentado conocimientos previos ("hacerlo como siempre"), omitiendo pasos de seguridad elementales.',
      'Redactar texto denso y corrido sin esquemas visuales, capturas de pantalla ni tablas de verificación.',
      'No actualizar el manual cuando el procedimiento de software o físico sufre modificaciones, dejándolo obsoleto.'
    ],
    template: '*PROC-05: Cierre de Caja Diario. Alcance: Todos los cajeros de turno tarde. Procedimiento:\n1. A las 20:00h, cerrar la sesión en el TPV (Botón rojo).\n2. Imprimir el ticket Z de cierre.\n3. Contar el efectivo separando el fondo de caja fijo (150€).\n4. Introducir el sobrante en el sobre de seguridad junto con el ticket Z y firmar el sobre.\n5. Depositar el sobre en la caja fuerte de gerencia. (Ver anexo gráfico).*',
    checklist: [
      '¿Un empleado en su primer día de trabajo podría completar la tarea sin preguntar a un compañero?',
      '¿Los pasos se encuentran estrictamente numerados y con verbos directos en imperativo?',
      '¿Se incluyen advertencias o diagramas en los puntos de mayor riesgo o error?',
      '¿Cuenta con el sello de aprobación oficial y código de control documental?'
    ]
  }
];

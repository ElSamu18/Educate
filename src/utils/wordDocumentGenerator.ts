/**
 * Generador de plantillas descargables de Microsoft Word (.doc compatible con Word / LibreOffice)
 * Aplica con exactitud las medidas milimétricas de la Normativa UNELLEZ (Resolución CD330)
 * y de las Normas APA (7.ª Edición) en papel Carta.
 */

export const generateWordHtmlContent = (normative: 'unellez' | 'apa'): string => {
  if (normative === 'unellez') {
    return `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>Plantilla Académica UNELLEZ - Resolución CD330</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
@page Section1 {
  size: 21.59cm 27.94cm; /* Hoja Carta Oficial */
  margin: 3.0cm 3.0cm 3.0cm 4.0cm; /* Sup, Der, Inf, Izq (4.0cm encuadernación) */
  mso-header-margin: 1.5cm;
  mso-footer-margin: 1.5cm;
  mso-paper-source: 0;
}
div.Section1 {
  page: Section1;
}
body {
  font-family: 'Times New Roman', Times, serif;
  font-size: 12pt;
  line-height: 1.5;
  color: #000000;
  text-align: justify;
}
h1.capitulo {
  font-size: 14pt;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-top: 0pt;
  margin-bottom: 18pt;
  page-break-before: always;
}
h2.subtitulo {
  font-size: 12pt;
  font-weight: bold;
  text-align: left;
  margin-top: 14pt;
  margin-bottom: 6pt;
}
h3.seccion {
  font-size: 12pt;
  font-weight: bold;
  font-style: italic;
  text-align: left;
  margin-top: 10pt;
  margin-bottom: 4pt;
}
p.parrafo {
  margin-top: 0pt;
  margin-bottom: 0pt;
  text-indent: 0cm; /* UNELLEZ: Sin sangría de inicio */
  text-align: justify;
  line-height: 1.5;
}
p.cita-larga {
  margin-top: 8pt;
  margin-bottom: 8pt;
  margin-left: 1.0cm;
  margin-right: 1.0cm;
  font-size: 10pt;
  font-style: italic;
  line-height: 1.0;
  text-align: justify;
}
.portada-institucional {
  text-align: center;
  margin-bottom: 40pt;
  line-height: 1.2;
}
.portada-titulo {
  font-size: 14pt;
  font-weight: bold;
  text-align: center;
  margin-top: 80pt;
  margin-bottom: 80pt;
  line-height: 1.3;
}
.portada-autores {
  text-align: right;
  margin-top: 40pt;
  line-height: 1.3;
}
.portada-fecha {
  text-align: center;
  margin-top: 80pt;
}
.nota-guia {
  background-color: #f0f7ff;
  border-left: 4px solid #0056b3;
  padding: 8pt;
  font-size: 10pt;
  margin-top: 10pt;
  margin-bottom: 10pt;
  color: #0b3d75;
}
</style>
</head>
<body>
<div class="Section1">

<!-- PORTADA OFICIAL UNELLEZ -->
<div class="portada-institucional">
  <p><strong>REPÚBLICA BOLIVARIANA DE VENEZUELA</strong></p>
  <p><strong>UNIVERSIDAD NACIONAL EXPERIMENTAL DE LOS LLANOS OCCIDENTALES</strong></p>
  <p><strong>"EZEQUIEL ZAMORA" - UNELLEZ</strong></p>
  <p>VICERRECTORADO DE PLANIFICACIÓN Y DESARROLLO REGIONAL</p>
  <p>PROGRAMA CIENCIAS SOCIALES / INGENIERÍA</p>
</div>

<div class="portada-titulo">
  <p>[TÍTULO COMPLETO DEL TRABAJO ACADÉMICO / DE GRADO]</p>
  <p style="font-size: 11pt; font-weight: normal; margin-top: 10pt;">
    Trabajo Especial de Grado presentado como requisito para optar al título de [Título a Optar]
  </p>
</div>

<div class="portada-autores">
  <p><strong>Autor(a):</strong> [Nombre y Apellidos del Autor]</p>
  <p><strong>Tutor(a):</strong> [Nombre y Apellidos del Tutor]</p>
  <p><strong>C.I.:</strong> [Número de Documento]</p>
</div>

<div class="portada-fecha">
  <p>[Ciudad], [Mes] de [Año]</p>
</div>

<!-- SALTO DE PÁGINA -->
<br clear="all" style="page-break-before:always" />

<!-- ÍNDICE GENERAL -->
<h1 class="capitulo">ÍNDICE GENERAL</h1>
<table style="width: 100%; border-collapse: collapse; font-size: 11pt;">
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>DEDICATORIA</strong></td><td style="text-align: right;">ii</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>AGRADECIMIENTOS</strong></td><td style="text-align: right;">iii</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>RESUMEN</strong></td><td style="text-align: right;">iv</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>INTRODUCCIÓN</strong></td><td style="text-align: right;">1</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>CAPÍTULO I: EL PROBLEMA</strong></td><td style="text-align: right;">3</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0; text-indent: 15pt;">1.1. Planteamiento del Problema</td><td style="text-align: right;">3</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0; text-indent: 15pt;">1.2. Objetivos de la Investigación</td><td style="text-align: right;">6</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0; text-indent: 30pt;">1.2.1. Objetivo General</td><td style="text-align: right;">6</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0; text-indent: 30pt;">1.2.2. Objetivos Específicos</td><td style="text-align: right;">6</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0; text-indent: 15pt;">1.3. Justificación de la Investigación</td><td style="text-align: right;">7</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>CAPÍTULO II: MARCO TEÓRICO</strong></td><td style="text-align: right;">9</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>CONCLUSIONES Y RECOMENDACIONES</strong></td><td style="text-align: right;">25</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>LISTA DE REFERENCIAS</strong></td><td style="text-align: right;">28</td></tr>
  <tr><td style="text-align: left; padding: 4pt 0;"><strong>ANEXOS</strong></td><td style="text-align: right;">30</td></tr>
</table>

<!-- SALTO DE PÁGINA -->
<br clear="all" style="page-break-before:always" />

<!-- RESUMEN OFICIAL UNELLEZ -->
<h1 class="capitulo">RESUMEN</h1>
<div class="nota-guia">
  <strong>Parámetros UNELLEZ (Resolución CD330):</strong> Escrito a un solo espacio (1.0), sin sangría, extensión máxima entre 200 y 300 palabras. Incluye objetivo, metodología, resultados relevantes y conclusiones.
</div>

<p style="line-height: 1.0; text-align: justify; margin-top: 12pt;">
[Escriba aquí el resumen en un solo párrafo compacto a renglón sencillo (1.0). Sintetice el propósito central de la investigación, el enfoque metodológico aplicado, la población/muestra o instrumentos utilizados, los hallazgos principales y la conclusión integradora].
</p>

<p style="line-height: 1.0; margin-top: 14pt;">
<strong>Descriptores / Palabras Clave:</strong> [Palabra Clave 1], [Palabra Clave 2], [Palabra Clave 3], [Palabra Clave 4].
</p>

<!-- SALTO DE PÁGINA -->
<br clear="all" style="page-break-before:always" />

<!-- INTRODUCCIÓN -->
<h1 class="capitulo">INTRODUCCIÓN</h1>
<p class="parrafo">
La presente investigación tiene como objetivo fundamental analizar... [Escriba aquí los párrafos introductorios]. Recuerde que según la Resolución CD330 de la UNELLEZ, los párrafos deben comenzar sin sangría ("sin sangrar") y con interlineado a espacio y medio (1.5).
</p>
<p class="parrafo" style="margin-top: 8pt;">
El margen izquierdo está configurado a 4.0 cm para permitir el proceso formal de encuadernación de tesis y trabajos de grado, mientras que los márgenes superior, inferior y derecho se fijan en 3.0 cm sobre papel tamaño Carta (Letter).
</p>

<!-- SALTO DE PÁGINA -->
<br clear="all" style="page-break-before:always" />

<!-- CAPÍTULO I -->
<h1 class="capitulo">CAPÍTULO I<br>EL PROBLEMA</h1>

<h2 class="subtitulo">1.1. Planteamiento del Problema</h2>
<p class="parrafo">
En el contexto actual de la investigación, el fenómeno observado presenta características particulares...
</p>

<div class="nota-guia">
  <strong>Ejemplo de Cita Larga (>40 palabras según UNELLEZ):</strong> Si la cita excede de 40 palabras (más de 3 líneas), debe presentarse en párrafo separado, a un solo espacio interlineal (1.0), en letra cursiva, tamaño 10 u 11 puntos, con sangría en bloque de 1 cm a la izquierda:
</div>

<p class="cita-larga">
"Las organizaciones educativas modernas requieren una transformación estructural profunda que articule los procesos curriculares con las demandas tecnológicas del entorno productivo, garantizando la equidad en el acceso al conocimiento y la sostenibilidad de las prácticas formativas institucionales" (García, 2023, p. 45).
</p>

<h2 class="subtitulo">1.2. Objetivos de la Investigación</h2>
<h3 class="seccion">1.2.1. Objetivo General</h3>
<p class="parrafo">
Determinar la efectividad de las estrategias de maquetación y redacción académica en el rendimiento investigativo de los estudiantes de la UNELLEZ.
</p>

<h3 class="seccion">1.2.2. Objetivos Específicos</h3>
<p class="parrafo">
1. Diagnosticar las dificultades recurrentes en la configuración de márgenes y sangrías en Microsoft Word.<br>
2. Diseñar una guía interactiva con estándares basados en la Resolución CD330.<br>
3. Validar el impacto de la herramienta digital en la presentación formal de trabajos de grado.
</p>

<!-- SALTO DE PÁGINA -->
<br clear="all" style="page-break-before:always" />

<!-- LISTA DE REFERENCIAS -->
<h1 class="capitulo">LISTA DE REFERENCIAS</h1>
<p style="font-size: 11pt; line-height: 1.0; margin-bottom: 8pt;">
Arias, F. G. (2020). <i>El proyecto de investigación: Introducción a la metodología científica</i> (7.ª ed.). Editorial Episteme.
</p>
<p style="font-size: 11pt; line-height: 1.0; margin-bottom: 8pt;">
Hernández-Sampieri, R., & Mendoza, C. (2018). <i>Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta</i>. McGraw-Hill Interamericana.
</p>
<p style="font-size: 11pt; line-height: 1.0; margin-bottom: 8pt;">
UNELLEZ. (2006). <i>Normas para la Elaboración y Aprobación de Trabajos Técnicos, Trabajos Especiales de Grado, Trabajos de Grado y Tesis Doctorales (Resolución CD330)</i>. Barinas, Venezuela: Consejo Directivo de la UNELLEZ.
</p>

</div>
</body>
</html>`;
  }

  // APA 7ma Edición Template
  return `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>Plantilla Académica Normas APA 7.ª Edición</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
@page Section1 {
  size: 21.59cm 27.94cm; /* Carta Oficial */
  margin: 2.54cm 2.54cm 2.54cm 2.54cm; /* 1 pulgada en los 4 bordes */
  mso-header-margin: 1.27cm;
  mso-footer-margin: 1.27cm;
  mso-paper-source: 0;
}
div.Section1 {
  page: Section1;
}
body {
  font-family: 'Times New Roman', Times, serif;
  font-size: 12pt;
  line-height: 2.0; /* Doble espacio estricto APA */
  color: #000000;
  text-align: left; /* APA 7: Alineado a la izquierda ("ragged right") */
}
/* Jerarquía de Títulos APA 7 */
h1.nivel1 {
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
  margin-top: 24pt;
  margin-bottom: 12pt;
  line-height: 2.0;
}
h2.nivel2 {
  font-size: 12pt;
  font-weight: bold;
  text-align: left;
  margin-top: 18pt;
  margin-bottom: 6pt;
  line-height: 2.0;
}
h3.nivel3 {
  font-size: 12pt;
  font-weight: bold;
  font-style: italic;
  text-align: left;
  margin-top: 14pt;
  margin-bottom: 4pt;
  line-height: 2.0;
}
p.parrafo {
  margin-top: 0pt;
  margin-bottom: 0pt;
  text-indent: 1.27cm; /* Sangría de primera línea APA 7 */
  text-align: left;
  line-height: 2.0;
}
p.cita-bloque {
  margin-top: 12pt;
  margin-bottom: 12pt;
  margin-left: 1.27cm;
  text-indent: 0cm;
  line-height: 2.0;
  text-align: left;
}
p.referencia-apa {
  margin-top: 0pt;
  margin-bottom: 12pt;
  text-indent: -1.27cm;
  margin-left: 1.27cm; /* Sangría Francesa */
  line-height: 2.0;
  text-align: left;
}
.portada-apa {
  text-align: center;
  margin-top: 60pt;
  line-height: 2.0;
}
.nota-guia {
  background-color: #f5f3ff;
  border-left: 4px solid #6366f1;
  padding: 8pt;
  font-size: 10pt;
  margin-top: 10pt;
  margin-bottom: 10pt;
  line-height: 1.4;
  color: #312e81;
}
</style>
</head>
<body>
<div class="Section1">

<!-- PORTADA DE ESTUDIANTE APA 7 -->
<div class="portada-apa">
  <p style="font-weight: bold; font-size: 14pt; margin-bottom: 24pt;">
    Título Completo del Artículo o Investigación en Formato APA 7.ª Edición
  </p>
  <p>Nombre del Estudiante / Investigador</p>
  <p>Departamento o Facultad, Nombre de la Universidad</p>
  <p>Código y Nombre de la Asignatura</p>
  <p>Nombre del Profesor / Instructor</p>
  <p>Fecha de Entrega (ej. 15 de Noviembre de 2026)</p>
</div>

<!-- SALTO DE PÁGINA -->
<br clear="all" style="page-break-before:always" />

<!-- ABSTRACT / RESUMEN -->
<h1 class="nivel1">Resumen</h1>
<div class="nota-guia">
  <strong>Normas APA 7.ª Edición:</strong> El párrafo del resumen no lleva sangría de primera línea (se alinea a la izquierda), entre 150 y 250 palabras, a doble espacio (2.0).
</div>

<p style="text-indent: 0cm; line-height: 2.0;">
[Escriba aquí el resumen sin sangría de primera línea. Sintetice el tema central, la pregunta o hipótesis de investigación, los participantes o sujetos de estudio, el método utilizado, los resultados empíricos hallados y las implicaciones prácticas o teóricas de la conclusión].
</p>

<p style="text-indent: 1.27cm; line-height: 2.0; margin-top: 12pt;">
<i>Palabras clave:</i> maquetación académica, normas APA, formato carta, Microsoft Word, redacción científica.
</p>

<!-- SALTO DE PÁGINA -->
<br clear="all" style="page-break-before:always" />

<!-- CUERPO PRINCIPAL DEL TRABAJO -->
<h1 class="nivel1">Título Completo del Trabajo Académico</h1>

<p class="parrafo">
El formato oficial de las Normas APA (7.ª edición) exige que cada párrafo comience con una sangría de primera línea de 1.27 cm (0.5 pulgadas o una pulsación de tecla Tabulador). Todo el documento debe mantener un interlineado doble (2.0) estricto sin agregar espacios artificiales adicionales antes o después de los párrafos.
</p>

<h2 class="nivel2">Método y Procedimiento</h2>
<p class="parrafo">
Para asegurar la reproducibilidad de la investigación, los participantes fueron seleccionados a través de un muestreo probabilístico estratificado. Como señalan Smith y Jones (2020), "la estandarización de las medidas en procesadores de texto garantiza la uniformidad editorial y minimiza los sesgos de evaluación formal" (p. 112).
</p>

<div class="nota-guia">
  <strong>Cita en Bloque APA (>40 palabras):</strong> Se escribe en párrafo aparte, sin comillas, con sangría izquierda de 1.27 cm en todo el bloque y doble espacio:
</div>

<p class="cita-bloque">
Las tecnologías de procesamiento de documentos han evolucionado hasta permitir la integración de plantillas paramétricas directamente en los flujos de trabajo de los investigadores contemporáneos. La adopción temprana de guías tipográficas precisas disminuye significativamente el tiempo dedicado a correcciones de estilo en fases de arbitraje por pares ciegos. (Pérez, 2024, p. 78)
</p>

<h2 class="nivel2">Resultados y Discusión</h2>
<p class="parrafo">
Los datos recopilados corroboran que el uso de plantillas pre-configuradas para Microsoft Word en papel tipo Carta (21.59 × 27.94 cm) reduce en un 85% los errores de sangría, márgenes y citación bibliográfica en estudiantes de pregrado y posgrado.
</p>

<!-- SALTO DE PÁGINA -->
<br clear="all" style="page-break-before:always" />

<!-- REFERENCIAS APA 7 -->
<h1 class="nivel1">Referencias</h1>

<p class="referencia-apa">
American Psychological Association. (2020). <i>Publication manual of the American Psychological Association</i> (7th ed.). https://doi.org/10.1037/0000165-000
</p>

<p class="referencia-apa">
García, M. A., & Rodríguez, C. L. (2023). Metodología de la investigación científica aplicada a entornos digitales. <i>Revista Latinoamericana de Educación Superior</i>, 14(2), 45-62. https://doi.org/10.3200/rles.2023.14.2.45
</p>

<p class="referencia-apa">
Smith, J., & Jones, K. (2020). <i>Academic writing and word processing standards: A guide for researchers</i>. Oxford University Press.
</p>

</div>
</body>
</html>`;
};

/**
 * Dispara la descarga del archivo Microsoft Word (.doc) en el navegador del usuario
 */
export const downloadWordTemplate = (normative: 'unellez' | 'apa'): void => {
  const content = generateWordHtmlContent(normative);
  const blob = new Blob(['\ufeff' + content], {
    type: 'application/msword;charset=utf-8'
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  const filename =
    normative === 'unellez'
      ? 'Plantilla_Word_UNELLEZ_Resolucion_CD330_Carta.doc'
      : 'Plantilla_Word_Normas_APA_7ma_Edicion_Carta.doc';

  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
};

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

export const WORD_RECIPE_CONFIG: {
  summary: string;
  categories: WordConfigCategory[];
  fullPromptText: string;
} = {
  summary: 'Configuración exacta y milimétrica requerida por la Guía Universal para la elaboración y formato de trabajos académicos en Microsoft Word.',
  categories: [
    {
      title: 'A. Márgenes y Orientación',
      icon: 'Square',
      badge: 'Disposición > Márgenes',
      wordMenuPath: 'Vaya a la pestaña Disposición (o Diseño de página) > Márgenes > Márgenes personalizados...',
      items: [
        { label: 'Margen Superior', value: '2.61', unit: 'cm', note: 'Espacio superior desde el borde de la hoja', highlight: true },
        { label: 'Margen Inferior', value: '0.49', unit: 'cm', note: 'Margen inferior ultra-compacto', highlight: true },
        { label: 'Margen Izquierdo', value: '3.17', unit: 'cm', note: 'Reserva para encuadernación/margen amplio', highlight: true },
        { label: 'Margen Derecho', value: '2.54', unit: 'cm', note: '1 pulgada estándar', highlight: false },
        { label: 'Orientación', value: 'Vertical', unit: 'Retrato', note: 'Página vertical obligatoria' }
      ]
    },
    {
      title: 'B. Diseño de Página (Encabezados y Pies)',
      icon: 'Layout',
      badge: 'Configurar página > Diseño',
      wordMenuPath: 'En la misma ventana de Configurar página, diríjase a la pestaña Diseño.',
      items: [
        { label: 'Encabezado (desde el borde)', value: '1.27', unit: 'cm', note: 'Distancia exacta al borde superior', highlight: true },
        { label: 'Pie de página (desde el borde)', value: '1.27', unit: 'cm', note: 'Distancia exacta al borde inferior', highlight: true },
        { label: 'Alineación vertical de página', value: 'Superior', unit: 'Top', note: 'El texto comienza arriba, sin centrado vertical' }
      ]
    },
    {
      title: 'C. Formato de Párrafo (Interlineado)',
      icon: 'AlignLeft',
      badge: 'Inicio > Grupo Párrafo',
      wordMenuPath: 'En la pestaña Inicio, ubique el grupo Párrafo. Haga clic en el ícono de Espaciado entre líneas y párrafos.',
      items: [
        { label: 'Interlineado', value: '1.15', unit: 'exacto', note: 'Seleccione exactamente el valor 1.15 en el menú', highlight: true }
      ]
    },
    {
      title: 'D. Sangría y Espaciado de Párrafo',
      icon: 'Indent',
      badge: 'Disposición > Párrafo',
      wordMenuPath: 'En la pestaña Disposición (o menú emergente Párrafo), configure los siguientes valores exactos:',
      items: [
        { label: 'Sangría Izquierda', value: '4.21', unit: 'cm', note: 'Sangría izquierda amplia', highlight: true },
        { label: 'Sangría Derecha', value: '2.73', unit: 'cm', note: 'Sangría derecha especificada', highlight: true },
        { label: 'Espaciado Anterior', value: '3.8', unit: 'pto', note: 'Espacio antes del párrafo', highlight: true },
        { label: 'Espaciado Posterior', value: '0', unit: 'pto', note: 'Sin espaciado posterior adicional' }
      ]
    }
  ],
  fullPromptText: `CONFIGURACIÓN EXACTA DE MICROSOFT WORD (GUÍA UNIVERSAL):
- Márgenes de Página:
  * Superior: 2.61 cm
  * Inferior: 0.49 cm
  * Izquierdo: 3.17 cm
  * Derecho: 2.54 cm
  * Orientación: Vertical
- Encabezado y Pie de página:
  * Desde el borde (Encabezado): 1.27 cm
  * Desde el borde (Pie de página): 1.27 cm
  * Alineación vertical de la página: Superior
- Interlineado de Párrafo:
  * Interlineado: 1.15 exacto
- Sangría y Espaciado:
  * Sangría Izquierda: 4.21 cm
  * Sangría Derecha: 2.73 cm
  * Espaciado Anterior: 3.8 pto
  * Espaciado Posterior: 0 pto`
};

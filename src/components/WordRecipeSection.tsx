import React, { useState } from 'react';
import { WORD_RECIPE_CONFIG } from '../data/wordRecipeData';
import {
  Sliders,
  Copy,
  Check,
  Layout,
  Square,
  AlignLeft,
  ArrowRight,
  Info,
  Layers,
  Sparkles,
  BookOpen,
  GraduationCap,
  FileText,
  AlertTriangle,
  FolderOpen
} from 'lucide-react';

export const WordRecipeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedParam, setSelectedParam] = useState<string | null>(null);
  const [paperFormat, setPaperFormat] = useState<'carta' | 'a4'>('carta');

  const isCarta = paperFormat === 'carta';
  const paperDimensions = isCarta ? '215.9 × 279.4 mm (8.5 × 11" Carta)' : '210 × 297 mm (A4)';
  const paperAspectRatio = isCarta ? 'aspect-[8.5/11]' : 'aspect-[1/1.414]';

  const handleCopyAll = () => {
    navigator.clipboard.writeText(WORD_RECIPE_CONFIG.fullPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="receta-word" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 dark:bg-blue-900/60 dark:text-blue-200 mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Sección 1 · Normativa UNELLEZ Oficial</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              La Receta de Word:{' '}
              <span className="text-blue-600 dark:text-blue-400">Configuración Exacta UNELLEZ</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
              Parámetros oficiales para Trabajos Técnicos, Trabajos Especiales de Grado, Trabajos de Grado y Tesis Doctorales. Formato de hoja tipo Carta, margen de encuadernación de 4 cm e interlineado 1.5.
            </p>
          </div>

          <button
            onClick={handleCopyAll}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>¡Valores Copiados!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Configuración Completa</span>
              </>
            )}
          </button>
        </div>

        {/* 2-Column Grid: Visual Page Simulator & Parameters Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Page Sheet Simulator (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {isCarta ? 'Simulador Hoja Tipo Carta' : 'Simulador Hoja A4'}
                </h3>
              </div>

              {/* Paper Format Switcher (Carta vs A4) */}
              <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <button
                  type="button"
                  onClick={() => setPaperFormat('carta')}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                    isCarta
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Carta (Oficial)
                </button>
                <button
                  type="button"
                  onClick={() => setPaperFormat('a4')}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                    !isCarta
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  A4
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3 px-1">
              <span>Papel obligatorio:</span>
              <span className="font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-blue-300">
                {paperDimensions}
              </span>
            </div>

            {/* Visual Paper Canvas */}
            <div
              className={`relative mx-auto w-full max-w-[320px] ${paperAspectRatio} bg-slate-50 dark:bg-slate-800/60 rounded-xl border-2 border-slate-300 dark:border-slate-700 shadow-md p-3 flex flex-col justify-between overflow-hidden transition-all duration-300`}
            >
              {/* Left Binding Ring Punch Visual (Encuadernación 4 cm) */}
              <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-around py-4 z-20 pointer-events-none opacity-40">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
              </div>

              {/* Top Margin Guide Indicator (3.0 cm) */}
              <div
                className={`absolute top-0 left-0 right-0 border-b-2 border-dashed border-blue-500/70 bg-blue-500/10 flex items-center justify-center transition-all z-10 ${
                  selectedParam === 'sup' ? 'bg-blue-500/30 ring-2 ring-blue-500' : ''
                }`}
                style={{ height: '14%' }}
              >
                <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.5 rounded shadow-xs">
                  Sup: 3.0 cm
                </span>
              </div>

              {/* Left Margin Guide (4.0 cm - Encuadernación) */}
              <div
                className={`absolute top-0 bottom-0 left-0 border-r-2 border-dashed border-amber-500/80 bg-amber-500/10 flex items-center justify-center transition-all z-10 ${
                  selectedParam === 'izq' ? 'bg-amber-500/30 ring-2 ring-amber-500' : ''
                }`}
                style={{ width: '22%' }}
              >
                <span className="text-[9.5px] font-bold text-amber-800 dark:text-amber-300 bg-white/95 dark:bg-slate-900/95 px-1 py-0.5 rounded shadow-xs -rotate-90 whitespace-nowrap">
                  Izq: 4.0 cm (Encuadernación)
                </span>
              </div>

              {/* Right Margin Guide (3.0 cm) */}
              <div
                className={`absolute top-0 bottom-0 right-0 border-l-2 border-dashed border-emerald-500/70 bg-emerald-500/10 flex items-center justify-center transition-all z-10 ${
                  selectedParam === 'der' ? 'bg-emerald-500/30 ring-2 ring-emerald-500' : ''
                }`}
                style={{ width: '16%' }}
              >
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-white/90 dark:bg-slate-900/90 px-1 py-0.5 rounded shadow-xs rotate-90 whitespace-nowrap">
                  Der: 3.0 cm
                </span>
              </div>

              {/* Bottom Margin Guide (3.0 cm) */}
              <div
                className={`absolute bottom-0 left-0 right-0 border-t-2 border-dashed border-rose-500/70 bg-rose-500/10 flex items-center justify-center transition-all z-10 ${
                  selectedParam === 'inf' ? 'bg-rose-500/30 ring-2 ring-rose-500' : ''
                }`}
                style={{ height: '14%' }}
              >
                <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.5 rounded shadow-xs">
                  Inf: 3.0 cm
                </span>
              </div>

              {/* Body Text Mock Area (Center Printable Zone) */}
              <div
                className="absolute bg-white dark:bg-slate-900/95 rounded border border-slate-200 dark:border-slate-700 p-2 overflow-hidden flex flex-col justify-between transition-all"
                style={{
                  top: '14%',
                  bottom: '14%',
                  left: '22%',
                  right: '16%'
                }}
              >
                <div className="space-y-1.5">
                  {/* Chapter Title Mock */}
                  <div className="text-center pb-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-[9px] font-black tracking-wider text-slate-800 dark:text-slate-100 uppercase block">
                      CAPÍTULO I: EL PROBLEMA
                    </span>
                    <span className="text-[7px] text-blue-600 dark:text-blue-400 font-semibold">
                      12 o 14 pt · Negrita
                    </span>
                  </div>

                  {/* Standard Paragraph without indent (0 cm) */}
                  <div className="space-y-1">
                    <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-full"></div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-11/12"></div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-full"></div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-4/5"></div>
                  </div>

                  {/* Cita textual larga (>40 palabras) exception callout */}
                  <div className="pl-2 pr-1 py-1 bg-blue-50/70 dark:bg-blue-950/30 border-l-2 border-blue-500 rounded-xs">
                    <div className="h-0.5 bg-blue-300 dark:bg-blue-600 rounded-xs w-full mb-0.5"></div>
                    <div className="h-0.5 bg-blue-300 dark:bg-blue-600 rounded-xs w-5/6"></div>
                    <span className="text-[7.5px] text-blue-700 dark:text-blue-300 italic font-serif block mt-0.5 leading-none">
                      "Cita &gt; 40 palabras: 10-11 pt, 1.0 espacio, cursiva"
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-xs w-full"></div>
                    <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-xs w-5/6"></div>
                  </div>
                </div>

                {/* Footer specs pill */}
                <div className="text-[8px] text-slate-600 dark:text-slate-400 font-mono text-center pt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-around">
                  <span>Sin Sangría (0 cm)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">Interlineado 1.5</span>
                </div>
              </div>
            </div>

            {/* Quick interactive buttons below paper */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-1.5 justify-center">
              <span className="text-slate-400 mr-1 text-[11px] self-center">Destacar:</span>
              <button
                onClick={() => setSelectedParam(selectedParam === 'izq' ? null : 'izq')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedParam === 'izq'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Izquierdo (4.0 cm)
              </button>
              <button
                onClick={() => setSelectedParam(selectedParam === 'sup' ? null : 'sup')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedParam === 'sup'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Superior (3.0 cm)
              </button>
              <button
                onClick={() => setSelectedParam(selectedParam === 'der' ? null : 'der')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedParam === 'der'
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Derecho (3.0 cm)
              </button>
              <button
                onClick={() => setSelectedParam(selectedParam === 'inf' ? null : 'inf')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedParam === 'inf'
                    ? 'bg-rose-600 text-white border-rose-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Inferior (3.0 cm)
              </button>
            </div>
          </div>

          {/* Right Column: Exact Parameter Cards & Word Paths (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {WORD_RECIPE_CONFIG.categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:border-blue-400/60 dark:hover:border-blue-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {cat.badge}
                  </span>
                </div>

                {/* Word Navigation Path instruction */}
                <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl text-xs text-slate-600 dark:text-slate-300 mb-3 border border-slate-100 dark:border-slate-800/80">
                  <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Ruta en Word:</strong> {cat.wordMenuPath}
                  </span>
                </div>

                {/* Value Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`p-3 rounded-xl border transition-all ${
                        item.highlight
                          ? 'bg-blue-50/60 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/60'
                          : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/70 dark:border-slate-700/60'
                      }`}
                    >
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block truncate">
                        {item.label}
                      </span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                          {item.value}
                        </span>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {item.unit}
                        </span>
                      </div>
                      {item.note && (
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1 leading-tight" title={item.note}>
                          {item.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typographic Exceptions & Academic Limits (2-Col Additional UNELLEZ Blocks) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Excepciones Tipográficas UNELLEZ (6 cols) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Excepciones Tipográficas Obligatorias
                </h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 font-semibold">
                Normativa UNELLEZ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WORD_RECIPE_CONFIG.exceptions.map((exc, eIdx) => (
                <div
                  key={eIdx}
                  className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-700/60 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900 dark:text-white">
                      {exc.title}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                      {exc.fontSize}
                    </span>
                  </div>
                  <div className="text-[11px] text-blue-700 dark:text-blue-400 font-medium">
                    Espaciado: {exc.spacing} · {exc.style}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {exc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Límites Máximos de Extensión por Programa Académico (6 cols) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Límites de Extensión por Nivel Académico
                </h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 font-semibold">
                Páginas Máximas
              </span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {WORD_RECIPE_CONFIG.extensionLimits.map((lim, lIdx) => (
                <div key={lIdx} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block text-sm">
                      {lim.docType}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {lim.program} {lim.note && `· ${lim.note}`}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 font-black text-sm border border-emerald-200 dark:border-emerald-800">
                      {lim.maxPages}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Annex Rule Notice Box */}
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
              <FolderOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block">{WORD_RECIPE_CONFIG.annexRule.title}</strong>
                <p className="mt-0.5 text-[11px] leading-relaxed opacity-90">
                  {WORD_RECIPE_CONFIG.annexRule.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

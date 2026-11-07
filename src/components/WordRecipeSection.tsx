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
  Sparkles
} from 'lucide-react';

export const WordRecipeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedParam, setSelectedParam] = useState<string | null>(null);

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Sección 1 · Guía Universal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              La Receta de Word:{' '}
              <span className="text-blue-600 dark:text-blue-400">Configuración Exacta</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Configura estos parámetros en Microsoft Word antes de escribir. Los valores son exactos y garantizan el cumplimiento de los lineamientos formales.
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
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Simulador de Hoja A4
                </h3>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                210 × 297 mm
              </span>
            </div>

            {/* Visual Paper Canvas */}
            <div className="relative mx-auto w-full max-w-[320px] aspect-[1/1.414] bg-slate-50 dark:bg-slate-800/60 rounded-xl border-2 border-slate-300 dark:border-slate-700 shadow-md p-3 flex flex-col justify-between overflow-hidden">
              {/* Top Margin Guide Indicator */}
              <div
                className={`absolute top-0 left-0 right-0 border-b-2 border-dashed border-blue-500/70 bg-blue-500/10 flex items-center justify-center transition-all ${
                  selectedParam === 'sup' ? 'bg-blue-500/30 ring-2 ring-blue-500' : ''
                }`}
                style={{ height: '18%' }}
              >
                <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.5 rounded shadow-xs">
                  Sup: 2.61 cm
                </span>
              </div>

              {/* Header margin line */}
              <div
                className="absolute left-4 right-4 border-b border-indigo-400/80 flex items-center justify-between text-[9px] text-indigo-700 dark:text-indigo-300 font-mono"
                style={{ top: '8%' }}
              >
                <span>Encabezado</span>
                <span className="bg-indigo-50 dark:bg-slate-900 px-1">1.27 cm</span>
              </div>

              {/* Left Margin Guide */}
              <div
                className={`absolute top-0 bottom-0 left-0 border-r-2 border-dashed border-amber-500/70 bg-amber-500/10 flex items-center justify-center transition-all ${
                  selectedParam === 'izq' ? 'bg-amber-500/30 ring-2 ring-amber-500' : ''
                }`}
                style={{ width: '22%' }}
              >
                <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-white/90 dark:bg-slate-900/90 px-1 py-0.5 rounded shadow-xs -rotate-90 whitespace-nowrap">
                  Izq: 3.17 cm
                </span>
              </div>

              {/* Right Margin Guide */}
              <div
                className={`absolute top-0 bottom-0 right-0 border-l-2 border-dashed border-emerald-500/70 bg-emerald-500/10 flex items-center justify-center transition-all ${
                  selectedParam === 'der' ? 'bg-emerald-500/30 ring-2 ring-emerald-500' : ''
                }`}
                style={{ width: '18%' }}
              >
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-white/90 dark:bg-slate-900/90 px-1 py-0.5 rounded shadow-xs rotate-90 whitespace-nowrap">
                  Der: 2.54 cm
                </span>
              </div>

              {/* Bottom Margin Guide */}
              <div
                className={`absolute bottom-0 left-0 right-0 border-t-2 border-dashed border-rose-500/70 bg-rose-500/10 flex items-center justify-center transition-all ${
                  selectedParam === 'inf' ? 'bg-rose-500/30 ring-2 ring-rose-500' : ''
                }`}
                style={{ height: '6%' }}
              >
                <span className="text-[9px] font-bold text-rose-700 dark:text-rose-300 bg-white/90 dark:bg-slate-900/90 px-1 rounded shadow-xs">
                  Inf: 0.49 cm
                </span>
              </div>

              {/* Footer margin line */}
              <div
                className="absolute left-4 right-4 border-t border-indigo-400/80 flex items-center justify-between text-[9px] text-indigo-700 dark:text-indigo-300 font-mono"
                style={{ bottom: '9%' }}
              >
                <span>Pie de página</span>
                <span className="bg-indigo-50 dark:bg-slate-900 px-1">1.27 cm</span>
              </div>

              {/* Body Text Mock Area (Center Printable Zone) */}
              <div
                className="absolute bg-white dark:bg-slate-900/90 rounded border border-slate-200 dark:border-slate-700/80 p-2 overflow-hidden flex flex-col justify-center"
                style={{
                  top: '18%',
                  bottom: '7%',
                  left: '22%',
                  right: '18%'
                }}
              >
                <div className="space-y-1.5 opacity-80">
                  <div className="h-2 bg-blue-600 rounded-xs w-2/3 mb-2"></div>
                  {/* Indented paragraph showing indent 4.21 cm / 2.73 cm */}
                  <div className="pl-3 pr-2 py-1 bg-amber-50/70 dark:bg-amber-950/20 border-l border-amber-400 rounded-xs">
                    <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-full mb-1"></div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-4/5 mb-1"></div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-3/4"></div>
                    <span className="text-[8px] text-amber-700 dark:text-amber-400 font-bold block mt-1">
                      Sangría Izq: 4.21 cm · Der: 2.73 cm
                    </span>
                  </div>
                  <div className="space-y-1 pt-1">
                    <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-xs w-full"></div>
                    <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-xs w-5/6"></div>
                    <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-xs w-4/6"></div>
                  </div>
                  <div className="text-[8px] text-blue-600 dark:text-blue-400 font-mono text-center pt-1 border-t border-slate-100 dark:border-slate-800">
                    Interlineado: 1.15
                  </div>
                </div>
              </div>
            </div>

            {/* Quick interactive buttons below paper */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-1.5 justify-center">
              <span className="text-slate-400 mr-1 text-[11px] self-center">Destacar:</span>
              <button
                onClick={() => setSelectedParam(selectedParam === 'sup' ? null : 'sup')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedParam === 'sup'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Superior (2.61)
              </button>
              <button
                onClick={() => setSelectedParam(selectedParam === 'izq' ? null : 'izq')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedParam === 'izq'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Izquierdo (3.17)
              </button>
              <button
                onClick={() => setSelectedParam(selectedParam === 'der' ? null : 'der')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedParam === 'der'
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Derecho (2.54)
              </button>
              <button
                onClick={() => setSelectedParam(selectedParam === 'inf' ? null : 'inf')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedParam === 'inf'
                    ? 'bg-rose-600 text-white border-rose-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Inferior (0.49)
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
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
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-1 leading-tight line-clamp-1" title={item.note}>
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
      </div>
    </section>
  );
};

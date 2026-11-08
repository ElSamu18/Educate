import React, { useState } from 'react';
import {
  UNELLEZ_RECIPE_CONFIG,
  APA_RECIPE_CONFIG,
  COMPARISON_TABLE,
  NormativeConfig
} from '../data/wordRecipeData';
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
  FolderOpen,
  Scale,
  CheckCircle2,
  BookmarkCheck,
  FileCheck2
} from 'lucide-react';

export const WordRecipeSection: React.FC = () => {
  const [selectedNormative, setSelectedNormative] = useState<'unellez' | 'apa'>('unellez');
  const [showComparison, setShowComparison] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedParam, setSelectedParam] = useState<string | null>(null);
  const [paperFormat, setPaperFormat] = useState<'carta' | 'a4'>('carta');

  const currentConfig: NormativeConfig =
    selectedNormative === 'unellez' ? UNELLEZ_RECIPE_CONFIG : APA_RECIPE_CONFIG;

  const isUnellez = selectedNormative === 'unellez';
  const isCarta = paperFormat === 'carta';
  const paperDimensions = isCarta ? '215.9 × 279.4 mm (8.5 × 11" Carta)' : '210 × 297 mm (A4)';
  const paperAspectRatio = isCarta ? 'aspect-[8.5/11]' : 'aspect-[1/1.414]';

  const handleCopyAll = () => {
    navigator.clipboard.writeText(currentConfig.fullPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="receta-word" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 dark:bg-blue-900/60 dark:text-blue-200 mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Sección 1 · Formato de Hoja y Medidas Word</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              La Receta de Word:{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {isUnellez ? 'Normativa UNELLEZ (Resolución CD330)' : 'Normas APA (7.ª Edición)'}
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
              Selecciona entre la normativa oficial de la <strong>UNELLEZ (Resolución CD330)</strong> para tesis y trabajos de grado, o el estándar global de las <strong>Normas APA (7.ª Edición)</strong> para artículos y proyectos científicos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setShowComparison(!showComparison)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all cursor-pointer ${
                showComparison
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Scale className="w-4 h-4 text-indigo-500" />
              <span>{showComparison ? 'Ocultar Comparativa' : 'Comparar UNELLEZ vs APA'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyAll}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>¡Copiado para Word!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Configuración</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Normative Selector Pill Tabs */}
        <div className="mb-8 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row gap-1.5 shadow-xs">
          <button
            type="button"
            onClick={() => {
              setSelectedNormative('unellez');
              setSelectedParam(null);
            }}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 ${
              isUnellez
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-sm border border-slate-200/80 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookmarkCheck className={`w-4 h-4 ${isUnellez ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
            <div className="text-left">
              <span className="block leading-tight font-black">Normativa UNELLEZ Oficial (Resolución CD330)</span>
              <span className="block text-[11px] font-normal opacity-75">
                Márgenes 4-3-3-3 cm · Sin sangría · Interlineado 1.5 · Tesis y Grado
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedNormative('apa');
              setSelectedParam(null);
            }}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 ${
              !isUnellez
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-sm border border-slate-200/80 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileCheck2 className={`w-4 h-4 ${!isUnellez ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
            <div className="text-left">
              <span className="block leading-tight font-black">Normas APA (7.ª Edición Oficial)</span>
              <span className="block text-[11px] font-normal opacity-75">
                Márgenes 2.54 cm (1") · Sangría 1.27 cm (Tab) · Doble espacio (2.0)
              </span>
            </div>
          </button>
        </div>

        {/* Side-by-side Comparative Matrix Panel (Collapsible/Toggleable) */}
        {showComparison && (
          <div className="mb-10 bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 p-5 sm:p-6 shadow-md animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Comparativa Rápida Frente a Frente: UNELLEZ (Resolución CD330) vs. Normas APA (7.ª Ed.)
                </h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800">
                Matriz de Diferencias Clave
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                    <th className="py-2.5 px-3 font-semibold w-1/4">Parámetro</th>
                    <th className="py-2.5 px-3 font-bold text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20 w-1/3">
                      Normativa UNELLEZ (CD330)
                    </th>
                    <th className="py-2.5 px-3 font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20 w-1/3">
                      Normas APA 7.ª Edición
                    </th>
                    <th className="py-2.5 px-3 font-semibold text-slate-400 hidden md:table-cell">
                      Diferencia Práctica
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {COMPARISON_TABLE.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="py-3 px-3 text-slate-800 dark:text-slate-200 bg-blue-50/30 dark:bg-blue-950/10 font-medium">
                        {row.unellez}
                      </td>
                      <td className="py-3 px-3 text-slate-800 dark:text-slate-200 bg-indigo-50/30 dark:bg-indigo-950/10 font-medium">
                        {row.apa}
                      </td>
                      <td className="py-3 px-3 text-xs text-slate-500 dark:text-slate-400 hidden md:table-cell">
                        {row.impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>
                <strong>Regla de oro:</strong> Si tu tesis o trabajo especial de grado pertenece a la UNELLEZ, la <strong>Resolución CD330 es de cumplimiento obligatorio</strong> (margen izquierdo de 4 cm y sin sangría). Las normas APA se aplican principalmente para el formato de citación bibliográfica interna.
              </span>
            </div>
          </div>
        )}

        {/* 2-Column Grid: Visual Page Simulator & Parameters Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Page Sheet Simulator (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {isCarta ? 'Simulador Hoja Carta' : 'Simulador Hoja A4'} ·{' '}
                  <span className="text-blue-600 dark:text-blue-400">
                    {isUnellez ? 'UNELLEZ' : 'APA 7'}
                  </span>
                </h3>
              </div>

              {/* Paper Format Switcher (Carta vs A4) */}
              <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <button
                  type="button"
                  onClick={() => setPaperFormat('carta')}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
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
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
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
              <span>Normativa activa:</span>
              <span className="font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-blue-300">
                {currentConfig.legalBadge}
              </span>
            </div>

            {/* Visual Paper Canvas */}
            <div
              className={`relative mx-auto w-full max-w-[320px] ${paperAspectRatio} bg-slate-50 dark:bg-slate-800/60 rounded-xl border-2 border-slate-300 dark:border-slate-700 shadow-md p-3 flex flex-col justify-between overflow-hidden transition-all duration-300`}
            >
              {/* If UNELLEZ: Left Binding Ring Punch Visual (Encuadernación 4 cm) */}
              {isUnellez && (
                <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-around py-4 z-20 pointer-events-none opacity-40">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400"></div>
                </div>
              )}

              {/* If APA: Top Right Page Number Indicator */}
              {!isUnellez && (
                <div className="absolute top-2 right-4 z-20 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.2 rounded border border-slate-200 dark:border-slate-700">
                  Pág. 1
                </div>
              )}

              {/* Top Margin Guide Indicator */}
              <div
                className={`absolute top-0 left-0 right-0 border-b-2 border-dashed border-blue-500/70 bg-blue-500/10 flex items-center justify-center transition-all z-10 ${
                  selectedParam === 'sup' ? 'bg-blue-500/30 ring-2 ring-blue-500' : ''
                }`}
                style={{ height: isUnellez ? '14%' : '12%' }}
              >
                <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.5 rounded shadow-xs">
                  Sup: {currentConfig.margins.top.value} cm
                </span>
              </div>

              {/* Left Margin Guide */}
              <div
                className={`absolute top-0 bottom-0 left-0 border-r-2 border-dashed border-amber-500/80 bg-amber-500/10 flex items-center justify-center transition-all z-10 ${
                  selectedParam === 'izq' ? 'bg-amber-500/30 ring-2 ring-amber-500' : ''
                }`}
                style={{ width: isUnellez ? '22%' : '14%' }}
              >
                <span className="text-[9px] font-bold text-amber-800 dark:text-amber-300 bg-white/95 dark:bg-slate-900/95 px-1 py-0.5 rounded shadow-xs -rotate-90 whitespace-nowrap">
                  Izq: {currentConfig.margins.left.value} cm {isUnellez && '(Encuadernación)'}
                </span>
              </div>

              {/* Right Margin Guide */}
              <div
                className={`absolute top-0 bottom-0 right-0 border-l-2 border-dashed border-emerald-500/70 bg-emerald-500/10 flex items-center justify-center transition-all z-10 ${
                  selectedParam === 'der' ? 'bg-emerald-500/30 ring-2 ring-emerald-500' : ''
                }`}
                style={{ width: isUnellez ? '16%' : '14%' }}
              >
                <span className="text-[9.5px] font-bold text-emerald-700 dark:text-emerald-300 bg-white/90 dark:bg-slate-900/90 px-1 py-0.5 rounded shadow-xs rotate-90 whitespace-nowrap">
                  Der: {currentConfig.margins.right.value} cm
                </span>
              </div>

              {/* Bottom Margin Guide */}
              <div
                className={`absolute bottom-0 left-0 right-0 border-t-2 border-dashed border-rose-500/70 bg-rose-500/10 flex items-center justify-center transition-all z-10 ${
                  selectedParam === 'inf' ? 'bg-rose-500/30 ring-2 ring-rose-500' : ''
                }`}
                style={{ height: isUnellez ? '14%' : '12%' }}
              >
                <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.5 rounded shadow-xs">
                  Inf: {currentConfig.margins.bottom.value} cm
                </span>
              </div>

              {/* Body Text Mock Area (Center Printable Zone) */}
              <div
                className="absolute bg-white dark:bg-slate-900/95 rounded border border-slate-200 dark:border-slate-700 p-2 overflow-hidden flex flex-col justify-between transition-all"
                style={{
                  top: isUnellez ? '14%' : '12%',
                  bottom: isUnellez ? '14%' : '12%',
                  left: isUnellez ? '22%' : '14%',
                  right: isUnellez ? '16%' : '14%'
                }}
              >
                {/* Specific mockup for UNELLEZ (Sin sangría, 1.5, justificado) */}
                {isUnellez ? (
                  <div className="space-y-1.5">
                    <div className="text-center pb-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-[9px] font-black tracking-wider text-slate-800 dark:text-slate-100 uppercase block">
                        CAPÍTULO I: EL PROBLEMA
                      </span>
                      <span className="text-[7px] text-blue-600 dark:text-blue-400 font-semibold">
                        12 o 14 pt · Negrita · Res. CD330
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-full"></div>
                      <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-full"></div>
                      <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-full"></div>
                      <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-4/5"></div>
                    </div>

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
                ) : (
                  /* Specific mockup for APA 7 (Sangría 1.27cm, Doble 2.0, Alineación izquierda) */
                  <div className="space-y-1.5">
                    <div className="text-center pb-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-[9px] font-bold text-slate-900 dark:text-slate-100 block">
                        Impacto del Aprendizaje Digital
                      </span>
                      <span className="text-[7px] text-indigo-600 dark:text-indigo-400 font-semibold">
                        Título Nivel 1: Negrita y Centrado
                      </span>
                    </div>

                    {/* Paragraph with 1.27cm First Line Indent */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[7px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-1 rounded">
                          Tab 1.27cm →
                        </span>
                        <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs flex-1"></div>
                      </div>
                      <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-full"></div>
                      <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-11/12"></div>
                      <div className="h-1 bg-slate-300 dark:bg-slate-600 rounded-xs w-4/5"></div>
                    </div>

                    {/* Block quote APA (sangría izquierda 1.27 cm todo el bloque) */}
                    <div className="pl-3 py-1 bg-indigo-50/70 dark:bg-indigo-950/30 border-l-2 border-indigo-400 rounded-xs space-y-0.5">
                      <div className="h-0.5 bg-indigo-300 dark:bg-indigo-600 rounded-xs w-full"></div>
                      <div className="h-0.5 bg-indigo-300 dark:bg-indigo-600 rounded-xs w-5/6"></div>
                      <span className="text-[7.5px] text-indigo-800 dark:text-indigo-300 block font-sans">
                        Cita en bloque: Todo a 1.27cm, Doble 2.0, sin cursiva
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[7px] font-mono text-indigo-500">Tab →</span>
                        <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-xs flex-1"></div>
                      </div>
                      <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-xs w-10/12"></div>
                    </div>
                  </div>
                )}

                {/* Footer specs pill inside paper */}
                <div className="text-[8px] text-slate-600 dark:text-slate-400 font-mono text-center pt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-around">
                  {isUnellez ? (
                    <>
                      <span>Sin Sangría (0 cm)</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">Interlineado 1.5</span>
                    </>
                  ) : (
                    <>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">Sangría 1.27 cm</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">Interlineado 2.0 (Doble)</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Quick interactive buttons below paper */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-1.5 justify-center">
              <span className="text-slate-400 mr-1 text-[11px] self-center">Destacar:</span>
              <button
                type="button"
                onClick={() => setSelectedParam(selectedParam === 'izq' ? null : 'izq')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                  selectedParam === 'izq'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Izquierdo ({currentConfig.margins.left.value} cm)
              </button>
              <button
                type="button"
                onClick={() => setSelectedParam(selectedParam === 'sup' ? null : 'sup')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                  selectedParam === 'sup'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Superior ({currentConfig.margins.top.value} cm)
              </button>
              <button
                type="button"
                onClick={() => setSelectedParam(selectedParam === 'der' ? null : 'der')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                  selectedParam === 'der'
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Derecho ({currentConfig.margins.right.value} cm)
              </button>
              <button
                type="button"
                onClick={() => setSelectedParam(selectedParam === 'inf' ? null : 'inf')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                  selectedParam === 'inf'
                    ? 'bg-rose-600 text-white border-rose-600'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                Inferior ({currentConfig.margins.bottom.value} cm)
              </button>
            </div>
          </div>

          {/* Right Column: Exact Parameter Cards & Word Paths (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {currentConfig.categories.map((cat, idx) => (
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

        {/* Dynamic Bottom Cards: According to active standard */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Card 1: Excepciones / Reglas Especiales */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {isUnellez ? 'Excepciones Tipográficas Obligatorias' : 'Jerarquía y Reglas Especiales APA 7'}
                </h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 font-semibold">
                {currentConfig.shortName}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentConfig.exceptions.map((exc, eIdx) => (
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

          {/* Card 2: Extensión Académica (UNELLEZ) o Resumen de Directrices APA */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
            {isUnellez && currentConfig.extensionLimits ? (
              <>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Límites de Extensión por Nivel Académico
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 font-semibold">
                    Resolución CD330
                  </span>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {currentConfig.extensionLimits.map((lim, lIdx) => (
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

                {currentConfig.annexRule && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                    <FolderOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block">{currentConfig.annexRule.title}</strong>
                      <p className="mt-0.5 text-[11px] leading-relaxed opacity-90">
                        {currentConfig.annexRule.description}
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* If APA: Guide to Headings, Citations, and References */
              <>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Guía Rápida de Niveles de Encabezado APA 7
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 font-semibold">
                    Jerarquía APA 7
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Nivel 1: Encabezado Centrado, Negrita, Cada Palabra con Mayúscula
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      El texto comienza en un nuevo párrafo con sangría de 1.27 cm.
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Nivel 2: Alineado a la Izquierda, Negrita, Cada Palabra con Mayúscula
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      El texto comienza en un nuevo párrafo con sangría de 1.27 cm.
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Nivel 3: Alineado a la Izquierda, Negrita y Cursiva
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Subapartado del nivel 2. Párrafo con sangría de 1.27 cm.
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Nivel 4: Con Sangría (1.27 cm), Negrita, Punto Final.
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      El texto continúa en la misma línea a continuación del punto.
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 rounded-xl text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block">Sangría Francesa en Referencias APA</strong>
                    <p className="mt-0.5 text-[11px] leading-relaxed opacity-90">
                      En la lista final de Referencias de APA 7, cada entrada debe llevar sangría francesa de 1.27 cm (0.5"). La primera línea va al margen izquierdo y las siguientes van indentadas.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

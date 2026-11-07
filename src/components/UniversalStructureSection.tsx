import React, { useState } from 'react';
import { UNIVERSAL_STEPS } from '../data/universalStructureData';
import {
  BookOpen,
  ArrowRight,
  ChevronRight,
  FileText,
  ListOrdered,
  Layers,
  Sparkles,
  CheckCircle2,
  Bookmark
} from 'lucide-react';

export const UniversalStructureSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('desarrollo');

  const currentStep =
    UNIVERSAL_STEPS.find((s) => s.id === activeStepId) || UNIVERSAL_STEPS[3];

  return (
    <section
      id="estructura-universal"
      className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Sección 2 · Guía Universal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Estructura Universal de un{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Trabajo Académico</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Todo trabajo de investigación o formativo debe seguir esta secuencia lógica y jerárquica obligatoria para garantizar rigor metodológico y facilidad de lectura.
          </p>
        </div>

        {/* Visual Timeline / Flow Diagram Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {UNIVERSAL_STEPS.map((step) => {
            const isActive = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-white/60 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
                )}
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-black px-2 py-0.5 rounded-md ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}
                  >
                    Paso {step.stepNumber}
                  </span>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    0{step.stepNumber}
                  </span>
                </div>
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1">
                  {step.title}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {step.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Detailed Description and Requirements (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800">
                  {currentStep.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Paso {currentStep.stepNumber} de {UNIVERSAL_STEPS.length}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {currentStep.title}
                </h3>
                <p className="mt-1.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  {currentStep.description}
                </p>
              </div>

              {/* Requirement Bullet Points */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Elementos Obligatorios:
                </h4>
                <div className="space-y-2">
                  {currentStep.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows to next/prev step */}
              <div className="pt-4 flex items-center gap-2 border-t border-slate-100 dark:border-slate-800">
                {currentStep.stepNumber > 1 && (
                  <button
                    onClick={() =>
                      setActiveStepId(
                        UNIVERSAL_STEPS[currentStep.stepNumber - 2].id
                      )
                    }
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    ← Paso Anterior ({UNIVERSAL_STEPS[currentStep.stepNumber - 2].title})
                  </button>
                )}
                {currentStep.stepNumber < UNIVERSAL_STEPS.length && (
                  <button
                    onClick={() =>
                      setActiveStepId(UNIVERSAL_STEPS[currentStep.stepNumber].id)
                    }
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs ml-auto"
                  >
                    Siguiente Paso ({UNIVERSAL_STEPS[currentStep.stepNumber].title}) →
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Visual Mockup / Example Preview (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-5">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3 mb-3">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-indigo-500" />
                  Ejemplo Práctico en Documento
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-semibold">
                  {currentStep.id === 'desarrollo' ? 'Jerarquía Decimal' : 'Formato Estándar'}
                </span>
              </div>

              {currentStep.example && (
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-inner font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                  {currentStep.example}
                </div>
              )}

              {/* Special interactive callout for Decimal Hierarchy */}
              {currentStep.id === 'desarrollo' && (
                <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs text-amber-900 dark:text-amber-200">
                  <strong className="block mb-1 font-bold">
                    ⚠️ Regla de Oro Decimal de la Guía:
                  </strong>
                  Usa números enteros para títulos (1., 2.), decimales simples para subtítulos (1.1., 1.2.) y dobles decimales para subapartados (1.1.1., 1.2.1.). No mezcles con letras o viñetas en la numeración principal.
                </div>
              )}

              {currentStep.id === 'portada' && (
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 rounded-xl text-xs text-blue-900 dark:text-blue-200">
                  <strong className="block mb-1 font-bold">
                    📌 Regla de Portada:
                  </strong>
                  Debe estar centrada vertical y horizontalmente. Los datos de integrantes deben incluir Nombre, Apellido y Cédula de Identidad / Matrícula. Nunca lleva número de página visible.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

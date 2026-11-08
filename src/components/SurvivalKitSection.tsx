import React, { useState, useEffect } from 'react';
import {
  APA_GUIDES,
  INVERTED_PYRAMID,
  LANGUAGE_ECONOMY_TIPS,
  REVISION_PRACTICES,
  WORD_EXPORT_PROMPTS,
  PDF_EXPORT_PROMPTS,
  GLOSSARY_TERMS,
  LETHAL_CHECKLIST_ITEMS
} from '../data/survivalKitData';
import { downloadWordTemplate } from '../utils/wordDocumentGenerator';
import { calculateChecklistProgress } from '../utils/searchFilter';
import {
  Sparkles,
  BookOpen,
  TriangleAlert,
  Copy,
  Check,
  CheckSquare,
  Square,
  ShieldCheck,
  RotateCcw,
  Archive,
  Layers,
  ArrowRight,
  Flame,
  Award,
  Download,
  FileText
} from 'lucide-react';

interface SurvivalKitProps {
  onOpenPdfModal: () => void;
}

export const SurvivalKitSection: React.FC<SurvivalKitProps> = ({ onOpenPdfModal }) => {
  const [copiedApaId, setCopiedApaId] = useState<string | null>(null);
  const [promptNormative, setPromptNormative] = useState<'unellez' | 'apa'>('unellez');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [checkedErrors, setCheckedErrors] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('guia_maestra_lethal_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const allItemIds = LETHAL_CHECKLIST_ITEMS.map((item) => item.id);
  const progress = calculateChecklistProgress(checkedErrors, allItemIds);

  const toggleErrorCheck = (id: string) => {
    const next = { ...checkedErrors, [id]: !checkedErrors[id] };
    setCheckedErrors(next);
    try {
      localStorage.setItem('guia_maestra_lethal_checklist', JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const resetChecklist = () => {
    setCheckedErrors({});
    try {
      localStorage.removeItem('guia_maestra_lethal_checklist');
    } catch {
      // ignore
    }
  };

  const handleCopyApa = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedApaId(id);
    setTimeout(() => setCopiedApaId(null), 2000);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(PDF_EXPORT_PROMPTS[promptNormative]);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2200);
  };

  return (
    <section id="kit-supervivencia" className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Sección 4 · Herramientas Prácticas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            El Kit de Supervivencia del{' '}
            <span className="text-amber-600 dark:text-amber-400">Redactor Pro</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Herramientas críticas para evitar errores fatales: citas APA en 3 clics, pirámide invertida para directivos, técnicas anti-bloqueo y el checklist de 5 filtros letales.
          </p>
        </div>

        {/* 1. NORMAS APA RÁPIDAS (7ma y 5ta Edición) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Normas APA Rápidas (7.ª y 5.ª Ed.)</span>
            </h3>
            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 font-semibold">
              Citas y Referencias
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APA_GUIDES.map((guide) => (
              <div
                key={guide.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {guide.title}
                    </span>
                    <button
                      onClick={() => handleCopyApa(guide.id, guide.example)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                      {copiedApaId === guide.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>Regla:</strong> {guide.rule}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/60 font-mono text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-sans mb-1">
                      Estructura:
                    </span>
                    {guide.structure}
                  </div>

                  <div className="bg-blue-50/60 dark:bg-blue-950/20 p-2.5 rounded-xl border border-blue-100 dark:border-blue-900/40 text-xs text-blue-950 dark:text-blue-200 italic font-serif">
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 not-italic font-sans font-bold block mb-1">
                      Ejemplo:
                    </span>
                    {guide.example}
                  </div>
                </div>

                <div className="mt-3 pt-2 text-[11px] text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800">
                  💡 {guide.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. PIRÁMIDE INVERTIDA & ECONOMÍA DEL LENGUAJE (2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pirámide Invertida (6 cols) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {INVERTED_PYRAMID.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {INVERTED_PYRAMID.subtitle}
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 font-semibold">
                Ámbito Corporativo
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {INVERTED_PYRAMID.summary}
            </p>

            {/* Pyramid Graphic Layers */}
            <div className="space-y-2 pt-2 flex flex-col items-center">
              {INVERTED_PYRAMID.layers.map((layer) => (
                <div
                  key={layer.level}
                  className={`${layer.width} ${layer.color} p-3 sm:p-4 rounded-xl shadow-xs transition-transform hover:scale-[1.01]`}
                >
                  <span className="font-bold text-xs sm:text-sm block">
                    {layer.title}
                  </span>
                  <span className="text-xs opacity-90 block mt-0.5 leading-snug">
                    {layer.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs text-amber-900 dark:text-amber-200">
              ⚡ <strong>Tip Directivo:</strong> En un informe ejecutivo o memo, si tu primera línea no contiene la conclusión o cifra clave, el 70% de los gerentes no pasará del primer párrafo.
            </div>
          </div>

          {/* Economía del Lenguaje (6 cols) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Economía del Lenguaje: Escribe con Potencia
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 font-semibold">
                Claridad y Fuerza
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              La brevedad no es falta de contenido; es respeto por el tiempo del lector y síntoma de maestría técnica.
            </p>

            <div className="space-y-3">
              {LANGUAGE_ECONOMY_TIPS.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-2 text-xs"
                >
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {tip.title}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-start gap-2 text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 p-2 rounded-lg">
                      <span className="font-bold text-rose-600">✕</span>
                      <span className="line-through">{tip.bad}</span>
                    </div>
                    <div className="flex items-start gap-2 text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded-lg font-medium">
                      <span className="font-bold text-emerald-600">✓</span>
                      <span>{tip.good}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    {tip.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. RECURSOS DE VERIFICACIÓN (La prueba del cajón, lectura inversa, etc.) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Buenas Prácticas de Revisión (Proofreading)</span>
            </h3>
            <span className="text-xs text-slate-500">Técnicas científicas de corrección</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVISION_PRACTICES.map((practice) => (
              <div
                key={practice.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {practice.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {practice.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PROMPT PARA MAQUETACIÓN EN MICROSOFT WORD EDITABLE */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800 space-y-5">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-200 border border-blue-400/30 inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-300" />
                  <span>Prompt de Maquetación Universal · Word (.docx Editable)</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-200 border border-amber-400/30 inline-flex items-center gap-1.5">
                  📄 Hoja Tipo Carta (8.5 × 11")
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 inline-flex items-center gap-1.5">
                  ⚡ 100% Descargable y Editable
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Instrucciones para Generar Documento en Word (.docx) Editable
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-blue-200 max-w-2xl leading-relaxed">
                Pega este prompt en ChatGPT, Claude, Gemini o en tu procesador de textos para que la IA transforme tu trabajo directamente en un <strong>archivo de Word (.docx) listo para descargar y editar</strong>, con márgenes exactos, fuentes autorizadas, interlineados y estilos de título oficiales.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              {/* Direct Download Word Button */}
              <button
                type="button"
                onClick={() => downloadWordTemplate(promptNormative)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                title="Descargar plantilla editable inmediata para Microsoft Word"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Word Editable (.doc)</span>
              </button>

              {/* Copy Word Prompt Button */}
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-white text-blue-950 hover:bg-blue-50 transition-all shadow-md shrink-0 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>¡Prompt Word Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-blue-900" />
                    <span>Copiar Prompt ({promptNormative === 'unellez' ? 'UNELLEZ' : 'APA 7'})</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Normative Toggle Switch Buttons for Prompt */}
          <div className="flex flex-col sm:flex-row items-center gap-2 p-1 bg-slate-900/80 rounded-xl border border-blue-700/50">
            <button
              type="button"
              onClick={() => setPromptNormative('unellez')}
              className={`w-full sm:w-1/2 py-2 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer ${
                promptNormative === 'unellez'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/40'
              }`}
            >
              <span>🏛️ Normativa UNELLEZ (Resolución CD330 / CD300) · Word Carta</span>
            </button>

            <button
              type="button"
              onClick={() => setPromptNormative('apa')}
              className={`w-full sm:w-1/2 py-2 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer ${
                promptNormative === 'apa'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/40'
              }`}
            >
              <span>📖 Normas APA (7.ª Edición Oficial) · Word Carta</span>
            </button>
          </div>

          {/* Quick Specifications Tagline */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-blue-200/90 font-mono bg-blue-950/60 p-2.5 rounded-xl border border-blue-800/60">
            <span className="font-sans font-bold text-white">Parámetros Word aplicados:</span>
            <span>📄 Papel Carta (21.59 × 27.94 cm)</span>
            <span>•</span>
            {promptNormative === 'unellez' ? (
              <>
                <span>📏 Márgenes Word: Izq 4.0 cm · Der/Sup/Inf 3.0 cm</span>
                <span>•</span>
                <span>⚡ Interlineado: 1.5</span>
                <span>•</span>
                <span>Estilo: Sin sangría inicial (0 cm)</span>
              </>
            ) : (
              <>
                <span>📏 Márgenes Word: 2.54 cm simétricos (1")</span>
                <span>•</span>
                <span>⚡ Interlineado: 2.0 Doble</span>
                <span>•</span>
                <span>Sangría: 1.27 cm (0.5")</span>
              </>
            )}
            <span>•</span>
            <span className="text-emerald-300 font-sans font-bold">Entrega: Archivo Word (.docx)</span>
          </div>

          <pre className="p-4 bg-slate-950/90 rounded-2xl border border-blue-500/30 text-blue-100 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96">
            {WORD_EXPORT_PROMPTS[promptNormative]}
          </pre>
        </div>

        {/* 5. GLOSARIO DE TÉRMINOS CLAVE */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              <span>Glosario de Términos Académicos y Corporativos</span>
            </h3>
            <span className="text-xs text-slate-400">Conceptos esenciales de las guías</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GLOSSARY_TERMS.map((term, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800"
              >
                <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400 block mb-1">
                  {term.term}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {term.def}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CHECKLIST FINAL: LOS 5 ERRORES LETALES (INTERACTIVO) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-rose-300 dark:border-rose-900/60 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Checklist Final: Los 5 Errores Letales a Evitar
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Verifica obligatoriamente cada punto antes de imprimir, enviar o entregar tu documento.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Progreso de revisión</span>
                <span className="text-sm font-black text-rose-600 dark:text-rose-400">
                  {progress.checkedCount} de {progress.total} verificados ({progress.percentage}%)
                </span>
              </div>
              <button
                onClick={resetChecklist}
                title="Reiniciar casillas"
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                progress.isComplete
                  ? 'bg-emerald-500'
                  : 'bg-gradient-to-r from-rose-500 to-amber-500'
              }`}
              style={{ width: `${progress.percentage}%` }}
            />
          </div>

          {progress.isComplete && (
            <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-2xl flex items-center gap-3 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm">
              <Award className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>¡Excelente trabajo!</strong> Has verificado todos los filtros críticos. Tu documento cumple con los estándares de rigor y profesionalismo.
              </span>
            </div>
          )}

          {/* Interactive Checkbox List */}
          <div className="space-y-3">
            {LETHAL_CHECKLIST_ITEMS.map((item, idx) => {
              const isChecked = Boolean(checkedErrors[item.id]);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleErrorCheck(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                    isChecked
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
                      : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/60 hover:border-rose-300 dark:hover:border-rose-800'
                  }`}
                >
                  <span className="mt-0.5 text-rose-600 dark:text-rose-400 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </span>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 font-mono">
                        0{idx + 1}.
                      </span>
                      <h4
                        className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white ${
                          isChecked ? 'line-through text-slate-400 dark:text-slate-500' : ''
                        }`}
                      >
                        {item.label}
                      </h4>
                    </div>

                    <p className="text-xs text-rose-700 dark:text-rose-300">
                      <strong>Consecuencia letal:</strong> {item.consequence}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      💡 <strong>Cómo evitarlo:</strong> {item.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { DocumentItem } from '../types';
import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Copy,
  Check,
  CheckSquare,
  Square,
  ListOrdered,
  Clock,
  Sparkles,
  BookmarkCheck,
  FileText
} from 'lucide-react';

interface DocumentCardProps {
  document: DocumentItem;
  defaultExpanded?: boolean;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  defaultExpanded = false
}) => {
  const [isStructureOpen, setIsStructureOpen] = useState(defaultExpanded);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(document.template);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const categoryBadgeColors = {
    escolar: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    universitario: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    profesional: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800'
  };

  return (
    <article className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div className="p-5 sm:p-6 space-y-4">
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-xs text-slate-700 dark:text-slate-300 font-mono">
              #{document.id}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                categoryBadgeColors[document.category]
              }`}
            >
              {document.categoryEmoji} {document.categoryLabel}
            </span>
          </div>

          <span className="text-xs text-slate-400 font-medium">
            {document.structure.length} pasos
          </span>
        </div>

        {/* Title & Short Definition */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            {document.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-snug">
            {document.shortDef}
          </p>
        </div>

        {/* Purpose / Cuándo usarlo */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
          <strong className="text-slate-900 dark:text-white font-semibold">
            Propósito / Cuándo usarlo:{' '}
          </strong>
          {document.purpose}
        </div>

        {/* Extension and Tone Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-blue-950 dark:text-blue-200">
            <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="truncate">
              <strong>Extensión:</strong> {document.length}
            </span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-indigo-950 dark:text-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span className="truncate">
              <strong>Tono:</strong> {document.tone}
            </span>
          </div>
        </div>

        {/* Collapsible: Estructura Obligatoria (Numbered Steps) */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setIsStructureOpen(!isStructureOpen)}
            className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
            aria-expanded={isStructureOpen}
          >
            <span className="flex items-center gap-2">
              <ListOrdered className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Estructura Obligatoria ({document.structure.length} Pasos)</span>
            </span>
            {isStructureOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {isStructureOpen && (
            <div className="p-3.5 space-y-2.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              {document.structure.map((item) => (
                <div key={item.step} className="flex items-start gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {item.step}
                  </span>
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">
                      {item.title}:{' '}
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top 3 Errores Comunes (Red Alert Box) */}
        <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl p-3.5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
            <span>Top 3 Errores Comunes (Evitar en Rojo):</span>
          </div>
          <ul className="space-y-1.5 text-xs text-rose-900 dark:text-rose-200 pl-1">
            {document.commonErrors.map((err, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold shrink-0">
                  ✕
                </span>
                <span>{err}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Micro-Plantilla / Ejemplo Real en cursiva con botón de copiar */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3.5 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Micro-Plantilla / Ejemplo Real:
            </span>
            <button
              onClick={handleCopyTemplate}
              className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-2xs"
            >
              {copiedTemplate ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs italic text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-800 leading-relaxed font-serif">
            "{document.template}"
          </p>
        </div>

        {/* Collapsible: Checklist de Verificación Final */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setIsChecklistOpen(!isChecklistOpen)}
            className="w-full flex items-center justify-between p-2.5 bg-slate-50/70 hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
          >
            <span className="flex items-center gap-2">
              <BookmarkCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Checklist de Verificación Final ({document.checklist.length} Criterios)</span>
            </span>
            {isChecklistOpen ? (
              <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>

          {isChecklistOpen && (
            <div className="p-3 space-y-2 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs">
              {document.checklist.map((item, idx) => {
                const isChecked = Boolean(checkedItems[idx]);
                return (
                  <label
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
                  >
                    <span className="mt-0.5 text-emerald-600 dark:text-emerald-400">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                      )}
                    </span>
                    <span className={isChecked ? 'line-through opacity-60' : ''}>
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

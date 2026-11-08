import React, { useState } from 'react';
import { WORD_EXPORT_PROMPTS } from '../data/survivalKitData';
import { downloadWordTemplate } from '../utils/wordDocumentGenerator';
import { X, Copy, Check, Download, FileText, CheckCircle2, BookmarkCheck, FileCheck2 } from 'lucide-react';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({ isOpen, onClose }) => {
  const [normative, setNormative] = useState<'unellez' | 'apa'>('unellez');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const activePrompt = WORD_EXPORT_PROMPTS[normative];

  const handleCopy = () => {
    navigator.clipboard.writeText(activePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    downloadWordTemplate(normative);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="word-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 id="word-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Prompt y Plantilla para Microsoft Word (.docx Editable)
                </h3>
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  Hoja Tipo Carta
                </span>
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  Descargable
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Instrucciones editoriales para que la IA entregue el documento en Word listo para editar y descargar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Normative Toggle Selector */}
        <div className="flex flex-col sm:flex-row gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setNormative('unellez')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              normative === 'unellez'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookmarkCheck className="w-4 h-4" />
            <span>Normativa UNELLEZ (Resolución CD330 / CD300) · Word</span>
          </button>

          <button
            type="button"
            onClick={() => setNormative('apa')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              normative === 'apa'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Normas APA (7.ª Edición Oficial) · Word</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Pega este prompt en tu asistente de IA (ChatGPT, Gemini, Claude) o procesador de textos para que entregue el documento en formato <strong>Word (.docx) editable</strong> en papel tamaño <strong>Carta</strong> según la <strong>{normative === 'unellez' ? 'Normativa UNELLEZ (Resolución CD330 / CD300)' : 'Normas APA (7.ª Edición)'}</strong>, o descarga la plantilla base directa a tu equipo:
        </p>

        {/* Prompt Content Preview */}
        <div className="relative">
          <pre className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs font-mono text-slate-800 dark:text-slate-200 max-h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed">
            {activePrompt}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Hoja Tipo Carta (21.59 × 27.94 cm) · 100% Editable en Word</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              title="Descargar archivo Word (.doc) directo"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Plantilla Word</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>¡Prompt Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Prompt Word</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

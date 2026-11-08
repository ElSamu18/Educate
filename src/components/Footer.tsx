import React from 'react';
import { FileText, ArrowUp, BookOpen, ShieldCheck, Download } from 'lucide-react';

interface FooterProps {
  onOpenPdfModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPdfModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-950 border border-blue-500/40 shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/assets/aistudio/1794114511201_89211427.jpg"
                  alt="Logo Más Educación"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight block">
                  Más Educación
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  Guía Maestra de Documentos Escritos
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Herramienta interactiva de referencia de <strong>Más Educación</strong> para estudiantes, investigadores y profesionales. Desarrollada con base en los lineamientos de la <strong>Guía Universal de Trabajos Académicos</strong> y la <strong>Guía Completa de Documentos Escritos</strong>.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                23 Documentos
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                Word Milimétrico
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                APA 7ma / 5ta
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#receta-word" className="hover:text-blue-400 transition-colors">
                  1. Configuración de Word (Márgenes)
                </a>
              </li>
              <li>
                <a href="#estructura-universal" className="hover:text-blue-400 transition-colors">
                  2. Esquema Universal (Decimal)
                </a>
              </li>
              <li>
                <a href="#23-documentos" className="hover:text-blue-400 transition-colors">
                  3. Fichas de los 23 Documentos
                </a>
              </li>
              <li>
                <a href="#kit-supervivencia" className="hover:text-blue-400 transition-colors">
                  4. Kit APA, Pirámide y Checklists
                </a>
              </li>
            </ul>
          </div>

          {/* Tools & Resources (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Recursos de Maquetación Word
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Descarga la plantilla editable de Microsoft Word (.doc) o copia el prompt para generar el documento en Word Carta (UNELLEZ Res. CD330 / Normas APA 7).
            </p>
            <button
              type="button"
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Plantilla y Prompt de Word</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Más Educación · Guía Maestra de Documentos Escritos. Consulta rápida para fines educativos y profesionales.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

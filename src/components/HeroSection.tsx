import React from 'react';
import { Search, Sparkles, Sliders, BookOpen, FileCheck, Layers, X } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80 text-blue-900 dark:text-blue-300 text-xs sm:text-sm font-medium shadow-xs mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
          <span>Manual de Consulta Rápida: Guía Universal + 23 Documentos</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight sm:leading-tight">
          La Guía Definitiva de{' '}
          <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-sky-300">
            Documentos Escritos
          </span>{' '}
          y Formato Académico
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Configuración milimétrica de <strong>Microsoft Word</strong>, esquema universal paso a paso, fichas interactivas con estructuras, errores letales y plantillas listas para copiar en los ámbitos escolar, universitario y corporativo.
        </p>

        {/* Stats / Feature Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            23 Tipos de Documentos
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
            📄 Hoja Tipo Carta Oficial
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs font-medium">
            📏 UNELLEZ (Res. CD330) & Normas APA 7.ª Ed.
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
            ⚡ Simulador y Comparativa en Vivo
          </span>
        </div>

        {/* Global Instant Search Bar */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
          <div className="relative flex items-center shadow-lg rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-500/30 focus-within:border-blue-600 dark:focus-within:border-blue-400 transition-all p-1.5">
            <div className="pl-3 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar documento (ej. Ensayo, TFG, Carta, Minuta, IMRyD, APA)..."
              className="w-full px-3 py-2 text-sm sm:text-base bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <a
              href="#23-documentos"
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
            >
              Explorar Fichas
            </a>
          </div>
        </div>

        {/* Quick jump anchor tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-400 font-medium">Acceso directo:</span>
          <a
            href="#receta-word"
            className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-slate-800 dark:text-blue-300 dark:hover:bg-slate-700 transition-colors"
          >
            📏 Márgenes y Sangrías Word
          </a>
          <a
            href="#estructura-universal"
            className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700 transition-colors"
          >
            📋 Esquema Decimal Universal
          </a>
          <a
            href="#kit-supervivencia"
            className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 dark:bg-slate-800 dark:text-amber-300 dark:hover:bg-slate-700 transition-colors"
          >
            ⚡ APA & Checklist Letal
          </a>
        </div>
      </div>
    </section>
  );
};

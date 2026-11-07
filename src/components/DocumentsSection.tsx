import React, { useState, useMemo } from 'react';
import { DOCUMENTS_DATA } from '../data/documentsData';
import { DocumentCategory, DocumentItem } from '../types';
import { DocumentCard } from './DocumentCard';
import { filterDocuments } from '../utils/searchFilter';
import {
  FileText,
  School,
  GraduationCap,
  Briefcase,
  Search,
  SlidersHorizontal,
  X,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface DocumentsSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: DocumentCategory | 'all';
  setActiveCategory: (cat: DocumentCategory | 'all') => void;
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory
}) => {
  const [expandAll, setExpandAll] = useState(false);

  const tabs: { id: DocumentCategory | 'all'; label: string; icon: any; count: number }[] = [
    { id: 'all', label: 'Todos los Documentos', icon: Layers, count: 23 },
    { id: 'escolar', label: 'Ámbito Escolar', icon: School, count: 5 },
    { id: 'universitario', label: 'Ámbito Universitario', icon: GraduationCap, count: 9 },
    { id: 'profesional', label: 'Ámbito Profesional', icon: Briefcase, count: 9 }
  ];

  const filteredDocs = useMemo(() => {
    return filterDocuments(DOCUMENTS_DATA, activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  return (
    <section id="23-documentos" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Sección 3 · Núcleo Interactivo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Los 23 Tipos de Documentos:{' '}
              <span className="text-blue-600 dark:text-blue-400">Guía Completa</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Selecciona el ámbito deseado para explorar definiciones sintéticas, estructuras numeradas, errores críticos en rojo y micro-plantillas listas para usar.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setExpandAll(!expandAll)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs"
            >
              {expandAll ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Colapsar Estructuras</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Desplegar Estructuras</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Category Tabs System */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`ml-1 text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Filter Bar / Results Count */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 w-full sm:w-auto">
            <span className="font-semibold text-slate-900 dark:text-white">
              Mostrando {filteredDocs.length} de {DOCUMENTS_DATA.length} documentos
            </span>
            {searchQuery && (
              <span className="text-slate-400">
                para <strong className="text-blue-600">"{searchQuery}"</strong>
              </span>
            )}
          </div>

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors self-end sm:self-auto"
            >
              <X className="w-3.5 h-3.5" />
              <span>Restablecer búsqueda</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredDocs.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No se encontraron documentos
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              No hay documentos que coincidan con "{searchQuery}" en la categoría seleccionada. Intenta buscar otro término o cambiar de ámbito.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Ver los 23 Documentos
            </button>
          </div>
        ) : (
          /* Cards Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                defaultExpanded={expandAll}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

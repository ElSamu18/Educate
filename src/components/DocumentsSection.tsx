import React, { useState, useMemo, useEffect } from 'react';
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
  X,
  ChevronDown,
  ChevronUp,
  FolderOpen,
  Folder,
  Layers,
  Sparkles,
  BookOpen,
  Building2,
  CheckCircle2
} from 'lucide-react';

interface DocumentsSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: DocumentCategory | 'all';
  setActiveCategory: (cat: DocumentCategory | 'all') => void;
}

interface GradeSectionConfig {
  id: DocumentCategory;
  title: string;
  subtitle: string;
  levelBadge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colorGradient: string;
  borderTheme: string;
  badgeTheme: string;
  headerBg: string;
  accentBg: string;
  tipText: string;
  totalCount: number;
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory
}) => {
  // Collapsible state for each of the 3 academic grades
  const [openGrades, setOpenGrades] = useState<Record<DocumentCategory, boolean>>({
    escolar: false,
    universitario: false,
    profesional: false
  });

  // State to expand/collapse internal card structures across active grade
  const [expandAllStructures, setExpandAllStructures] = useState(false);

  // Filtered documents by grade
  const escolarDocs = useMemo(
    () => filterDocuments(DOCUMENTS_DATA, 'escolar', searchQuery),
    [searchQuery]
  );
  const universitarioDocs = useMemo(
    () => filterDocuments(DOCUMENTS_DATA, 'universitario', searchQuery),
    [searchQuery]
  );
  const profesionalDocs = useMemo(
    () => filterDocuments(DOCUMENTS_DATA, 'profesional', searchQuery),
    [searchQuery]
  );

  const totalFilteredCount =
    escolarDocs.length + universitarioDocs.length + profesionalDocs.length;

  // Auto-expand grades when user types a search query with matches
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setOpenGrades({
        escolar: escolarDocs.length > 0,
        universitario: universitarioDocs.length > 0,
        profesional: profesionalDocs.length > 0
      });
    }
  }, [searchQuery, escolarDocs.length, universitarioDocs.length, profesionalDocs.length]);

  // When active category tab is clicked, automatically open that grade
  const handleTabClick = (cat: DocumentCategory | 'all') => {
    setActiveCategory(cat);
    if (cat === 'all') {
      // Keep current state or expand all if desired
    } else {
      setOpenGrades((prev) => ({
        ...prev,
        [cat]: true
      }));
    }
  };

  const toggleGrade = (gradeId: DocumentCategory) => {
    setOpenGrades((prev) => ({
      ...prev,
      [gradeId]: !prev[gradeId]
    }));
  };

  const expandAllGrades = () => {
    setOpenGrades({
      escolar: true,
      universitario: true,
      profesional: true
    });
  };

  const collapseAllGrades = () => {
    setOpenGrades({
      escolar: false,
      universitario: false,
      profesional: false
    });
  };

  const allGradesOpen =
    openGrades.escolar && openGrades.universitario && openGrades.profesional;
  const anyGradeOpen =
    openGrades.escolar || openGrades.universitario || openGrades.profesional;

  // Configuration for each grade drawer
  const gradeConfigs: GradeSectionConfig[] = [
    {
      id: 'escolar',
      title: 'Ámbito Escolar (Educación Básica y Media)',
      subtitle: 'Comprensión de lectura, técnicas de síntesis y primeros trabajos académicos estructurados.',
      levelBadge: 'Grado 1 · Primaria y Secundaria',
      description: '5 tipos de documentos esenciales para aprender a resumir, fichar textos y estructurar monografías escolares con rigor y claridad.',
      icon: School,
      colorGradient: 'from-emerald-600 to-teal-700',
      borderTheme: 'border-emerald-200 dark:border-emerald-800/70',
      badgeTheme: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
      headerBg: 'bg-emerald-50/70 dark:bg-emerald-950/20 hover:bg-emerald-100/60 dark:hover:bg-emerald-950/40',
      accentBg: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-200',
      tipText: 'Clave pedagógica: Enfoque en la jerarquización de ideas principales vs. secundarias sin caer en copia textual literal.',
      totalCount: 5
    },
    {
      id: 'universitario',
      title: 'Ámbito Universitario y Posgrado (Pregrado, Maestrías y Doctorados)',
      subtitle: 'Investigación formal, argumentación crítica, metodología IMRyD y normas de titulación.',
      levelBadge: 'Grado 2 · Universidad y Posgrado',
      description: '9 tipos de documentos académicos de alto rigor: ensayos con tesis defendible, artículos IMRyD, revisiones sistemáticas y proyectos de grado.',
      icon: GraduationCap,
      colorGradient: 'from-indigo-600 to-blue-700',
      borderTheme: 'border-indigo-200 dark:border-indigo-800/70',
      badgeTheme: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700',
      headerBg: 'bg-indigo-50/70 dark:bg-indigo-950/20 hover:bg-indigo-100/60 dark:hover:bg-indigo-950/40',
      accentBg: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/40 text-indigo-900 dark:text-indigo-200',
      tipText: 'Clave metodológica: Todo juicio o afirmación empírica debe estar debidamente citado (Normas APA o Resolución UNELLEZ CD330).',
      totalCount: 9
    },
    {
      id: 'profesional',
      title: 'Ámbito Profesional y Corporativo (Empresarial e Institucional)',
      subtitle: 'Comunicación ejecutiva, pirámide invertida, toma de decisiones y formalidad legal/laboral.',
      levelBadge: 'Grado 3 · Corporativo y Técnico',
      description: '9 tipos de documentos para el mundo real: informes técnicos con datos, resúmenes ejecutivos BLUF, propuestas y minutas de auditoría.',
      icon: Briefcase,
      colorGradient: 'from-blue-600 to-cyan-700',
      borderTheme: 'border-blue-200 dark:border-blue-800/70',
      badgeTheme: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-300 dark:border-blue-700',
      headerBg: 'bg-blue-50/70 dark:bg-blue-950/20 hover:bg-blue-100/60 dark:hover:bg-blue-950/40',
      accentBg: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/40 text-blue-900 dark:text-blue-200',
      tipText: 'Clave ejecutiva: Aplicar la Pirámide Invertida (conclusión y decisión al inicio, sustentación detallada después).',
      totalCount: 9
    }
  ];

  // Helper to get docs list for a given grade
  const getGradeDocs = (gradeId: DocumentCategory): DocumentItem[] => {
    switch (gradeId) {
      case 'escolar':
        return escolarDocs;
      case 'universitario':
        return universitarioDocs;
      case 'profesional':
        return profesionalDocs;
    }
  };

  return (
    <section id="23-documentos" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Sección 3 · Núcleo Interactivo Desplegable</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Los 23 Tipos de Documentos:{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Desplegables por Grado Académico
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
              Para no abrumarte con 23 fichas simultáneas, los documentos se encuentran organizados en{' '}
              <strong className="text-slate-900 dark:text-white">3 módulos desplegables</strong> según su grado académico. Haz clic en el grado que deseas consultar para desplegar sus fichas completas.
            </p>
          </div>

          {/* Quick Action Controls */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto shrink-0">
            {allGradesOpen ? (
              <button
                onClick={collapseAllGrades}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
                title="Plegar los 3 grados académicos"
              >
                <Folder className="w-3.5 h-3.5 text-slate-500" />
                <span>Plegar Todos los Grados</span>
              </button>
            ) : (
              <button
                onClick={expandAllGrades}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-colors shadow-2xs cursor-pointer"
                title="Desplegar los 3 grados académicos a la vez"
              >
                <FolderOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Desplegar Todos los Grados</span>
              </button>
            )}

            <button
              onClick={() => setExpandAllStructures(!expandAllStructures)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
              title="Expandir o plegar los pasos numerados de las fichas abiertas"
            >
              {expandAllStructures ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Plegar Pasos Internos</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Desplegar Pasos Internos</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Category Navigation Pills / Quick Selectors */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
          <button
            onClick={() => handleTabClick('all')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-[1.02]'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Ver los 3 Grados</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
              23
            </span>
          </button>

          {gradeConfigs.map((grade) => {
            const Icon = grade.icon;
            const isOpen = openGrades[grade.id];
            const isActive = activeCategory === grade.id;
            const docsInGrade = getGradeDocs(grade.id);

            return (
              <button
                key={grade.id}
                onClick={() => {
                  handleTabClick(grade.id);
                  // Ensure this grade is open
                  setOpenGrades((prev) => ({ ...prev, [grade.id]: true }));
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{grade.title.split(' ')[1]}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : isOpen
                      ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {docsInGrade.length}
                </span>
                {isOpen && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" title="Desplegado" />
                )}
              </button>
            );
          })}
        </div>

        {/* Live Search Indicator (if active) */}
        {searchQuery && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-blue-50/80 dark:bg-blue-950/40 p-3.5 rounded-2xl border border-blue-200 dark:border-blue-900/60 mb-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <Search className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Filtro activo para: <strong className="text-blue-700 dark:text-blue-300">"{searchQuery}"</strong> ({totalFilteredCount} coincidencias en total).
                Los grados académicos con resultados se han desplegado automáticamente.
              </span>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-950/60 hover:bg-rose-200 transition-colors shrink-0 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Limpiar búsqueda</span>
            </button>
          </div>
        )}

        {/* Empty State for Zero Search Results */}
        {totalFilteredCount === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 mb-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No se encontraron documentos
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              No hay documentos que coincidan con "{searchQuery}". Intenta con palabras clave como "ensayo", "informe", "acta", "monografía" o "resumen".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                expandAllGrades();
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Restablecer y Ver los 23 Documentos
            </button>
          </div>
        )}

        {/* THE 3 COLLAPSIBLE ACADEMIC GRADE DRAWERS */}
        <div className="space-y-6">
          {gradeConfigs.map((grade, gradeIndex) => {
            const Icon = grade.icon;
            const isOpen = openGrades[grade.id];
            const gradeDocs = getGradeDocs(grade.id);

            // If user selected a single tab and this is not that tab, but activeCategory !== 'all', still show or filter
            if (activeCategory !== 'all' && activeCategory !== grade.id) {
              return null;
            }

            return (
              <div
                key={grade.id}
                className={`bg-white dark:bg-slate-900 rounded-3xl border ${grade.borderTheme} shadow-sm overflow-hidden transition-all duration-300`}
              >
                {/* ACCORDION HEADER (Click to toggle this academic level) */}
                <button
                  type="button"
                  onClick={() => toggleGrade(grade.id)}
                  aria-expanded={isOpen}
                  className={`w-full p-5 sm:p-6 text-left transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isOpen ? grade.headerBg : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Grade Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${grade.colorGradient} flex items-center justify-center text-white shadow-md shrink-0`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${grade.badgeTheme}`}>
                          {grade.levelBadge}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {gradeDocs.length} de {grade.totalCount} documentos
                        </span>
                        {isOpen ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                            <CheckCircle2 className="w-3 h-3" /> Desplegado
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                            Haz clic para desplegar
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {gradeIndex + 1}. {grade.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {grade.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    <div className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isOpen
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      <span>{isOpen ? 'Plegar Grado' : 'Desplegar Grado'}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* EXPANDABLE BODY (Renders the documents grid when open) */}
                {isOpen && (
                  <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-6">
                    {/* Grade Pedagogical Tip Banner */}
                    <div className={`p-4 rounded-2xl border ${grade.accentBg} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <strong>{grade.description}</strong>
                          <p className="mt-0.5 text-xs opacity-90">{grade.tipText}</p>
                        </div>
                      </div>

                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/80 dark:bg-slate-900/80 shadow-2xs shrink-0 self-end sm:self-center">
                        Mostrando {gradeDocs.length} fichas
                      </span>
                    </div>

                    {/* Empty State within this Grade */}
                    {gradeDocs.length === 0 ? (
                      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          No hay documentos en este grado académico que coincidan con "{searchQuery}".
                        </p>
                      </div>
                    ) : (
                      /* Grid of Document Cards for this Grade */
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gradeDocs.map((doc) => (
                          <DocumentCard
                            key={doc.id}
                            document={doc}
                            defaultExpanded={expandAllStructures}
                          />
                        ))}
                      </div>
                    )}

                    {/* Bottom collapse helper button */}
                    <div className="pt-2 flex justify-center">
                      <button
                        type="button"
                        onClick={() => toggleGrade(grade.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                        <span>Plegar {grade.title.split('(')[0].trim()} ↑</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global summary indicator when all are closed */}
        {!anyGradeOpen && totalFilteredCount > 0 && (
          <div className="mt-8 p-6 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Todos los grados académicos están actualmente plegados para una vista limpia y despejada.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Haz clic en cualquiera de las 3 tarjetas superiores o presiona el botón a continuación para desplegar todos los documentos.
            </p>
            <button
              onClick={expandAllGrades}
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors cursor-pointer"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Desplegar Todos los Grados (23 Documentos)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

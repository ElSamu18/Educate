import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Sliders,
  CheckCircle2,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  Printer,
  Download
} from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenPdfModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
  onOpenPdfModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#receta-word', label: '1. Receta Word', icon: Sliders },
    { href: '#estructura-universal', label: '2. Estructura Universal', icon: BookOpen },
    { href: '#23-documentos', label: '3. Los 23 Documentos', icon: FileText },
    { href: '#kit-supervivencia', label: '4. Kit de Supervivencia', icon: Sparkles }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-950 border border-blue-500/30 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <img
                src="/assets/aistudio/1794114511201_89211427.jpg"
                alt="Logo Más Educación"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                  Más Educación
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                  Guía Maestra
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Formato Académico & Profesional
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPdfModal}
              title="Descargar plantilla y prompt editable de Microsoft Word"
              aria-label="Plantilla Word editable"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-blue-200 dark:border-blue-800/80 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Plantilla Word (.doc)</span>
            </button>

            <button
              onClick={handlePrint}
              title="Imprimir o Guardar como PDF"
              aria-label="Imprimir documento"
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-label="Alternar modo oscuro"
              className="p-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-amber-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg"
                >
                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfModal();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Plantilla Word y Prompt (.docx)</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

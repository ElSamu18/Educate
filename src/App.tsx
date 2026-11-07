/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WordRecipeSection } from './components/WordRecipeSection';
import { UniversalStructureSection } from './components/UniversalStructureSection';
import { DocumentsSection } from './components/DocumentsSection';
import { SurvivalKitSection } from './components/SurvivalKitSection';
import { PdfExportModal } from './components/PdfExportModal';
import { Footer } from './components/Footer';
import { DocumentCategory } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('guia_maestra_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<DocumentCategory | 'all'>('all');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('guia_maestra_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('guia_maestra_theme', 'light');
      }
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Sticky Top Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Quick Search and Stats */}
        <HeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Sección 1: La Receta de Word */}
        <WordRecipeSection />

        {/* Sección 2: Estructura Universal */}
        <UniversalStructureSection />

        {/* Sección 3: Los 23 Documentos (Núcleo) */}
        <DocumentsSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Sección 4: El Kit de Supervivencia */}
        <SurvivalKitSection
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* PDF Export Modal */}
      <PdfExportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}

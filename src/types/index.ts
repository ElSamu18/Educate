export type DocumentCategory = 'escolar' | 'universitario' | 'profesional';

export interface DocumentItem {
  id: number;
  category: DocumentCategory;
  categoryLabel: string;
  categoryEmoji: string;
  title: string;
  shortDef: string;
  purpose: string;
  length: string;
  tone: string;
  structure: {
    step: number;
    title: string;
    description: string;
  }[];
  commonErrors: string[];
  template: string;
  checklist: string[];
}

export interface WordMarginItem {
  name: string;
  value: string;
  cmValue?: number;
  description: string;
}

export interface UniversalStep {
  stepNumber: number;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  example?: string;
  badge?: string;
}

export interface ApaCitationGuide {
  id: string;
  title: string;
  rule: string;
  structure: string;
  example: string;
  explanation: string;
}

export interface LethalChecklistItem {
  id: string;
  label: string;
  consequence: string;
  tip: string;
}

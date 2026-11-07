import { DocumentCategory, DocumentItem } from '../types';

export function filterDocuments(
  documents: DocumentItem[],
  category: DocumentCategory | 'all',
  searchQuery: string = ''
): DocumentItem[] {
  const query = searchQuery.trim().toLowerCase();

  return documents.filter((doc) => {
    // 1. Category check
    if (category !== 'all' && doc.category !== category) {
      return false;
    }

    // 2. Query check
    if (!query) return true;

    const inTitle = doc.title.toLowerCase().includes(query);
    const inShortDef = doc.shortDef.toLowerCase().includes(query);
    const inPurpose = doc.purpose.toLowerCase().includes(query);
    const inTone = doc.tone.toLowerCase().includes(query);
    const inLength = doc.length.toLowerCase().includes(query);
    const inErrors = doc.commonErrors.some((e) => e.toLowerCase().includes(query));
    const inStructure = doc.structure.some(
      (s) => s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
    );

    return inTitle || inShortDef || inPurpose || inTone || inLength || inErrors || inStructure;
  });
}

export function calculateChecklistProgress(
  checkedItems: Record<string, boolean>,
  itemIds: string[]
): {
  checkedCount: number;
  total: number;
  percentage: number;
  isComplete: boolean;
} {
  const total = itemIds.length;
  if (total === 0) {
    return { checkedCount: 0, total: 0, percentage: 100, isComplete: true };
  }

  const checkedCount = itemIds.filter((id) => Boolean(checkedItems[id])).length;
  const percentage = Math.round((checkedCount / total) * 100);

  return {
    checkedCount,
    total,
    percentage,
    isComplete: checkedCount === total
  };
}

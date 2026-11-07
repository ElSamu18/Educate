import test from 'node:test';
import assert from 'node:assert/strict';
import { DOCUMENTS_DATA } from '../data/documentsData';
import { filterDocuments, calculateChecklistProgress } from './searchFilter';

test('DOCUMENTS_DATA contains exactly 23 documents with correct breakdown', () => {
  assert.equal(DOCUMENTS_DATA.length, 23);

  const escolar = DOCUMENTS_DATA.filter((d) => d.category === 'escolar');
  const universitario = DOCUMENTS_DATA.filter((d) => d.category === 'universitario');
  const profesional = DOCUMENTS_DATA.filter((d) => d.category === 'profesional');

  assert.equal(escolar.length, 5, 'Escolar must have 5 documents');
  assert.equal(universitario.length, 9, 'Universitario must have 9 documents');
  assert.equal(profesional.length, 9, 'Profesional must have 9 documents');
});

test('filterDocuments correctly filters by categories', () => {
  const all = filterDocuments(DOCUMENTS_DATA, 'all');
  assert.equal(all.length, 23);

  const escolar = filterDocuments(DOCUMENTS_DATA, 'escolar');
  assert.equal(escolar.length, 5);
  assert.ok(escolar.every((d) => d.category === 'escolar'));

  const univ = filterDocuments(DOCUMENTS_DATA, 'universitario');
  assert.equal(univ.length, 9);
  assert.ok(univ.every((d) => d.category === 'universitario'));

  const prof = filterDocuments(DOCUMENTS_DATA, 'profesional');
  assert.equal(prof.length, 9);
  assert.ok(prof.every((d) => d.category === 'profesional'));
});

test('filterDocuments finds documents by search term across title and content', () => {
  const resEnsayo = filterDocuments(DOCUMENTS_DATA, 'all', 'ensayo');
  assert.ok(resEnsayo.length >= 1);
  assert.ok(resEnsayo.some((d) => d.title.toLowerCase().includes('ensayo')));

  const resIMRyD = filterDocuments(DOCUMENTS_DATA, 'all', 'IMRyD');
  assert.ok(resIMRyD.length >= 1);
  assert.ok(resIMRyD.some((d) => d.title.includes('Artículo científico')));

  const resMemo = filterDocuments(DOCUMENTS_DATA, 'all', 'Memorándum');
  assert.equal(resMemo.length, 1);
  assert.equal(resMemo[0].id, 17);
});

test('calculateChecklistProgress calculates percentage and completion properly', () => {
  const ids = ['item1', 'item2', 'item3', 'item4', 'item5'];
  
  const prog0 = calculateChecklistProgress({}, ids);
  assert.equal(prog0.checkedCount, 0);
  assert.equal(prog0.percentage, 0);
  assert.equal(prog0.isComplete, false);

  const prog2 = calculateChecklistProgress({ item1: true, item3: true }, ids);
  assert.equal(prog2.checkedCount, 2);
  assert.equal(prog2.percentage, 40);
  assert.equal(prog2.isComplete, false);

  const progAll = calculateChecklistProgress(
    { item1: true, item2: true, item3: true, item4: true, item5: true },
    ids
  );
  assert.equal(progAll.checkedCount, 5);
  assert.equal(progAll.percentage, 100);
  assert.equal(progAll.isComplete, true);
});

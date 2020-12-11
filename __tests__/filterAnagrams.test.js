import fAnagrams from '../katas/filterAnagrams.js';

test('filterAnagrams', () => {
  expect(fAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer']);
});
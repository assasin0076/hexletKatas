import dnaToRna from '../katas/dnaToRna.js';


test('dna', () => {
  expect(dnaToRna('gctta')).toEqual('CGAAU');
  expect(dnaToRna('z')).toBeNull();
  expect(dnaToRna([1])).toBeNull();
})
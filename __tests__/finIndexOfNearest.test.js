import fNear from '../katas/findIndexOfNearest.js';

test('findIndexOfNearest', () => {
  expect(fNear([], 0)).toBeNull();
  expect(fNear([7, 5, 3, 2], 4)).toEqual(1);
  expect(fNear([7, 5, 4, 4, 3], 4)).toEqual(2);
})
import {sameParity} from '../katas/sameParityFilter';

test('sameParityFilter', () => {
  expect(sameParity([2, 0, 1, -3, 10, -2])).toEqual([2, 0, 10, -2]);
});

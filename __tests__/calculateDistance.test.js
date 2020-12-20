import { TestScheduler } from 'jest';
import calc from '../katas/calculateDistance.js';

test('calcDist', () => {
  expect(calc([0, 0], [3, 4])).toEqual(5);
})
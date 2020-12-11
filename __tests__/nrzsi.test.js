import { TestScheduler } from 'jest';
import {nrzsi} from '../katas/nrzsi.js';

test('nrzsi', () => {
  expect(nrzsi('¯|___|¯¯¯¯¯|___|¯|_|¯')).toEqual('010010000100111');
})
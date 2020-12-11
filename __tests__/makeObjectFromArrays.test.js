import {make, set, get} from '../katas/makeObjectFromArrays.js';

let pObj = make();

test('makeObjFromArrays', () => {
  expect(pObj).toEqual([[]]);
  set(pObj, 'a', 1);
  expect(get(pObj, 'a')).toEqual(1);
  expect(get(pObj, 'b')).toBeNull();
})
import enArr from '../katas/enLargeArrayImage.js';

let arr;
beforeEach(() => {
  arr =  [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
  ]
})

test('enLargeArrayImage', () => {
  expect(enArr(arr)).toEqual('\n********\n********\n**    **\n**    **\n**    **\n**    **\n********\n********')
})
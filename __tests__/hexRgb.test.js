import {hexToRgb as hex, rgbToHex as rgb} from '../katas/colorsConverter.js';

test('hex', () => {
  expect(hex('#000000')).toEqual({r: 0, g: 0, b: 0});
});

test('rgb', () => {
  expect(rgb(0, 0, 0)).toEqual('#000000');
})

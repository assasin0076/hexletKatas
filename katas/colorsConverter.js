import _ from 'lodash';

function parseTo16(num) {
  let num16 = Number(num).toString(16);
  if (String(num16).length === 1) {
    num16 = `0${num16}`;
  }
  return num16;
}

function hexToRgb(color) {
  let rgbColor = _.chunk(color.slice(1, color.length).split(''), 2);
  rgbColor = rgbColor.map((twin) => parseInt(String(twin.join('')), 16));
  const rgbColorObj = {
    r: rgbColor[0],
    g: rgbColor[1],
    b: rgbColor[2],
  };
  return rgbColorObj;
}
function rgbToHex(r, g, b) {
  return `#${parseTo16(r)}${parseTo16(g)}${parseTo16(b)}`;
}

console.log(rgbToHex(0, 0, 0));
console.log(hexToRgb('#00840c'));
//Увеличивает изображение-массив в 2 раза
const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];


function enlargeArrayImage(pic) {
  return pic.reduce((acc, layer) => {
    layer = layer.reduce((acc, symb) => {
      acc.push(symb);
      acc.push(symb);
      return acc;
    }, []).join('');
    acc.push(layer);
    acc.push(layer);
    return acc;
  }, [])
  .reduce((string, layer) => {
    return `${string}\n${layer}`
  }, '')
}

export default enlargeArrayImage;
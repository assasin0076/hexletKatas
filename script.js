const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];

function enlargeArrayImage2(arr) { 
  return arr.map((layer) => layer.map((symb) => symb = `${symb}${symb}`).join(''))
  .reduce((string, layer) => {
    return `${string}\n${layer}`
  }, '');
}

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


console.log(enlargeArrayImage(arr));
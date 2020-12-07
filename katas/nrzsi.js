function nrzsi(nrzsiKey) {
  let numberKey = nrzsiKey.split('').reduce((numbKey, symb, index) => {
    if ((symb === '_' && nrzsiKey[index - 1] !== '|') || 
        (symb === '¯' && nrzsiKey[index - 1] !== '|')
         && symb !== '|') {
      return `${numbKey}0`;
    }
    if ((nrzsiKey[index - 1] === '|') && symb !== '|') {
      return `${numbKey}1`;
    }
    return numbKey;
  }, '')
  return numberKey;
}

console.log(nrzsi('¯|___|¯¯¯¯¯|___|¯|_|¯'));
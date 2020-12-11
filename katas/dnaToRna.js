// converts dna to rna
function dnaToRna(dna) {
  if(typeof dna !== 'string') {
    return null;
  }
  const lowerDna = dna.toLowerCase();
  let result = '';
  const dnas = ['g', 'c', 't', 'a'];
  const rnas = ['c', 'g', 'a', 'u'];
  for (const symb of lowerDna) {
    if (!dnas.includes(symb)) {
      return null;
    }
    const arrPosition = dnas.indexOf(symb.toLowerCase());
    const replace = rnas[arrPosition];
    result = `${result}${replace}`;
  }
  return result.toUpperCase();
}

export default dnaToRna;
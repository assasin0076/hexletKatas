function filterAnagrams(keyWord, arr) {
  const normalize = (str) => str.split('').sort().join('');
  const normalWord = normalize(keyWord);
  return arr.filter((word) => normalize(word) === normalWord);
}

console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
function filterAnagrams(keyWord, arr) {
  const normalize = (str) => str.split('').sort().join('');
  const normalWord = normalize(keyWord);
  return arr.filter((word) => normalize(word) === normalWord);
}

export default filterAnagrams;
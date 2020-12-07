function findIndexOfNearest(arr, num) {
  if (arr.length === 0) {
    return null;
  }
  const diffs = arr.map((numb) => Math.abs(num - numb));
  return diffs.reduce((indOfNear, currVal, currInd) => {
    if (currVal < diffs[indOfNear]) {
      return currInd;
    }
    return indOfNear;
  }, 0)
}

console.log(findIndexOfNearest([], 0))
console.log(findIndexOfNearest([7, 5, 3, 2], 4))
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4))
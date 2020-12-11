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

export default findIndexOfNearest;

const isEven = (num) => num % 2 === 0;

function sameParity(arr) {
  const parityOfFirstEl = isEven(arr[0]);
  return arr.filter((num) => isEven(num) === parityOfFirstEl);
}

export {sameParity};
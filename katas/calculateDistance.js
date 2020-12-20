

const point1 = [0, 0],
      point2 = [3, 4];

const calculateDistance = (p1, p2) => {
  let catet1;
  let catet2;
  let highterCatet;
  let lowerCatet;
  let result;
  if(p1[0] > p2[0]) {
    catet1 = p1[0] - p2[0];
  } else {
    catet1 = p2[0] - p1[0];
  }
  if(p1[1] > p2[1]) {
    catet2 = p1[1] - p2[1];
  } else {
    catet2 = p2[1] - p1[1];
  }
  if(catet1 > catet2) {
    highterCatet = catet1;
    lowerCatet = catet2;
  } else {
    highterCatet = catet2;
    lowerCatet = catet1;
  }
  result = Math.sqrt((highterCatet ** 2 + lowerCatet ** 2));
  return result;
}

export default calculateDistance;
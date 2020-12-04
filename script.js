import crc32 from 'crc-32';

function make() {
  return [[],];
}

function set(pObj, strKey, val) {
  const numKey = Math.abs(crc32.str(strKey));
  const shortNumKey = numKey % 1000;
  const flatArr = pObj[0].flat(2);
  if (!flatArr.includes(numKey)) {
    pObj[0].unshift([numKey, strKey]);
  } else {
    const strNumOfObj = flatArr[flatArr.indexOf(numKey) + 1];
    if(strNumOfObj != strKey) {
      return false;
    }
  }
  pObj[shortNumKey] = val;
  return true;
}

function get(pObj, strKey, defVal = null) {
  const numKey = Math.abs(crc32.str(strKey));
  const shortNumKey = numKey % 1000;
  const flatArr = pObj[0].flat(2);
  const strNumOfObj = flatArr[flatArr.indexOf(numKey) + 1];
  if(strNumOfObj != strKey) {
    return defVal;
  }

  if(pObj[shortNumKey] === undefined) {
    return defVal;
  }
  return pObj[shortNumKey];
}

let map = make();
set(map, 'aaaaa0.462031558722291', 'vvv')
set(map, 'aaaaa0.0585754039730588', 'boom!');

console.log(get(map, 'aaaaa0.462031558722291'));
console.log(get(map, 'aaaaa0.0585754039730588'))

console.log(map.flat(2))





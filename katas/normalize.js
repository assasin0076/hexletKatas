// BEGIN (write your solution here)
import _ from 'lodash';
export default function normalize(coll) {
  const sortedColl = _.sortBy(coll, [(a) => [a.country.toLowerCase()]])
  const normalizedUnsorted = sortedColl.reduce((acc, obj) => {
    const country = obj.country.toLowerCase().trim();
    const city = obj.name.toLowerCase().trim();
    if(!_.has(acc, country)) {
      acc[country] = [city];
      return acc;
    }
    if(!acc[country].includes(city)) {
      acc[country].push(city);
    }
    return acc;
  }, {})
  const normalizedSorted = _.mapValues(normalizedUnsorted, (value) => value.sort());
  return normalizedSorted;
};

// END

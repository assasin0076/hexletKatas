import _ from 'lodash';

const sort = (users, num = 1) => {
  const filtered = _.sortBy(users, ({birthday}) => Date.parse(birthday));
  return _.slice(filtered, 0, num);
}


const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];
const struc = sort(users, 3);
console.log(struc[0]);
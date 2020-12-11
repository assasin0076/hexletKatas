import {sort} from '../katas/SortArr.js';


const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

test('sortArr', () => {
  const sorted = sort(users, 3);
  expect(sorted).toHaveLength(3);
  expect(sorted[0].name).toEqual('Rob');
})
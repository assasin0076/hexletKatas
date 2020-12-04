function getMenCountByYear(people) {
  const menCountByYear = {}
  for (const person of people) {
    if (person.gender === 'male') {
      const birthYear = person.birthday.slice(0, 4) + '';
      if (!menCountByYear.hasOwnProperty(birthYear)) {

        menCountByYear[birthYear] = 1;
      } else {
        menCountByYear[birthYear] += 1;
      }
    }
  }
  return menCountByYear;
}

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

console.log(getMenCountByYear(users));
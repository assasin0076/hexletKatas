const obj1 = {
  name: 'soska',
  family: 'hahahnt'
}
const obj2 = {
  name: 'dog',
  family: 'doggy',
  number: '1'
}
const obj3 = {...obj2, ...obj1};

console.log({...obj1, ...obj2, ...obj3, huy: true})
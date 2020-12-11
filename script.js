import _ from 'lodash';

let obj = {name:{a: 1}, dog: 'Doggy'}
_.set(obj.name, 'a', 2)
const obj2 = {}

console.log(_.set(obj2, 'a', 'a'));
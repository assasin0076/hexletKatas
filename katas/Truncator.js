import _ from 'lodash';

export default class Truncater {
  constructor(opt) {
    this.options = {...opt};
  }
  static defaultOptions = {
    separator: '...',
    length: 200,
  };
  


  // BEGIN (write your solution here)
  truncate(text, opt = {}) {
    const options = { ...this.constructor.defaultOptions, ...this.options, ...opt};
    if(text.length > options.length) {
      const result = `${text.slice(0, options.length)}${options.separator}`;
      return result
    }
    return text;
  }
  // END
}

const truncer = new Truncater({separator: 'huyS', length: 8});

console.log(truncer.truncate('aadddasdadasdsadassda'));
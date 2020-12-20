const hasNumber = (string) => (string.search(/\d/) !== -1);
import _ from 'lodash';

// BEGIN (write your solution here)
class PasswordValidator {
  constructor(subOpt = {}) {
    const defaultOpt = {
    minLength: 8,
    containNumbers: true
    }
    this.opt = {...defaultOpt, ...subOpt}
  }
  addError(obj, error) {
    _.assign(obj, error);
  }
  validate(pass) {
    const errors = {};
    if(pass.length < this.opt.minLength) {
      this.addError(errors, { minLength: 'too small' })
    }
    if(hasNumber(pass) !== this.opt.containNumbers && _.isBoolean(this.opt.containNumbers)) {
      this.addError(errors, { containNumbers: 'should contain at least one number' });
    }
    return errors;
  }
}
const validator = new PasswordValidator({ minLength: 0, containNumbers: null });
const errors1 = validator.validate('');
console.log(errors1);
export default PasswordValidator;
// END

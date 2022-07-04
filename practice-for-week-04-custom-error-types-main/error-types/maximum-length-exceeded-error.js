const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError{
  constructor(diff,...params){
    super(...params);

    this.name  = "MaximumLengthExceededError";
    if (diff !== undefined) {
      this.message = `Maximum length exceeded by ${diff}`
    } else {
      this.message = "Maximum length exceeded";
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
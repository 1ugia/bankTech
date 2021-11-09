const Account = require("./account");
const {format} = require('date-fns');

class Formatting  {
  date = new Date;

  formatDate() {
    return format(date, 'dd.MM.yyyy');
  }

  formatAmount(amount) {
    return +amount.toFixed(2);
  }

}

module.exports = Formatting
class Account { // controller
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.interactions = [];
  }
  deposit(amount) {
    this._depositError(amount);
    return this.interactions.push(amount);
  }

  withdraw(amount) {
    this._withdrawError(amount);
    return this.interactions.push(-amount);
  }

  balance(/*function*/) { //logic
    return this.interactions.reduce((a, b) => a + b, 0)
  };

  _depositError(amount) {
    if(isNaN(amount)) {
      throw 'Expected Money';
    } else if(amount < 0) {
      throw 'Negative amount'
    };
  };

  _withdrawError(amount) {
    if(amount > this.balance()) {throw 'No money'
    } else if(isNaN(amount)) {
      throw 'Expected Money'
    } else if(amount < 0) {
      throw 'Negative amount'
    };
  };

};

module.exports = Account;
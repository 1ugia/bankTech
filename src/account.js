class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.interactions = [];
  }
  deposit(amount) {
    return this.interactions.push(amount);
  }

  withdraw(amount) {
    if(amount > this.balance()) throw 'No money';
    return this.interactions.push(-amount);
  }

  balance(/*function*/) { //logic
    return this.interactions.reduce((a, b) => a + b, 0)
  }
};

module.exports = Account;
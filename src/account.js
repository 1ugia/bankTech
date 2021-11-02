class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.interactions = [];
  }
  deposit(amount) {
    return this.interactions.push(amount);
  }

  withdraw(amount) {
    return this.interactions.push(-amount)
  }

  balance() {
    return this.interactions.reduce((a, b) => a + b, 0)
  }
};

module.exports = Account;
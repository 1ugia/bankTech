class Account {
  constructor() {
    this.balance = 0;
  }
  deposit(amount) {
    return this.balance += amount;
  }

  withdraw(amount) {
    return this.balance -= amount;
  }
};

module.exports = Account;
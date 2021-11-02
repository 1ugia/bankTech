const Account = require('../src/account');

test('creates an account', () => {
  let account = new Account
  expect(account.balance()).toBe(0);
});
  
test('Puts deposits in', ()=> {
  let account = new Account
  account.deposit(50)
  expect(account.balance()).toBe(50)
});

test('it withdraws', ()=> {
  let account = new Account
  account.deposit(50)
  account.withdraw(20)
  expect(account.balance()).toBe(30)
});

test('stops you from withdrawing more than balance', () => {
  let account = new Account
  account.deposit(50)
  expect(() => {
    account.withdraw(60)
  }).toThrow('No money')
});

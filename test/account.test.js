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

test('deposit integers, not strings', () => {
  let account = new Account
  expect(() => {
    account.deposit('a hundred')
  }).toThrow('Expected Money')
});

test('deposit floats', () => {
  let account = new Account
  account.deposit(30.5)
  expect(account.balance()).toBe(30.5)
});

test('only withdraws numbers', () => {
  let account = new Account
  expect(() => {
    account.withdraw('a hundred')
  }).toThrow('Expected Money')
});

test('withdraws floats', () =>{
  let account = new Account
  account.deposit(30)
  account.withdraw(1.50)
  expect(account.balance()).toBe(28.50)
});

test('cannot deposit minus amounts', () => {
  let account = new Account
  expect(() => {
    account.deposit(-30)
  }).toThrow('Negative amount')
});

test('cannot withdraw minus amount', () => {
  let account = new Account
  expect(() => {
    account.withdraw(-30)
  }).toThrow('Negative amount')
});
const Account = require('../src/account');
const Formatting = require('../src/formatting')
const {format} = require('date-fns');

beforeEach( () => {
  account = new Account;
  formatting = new Formatting;
  date = new Date;
});

test('formats date', () => {
  expect(formatting.formatDate()).toBe(format(date, 'dd.MM.yyyy'));
});

test('turns number into floats', () => {
  account.deposit(100);
  expect(formatting.formatAmount(100)).toBe(100.00);
});
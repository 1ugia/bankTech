const Account = require('../src/account');

test('creates an account', () => {
  let account = new Account
  expect(account.balance).toBe(0);
});
const Account = require('../src/account');

let account;
beforeEach(() => {
  account = new Account();
});

  describe('Creating account', () => {
    test('creates an account', () => {
      expect(account.balance()).toBe(0);
    });
  });
  
  describe('depositing', () => {
    test('Puts deposits in', ()=> {
      account.deposit(50)
      expect(account.balance()).toBe(50)
    });

    test('deposit integers, not strings', () => {
      expect(() => {
        account.deposit('a hundred')
      }).toThrow('Expected Money')
    });
  
    test('deposit floats', () => {
      account.deposit(30.5)
      expect(account.balance()).toBe(30.5)
    });

    test('cannot deposit minus amounts', () => {
      expect(() => {
        account.deposit(-30)
      }).toThrow('Negative amount')
    });
  });
    
  describe('withdrawing', () => {
    test('it withdraws', ()=> {
      account.deposit(50)
      account.withdraw(20)
      expect(account.balance()).toBe(30)
    });
  
    test('stops you from withdrawing more than balance', () => {
      account.deposit(50)
      expect(() => {
        account.withdraw(60)
      }).toThrow('No money')
    });
    
    test('only withdraws numbers', () => {
      expect(() => {
        account.withdraw('a hundred')
      }).toThrow('Expected Money')
    });
  
    test('withdraws floats', () =>{
      account.deposit(30)
      account.withdraw(1.50)
      expect(account.balance()).toBe(28.50)
    });

    test('cannot withdraw minus amount', () => {
      expect(() => {
        account.withdraw(-30)
      }).toThrow('Negative amount')
    });
  });



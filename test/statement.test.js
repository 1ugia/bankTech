const Account = require('../src/account');
const Statement = require('../src/statement');

beforeEach(() => {
  account = new Account;
});

test('prints out the deposit', () => {
  account.deposit(100)
  // expect(Statement.print).toBe([])
})


/*
["#{Date.today}" + '||' + '#{deposit}' + '||' + '#{withdraw}'||'#{balance}']
[100, -50, 20, -30]

Create another class that creates a transaction using keys and
 hashes (date, deposit(amount), withdraw(amount), currentBalance).
Withing the account class, Create private methods that calls on 
 other class, formatting the transaction as either a deposit 
 or withdraw. 
Refactor balance method to map over interaction's array and 
 pull out transaction's amount to perform the `.reduce` method.

Have statement class will use interaction array from account class
 take in data to format to statement ready to be printed.
Create a `print` method in account class that calls on statement
 class that used the interaction's array. 

Account class - #deposit, #withdraw, #balance, #print.
Formatting class - create: #date, #deposit(amount), #withdraw(amount), #currentBalance.
                          turning integers into floats (100 -> 100.00)
                          date (14/01/2023)
Statement class - format: reverse chronological order (recent date at top)
                          statement has header (date || credit || debit || balance)
                          if no #amount, to leave statement blank (13/01/2023 || 2000.00 || || 3000.00)


Formatting class -  create: #date, #user_input, #currentBalance.
                          turning integers into floats (100 -> 100.00)
                          date (14/01/2023)
                          puts into hashes : {date: 03/11/2021, amount: 100.00 , currentBalance: 100.00}
Account class - #deposit, #withdraw, #balance, #print.
                private:#formatDeposit
                        #formatWithdraw
                            - new Formatting: hard code sting format for print.
                              `${formatting.date} || ${formatting.amount} ||            || ${formatting.currentBalance}`
                              `${formatting.date} ||            || ${formatting.amount} || ${formatting.currentBalance}`
                        return this.interactions.push(formatDeposit);
                after formatting, gets pushed into formatted array in chronological order
Statement class - format: reverse chronological order (recent date at top)
                                  - call on interactions array to reverse chronological array
                          #createStatement(array) - 
                                  - statement has header (date || credit || debit || balance)
                                  - create header
                                  - join header at top of statement.
#print - #statement.createStatement(interactions).

Step by Step irb:
date: , amount: , currentBalance:
Date: value, amount:value, currentBalance: value
Return this.interactions.push(_formatDeposit(amount))
Let new = new Account
New.deposit(100)
This._depositError(amount)
Return.this.interactions.push(_formatDeposit(amount))
_formatDeposit(amount)
Let formatting = new Formatting
Return “|$formatting.date || $formatting.amount||  || $formatting.currentBalance|”
“| 03/11/2021 || 100.00 ||  || 100.00”

*/
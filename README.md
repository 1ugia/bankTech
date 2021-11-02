# Bank Tech

## Specification
### Requirements
* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).
### Acceptance criteria
* Given a client makes a deposit of 1000 on 10-01-2023
* And a deposit of 2000 on 13-01-2023
* And a withdrawal of 500 on 14-01-2023
* When she prints her bank statement

Then she would see
```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## User stories
```
As a user,
So that I have a place to keep my money safe,
I'd like to open an account. 

As a user, 
I'd like to put deposit in my account.

As a user, 
so i can use my money,
I'd like to withdraw money.

---
edge  cases:
As a user, 
so that I do not take out more than I have, 
I'd like to be notified when I try to take out more than my balance. 

As a user, 
so I am inputting correct data, 
I'd like to make sure that I can only insert Integers and floats only. 
---

As a user,
So I can see the useage of my account,
I'd like to be able to see a print out of statemnet - date, amount, balance.
```

## Domain Model


|Noun         | Owner or property |
| --------   | ------------------| 
| Account | Owner | 
| Statement | Owner |

|Action        | Owned by ? |
| --------   | ------------------| 
| Open  | Account  |
| Deposit | Account |
| Withdraw | Account |
| Print | statement |

|Action        | Property it reads or changes (in methods) |
| --------   | ------------------|
| Open | amount, balance |
| Deposit | amount, statement |
| Withdraw | amount, statement |
| Print | statement = date, balance, withdraw, deposit - amount |

### Runnig Jest
How to install:
```yarn add --dev jest```
How to run tests:
```yarn test``` or ```yarn watch``` for continuous testing on your terminal.
// Problem 7: Object Freeze vs Seal
// Create an object bankAccount with properties: {accountNumber, balance, type, isActive}.

// First freeze the object and try to modify balance
// Then create a new similar object, seal it, and try to:
// Modify existing balance property
// Add new property interestRate
// Log the results and explain what happens
const bankAccount1 = {
  accountNumber: "123456789",
  balance: 5000,
  type: "savings",
  isActive: true,
};

Object.freeze(bankAccount1);
bankAccount1.balance = 6000; 
console.log(bankAccount1);

const bankAccount2 = {
  accountNumber: "987654321",
  balance: 8000,
  type: "checking",
  isActive: true,
};

Object.seal(bankAccount2);
bankAccount2.balance = 9000; 
bankAccount2.interestRate = 3.5; 
console.log(bankAccount2);

const bankAccount3 = {
    accountNumber: "555555555",
    balance: 12000,
    type: "business",
    isActive: false,
  };
  bankAccount3.interestRate = 3.5;
  console.log(bankAccount3);
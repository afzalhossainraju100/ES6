// Problem 8: Complex Map, Filter, Reduce Chain
// Given this array:
// const transactions = [
//   {type: 'deposit', amount: 1000},
//   {type: 'withdrawal', amount: 200},
//   {type: 'deposit', amount: 500},
//   {type: 'withdrawal', amount: 100}
// ];

// Chain array methods to:

// Filter only deposits
// Map to get just the amounts
// Reduce to get total deposit amount
// Do this in one line using method chaining
const transactions = [
  {type: 'deposit', amount: 1000},
  {type: 'withdrawal', amount: 200},
  {type: 'deposit', amount: 500},
  {type: 'withdrawal', amount: 100}
];

const totalDeposits = transactions
  .filter(tx => tx.type === 'deposit')
  .map(tx => tx.amount)
  .reduce((acc, amount) => acc + amount, 0);

console.log(totalDeposits);


// Problem 5: Default Parameters & Rest Parameters
// Create a function calculateTotal that:

// Takes a tax rate as first parameter (default 0.1)
// Accepts unlimited number of prices using rest parameters
// Returns the total with tax applied
// Use arrow function syntax
const calculateTotal = (taxRate = 0.1, ...prices) => {
  const total = prices.reduce((acc, price) => acc + price, 0);
  return total + total * taxRate;
};

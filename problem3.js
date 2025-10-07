// Problem 3: Spread Operator Challenge
// You have three arrays:
// const fruits = ['apple', 'banana'];
// const vegetables = ['carrot', 'spinach'];
// const dairy = ['milk', 'cheese'];
// Combine all arrays into one groceries array
// Add 'bread' at the beginning and 'eggs' at the end
// Create a copy of the groceries array and remove the first two items
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "spinach"];
const dairy = ["milk", "cheese"];

const groceries = ["bread", ...fruits, ...vegetables, ...dairy, "eggs"];
console.log(groceries);
const groceriesCopy = [...groceries];
groceriesCopy.splice(0, 2);
console.log(groceriesCopy);


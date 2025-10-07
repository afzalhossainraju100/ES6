// Problem 6: Array Destructuring with Skip
// Given this nested array:

// Extract the first and third arrays, skip the second
// From the first array, get first and last scores only
// Use template literals to display: "First test: [score], Final test: [score]"
// const scores = [[95, 87, 92], [78, 85, 90], [88, 91, 94]];

const scores = [
  [95, 87, 92],
  [78, 85, 90],
  [88, 91, 94],
];
const [firstTest, , thirdTest] = scores;
const [firstScore] = firstTest;
const [finalScore] = thirdTest.slice(-1);
console.log(`First test: ${firstScore}, Final test: ${finalScore}`);
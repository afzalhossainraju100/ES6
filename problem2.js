// Problem 2: Arrow Functions & Array Methods
// Given an array of student objects:
// const students = [
//   {name: 'Alice', math: 85, science: 90},
//   {name: 'Bob', math: 78, science: 82},
//   {name: 'Charlie', math: 92, science: 88}
// ];
// Write arrow functions to:

// Calculate average score for each student
// Filter students with average above 85
// Get only the names of filtered students

const students = [
  {name: 'Alice', math: 85, science: 90},
  {name: 'Bob', math: 78, science: 82},
  {name: 'Charlie', math: 92, science: 88}
];
const avgScores = (students) => (students.math + students.science) / 2;

const filteredStudents= students.filter((student) => avgScores(student) > 85);
console.log(filteredStudents);

const names = filteredStudents.map((student) => student.name);
console.log(names);

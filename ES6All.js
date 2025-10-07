const poem = `raju
ies you oypo and the ever
then is ${'life'} `;
console.log(poem);
//function declaration
function add(a, b) {
  return a + b;
}
//function expression
const sub = function (a, b) {
  return a - b;
};
//arrow function
const mul = (a, b) => a * b;
const div =(a,b)=>a/b;

console.log(div(6,2));

console.log(add(2, 3));
console.log(sub(5, 2));
console.log(mul(3, 4));
console.log(div(6, 2));

//default parameters
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet('Raju'));

//rest parameters
const name = (firstname, secondname, nickname) => `${firstname} ${secondname} ${nickname}`;
console.log(name('Afzal', 'Hossain', 'Raju'));
const max = Math.max(3, 5, 1, 8, 2);
console.log(max); 
const numbers = [3, 5, 1, 8, 2];
//spread operator
const maxInArray = Math.max(...numbers);
console.log(maxInArray);
//destructuring
//both side array or both side object
const person = { name: 'Alice', age: 30, city: 'New York' };
const { name: name1, city } = person;
console.log(name1, city);
const { age } = person;
console.log(age);
const arr = [10, 20, 30];
const [first, , third] = arr;
console.log(first, third);
const [math, physics]=[95, 90, 85];
console.log(math, physics); 
//template literals
const user = { name: 'Bob', age: 25 };
const message = `Name: ${user.name}, Age: ${user.age}`;
console.log(message);
//entries, values, keys
const employee = { id: 1, name: 'John', role: 'Developer', age: 28, city: 'San Francisco' };
const keys = Object.keys(employee);
const values = Object.values(employee);
const entries = Object.entries(employee);
console.log(keys);
console.log(values);
console.log(entries);
console.log(employee);
//delete
delete employee.age;
console.log(employee);
//add
employee.salary = 50000;
console.log(employee);
//update
employee.city = 'Los Angeles';
console.log(employee);
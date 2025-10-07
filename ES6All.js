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

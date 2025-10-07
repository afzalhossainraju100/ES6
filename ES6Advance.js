//dot notation
const student ={
    name: "John",
    age: 20,
    1:50,
}

console.log(student.name);
console.log(student.age);
console.log(student[1]);

//bracket notation
console.log(student["name"]);
console.log(student["age"]);
console.log(student["1"]);
//map js
const number = [1,2,3,4,5];
const square = number.map((x)=> x*2);
console.log(square);
//fileter js
const even = number.filter((x)=>x%2===0);
console.log(even);
square[1]=20;
console.log(number);
console.log(square);
//for each
number.forEach((x)=>console.log(x*3));

console.log(number);
//find
firstEven = number.find((x)=>x%2===0);
console.log(firstEven);
//reduce
const sum = square.reduce((acc,curr)=> acc+curr,0);
console.log(sum);

// Problem 9: Enhanced Object Literals
// You have variables: firstName = 'John', lastName = 'Doe', age = 30. Create an object using enhanced object literal syntax that:

// Uses shorthand for properties
// Has a method getFullName() that returns full name
// Has a computed property key using a variable prop = 'isEmployed' set to true
// Has another method getInfo() that uses template literals
const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const prop = 'isEmployed';

const person = {
  firstName,
  lastName,
  age,
  [prop]: true,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getInfo() {
    return `Name: ${this.getFullName()}, Age: ${this.age}, Employed: ${this.isEmployed}`;
  }
};

console.log(person);
console.log(person.getFullName());
console.log(person.getInfo());
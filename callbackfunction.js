// call back function example
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

// Compare this snippet from Equqwl.js:
// console.log(null == undefined);
// console.log(null === undefined);

// console.log(NaN == NaN);
// console.log(NaN === NaN);

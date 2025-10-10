// closureExample();
function closureExample() {
    function outerFunction(outerVariable) {
        return function innerFunction(innerVariable) {
            console.log('Outer Variable: ' + outerVariable);
            console.log('Inner Variable: ' + innerVariable);
        }
    }

    const newFunction = outerFunction('outside');
    newFunction('inside');
}

// Compare this snippet from callbackfunction.js:
// // call back function example
// function greet(name, callback) {
//     console.log('Hello ' + name);
//     callback();
// }

// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);
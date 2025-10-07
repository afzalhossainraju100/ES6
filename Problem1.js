// Problem 1: Template Literals & Destructuring
// Create a function displayUserInfo that takes a user object with properties {name, age, email, city}. Use template literals to return a formatted string and destructuring to extract the properties. The output should be: "User: [name], Age: [age], Contact: [email], Location: [city]"

function displayUserInfo(user){
    const {name, age, email, city} = user;
    return `User: ${name}, Age: ${age}, Contact: ${email}, Location: ${city}`;
}

const user = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com',
    city: 'Wonderland'
}
console.log(displayUserInfo(user));
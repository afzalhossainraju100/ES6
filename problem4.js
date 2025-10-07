// Problem 4: Object Methods & Destructuring
// Given an object:
// const product = {id: 101, name: 'Laptop', price: 999, category: 'Electronics', inStock: true};
// Extract keys, values, and entries
// Use destructuring to get name and price with different variable names
// Create a new object with spread operator, updating the price to 899

const product = {
  id: 101,
  name: "Laptop",
  price: 999,
  category: "Electronics",
  inStock: true,
};

for(const key of Object.keys(product)){
    console.log(key);
}
for(const value of Object.values(product)){
    console.log(value);
}
for(const entries of Object.entries(product)){
    console.log(entries);
}

const {name: productName, price: productPrice} = product;
console.log(productName, productPrice);

const updatedProduct = {...product, price: 899};
console.log(updatedProduct);

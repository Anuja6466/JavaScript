
let products = ["Laptop", "Mobile", "Headphones"];

// Array destructuring
let [product1, product2, product3] = products;

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);

// Object destructuring
let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

let { name, price, brand } = product;

console.log("Name:", name);
console.log("Price:", price);
console.log("Brand:", brand);

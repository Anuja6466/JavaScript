
let numbers = [1, 2, 3, 4, 5];

//map
let squares = numbers.map(num => num * num);
console.log("Squares:", squares);

//filter
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

//reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

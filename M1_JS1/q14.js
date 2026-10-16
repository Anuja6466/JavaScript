
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filterEvenNumbers(numbers));

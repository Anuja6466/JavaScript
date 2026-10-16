
let employees = [
    { name: "Amit", salary: 25000 },
    { name: "Priya", salary: 40000 },
    { name: "Rahul", salary: 35000 },
    { name: "Sneha", salary: 50000 }
];

function filterEmployees(employees, amount) {
    return employees.filter(employee => employee.salary > amount);
}

let result = filterEmployees(employees, 30000);

console.log(result);

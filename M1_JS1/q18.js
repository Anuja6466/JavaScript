
let orders = [
    { orderId: 101, product: "Laptop", sales: 50000 },
    { orderId: 102, product: "Mobile", sales: 20000 },
    { orderId: 103, product: "Headphones", sales: 5000 },
    { orderId: 104, product: "Tablet", sales: 15000 }
];

let totalSales = orders.reduce((total, order) => {
    return total + order.sales;
}, 0);

console.log("Total sales:", totalSales);

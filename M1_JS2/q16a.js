
class Emp {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

module.exports = Emp;

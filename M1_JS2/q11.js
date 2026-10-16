class InvalidSalaryError extends Error{
    constructor(message){
        super(message)
        this.name="InvalidSalaryError"
    }
}
function test(salary) {
    try {
        if (salary==0) {
            throw new InvalidSalaryError("Salary less than zero")
        } else {
            console.log("Valid");
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
    }
}
test(2000);
test(0);
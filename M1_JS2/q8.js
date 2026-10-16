function validate(age) {
    try {
        if (age<18) {
            throw new Error("Invalid age")
        } else {
            console.log("age is valid");
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }
}
validate(4)
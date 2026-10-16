function validateAge(age) {
    if(age<18){
        throw new validateAge("age is less than 18")
    }
}
function registerUser(age) {
    try {
        validateAge(age)
        console.log("registration successfully");
        
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }
}
registerUser(16)
registerUser(26)
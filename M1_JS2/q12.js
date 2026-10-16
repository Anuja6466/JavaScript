class InvalidUsernameErrorr extends Error{
    constructor(message){
        super(message)
        this.name="InvalidUsernameError"
    }
}
function test(username) {
    try {
        if (username.length<=3) {
            throw new InvalidUsernameError("Invalid")
        } else {
            console.log("Valid");
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
    }
}
test("an");

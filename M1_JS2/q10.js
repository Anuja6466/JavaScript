function divide(a,b) {
    try {
        if (b==0) {
            throw new Error("Cannot divide")
        } else {
            console.log("Result:"+ a/b);
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
    }
}
divide(2,8)
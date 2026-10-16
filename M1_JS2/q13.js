function first() {
    const pi=3.14
    console.log(pi);
    pi=5
}

function second() {
    first()
}
function third(){
   try {
       first()
   } catch (error) {
     console.log(error.name+":"+error.message);
     
   }
}
third()
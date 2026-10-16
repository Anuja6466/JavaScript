function filterpassedStudent(marks) {
    return marks.filter(function(marks){
        return marks>=40;
    });
}
let marks=[35,50,100,70,20];
console.log(filterpassedStudent(marks));

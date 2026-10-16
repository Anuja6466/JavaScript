let marks=[28,90,60,65,88];
function filterpassedStudent(marks) {
    return marks.filter(function(marks){
        return marks>80;
    });
}
console.log(filterpassedStudent(marks));
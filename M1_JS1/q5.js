let marks=[25,30,100,86,75];
//map
let grades=marks.map(marks=>{
    if(marks>=80){
        return 'A'
    }else if(marks>=60){
        return 'B'
    }else{
        return 'C'
    }
});
console.log("Grade :",grades);

//filter
function filterpassedStudent(marks) {
    return marks.filter(function(marks){
        return marks>=75;
    });
}
console.log(filterpassedStudent(marks));

//reduce
const sum=marks.reduce((marks,tot)=>{
    return marks+tot
});
console.log(sum);

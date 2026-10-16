let marks=[36,70,66,90,49]
function findTopper(marks){
    return Math.max(...marks);
}
console.log("Highest marks:",findTopper(marks));

const calculateGrade = (score)=>{
    if(score>=80){
        return 'A';
    }else if(score>=60){
        return 'B';
    }
    else if(score>=40){
        return 'C';
    }else{
        return 'Fail';
    }
};
console.log(calculateGrade(85));
console.log(calculateGrade(35));


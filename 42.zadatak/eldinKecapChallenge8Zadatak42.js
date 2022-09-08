let numberOfYears = 0;
 
for(let startYear = 101 ; startYear <= 2022 ; startYear++ ){
    if(startYear % 4 == 0 && startYear % 100 != 0){
        numberOfYears++ ;
    }else if (startYear % 400 == 0){
        numberOfYears++;
    }
}
console.log(`Broj prestupnih godina : ${numberOfYears}`);
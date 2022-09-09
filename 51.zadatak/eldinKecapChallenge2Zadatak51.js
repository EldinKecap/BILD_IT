// Twin prime brojevi su par prostih brojeva koji se razlikuju za 2. Na
// primjer, brojevi 3 i 5 su twin primes, brojevi 5 i 7 i 11 i 13 su
// također twin primes. Napisati funkciju koja ispisuje sve twin prime
// brojeve manje od 10.000, 10 parova po liniji. (Ne prvi 10.000 twin prime
// brojeva, sve twin prime brojeve u rasponu od 0 do 10.000)
function isPrime(num){
    if(num === 1 || num === 2){
        return true;
    }
    for(let i = 2 ; i <= num ; i++ ){
        if(num%i===0 && i !== num){
            break;
        }else if(i===num){
            return true;
        }
    }
    return false;
}

function ispisTwinPrime(){
    let arr = [];
    for (let i = 0; i < 10000; i++) {
        if(isPrime(i)){
        arr.push(i);
        }
    }
    let arrOfTwinIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i+1]-arr[i]===2 ){
            arrOfTwinIndexes.push(i);
        }        
    }
// console.log(arrOfTwinIndexes)
    let finalArr = [];
   
    for(let indexThatStays of arrOfTwinIndexes){
        finalArr.push(arr[indexThatStays]);
        finalArr.push(arr[indexThatStays+1]);
    }
// i hope i didnt write this just to get rid of the five at the start it was supposed to remove all the double numbers
    counter = 0;
    for (let i = 0; i < finalArr.length; i++) {
        for (let j = 0; j < finalArr.length; j++) {
            if(finalArr[i]===finalArr[j]){
                counter++;
                if(counter === 2 ){
                    counter = 0;
                    finalArr.splice(j,1);
                }
            }
        }
        counter = 0 ;
        
    }
    return finalArr;
}
console.log(isPrime(4));
console.log(ispisTwinPrime());
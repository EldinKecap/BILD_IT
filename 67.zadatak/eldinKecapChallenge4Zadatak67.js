// Kreirajte funkciju za provjeru da li je dati cijeli broj faktorijel cijelog broja ili ne. 

function isFactorial(num){
    let factorial = 1;
    let count = 1;
    while(factorial<num){
        factorial*=count;
        count++;
        // console.log(factorial)
    }
    if(factorial==num)return true;
    return false;
}
console.log( isFactorial(24));
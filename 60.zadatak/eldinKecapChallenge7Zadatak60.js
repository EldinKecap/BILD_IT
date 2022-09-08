// 7. Kreirati program koji će pronaći i ispisati sve brojeve od X do Y (uključujući granične vrijednosti) koji su deljivi svim svojim ciframa. 
// Na primjer, broj 36 je djeljiv sa brojevima 3 i 6. (36/6=6 i 36/3=12). 
// Brojeve X i Y uzeti proizvoljno a moraju biti u opsegu od 10 do 6000.
function isDivisibleByNumsItContains(num){
    let str = String(num);
    let arrDigits = [];
    let controlNum = 0 ;
    for (let i = 0; i < str.length; i++) {
        arrDigits.push(Number(str[i]));
    }
    // console.log(arrDigits);
    for (let i = 0; i < arrDigits.length; i++) {
        if(num%arrDigits[i]===0){
            controlNum++;
        }
    }
    // console.log(controlNum);
    if (controlNum === arrDigits.length) {
        return true;
    }
    return false;
}
function printAllNumsDivisibleByTheirDigitsInARange(start,end){
    for (let i = start; i <= end; i++) {
       if(isDivisibleByNumsItContains(i)){
           console.log(i);
       }
        
    }
}
// console.log(isDivisibleByNumsItContains(36));
printAllNumsDivisibleByTheirDigitsInARange(10,6000);

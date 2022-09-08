// Vrati najmanji broj koraka koji je potreban da se string u potpunosti
//  pretvori u velika ili u potpunosti u mala slova, ovisno o tome koji od njih 
//  zahtijeva najmanji broj koraka. Korak se sastoji od promjene jednog karaktera
// iz malih u velika slova, ili obrnuto.
// Primjeri: 
// stepsToConvert("abC") ➞ 1
// // "abC" converted to "abc" in 1 step

// stepsToConvert("abCBA") ➞ 2
// // "abCBA" converted to "ABCBA" in 2 steps

// stepsToConvert("aba") ➞ 0

// stepsToConvert("abaCCC") ➞ 3

function stepsToConvert(str){
    let lowerCaseNum = 0;
    let upperCase = 0;
    let i = 0;
    while(i<str.length){
        if (/[a-z]/.test(str[i])){
            lowerCaseNum++;
        }
        if (/[A-Z]/.test(str[i])){
            upperCase++;
        }
        i++;      
    }
    if(lowerCaseNum < upperCase){
        return lowerCaseNum;
    }
    return upperCase;
}

console.log(stepsToConvert('AAc'));
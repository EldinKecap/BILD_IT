// Pandigitalni broj sadrži sve cifre (0-9) barem jednom. Napišite funkciju koja uzima cijeli broj,
// vraća true ako je cijeli broj pandigitalan, a false u suprotnom.

function isPandigital(num) {
    num = String(num);
    let arr=[0,1,2,3,4,5,6,7,8,9];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (arr[i]==num[j]) {
                console.log(arr[i])
                console.log(num[j])
                console.log(num)
                count++;    
            }
        }
        if (count == 0) {
            return false
        }else{
            count = 0;
        }
    }
    return true
}
console.log(isPandigital(112233445566778899))//What is wrong with this number
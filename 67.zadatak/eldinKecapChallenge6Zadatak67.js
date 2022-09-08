// Zamislite ovaj trougao: 
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// ... 
// Kreirajte funkciju koja uzima broj n i vraća zbir svih brojeva u n-tom redu. PRIMJERI: 
// rowSum(1) ➞ 1 
// rowSum(2) ➞ 5 
// rowSum(4) ➞ 34
function rwoSum(num){
    let piramida=[];
    let brojUPiramidi = 0;
    let brojMjestaURedu = 1;
    let red=[];
    while (piramida.length!=num) {
        for (let i = 0; i < brojMjestaURedu; i++) {
            brojUPiramidi+=1;
            red.push(brojUPiramidi);         
        }
        brojMjestaURedu++;
        piramida.push(red);
        red=[]
    }
    console.log(piramida);
    let suma = piramida[num-1].reduce((a,b)=>a+=b)
    return suma;
}
console.log(rwoSum(4));
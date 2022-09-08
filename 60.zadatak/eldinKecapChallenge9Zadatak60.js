// 9. Uzeti dva proizvoljna prirodna broja A i B (A>100000, B>50000). 
// Napisati program koji će kreirati i ispisati broj C koji će se sastojati od cifara broja A u obrnutom redoslijedu ali bez cifara koje se pojavljuju u broju B. 
// Obavezno koristiti bar jednu funkciju. 
// Ispsati razliku brojeva A i C.
function brojCIspis(brojA,brojB){
    if (brojA<100000||brojB<50000) {
        console.log(`Pogresan unos broj A treba biti veci od 100000 ,a broj B treba biti veci od 50000`);
    }
    let brojC = [];
    let strA = String(brojA);
    let strB = String(brojB);
    for (let i = strA.length-1 ; i >= 0 ; i--) {
        brojC.push(strA[i]);
    }
    for (let i = 0; i < brojC.length; i++) {
        for (let j = 0; j < strB.length; j++) {
            if (brojC[i]===strB[j]) {
                brojC.splice(i,1);
            }          
        }
    }
    brojC = brojC.reduce((a,b)=>a+b);
    // console.log(brojC);
    return Number(brojC);
}
let brA = 100321;
let brB =  50001;
let brC =  brojCIspis(brA,brB);
// console.log(brC);
console.log(`Razlika broja ${brA} i broja ${brC} je ${brA-brC}`);
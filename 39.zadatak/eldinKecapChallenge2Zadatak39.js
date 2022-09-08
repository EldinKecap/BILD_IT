let trocifrenBroj = "235";
let cifra1 = Number(trocifrenBroj.slice(0,1)) ;
let cifra2 = Number(trocifrenBroj.slice(1,2) );
let cifra3 = Number(trocifrenBroj.slice(-1)) ;
let suma = cifra1 + cifra2 + cifra3;
let rjesenje = `Zbir cifara broja ${trocifrenBroj} je ${suma}.`

console.log(rjesenje);
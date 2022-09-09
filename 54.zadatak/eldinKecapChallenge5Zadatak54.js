// Napisati rekurzivnu funkciju koja racuna faktorijel nekog broja. Primjer faktorijela broja 5 je: 5 * 4 * 3 * 2 * 1 = 120. Rekurzivna funkcija je funkcija koja poziva samu sebe.
let fakt = 1;
function faktorijel (num){
    fakt *= num ;
    if(num === 1 ){
        return fakt;
    }
    return faktorijel(num-1);
}
console.log(faktorijel(5));
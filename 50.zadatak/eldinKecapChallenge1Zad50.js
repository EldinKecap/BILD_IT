/*1. Napisati funkciju koja prima tri broja kao parametre te ispisuje ta ista tri broja u rastućem redosljedu.
Primjer poziva funkcije: ispisiSortiraneBrojeve(17, 3, 42);
Primjer ispisa: Sortirani brojevi: 3, 17, 42. */
function sortedOutput (a,b,c){
   let arr = [a,b,c];
   arr.sort((f,g)=>{return f-g;});
   console.log(`Sortirani brojevi: ${arr.toString()}`);
}

sortedOutput(17,3,42);

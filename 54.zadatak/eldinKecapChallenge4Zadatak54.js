// Napisati funkciju koja vraca apsolutnu vrijednost nekog broja. NE Koristiti Math.abs().
// Primjer:
// Ako funkciji proslijedimo - 20 vratit ce nam 20.
function absolutna(num){
    if(num<0){
       return num*=(-1);
    }
    return num;
}

console.log(absolutna(-3));
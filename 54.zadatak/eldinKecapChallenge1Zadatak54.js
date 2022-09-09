// Napisati funkciju koja prima broj minuta, a zatim vraca koliko je to u sekundama. Funkcija prima cijele kao i decimalne brojeve.
// Primjer:
// Funkciji proslijedimo 1,5 za broj minuta i funkcija nam vraca 90 sekundi.
function kolikoSec (minute){
    return minute*60;
}
let sec = kolikoSec(1.5);
console.log(sec);
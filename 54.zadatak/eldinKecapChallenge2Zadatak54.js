// Napisati funkciju koja prima neogranicen broj argumenata number tipa podataka te vraca najveci broj. Funkcija najmanje mora imati 2 parametra, ali nema gornje granice.
// Primjer:
// Ako se funkcija zove max, poziv bi izgledao ovako: max(2, 7, 4, 6, 9, 12, 5) a funkcija vraca 12.
function max(arg,...args){
   return Math.max(arg,...args);
}
console.log(max(2,3,4,5,6,7,8,3,12,5));
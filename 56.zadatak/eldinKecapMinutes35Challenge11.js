// 11. Pravimo program koji racuna prosjecno vrijeme za koje trkace auto obidje krug na stazi.
// Prosjecno vrijeme racunamo na osnovu 10 krugova. Vrijeme je predstavljeno u formatu: mm:ss.ms
// Npr. 1:36.31 - 1 minuta, 36 sekundi i 31 milisekunda. Da bi izracunali prosjek moramo imati vremena 10 krugova. 
// Prvo je potrebno generisati niz od 10 elemenata, popunjen vremenima u opsegu od 1 - 2 minute u odgovarajucem formatu.
// Primjeri validnih vremena: 1:31.447, 1:15.75, 1:43.009 itd. Zatim program racuna prosjecno vrijeme na 
// osnovu ovog niza i ispisuje u konzolu. 
let arrTime = [];

for (let i = 0; i < 10; i++) {
    let randSec = (Math.random()*(60-1)+1).toFixed(3);
    arrTime[i]= `1:${randSec}`; 
}
let sumaMiliSec = 0;
for (let i = 0; i < arrTime.length; i++) {
    sumaMiliSec += Number(arrTime[i].slice(2))*100;
    // console.log(sumaMiliSec);
}
prosjek = sumaMiliSec / arrTime.length;
console.log(arrTime);
prosjek = (prosjek/100).toFixed(3);
prosjek = `1:${prosjek}`;
console.log(`Prosjecno vrijeme je ${prosjek}`);
// console.log(sumaMiliSec);
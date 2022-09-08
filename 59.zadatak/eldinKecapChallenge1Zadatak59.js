// 1.     Prvog dana škole, direktor srednje škole Locker odlučuje da izvede eksperiment. Škola ima
// tačno 1.000 učenika i 1.000 ormarića poredanih duž glavnog hodnika škole. Svi
// ormarici su na pocetku otvoreni.


// a.     Direktor traži od prvog učenika da prođe glavnim hodnikom škole i zatvori sve ormariće.
// b.     Direktor zatim traži od drugog učenika da prođe glavnim hodnikom i otvori svaki drugi ormarić.
// c.     Direktor zatim traži od trećeg učenika da prođe glavnim hodnikom i ili otvori svaki treći
// ormarić ako je zatvoren, ili ga zatvori ako je otvoren.
// d.     Četvrti učenik će zatim ponoviti isti postupak za svaki četvrti ormarić.

// I tako dalje, sve dok posljednji od 1.000 učenika ne ponovi ovaj proces za svaki 1.000-ti
// ormarić, dakle, u stvari, samo otvaranje 1.000-og ormarića ako je zatvoren, ili
// zatvaranje ako je već otvoren. Na kraju ovog eksperimenta direktor odlučuje da
// izbroji broj ormarića koji su zatvoreni. Koji je to broj?

let lockers = [];
let numOfLockers = 1000;
let numOfStudents = 1000;
let openCount = 0 ;
let closedCount = 0;
let lockerSkip = 3;
for (let i = 0; i < numOfLockers  ; i++) {
    lockers.push(true);
}
//a
for (let i = 0; i < lockers.length; i++) {
    if(lockers[i]===true){
        lockers[i]=false;
    }
}

//b
for (let i = 0; i < lockers.length; i+=2) {
    if(lockers[i]===false){
        lockers[i]=true;
    }
    
}
//c
while(numOfStudents!=lockerSkip)
for (let i = 0; i < lockers.length; i+=lockerSkip) {
   if (lockers[i]===true) {
       lockers[i]=false;
   }else if (lockers[i]===false) {
       lockers[i]=true;
   }
   lockerSkip++;
}



for (let i = 0; i < lockers.length; i++) {
   if (lockers[i] === true) {
       openCount++;
   }else if(lockers[i]=== false){
       closedCount++;
   }
}
console.log(`Broj zatvorenih ormarica je : ${closedCount}`);
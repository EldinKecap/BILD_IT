let cijena = 74 ;
let napojnicaProcenat = 14.5;
let napojnica = (cijena*napojnicaProcenat) / 100;
let ukupanIznos = cijena + napojnica;
let ispis = `Za racun od ${cijena}KM i napojnicu od ${napojnicaProcenat}%, iznos napojnice je ${napojnica} a ukupan iznos racuna je ${ukupanIznos}.`
console.log(ispis);
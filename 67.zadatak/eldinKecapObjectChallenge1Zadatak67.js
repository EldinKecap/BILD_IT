// Kreirajte funkciju koja uzima niz fudbalskih klubova sa sljedecim properties: ime,
// brojPobjeda, brojPoraza, brojNerjesenih, brojPostignutihGolova,
// brojPrimljenihGolova i vraća naziv kluba sa najvećim brojem poena. Ako dvije ekipe
// imaju isti broj bodova, vrati se tim sa najvećom gol razlikom.
// Za pobjedu tim dobija 3 boda, za poraz dobija 0 bodova i za nerjesenu dobija 1 poen.
// Testirati funkciju sa najmanje 5 klubova.
function createClub(ime,brojPobjeda,brojPoraza,brojNerjesenih,brojPostignutihGolova,brojPrimljenihGolova) {
    return{
        ime,
        brojPobjeda,
        brojPoraza,
        brojNerjesenih,
        brojPostignutihGolova,
        brojPrimljenihGolova,
        poeni : 0, 
    }
}
const CLUBS = [];
let klub = createClub('BARCELONA',2,1,1,12,9);
CLUBS.push(klub);
klub = createClub('REAL MADRID',3,1,2,13,15);
CLUBS.push(klub);
klub = createClub('MANCHESTER UNITED',5,1,2,24,19);
CLUBS.push(klub);
klub = createClub('LIVERPOOL',5,1,2,12,19);
CLUBS.push(klub);
klub = createClub('BAYERN MUNCHEN',5,1,2,24,9);
CLUBS.push(klub);
// console.log(CLUBS);

function whoWins(arrOfClubs) {
    let points = [];
    for (let i = 0; i < arrOfClubs.length; i++) {
        const club = arrOfClubs[i];
        club.poeni = club.brojPobjeda*3+club.brojNerjesenih*1
        points.push(club.poeni);
    }
    let maxPoints = Math.max(...points);
    let finale = [];
    let golovi = [];
    for (let i = 0; i < arrOfClubs.length; i++) {
        const club = arrOfClubs[i];
        if(club.poeni === maxPoints){
            club.razlikaGolova = club.brojPostignutihGolova-club.brojPrimljenihGolova
            golovi.push(club.razlikaGolova);
            finale.push(club);
        }
    }
    let maxGolova = Math.max(...golovi);
    let winner = [];
    for (let i = 0; i < finale.length; i++) {
        const club = finale[i];
        if(club.razlikaGolova === maxGolova){
            winner.push(club);
        }
    }
    // console.log(winner);
    return winner;
}
console.log(whoWins(CLUBS));
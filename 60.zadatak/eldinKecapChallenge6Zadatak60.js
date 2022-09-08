// 6. Napisati funkciju koja kao parametar prima rečenicu (od najviše 200 karaktera) i iz nje uklanja svaku
//  riječ koja počinje velikim slovom. Pored toga, funkcija treba da prebroji ukupan broj riječi u rečenici
//   prije izmjene. Koristiti sljedeću funkciju: ukloniRijeci(string);. Npr. ako je data rečenica: "Stari most
//  u Mostaru spaja obale rijeke Neretve." funkcija je treba pretvoriti u: "most u spaja obale rijeke".
//   Funkcija ispisuje broj riječi u polaznoj rečenici (prije odsijecanja ostalih riječi).
// Radi jednostavnosti rješenja, pretpostavite da je riječ bilo koji niz znakova razdvojen znakom razmak.
function ukloniRijeci(string){
    let strArr = [];
    let startingNumOfWords ;
    if (string.length > 200) {
        console.log(`String je predug`);
    }
    strArr = string.split(/\s/g);
    startingNumOfWords = strArr.length;
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
       if (/^[A-Z]/.test(strArr[i])) {
           strArr.splice(i,1);
        } 
    }
    console.log(`Pocetni broj rijeci u recenici je ${startingNumOfWords} krajnji broj rijeci je ${strArr.length},preostale rijeci su :`);
    console.log(strArr.reduce((a,b)=>a.concat(' '+b)));

}

ukloniRijeci(`Stari most u Mostaru spaja obale rijeke Neretve.`);
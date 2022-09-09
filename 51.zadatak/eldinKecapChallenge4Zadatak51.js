// 4. Napisati funkciju koja vraća ukupan broj riječi u rečenici.

// Primjer poziva funkcije: brojRijeci("Ja mrzim proste brojeve u svim njihovim oblicima");
// Primjer ispisa programa: Unijeta rečenica se sastoji od 8 riječi.
 function brojRijeci (str) {
     let count = 1;
     for (let i = 0; i < str.length; i++) {
        
        if(str[i]===" "){
            count++;
        }
        
     }
     console.log(`Unijeta rečenica se sastoji od ${count} riječi.`)
   }

brojRijeci("Ja mrzim proste brojeve u svim njihovim oblicima");
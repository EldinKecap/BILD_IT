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
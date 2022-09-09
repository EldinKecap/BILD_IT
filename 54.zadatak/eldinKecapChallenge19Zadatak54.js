// Napisati funkciju koja provjerava da li string sadrzi brojeve i slova naizmjenicno. Funkcija prima string a vraca true ili false zavisno toga da li su brojevi i slova naizmjenicni. Npr. za string: “a1b2c3d4” vraca true, a za string “a12b3c4d” vraca false jer imamo dva broja(1i2) jedan pored drugog.
function provjeraStringaNaizmjenicno(str){
    let brojevi = [1,2,3,4,5,6,7,8,9];
    let slova = ['A','B','C','Č','Ć','D','DŽ','Đ','E','F','G','H','I','J','K','L','LJ','M','N','NJ','O','P','R','S','Š','T','U','V','Z','Ž'];
    let startsWithSlovo = false;
    str = str.toUpperCase();
    
   for (let i = 0; i < slova.length; i++) {
        if(str[0]===slova[i]){
            startsWithSlovo = true;
        }   
    }
    
    let counter = 0;
    if (startsWithSlovo){
        for (let i = 0; i < str.length; i+=2) {
            for (let j = 0; j < slova.length; j++) {
                if(str[i] === slova[j]){
                    counter++;
                    // console.log(counter,'sl')
                }
                
            }
            
        }
        
    }
    if (!startsWithSlovo){
        for (let i = 0; i < str.length; i+=2) {
            for (let j = 0; j < brojevi.length; j++) {
                if(str[i] == brojevi[j]){
                    counter++;
                    // console.log(counter,`br`)
                }
                
            }
            
        }
        
    }
    if (counter === Math.floor(str.length/2)) {
        return true;
    }
    return false;
    
}

let str='a1a1a';
console.log(provjeraStringaNaizmjenicno(str));

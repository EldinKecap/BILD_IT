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

let str='aa1A1a12a';
console.log(provjeraStringaNaizmjenicno(str));

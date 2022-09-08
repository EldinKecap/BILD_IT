//  Napisati program koji za proizvoljni string ispisuje:

// a. broj (procenat) samoglasnika
// b. broj (procenat) suglasnika
// c. broj (procenat) ostalih karaktera

function procenatSamoglasnika (str){
    let arrSamo = ['a','e','i','o','u'];
    let brSamo = 0;
    str = str.toLowerCase();
    for (let j = 0; j < str.length; j++) {    
        for (let i = 0; i < arrSamo.length; i++) {
            if(str[j] === arrSamo[i]){
                brSamo++;
            }    
        }
    }
    return (brSamo/str.length)*100;
}
function procenatSuglasnika(str){
    let arrSugla = [ 'b', 'c', 'č', 'ć', 'd', 'dž', 'đ', 'f', 'g', 'h', 'j', 'k', 'l', 'lj', 'm', 'n', 'nj', 'p', 'r', 's', 'š', 't', 'v', 'z', 'ž'];
    let brSugla = 0 ;
    
    str = str.toLowerCase();
    for (let j = 0; j < str.length; j++) { 
    for (let i = 0; i < arrSugla.length; i++) {
    if (str[j] === arrSugla[i] ) {
        brSugla++;
        }
    }
  
}


return (brSugla/str.length)*100;
}
function ispisProcenata(str){
    console.log(`Samoglasnika je : ${procenatSamoglasnika(str).toFixed(2)}%
Suglasnika je : ${ procenatSuglasnika(str).toFixed(2)}%
Ostalih karaktera je : ${(100 - procenatSamoglasnika(str) - procenatSuglasnika(str)).toFixed(2)}%`)
}

ispisProcenata('Radi ')
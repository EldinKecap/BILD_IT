let suma = 0 ;
let parni = 0 ;
let neparni = 0 ;
while(true){

    let rand = Math.floor(Math.random()*(100 - 11 ) + 11);
    
    suma += rand;
    if( rand % 2 === 0){
        parni++ ;
    }else{
        neparni++ ;
    }
    if( suma > 1000 ){
        break ;
    } 
}
console.log(`Broj parnih je : ${parni} 
Broj neparnih je : ${neparni}`) ;
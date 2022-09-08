let coin ; 
let heads = 0 ;
let tails = -0 ;

for(let i = 1 ; i <= 1000000 ; i++ ){
    coin = Math.round(Math.random()) ;
    if(coin === 1){
        heads++;
    }else if(coin === 0){
        tails++;
    }
}
console.log( `Heads : ${heads}
Tails : ${tails}` );
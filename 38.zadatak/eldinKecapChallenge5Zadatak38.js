let broj = 121; 
let prviDio = String(broj).slice(0,1);
let drugiDio = String(broj).slice(-1);

if(prviDio === drugiDio){
    console.log(`Broj ${broj} je palindrom.`);
}else{
    console.log(`Broj ${broj} nije palindrom.`)
}


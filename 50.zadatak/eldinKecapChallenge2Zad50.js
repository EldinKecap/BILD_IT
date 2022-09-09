// 2. Napisati
// funkciju koja prima neki broj te provjerava da li je isti prosti broj.
// Napisati test program koji poziva ovu metodu i ispisuje sve proste
// brojeve u rasponu od 0 do 10.000. (VAŽNO: Zadatak nije ispisati prvih 10.000 prostih brojeva nego sve proste brojeve izmedju 0 i 10.000
function provjeraBroja (a){
    if(a===1||a===2){
        return true;
    }
    for(let i = 2 ; i < a ; i++){
        if(a%i===0){
           return false;
        }
    }
    return true;
}

for(let i = 1 ; i < 10000 ; i++){
    if(provjeraBroja(i)){
        console.log(i);
    }
}



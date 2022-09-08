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



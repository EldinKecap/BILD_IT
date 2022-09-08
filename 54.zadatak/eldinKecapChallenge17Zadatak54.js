function provjeraBroja(brTelefona) {
    let num = brTelefona.replace(/-/g,'');
    num = num.replace('/','');
    let counter = 0;
    // console.log(num);
    let brojevi = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < num.length; i++) {
        for(let j = 0 ; j < brojevi.length;j++){
            if(num[i] === brTelefona[j]){
                counter++;
                // console.log(counter);
                break;
            }
    }   
    }
    if(counter!=num.length-1){
        return false;
    }
    if (brTelefona[3] === '/' && brTelefona[0] === '0' && brTelefona[1] === '6' && brTelefona[7] === '-' && brTelefona.length===11){
        return true;
    } 
    if (brTelefona[3] === '/' && brTelefona[0] === '0' && brTelefona[1] === '6' && brTelefona[2] === '0' && brTelefona[6] === '-' &&brTelefona[9] === '-' && brTelefona.length===13){
        return true;
    }
    return false;
}
console.log(provjeraBroja('062/191-012'));
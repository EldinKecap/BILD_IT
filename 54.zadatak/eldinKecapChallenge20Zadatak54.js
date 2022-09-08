let abeceda = {
    A: 'o-',
    B: '-ooo',
    C: '-o-o',
    D: '-oo',
    E: 'o',
    F: 'oo-o',
    G: '--o',
    H: 'oooo',
    I: 'oo',
    J: 'o---',
    K: '-o-',
    L:'o-oo',
    M:'--',
    N:'-o',
    O:'---',
    P:'o--o',
    Q:'--o-',
    R:'o-o',
    S:'ooo',
    T:'-',
    U:'oo-',
    V:'ooo-',
    W:'o--',
    X:'-oo-',
    Y:'-o--',
    Z:'--oo',
    '1':'o----',
    '2':'oo---',
    '3':'ooo--',
    '4':'oooo-',
    '5':'ooooo',
    '6':'-oooo',
    '7':'--ooo',
    '8':'---oo',
    '9':'----o',
    '0':'-----'
}
function morsovKod(str){
    let morsovaRecenica ='';
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
       for (const slovo in abeceda) {
        //    console.log(slovo)
        if( str[i] === slovo ){
            morsovaRecenica = morsovaRecenica.concat(abeceda[slovo]);
        }
    }       
    if( str[i] === ' ' ){
        morsovaRecenica = morsovaRecenica.concat(' ');
    }
    }
    return morsovaRecenica;
}
console.log(morsovKod('Thank you objects'));

// 3.  Napisati
// funkciju koja generiše te ispisuje 100 nasumičnih brojeva, 10 brojeva
// po liniji. Ispis programa treba da izgleda kao 10x10 matrica nasumičnih
// brojeva.
function ispisNasumicnihBrojeva (){
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push([]);
        for (let j = 0; j < 10; j++) {
            arr[i][j] = Math.floor(Math.random()*(100 -1)+1);            
        }        
    }
    for (let i = 0; i < 10; i++) {
        console.log('[',...arr[i],']');        
    }
}

ispisNasumicnihBrojeva();
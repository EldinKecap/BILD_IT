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
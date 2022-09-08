// Napisati program koji ce generisat niz duzine 10, 
// i popuniti ga unikatnim nasumicnim brojevima od 0 do 10.
// Dakle ne smijemo imati 2 ista broja u nizu. 
let arr = []
function fillArrWithRandomNums (arr){
    let counter = 0 ;
    end:  
    while (true) {
            let randNum = Math.floor(Math.random()*(11-1)+1);
            // console.log(randNum);
            arr.push(randNum); 
            for (let j = 0; j < arr.length ; j++) {
                if(randNum === arr[j]){
                    counter++;
                    if (counter === 2) {
                        arr.pop(); 
                        counter = 0;
                    break;
                    }
                }
            }     
                // console.log(arr);    
                if(arr.length === 10 ){
                    break end;
                }
        }
}
fillArrWithRandomNums(arr);
console.log(arr);
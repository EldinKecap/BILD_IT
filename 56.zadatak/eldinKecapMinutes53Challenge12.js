// Napisati funkciju koja sortira niz. NE koristiti .sort(). 
// Generisati niz duzine 10, popunjen nasumicnim brojevima od 10 do 100, zatim sortirati niz od najmanjeg
// do najveceg elementa i ispisati u konzolu. 
function sortArr(arr){
    let temp ;
    let i = 0;
    let j = 0;
   
    while(true){
        if(i===arr.length){
            i=0;
            // console.log(arr);
            j++;
        }
        if(arr[i] > arr[i+1] ){
            temp = arr[i];
            // console.log(temp)
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }    
        i++;
        if(j===arr.length){
            break;
        }
    }
}
let randArr = [];
for (let i = 0; i < 10; i++) {
    randArr[i]=Math.floor(Math.random()*(101-10)+10);
}
console.log(randArr);
sortArr(randArr);
console.log(randArr);

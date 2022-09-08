// Napisati funkciju koja ce generisati 2D niz. 2D niz treba da izgleda ovako:
// [
//   [1],
//   [1, 2],
//   [1, 2, 3],
//   [1, 2],
//   [1],
// ] 

function genrate2DArray(num){
    let arr = [];
    let arr2D = [];
    for (let i = 1; i <= num ; i++) {
        arr.push(i);
        let tempArr = [];
        for (let j = 0; j < arr.length; j++) {
            tempArr[j]=arr[j];         
        }
        arr2D.push(tempArr);
        // console.log(arr2D);
    }
    for (let i = 0; i < num; i++) {
        arr.pop();
        let tempArr = [];
        for (let j = 0; j < arr.length; j++) {
            tempArr[j]=arr[j]; 
            // console.log(tempArr);       
        }
        if(tempArr.length == 0){break;}
        arr2D.push(tempArr);
        
    }
    
    return arr2D;

}
console.log(genrate2DArray(3));
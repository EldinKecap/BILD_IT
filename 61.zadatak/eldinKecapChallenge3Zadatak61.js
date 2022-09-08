// 3. Kreirajte funkciju za rotaciju dvodimenzionalne matrice od N * N, popunjenom nasumicnim elementima. 
// Rotacija se vrsi odredjen broj puta, s tim ako je broj pozitivan, rotacija je u smjeru kazaljke na satu, 
// a ako nije, onda je rotacija u suprotnom smjeru.



// Primjeri: 
// rotateTransform([ 
// [2, 4], 
// [0, 0] 
// ], 1);



// Result:[ 
// [0, 2], 
// [0, 4] 
// ]



// rotateTransform([ 
// [2, 4], 
// [0, 0] 
// ], -1);



// Result:[ 
// [4, 0], 
// [2, 0] 
// ]
function rotateTransform(arr,numOfRotations) {
    let temp1 = [];
    let arr2 = [];
    let count = 0;
    while(numOfRotations!=count){
        if(numOfRotations > 0){
            for (let i = arr.length-1; i >= 0; i--) {
                for (let j = arr[i].length-1; j >= 0; j--) {
                    temp1.push(arr[j][i]);   
                }   
                // console.log(temp1)
                arr2.unshift(temp1);
                temp1=[];
            }
            arr=[];
            arr=[...arr2];
            arr2=[];
            count++;
        }else if (numOfRotations<0){
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    temp1.push(arr[j][i]);   
                }   
                // console.log(temp1)
                arr2.unshift(temp1);
                temp1=[];
            }
            arr=[];
            arr=[...arr2];
            arr2=[];
            count--;
        }
        }
    return arr;
}
let arr1 = [[1,2,3],
            [4,5,6],
            [7,8,9]];
console.table(rotateTransform(arr1,0));
console.table(rotateTransform(arr1,1));
console.table(rotateTransform(arr1,2));
console.table(rotateTransform(arr1,3));
console.table(rotateTransform(arr1,4));


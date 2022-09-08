// 4. Napišite JavaScript rekurzivnu funkciju da dobijete prvih n Fibonačijevih brojeva. Napomena: 
// Fibonačijev niz je niz brojeva: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Svaki naredni broj je zbir prethodna dva, i niz krece od 0.


function fibonacci(arr,end,count = 0){
    if(arr.length === 0){
        arr.push(0);
        arr.push(1);
    }
    if(count === end - 2){
        return ;
    } 
    arr[count+2] = arr[count] + arr[count+1]
    fibonacci(arr,end,++count)
    // console.log(arr);
}
let arr1 = [];
fibonacci(arr1,10);
console.log(arr1);
// let arr = [0,1];
// for (let i = 2; i < 10; i++) {
//     arr[i]= arr[i-2] + arr[i-1];
    
// }
// console.log(arr);
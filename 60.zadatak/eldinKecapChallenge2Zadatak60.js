// Napisati program koji generiše jednodimenzionalni niz od 50 jednocifrenih brojeva. 
// Nakon što je niz generisan, ispisati broj ponavljanja svakog broja u nizu. 

// 	Primjer niza: 1, 1, 2, 5, 2, 3, 1 …….. 3

// 	Broj 1 se ponavlja: 3 puta
// 	Broj 2 se ponavlja: 2 puta
// 	Broj 3 se ponavlja: 2 puta
// 	Broj 5 se ponavlja: 1 puta 
let arr = [];
for (let i = 0; i < 50; i++) {
    arr.push(Math.floor(Math.random()*(10-1)+1));
}
function numOfRepeats(arr){
    let arr1 = [1,2,3,4,5,6,7,8,9];
    let numOfRepeatsForEachNum = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr1[i]===arr[j]){
                numOfRepeatsForEachNum++;
            }
            
        }
        console.log(`Broj ${arr1[i]} se ponavlja: ${numOfRepeatsForEachNum} puta`);
        numOfRepeatsForEachNum=0;
    }
}
console.log(arr);
numOfRepeats(arr);
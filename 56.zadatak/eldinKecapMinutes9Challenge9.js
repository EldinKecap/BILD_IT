// 9. Napisati program koji pronalazi elemente koji su zajednicki za 2 niza. 
// Generisati 2 niza duzine 10 i popuniti nasumicnim brojevima od 10 do 100. 
// Funkcija treba da prima ova dva niza, te da vrati novi niz popunjen brojevima koji su zajednicki za oba niza. 
// Npr: Imamo nizove: [1, 2, 3, 4] i [0, 2, 4, 6], funkcija nam vraca ovaj niz: [ 2, 4 ]. 
let arr1 =[];
let arr2 =[];

function sameElements(arr1,arr2){
    let sameNumsArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
         if(arr1[i]===arr2[j]){
            sameNumsArr.push(arr1[i]);
         }
        }      
    }
    return sameNumsArr;
}


for (let i = 0; i < 10 ; i++) {
    arr1.push(Math.floor(Math.random()*(100-10)+10));
    arr2.push(Math.floor(Math.random()*(100-10)+10));    
}
console.log(arr1);
console.log(arr2);

console.log(sameElements(arr1,arr2));

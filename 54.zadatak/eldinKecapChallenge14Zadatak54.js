// Koristiti funkcije u rjesavanju ovog zadatka.
// Napisati funkciju koja transponuje matricu. Dakle, prvo generisati matricu 3x3 i popuniti nasumicnim brojevima od 0 do 10 a zatim ju ispisati. Sljedeci korak je trasponovanje matrice. Transponovati matricu znaci zamijeniti joj redove i kolone.
// Primjer:
// Ukoliko je matrica:
// 1 2 3
// 4 5 6
// 7 8 9

// Transponovana matrica je:
// 1 4 7
// 2 5 6
// 3 6 9
let mat = [];
function popuniMat(mat){
    let arr = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3 ; j++) {
            arr[j]=Math.floor(Math.random()*(10-1)+1);     
        }
        mat.push(arr);
        arr=[];
    }
}
popuniMat(mat);
console.table(mat)
function transponovanje(mat){
    let arr =[];
    let matT=[];
    for(let i = 0 ; i < 3 ;i++){
        for (let j = 0; j < 3 ; j++) {
            arr.push(mat[j][i]);           
        }
        matT.push(arr);
        arr=[];
    }
    return matT;
}
console.table(transponovanje(mat));
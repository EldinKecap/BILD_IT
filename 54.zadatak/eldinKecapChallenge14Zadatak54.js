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
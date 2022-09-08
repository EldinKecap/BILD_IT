// 6. Napisati program koji razdvaja parne i neparne elemente u nizu. 
// Program prvo generise niz od 10 elemenata popunjen nasumicnim brojevima od 1 do 20. 
// Zatim, program treba da prebaci sve parne brojeve na lijevu stranu, a sve neparne brojeve na desnu stranu
// tako da postoji jasna granica izmedju parnih i neparnih brojeva.
// Npr:
// Imamo niz: [1, 7, 4, 8, 3, 6, 12], kada se razdvoje parni i neparni brojevi niz izgleda ovako: [4, 8, 6, 12, 1, 7, 3] 
function generateArr(){
    let arr = new Array(20);
    for (let i = 0; i < arr.length; i++) {
        arr[i]=Math.floor(Math.random()*(21-1)+1);
    }
    return arr;
}
let arr = generateArr();

let parniArr = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2===0){
        parniArr.push(arr[i]);
    }
}
parniArr = parniArr.sort((a, b) => a - b);

let neParniArr = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2!=0){
        neParniArr.push(arr[i]);
    }
}
neParniArr = neParniArr.sort((a, b) => a - b);

let counter = 0;
for (let i = 0; i < arr.length; i++) {
    if(i<parniArr.length){
        arr[i]=parniArr[i];
    }else{
        arr[i]=neParniArr[counter];
        counter++;
    }

}

// console.log(parniArr);
// console.log(neParniArr);
console.log(arr);
// 4.Napisati program koji generise specijalan niz duzine 10 i popunjava nasumicnim brojevima. 
// Kod ovog niza brojevi na parnim indexima moraju biti parni, 
// a na neparnim indexima brojevi moraju biti neparni.

function returnParni(){
    let num ;
    while(num%2!=0){
        num = Math.floor(Math.random()*(100-1)+1);
    }
    return num;
}
function returnNeParni(){
    let num = Math.floor(Math.random()*(100-1)+1);;
    while(num%2===0){
        num = Math.floor(Math.random()*(100-1)+1);
    }
    return num;
}
function generateArr(){
    let arr = new Array(10);
    for (let i = 0; i < arr.length; i+=2) {
        arr[i] = returnParni(); 
    }
    for (let i = 1 ; i < arr.length ; i+=2) {
        arr[i] = returnNeParni();
    }
    return arr;
}

console.log(generateArr());
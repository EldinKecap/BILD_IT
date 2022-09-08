// 5. Napisati program koji izračunava prosjek svih savršenih brojeva iz zadatog intervala. Uzeti proizvoljan interval. 
// Za neki broj se kaže da je savršen ukoliko je jednak sumi svih svojih djelilaca (ne uključujući njega samog). Na primjer, 28 je savršen broj: 
// njegovi djelioci su 1, 2, 4, 7 i 14, a 1 + 2 + 4 + 7 + 14 = 28. Jedini savršeni brojevi u opsegu od 1 do 100 su brojevi 6 i 28.
function isPerfect(num){
    let arr = [];
    for (let i = 1; i < num ; i++) {
        if(num % i ===0){
            arr.push(i);
        }
    }
    let suma ;
    if(arr.length != 0){
        suma = arr.reduce((a,b)=>a+=b);
    }
    // console.log(arr);
    if (suma === num) {
        return true;
    }
    return false;
}
// console.log(isPerfect(28));

function averageOfPerfectNum(start,end){
    let arr = [];
    for (let i = start; i < end; i++) {
        if (isPerfect(i)) {
            arr.push(i);
        }
        console.log(i);
    }
    console.log(arr);
    let avgNum;
    if(arr.length != 0 ){
        avgNum = arr.reduce((a,b)=>a+=b)/arr.length;
        console.log(`Prosjek savrsenih brojeva u  intervalu od ${start} do ${end} je ${avgNum.toFixed(2)}`);
        return true;
    }
    console.log(`Nema savrsenih brojeva.`);
    return false;
}
averageOfPerfectNum(1,100000);
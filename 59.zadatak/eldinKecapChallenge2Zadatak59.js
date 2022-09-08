// 2.     Kreirajte funkciju koja određuje da li je broj Oddish ili Evenish.
// Broj je Oddish ako je zbir svih njegovih cifara neparan, a broj je Oddish ako
// je zbir svih njegovih cifara paran. Ako je broj Oddish, vratite
// "Oddish". U suprotnom, vratite "Evenish". Na primjer,
// oddishOrEvenish(121) bi trebao vratiti "Evenish", budući da je 1 + 2
// + 1 = 4. oddishOrEvenish(41) bi trebao vratiti "Oddish", budući da je
// 4 + 1 = 5.
function oddishOrEvenish(num){
    let str = String(num);
    let arr = [];
    let suma = 0;
    for (let i = 0; i < str.length; i++) {
        arr.push(Number(str[i]));
    }
    for (let i = 0; i < arr.length; i++) {
        suma+=arr[i];
    }
    if (suma%2===0) {
        return "Evenish";
    }
    return "Oddish";
}
console.log(oddishOrEvenish(41));
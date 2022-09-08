// 7. Za dati string, kreirajte funkciju koja kreira niz, dekonstruise i konstruise string slovo po slovo. 
// Pogledajte primjer u nastavku za neke korisne smjernice:
// constructDeconstruct("Hello") ➞ [
//   "H",
//   "He",
//   "Hel",
//   "Hell",
//   "Hello",
//   "Hell",
//   "Hel",
//   "He",
//   "H"
// ] 
function constructDeconstruct(str){
    let arr2d = [];
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
        let tempArr=[];
        for (let j = 0; j < arr.length; j++) {
            tempArr = String(tempArr.concat(arr[j])).replace(/,/g,'');
            // console.log(tempArr);
            
        }
        arr2d.push(tempArr);
    }
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        arr.length -= 1;
        console.log(arr);
        let tempArr = []
        for (let j = 0; j < arr.length; j++) {
            tempArr = String(tempArr.concat(arr[j])).replace(/,/g,'');
            // console.log(tempArr);   
        }
        if (arr.length===0) {
            break;
        }
        arr2d.push(tempArr);
    }
    return arr2d;
 
}
console.log(constructDeconstruct('Hola'))
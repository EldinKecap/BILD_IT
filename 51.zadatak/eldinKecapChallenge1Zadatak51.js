// Napisati funkciju koja prima 2 argumenta, string i karakter koji treba
// ukloniti iz datog stringa. Nakon poziva, funkcija treba da vrati novi
// string koji predstavlja orginalni string sa izuzetkom prosljedjenog
// karaktera.
// Primjer poziva funkcije: ukloniKarakter("Dobrodosli", "o");
// Primjer ispisa programa: Dbrdsli
function ukloniKarakter (str,char){
    let str2 = str ;
    for (let i = 0; i < str2.length; i++) {
        if(str.charAt(i)===char){
            str2 = str2.replace(char,'');
        }
        
    }
    return str2;
}
console.log(ukloniKarakter('Dobrodosli','o'));
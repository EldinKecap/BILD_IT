// 8. Napisati funkciju koja nalazi zadnji index na kojem se nalazi odredjeni broj.
// Funkcija treba da prima niz koji pretrazuje i element koji trazi.
// Funkcija vraca zadnji index na kojem se broj nalazi.
// Npr: imamo niz: [2, 4, 5, 6, 7, 2 ,4] i trazimo broj 2. 
// Funkcija ce nam vratiti 5 jer je 5 zadnji index na kojem se nalazi broj 2. 
// Ukoliko broj koji trazimo ne postoji u nizu, funkcija vraca -1. 

function findLastIndex(arr,num){
    for (let i = 0; i <= arr.length; i++) {
        if(arr[arr.length-i]===num){
            return (arr.length-i);
        }
    }
    return -1;
}
console.log(findLastIndex([12,34,554,34,4,43,34,234,4,3],43));
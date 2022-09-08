// 10. Napisati program koji će generisati niz od 20 elemenata popunjen trocifrenim brojevima. 
// Zatim napraviti funkciju koja će u nizu pronaći sve brojeve kojima je prva cifra (početna cifra sa lijeve strane) parna i ukloniti ih iz niza. 
// Uklanjanje elemenata niza obavezno uraditi tako da ne ostaju prazni elementi već da se ostatak niza pomjeri kako ne bi bilo praznih elemenata. 
// NOTE: Ne koristiti splice()
let arr1 = new Array(20);
for (let i = 0; i < arr1.length; i++) {
    arr1[i]=Math.floor(Math.random()*(1000-100)+100);
}
console.log(arr1);
function uklanjanjeElemenataSaParnimBrojemNaPocetku(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i]= String(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if(/^[2,4,6,8]/.test(arr[i])){
            for (let j = i; j < arr.length; j++) {
                arr[j]=arr[j+1];    
            }
            arr.pop();
            i=0;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i]=Number(arr[i]);   
    }
    console.log('Niz bez clanova sa pocetnim parnim brojem : ' + arr);
}

uklanjanjeElemenataSaParnimBrojemNaPocetku(arr1);
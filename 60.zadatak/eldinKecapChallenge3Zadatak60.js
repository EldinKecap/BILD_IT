// Napisati program koji ce simulirati unos n slučajnih vrijednosti u opsegu od 0 do 1000. 
// Za n uzeti proizvoljan broj. Izračunati statističke podatke u kojem procentu se od n 
// generisanih slučajnih vrijednosti pojavljuje prost broj.
// Npr. Ako je generisano 10 brojeva (n = 10): 5,7,4,13,17,20,25,23,30,45, u ovom uzorku 
// od 10 brojeva postoji 5 prostih brojeva pa je procenat prostih brojeva u ovom slučaju 50%.
// Napomena: Po želji kreirati dodatne funkcije da se olakša rješavanje zadatka.

function proizvoljanUnos (arr,num){
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random()*1000));      
    }
}
function isProst(mybProst){
    let count = 0;
    for (let i = 1; i <= mybProst; i++) {
        if (mybProst%i===0) {
            count++;          
        }
    }
    // console.log(count);
    if (count===2) {
        return true;
    }
    return false;
}
function procenatProstih(arr){
    let brojProstih = 0;
    for (let i = 0; i < arr.length; i++) {
        if(isProst(arr[i])){
            brojProstih++;
            // console.log(brojProstih);
        }
    }
    let procenat = (brojProstih/arr.length)*100;
    console.log(`u ovom uzorku od ${arr.length} brojeva postoji ${brojProstih} prostih brojeva pa je procenat prostih brojeva u ovom slučaju ${procenat}%.`);
}
let arr1=[];
proizvoljanUnos(arr1,10000);
// console.log(arr1);
// console.log(isProst(4));
procenatProstih(arr1);
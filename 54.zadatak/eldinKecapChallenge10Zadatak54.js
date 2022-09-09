// Napisati program koji ispisuje ispod prikazani pattern. Program treba da pita korisnika od koliko redova se trokut sastoji. 

// 1  2  3  4  5
//     2  3  4  5
//         3  4  5
//             4  5
//                 5

function ispisPiramide(brojRedova){
    let str = '';
    let arr= [];
    brKolona = brojRedova
    for (let i = 1; i < brKolona+1; i++) {
        arr.push(i);   
    }
    for (let j = 0; j < brojRedova; j++) {     
        brKolona -= 1;
        str = String(arr);
        str = str.replace(/,/g,' ');        
        console.log(str);
        arr[j]= ' ';
    }

}
ispisPiramide(10);
// 5.      Napišite funkciju koja pronalazi najcesci element niza tj element
// kojeg ima najvise u nizu.

// Primer niza:
// const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Ispis: a (5 puta)

function mostCommonCharacter(arr){
    let max = 0;
    let counter = 0 ;
    let char = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]===arr[j]) {
                counter++;
                if(counter>max){
                    max=counter;
                    char = arr[i];
                }
            }
        }
        counter=0;
    }
    console.log(`${char}(${max} puta)`);
}
mostCommonCharacter([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
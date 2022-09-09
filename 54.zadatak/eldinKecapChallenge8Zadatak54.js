// Napisati funkciju koja dijeli niz u manje dijelove. Funkcija treba da prima dva argumenta, niz i broj u koliko dijelova trebamo podijeliti taj niz.
// Primjer:
// Recimo da se funkcija zove divide, poziv funkcije bi bio divide([1, 2, 3, 4, 5, 6, 7], 3); funkcija ce vratiti 2D niz koji izgleda ovako: [ [1, 2, 3 ], [4, 5, 6], [7] ].
//pokusao sam uraditi na svoj nacin ali nisam bas uspio da radi za sve, naso sam kod sa StackOverflow-a al nisam ga razumio pa ga nisam ni ubacio 
function podjelaNiza(arr,parts){
    //Stack Overflow code
    /////////////////////////////
    // let result = [];
    // for (let i = parts; i > 0; i--) {
    //     result.push(arr.splice(0, Math.ceil(arr.length / i)));
    //     console.log(arr);
    // }
    // return result;
    //////////////////////////
    let tempArr=[];  
    let temp = [];
    if(arr.length%parts!=0){
        for (let i = 0; i < arr.length%parts; i++) {
           temp.unshift(arr.pop());    
        }
    }
    let separator = Math.ceil(arr.length/parts);
    // console.log(arr.length)
    while(true){
        tempArr.push(arr.splice(0,separator));
        // console.log(arr)
        if(arr.length === 0){
            break;
        }
        
    }
    if(parts===tempArr.length){
        
    for (let i = 0; i < temp.length; i++) {
        tempArr[tempArr.length-1].push(temp[i]);
        
    }
    }else if(parts!=tempArr.length){
        tempArr.push(temp);
    }

    return tempArr;
}
console.log(podjelaNiza([1,2,3,4,5,6,7,8,9,10,11],5));
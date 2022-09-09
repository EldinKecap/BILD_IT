// Napisati program koji ispisuje 9 x 9 tablicu množenja. Program treba da ispiše tablicu u formatu prikazanom ispod. 

//    1   2   3   4   5   6   7   8   9  
//    2   x   x   x    
//    3   x   x   x
//    4   x   x   x
//    5   x   x   x         …….
//    6   x   x   x
//    7   x   x   x
//    8   x   x   x
//    9   x   x   x
function ispisTabMnozenja (){
    let arr = []; 
    let row = '';
    
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            arr.push(i*j);          
        }   
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<10){
                let temp = ' ' + arr[i];
                arr[i]= temp;
            }
            
        } 
        row = String(arr);
        row = row.replace(/,/g,' ');
        arr = [];  
        console.log(row);
    }
    
}
ispisTabMnozenja();
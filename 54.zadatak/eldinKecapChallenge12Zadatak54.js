
// Napisati program koji ispisuje Floydov trokut. Program treba da radi za bilo koji broj redova.
// Primjer:
// Floydov trokut sastavljen od 5 redova izgleda ovako:

// 1
// 2    3
// 4    5    6
// 7    8    9    10
// 11    12    13    14    15
function floydTrougao(brojRedova) {
   let num = 1;
   let arr = [];
   let i = 1;
    while(true){
        arr.push(num);
        // console.log(arr);
        if(arr.length === i ){
            let temp = arr.toString();
            temp = temp.replace(/,/g,' ');
            console.log(temp);
            
            if(i ===brojRedova){
                break;
            }
            i++;
            arr=[];
        }
        num++;
        
   }
    
}
floydTrougao(10);

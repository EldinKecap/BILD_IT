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

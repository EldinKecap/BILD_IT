function stringPodaci (str){
    let length = str.length;
    let samoglasnici = 0 ;
    let suglasnici = 0 ; 
    let suglasniciDupli = ['dž','lj', 'nj'];
    for (let i = 0; i < length ; i++) {
        if(/[a,e,i,o,u]/.test(str[i])){
            samoglasnici++;
        }        
    }
    suglasnici=length-samoglasnici;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j <suglasniciDupli.length; j++) {
            
            if(str[i]+str[i+1]===suglasniciDupli[j]){
                suglasnici--;
            }
            
            
        }
    }
    
    console.log(`String ${str} se sastoji od ${length} karaktera od cega su ${samoglasnici} samoglasnici i ${suglasnici} suglasnici`);
}
stringPodaci('Dobrodosli')
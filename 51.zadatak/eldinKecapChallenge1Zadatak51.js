function ukloniKarakter (str,char){
    let str2 = str ;
    for (let i = 0; i < str2.length; i++) {
        if(str.charAt(i)===char){
            str2 = str2.replace(char,'');
        }
        
    }
    return str2;
}
console.log(ukloniKarakter('Dobrodosli','o'));
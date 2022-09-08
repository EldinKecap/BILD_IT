// 1. Napisati funkciju koja konvertuje bilo koji string u camelCase. 
// Recimo da imamo proizvoljni string  “Talk is cheap. Show me the code.”, 
// nasa funkcija ce ga konvertovati da izgleda ovako: talkIsCheapShowMeTheCode. 

function toCamelCase(str){
    str = String(str);
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        if(i==0){
           str = str.toLowerCase();
        }
        if(/[^\w]/.test(str[i])){
            str = str.toUpperCase();
            continue;
        }
        newArr.push(str[i]);
        str = str.toLowerCase();
    }
    str = String(newArr).replace(/,/g,'');
    return str;
}
console.log(toCamelCase('Talk is cheap. ,314 Show me the code'));
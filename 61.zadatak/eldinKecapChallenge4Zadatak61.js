// 4. Neko je pokusao cenzurirati moje stringove zamjenom svakog samoglasnika sa zvjezdicon (*) npr. l*k* th*s(like this). 
// Srećom, uspio sam pronaći samoglasnike koji su uklonjeni. Uzimajuci u obzir cenzurirani string i string cenzuriranih samoglasnika, 
//vratite originalni necenzurirani string.



// Primjeri: 
// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?" 
// uncensor("abcd", "") ➞ "abcd" 
// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"



// NOTE: 
// - Proslijedjeni samoglasnici su uvijek u ispravnom redoslijedu - Broj proslijedjenih samoglasnika uvijek odgovara broju zvjezdica(*) u cenzurisanom stringu

function uncensor(censoredStr,vowels){
    let count = 0;
    censoredStr=censoredStr.split('');
    console.log(censoredStr);
    for (let i = 0; i < censoredStr.length; i++) {
        if(censoredStr[i]==='*'){
            censoredStr[i]=vowels[count];
            count++;
        }
    }
    return censoredStr.join('');
}
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
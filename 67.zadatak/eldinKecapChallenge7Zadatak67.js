// Pretpostaviti da # predstavlja tipku BACKSPACE koja se pritisne. Napišite funkciju koja pretvara string koji sadrži # u string bez #. 
// PRIMJERI: 
// erase("he##l#hel#llo") ➞ "hello" 
// erase("major# spar##ks") ➞ "majo spks" 
// erase("si###t boy") ➞ "t boy" 
// erase("####") ➞ "" 

function erase(str) {
    str=str.split('');
    for (let i = 0; i < str.length; i++) {
        if(str[i]==='#'){
            str.splice(i-1,2);
            i=0;
            // console.log(str)
        }
        if (i===0&&str[i]==="#") {
            str.splice(0,1);
            i=0;
        }
    }
    return `"${str.join().replaceAll(',','')}"`;
}
console.log(erase('major# spar##ks'));
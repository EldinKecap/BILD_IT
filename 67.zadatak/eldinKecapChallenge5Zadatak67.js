//Kreirajte funkciju koja broji koliko se usamljenih jedinica(1) pojavljuje u datom broju. 
//Usamljena znači da se broj 1 ne pojavljuje dvaput ili više zaredom. PRIMJERI: 
function countLoneOnes(num) {
    num = String(num);
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i-1]!=1&&num[i]==1&&num[i+1]!=1) {
            count++;
        }
    }
    return count;
}
// console.log(countLoneOnes(1191));
// Kreirajte funkciju koja vraća broj na osnovu broja tužnih i nasmijanih licaSretna lica :) i (: vrijede 1. 
//Tužna lica :( i ): vrijede -1. 
function happinessNumber(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
       if(str[i]+str[i+1]==':)'||str[i]+str[i+1]=='(:'){
           count++;
       }
       if(str[i]+str[i+1]==':('||str[i]+str[i+1]=='):'){
        count--;
    }
    }
    return count;
}

console.log(happinessNumber(':::'));
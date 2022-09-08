// 7.      Data su dva proizvoljna stringa, napišite funkciju koji pronalazi
// najduži zajednički substring. Tj ukoliko imamo string: “Talk is cheap, show me
// the code.” i “Me like to code, me happy.”, najveci substring u ovom slucaju je
// “code”.

function longestSubstring(str1,str2){
    str1 = str1.replace(/[,.]/g,'');
    str2 = str2.replace(/[,.]/g,'');
    let arrWords1 = str1.split(' ');
    let arrWords2 = str2.split(' ');
    console.log(arrWords1);
    let maxWord='';
    for (let i = 0; i < arrWords1.length; i++) {
        for (let j = 0; j < arrWords2.length; j++) {
            if(arrWords1[i]===arrWords2[j]){
                if(maxWord.length<arrWords1[i].length ){
                    maxWord=arrWords1[i];
                }
            }
        }   
    }
    return maxWord;
}
console.log(longestSubstring('Talk is cheap, show me the code.' ,'Me like to code, me happy.'));
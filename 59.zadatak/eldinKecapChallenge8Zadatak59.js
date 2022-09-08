// 8.      Kreirajte funkciju koja prima dva stringa kao dva parametra i vraća
// boolean koji pokazuje da li je prvi string anagram drugog stringa ili nije.

// Primjeri:
// isAnagram(“silent”, “listen”) ➞ true
// isAnagram(“socks”, “pants”) ➞ false
function isAnagram(str1,str2){
    if (str1.length != str2.length) {
        return false;
    }
    
    for (let i = 0; i < str1.length; i++) {
        if(str2.includes(str1[i])){
            str2=str2.replace(str1[i],'');
        }   
    }
    if(str2.length===0){
        return true;
    }
    return false;
}
console.log(isAnagram('silent', 'listen'));


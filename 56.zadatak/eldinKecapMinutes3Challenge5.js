// 5. Napisati program koji za proizvoljnu rijec provjerava da li je rijec isogram(izogram).
// Rijec je isogram ukoliko sve svako slovo nalazi samo jednom u rijeci. Npr: rijec “lovac” je
// isogram jer nema slova koja se ponavljanju, ali rijec “baklava” nije. 
function isIsogram (str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(str[i]===str[j]){
                counter++;
            }
        }
        if(counter>1){
            return false;
        }
        counter = 0 ;
    }
    return true;
}

console.log(isIsogram('lovac'));
// 2. Julije Cezar je zastitio svoje povjerljive informacije enkripcijom.
// Enkripcija ili sifriranje je proces u kriptografiji kojim se vrsi izmjena podataka tako da se poruka, 
// odnosno informacije, ucine necitljivim za osobe koje ne posjeduju određeno znanje (kljuc). 
// Cezarova enkripcija pomice svako slovo za odredjeni broj slova. Ako vas pomak odvede preko kraja abecede, samo se vratite na pocetak abecede. 
// U slučaju rotacije za 3, w, x, y i z bi se mapirali u z, a, b i c. Kreirajte funkciju koja uzima string s (tekst koji treba sifrirati) i cijeli broj n 
// (faktor rotacije). Funkcija bi trebala vratiti sifrirani string.



// Primjeri: 
// caesarCipher("middle-Out", 2) ➞ "okffng-Qwv" 
// // m -> o 
// // i -> k 
// // d -> f 
// // d -> f 
// // l -> n 
// // e -> g 
// // - - 
// // O -> Q 
// // u -> w 
// // t -> v



// caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj" 
// caesarCipher("A friend in need is a friend indeed", 20) ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx" 
// Koristiti engleski abeceda. Engleska abeceda se sastoji od 26 slova: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.
function caesarCipher(str,num) {
    str = str.split('');
    // console.log (str);
    let abecedaUC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let abecedaLC = [ 'a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
    nextletter:
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < abecedaUC.length; j++) {
            if(str[i]===abecedaUC[j]){
                if (j+num<26) {
                    str[i]=abecedaUC[j+num]; 
                    continue nextletter;
                }else if(j+num>=26){
                    str[i]=abecedaUC[(j+num)-26];
                    continue nextletter;
                }
            }
            if(str[i]===abecedaLC[j]){
                if (j+num<26) {
                    str[i]=abecedaLC[j+num]; 
                    continue nextletter;
                }else if(j+num>=26){
                    str[i]=abecedaLC[(j+num)-26];
                    continue nextletter;
                }
            }            
        }
    }
    return str.join('');
}
console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life',5));
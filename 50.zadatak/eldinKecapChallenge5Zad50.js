// 5. Napisati funkciju koja pronalazi broj pronavljanja određenog karaktera u stringu.
// Primjer poziva funckije: brojacKaraktera("Dobrodosli", "o")
// Primjer ispisa: Karakter o se ponavlja 3 puta u stringu "Dobrodosli".

function brojacKaraktera (str,char) {
    let counter = 0 ;
    for (let i = 0; i < str.length; i++) {
        if(String(str[i])===String(char)){
            counter++;
        }
    }
    console.log(`Karakter ${char} se ponavlja ${counter} puta u stringu "${str}".`);
}

brojacKaraktera('Dobrodosli','d');
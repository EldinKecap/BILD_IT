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
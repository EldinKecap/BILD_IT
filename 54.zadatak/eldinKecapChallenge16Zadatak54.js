// Imamo masinu koja sitni novac. Obzirom da odredjenu kolicinu novca mozemo podijeliti na vise nacina, nas program za ovu masinu bi trebao da ispise sve moguce opcije. Koristiti novcanice konvertibilne marke s tim da se ne koristi manja novcanica od 5 KM.
// Primjer: 20 KM bi se moglo usitniti na sljedece nacine:
// 2 x 10KM, 4 x 5KM, 1 x 10KM + 2 x 5KM.
// Napisati funkciju koja prima jedan parametar, kolicinu novca, zatim funkcija ispisuje sve moguce opcije za tu kolicinu novca.
function imasStaSitna(novac){
    let novcanice = [5,10,20,50,100,200];
    let brojNovcanica = [];
    for (let i = 0; i < novcanice.length ; i++) {
        if(novac%novcanice[i]===0&&novac!=novcanice[i]){
            brojNovcanica.push(novac/novcanice[i]);
        }
    }
    for (let i = 0; i < brojNovcanica.length; i++) {
       console.log(`${novac}KM se moze usitniti na : ${brojNovcanica[i]} x ${novcanice[i]}KM`); 
    }
    // let br = 0;
    // let str = ''
    // for (let i = 0; i < 2; i++) {
    //     str += `${brojNovcanica[i]/2}X${novcanice[br]}`;
    //     br++;
    // }
    // console.log(str);
    // console.log(brojNovcanica);
}
imasStaSitna(100);
//Pokuso sam al nije uspjelo usitnit
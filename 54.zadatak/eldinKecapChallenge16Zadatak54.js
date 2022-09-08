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
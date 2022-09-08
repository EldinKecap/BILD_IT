let pocetnaCijena = 175.5 ;
let popust = 12 ; 
let iznosPopusta = (pocetnaCijena*popust)/100 ;
let cijenaSaPopustom = pocetnaCijena - iznosPopusta ; 
let ispis = `Za robu sa cijenom od ${pocetnaCijena}KM i popustom od ${popust}%, iznos popusta je ${iznosPopusta}KM a cijena robe sa popustom iznosi ${cijenaSaPopustom}KM.`
console.log(ispis) ;
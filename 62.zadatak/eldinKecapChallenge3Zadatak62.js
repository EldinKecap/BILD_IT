//Napravi pet objekata
let igrac = {
    ime:'Fernando',
    prezime:'Alonso',
    bojaDresa:'bijela',
    broj:'56',
    imaLoptu:false,
    dodajLoptu(drugiIgrac){
        if(this.imaLoptu===true){
            drugiIgrac.primiLoptu();
            this.imaLoptu=false;
        }
        console.log('Ne mozes dodat ako nemas loptu');
    },
    primiLoptu(){
        this.imaLoptu=true
    },
}

let lopta = {
    brend:'spalding',
    boja:'zuta',
    kotrljaj(){
        console.log('Lopta se kotrlja');
    },
}
let sudija = {
    opremaZaSudjenje: ['pista','zastavica'],
    sviraj(){
        if(this.opremaZaSudjenje.includes('pista')){
            console.log('Piiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis');
        }
    },
    proglasiKrsenjePravila(){
        if (this.opremaZaSudjenje.includes('zastavica')) {
            this.sviraj();
            console.log('Prekrashaj , mase ti sudija.');
        }
    }
}

let teren = {
    boja:'zelen',
    duzina:'100m',
    sirina:'50m',
    brojIgraca:0,
    igracUlaziNaTeren(){
        this.brojIgraca++;
    }
}

let golman = {
    ime:'Rodney',
    prezime:'Mullen',
    bojaDresa:'bijela',
    brojDresa:'1',
    brani(){
        if (Math.random()>0.5) {
            console.log('GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
        }else{
            console.log('Nije go :(')
        }
    }
}

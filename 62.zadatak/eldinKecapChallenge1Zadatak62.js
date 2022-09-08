// Kreirati Matematika objekat, koji je vrlo slican Math koji smo vec
// koristili. U ovom zadatu NE SMIJETE koristiti Math, vec morate pisati
// svoju logiku. Matematika objekt treba da ima sljedece funkcionalnosti:
// zaokruziNaManji(broj) - zaokruzuje decimalni broj na manji cijeli broj
// zaokruziNaVeci(broj) - zaokruzuje decimalni broj na veci cijeli broj
// stepenuj(broj, stepen) - stepenuje broj na odredjeni stepen
// zaokruziNaNajblizu(broj) - zaokruzuje decimalni broj na najblizi cijeli broj
// apsolutnaVrijednost(broj) - vraca apsolutnu vrijednost broja
// veciBroj(a, b) - vraca veci broj od 2 proslijedjena
// manjiBroj(a, b) - vraca manji broj od 2 proslijedjena
// PI - cuva konstantu PI
let Matematika = {
    PI:3.14159265359,
    zaokruziNaManju(num){
        temp = num.toFixed(0);
        if(temp > num){
            return temp-1;
        }
        return num.toFixed;
    },
    zaokruziNaVecu(num){
        temp = Number(num.toFixed(0));
        if(temp < num){
            return temp+1;
        }
        return num.toFixed(0);
    },
    stepenuj(broj,stepen){
        let stepenovanBroj = broj;
        for (let i = 1; i < stepen ; i++) {
            stepenovanBroj*=broj;     
        }
        return stepenovanBroj;
    },
    zaokruziNaNajblizi(broj){
        return broj.toFixed();
    }
    ,
    apsolutnaVrijednost(broj){
        if(broj<0){
            broj=broj*(-1);
        }
        return broj;
    },
    veciBroj(a,b){
        if (a>b) {
            return a;
        }else{
            return b;
        }
    },
    manjiBroj(a,b){
        if(a<b){
            return a;
        }else{
            return b;
        }
    },

}
console.log(Matematika.manjiBroj(5,3));
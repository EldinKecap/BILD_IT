// 8. Svaki paran broj se može prikazati kao suma dva prosta broja (tkz. Goldbachovo pravilo). 
// Napisati program koji ce prikazati sve parne brojeve u intervalu od n1 do n2 kao sumu dva prosta broja. 
// n1 i n2 uzeti proizvoljno s tim da n2 mora biti veci od n1.
function isProst(num){
    for (let i = 2; i < num; i++) {
        if(num%i===0){
            return false
        }
    }
    return true;
}
function goldbachovoPravilo(n1,n2){
    if(n1>n2){
        console.log(`Pogresan unos pocetak veci od kraja`);
    }
    if(n1%2!=0){
        n1++;
    }
    for (let i = 1; i < n2; i++) {
        for (let j = 1; j < n2; j++) {
                if (isProst(i)&&isProst(j)) {
                    if(i+j===n1){
                        console.log(`${n1} = ${i} + ${j}`);
                        n1+=2;
                        i=1;
                    }
                }
           }
        if(n1>n2){
            break;
        }
        // console.log(n1);
    }

}
// console.log(isProst(4));
goldbachovoPravilo(1,200);
// Napisati funkciju koja se simulira jednostavan kalkulator. Funkcija prima 3 argumenta, jedan broj, znak operacije i drugi broj.
// Primjer:
// Recimo da se funkcija zove calc, poziv funkcije bi izgledao ovako: calc(3, ‘+’, 4) a rezultat bi bio 7. Funkcija treba da radi za: +, -, * i /.
function kalk(num1,op,num2){
    switch (op){
        case '-':
        return num1 - num2;
        
        case '+':
        return num1 + num2;
        
        case '/':
        return num1 / num2;
        
        case '*':
        return num1 * num2;
        
        default:
        return 'Nije operator ili nije podrzan';
        
    }
}
console.log(kalk(4,'-',2));

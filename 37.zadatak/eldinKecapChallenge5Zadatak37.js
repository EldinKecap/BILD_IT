let brojBodova = 74;
let rjesenje = `Za osvojenih ${brojBodova} boda dobili ste `;


switch (true){

    case(brojBodova < 1 ):
        console.log("Pogresan unos.");
    break;

    case (brojBodova < 50 ): 
        console.log(rjesenje, "5.");
    break;

    case(brojBodova < 60 ):
        console.log(rjesenje,"6.");
    break;

    case(brojBodova < 70 ):
        console.log(rjesenje,"7.");
    break;

    case(brojBodova < 80 ):
        console.log(rjesenje,"8.");
    break;

    case(brojBodova < 90 ):
        console.log(rjesenje,"9.");
    break;

    case(brojBodova < 100 ):
        console.log(rjesenje,"10.");
    break;

    default:
        console.log("Pogresan unos.");
    break;
}
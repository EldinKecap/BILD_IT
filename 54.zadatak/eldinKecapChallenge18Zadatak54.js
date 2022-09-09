// Napisati funkciju koja provjerava da li cijeli broj ima tacno 3 djelioca, i vraca true ukoliko broj ima tacno 3 djelioca a false u suprotnom. Npr broj 4 ima tacno 3 djelioca: 1, 2 i 4. Zatim ispisati prvih 20 brojeva koji imaju tacno 3 djelioca.
function hasThreeDividers(num) {
    numOfDiv = 0;
    divider = 0;

    while (true) {
        
        divider++;
        if (num % divider === 0) {
            numOfDiv++;
        }
        if (divider === num) {
            break;
        }
    }
    if (numOfDiv === 3) {
        return true;
    }
    return false;
}
let num = 1;
let counter = 0;
while(true){
    if(hasThreeDividers(num)){
        console.log(`${counter+1}. ${num}`);
        counter++;
    }
    num++;
    if(counter === 20){
        break;
    }
}

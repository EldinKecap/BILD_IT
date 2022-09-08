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

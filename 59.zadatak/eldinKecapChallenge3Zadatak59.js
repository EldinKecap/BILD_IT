// 3.      Napišite funkciju koja uzima tri dimenzije cigle: visinu (a),
// širinu (b) i dubinu (c) i vraća true ako ova cigla može stati u rupu sa širinom
// (w) i visinom (h).

// Primjeri: doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1,2, 1, 1, 1) ➞ true
// doesBrickFit(1,2, 2, 1, 1) ➞ false

// Možete okrenuti ciglu kako god zelite prema rupi.
// Pretpostavljamo da cigla odgovara ako su njene veličine jednake veličini rupe
// (tj. veličina cigle bi trebala biti manja ili jednaka veličini rupe, ne
// striktno manja).
// Ne možete staviti ciglu na koso.
function doesBrickFit(brickHeight,brickWidth,brickDepth,holeWidth,holeHeight){
    let brickDimensions=[];
    let potentialFitHeight = [];
    let potentialFitWidth = [];
    for (let i = 0; i < 3; i++) {
        brickDimensions[i]=arguments[i];
    }

    for (let i = 0; i < 3 ; i++) {
        if(holeHeight >= brickDimensions[i]){
            potentialFitHeight.push(i);
        }     
    }
    for (let i = 0; i < 3 ; i++) {
        if(holeWidth >= brickDimensions[i]){
            potentialFitWidth.push(i);
        }     
    }
    // console.log(potentialFitWidth.length,potentialFitHeight.length);
    if(potentialFitHeight.length>1 && potentialFitWidth.length>1){
        return true;
    }
    return false;
}

console.log(doesBrickFit(1,1,1,1,1));
console.log(doesBrickFit(1,2,1,1,1));
console.log(doesBrickFit(1,2,2,1,1));

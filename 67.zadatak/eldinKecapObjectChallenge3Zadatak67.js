// Kreirajte funkciju koja vraća površinu presjeka dva pravougaonika. Funkcija će dobiti
// dva pravougaonika, svaki sa koordinatama dva svoja suprotna ugla.

function overlappingRectangles(rect1,rect2){
    let topLeftDot1 ={
        x:rect1[0].x,
        y:rect1[1].y}  
    let topRightDot1 = {
        x:rect1[1].x,
        y:rect1[1].y}
    let bottomLeftDot1 = {
        x:rect1[0].x, 
        y:rect1[0].y}
    let bottomRightDot1 = {
        x:rect1[1].x,
        y:rect1[0].y}

    // console.log(topLeftDot1);
    // console.log(topRightDot1);
    // console.log(bottomLeftDot1);
    // console.log(bottomRightDot1);

    let topLeftDot2 ={
        x:rect2[0].x,
        y:rect2[1].y}  
    let topRightDot2 = {
        x:rect2[1].x,
        y:rect2[1].y}
    let bottomLeftDot2 = {
        x:rect2[0].x, 
        y:rect2[0].y}
    let bottomRightDot2 = {
        x:rect2[1].x,
        y:rect2[0].y}
        // console.log(topLeftDot2);
        // console.log(topRightDot2);
        // console.log(bottomLeftDot2);
        // console.log(bottomRightDot2);
        //////////////////////////////////////
////////NAPRAVIO SAM DA RADI ZA SVAKU STRANU  SA KOJE MOZE SJECI JEDAN RECT DRUGOG ALI SVAKI IF KOJI SE NE KORISTI U TOM PRORACUNU SE MORA IZKOMENTARISATI. 
////////NEMAM USLOV DA SE POKRENE SAMO SPECIFICHAN IF.NE RADI AKO SE PRESJECAJU 2 RECTA PO SREDINI
        /////////////////////////////////////
    //donja tacka drugog sijece gornju i desnu stranu prvog
    if(topRightDot1.x>bottomLeftDot2.x&&topRightDot1.y>bottomLeftDot2.y){
        let brojPolja=(topRightDot1.x-bottomLeftDot2.x)*(topRightDot1.y-bottomLeftDot2.y); 
        // console.table(topLeftDot1);
        // console.table(topLeftDot2)
        return brojPolja;
    }
    //gornja lijeva tacka drugog sijece donju i desnu stranu prvog
    if (bottomRightDot1.x>topLeftDot2.x&&bottomRightDot1.y<topLeftDot2.y) {
        let brojPolja=(bottomRightDot1.x-topLeftDot2.x)*(topLeftDot2.y-bottomRightDot1.y); 
        return brojPolja
    }
    //gornja desna tacka sijece lijevu i donju stranu prvog
    if (bottomLeftDot1.x<topRightDot2.x&&bottomLeftDot1.y<topRightDot2.y) {
        let brojPolja=(topRightDot2.x-bottomLeftDot1.x)*(topRightDot2.y-bottomLeftDot1.y); 
        return brojPolja
    }
    //donja desna tacka druge sijece gornju i lijevu stranu prvog 
    if (topLeftDot1.x<bottomRightDot2.x&&topLeftDot1.y>bottomRightDot2.y) {
        let brojPolja=(bottomRightDot2.x-topLeftDot1.x)*(topLeftDot1.y-bottomRightDot2.y); 
        return brojPolja
    }
}

console.log(overlappingRectangles( 
    [{ x: 2, y: 2 }, { x: 4, y: 5 }], [{ x: 1, y: 4 }, { x: 3, y: 6 }] )
)
//     ) ➞ 6

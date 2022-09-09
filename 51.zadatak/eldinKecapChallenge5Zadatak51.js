// 5. Napisati funkciju koja prima kao argument godinu te vraća da li je ta godina prestupna ili ne.

// Primjer poziva funkcije: isPrestupnaGodina(2000);
// Primjer ispisa programa: Godina 2000 je prestupna godina.
function isPrestupnaGodina(god) {
    if (god % 4 === 0) {
        if (god % 100 === 0 && god % 400 === 0) {
            console.log(`Godina ${god} je prestupna godina`);
            return;
        }
        if (god % 100 !== 0) {
            console.log(`Godina ${god} je prestupna godina`);
        } else {
            console.log(`Godina ${god} nije prestupna godina`);
        }
    } else {
        console.log(`Godina ${god} nije prestupna godina`);
    }
}
isPrestupnaGodina(3);

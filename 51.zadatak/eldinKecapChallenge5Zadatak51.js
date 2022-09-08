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
isPrestupnaGodina(1600);

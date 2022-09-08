let broj1 = 4 ;
let broj2 = 1 ;
let broj3 = 3 ;

if (broj1 < broj2 && broj1 < broj3) {

    if (broj2 < broj3) {

        console.log(`Tri cijela broja: ${broj1}, ${broj2} i ${broj3} u rastucem obliku izgledaju ovako: ${broj1}, ${broj2}, ${broj3}. `);

    } else {

        console.log(`Tri cijela broja: ${broj1}, ${broj2} i ${broj3} u rastucem obliku izgledaju ovako: ${broj1}, ${broj3}, ${broj2}. `);
    }

} else if (broj2 < broj1 && broj2 < broj3) {

    if (broj1 < broj3) {

        console.log(`Tri cijela broja: ${broj1}, ${broj2} i ${broj3}  u rastucem obliku izgledaju ovako: ${broj2}, ${broj1}, ${broj3}. `);

    } else {

        console.log(`Tri cijela broja: ${broj1}, ${broj2} i ${broj3} u rastucem obliku izgledaju ovako: ${broj2}, ${broj3}, ${broj1}.`);

    }
} else if (broj3 < broj1 && broj3 < broj2) {

    if (broj1 < broj2) {

        console.log(`Tri cijela broja: ${broj1}, ${broj2} i ${broj3}  u rastucem obliku izgledaju ovako: ${broj3}, ${broj1}, ${broj2}. `);

    } else {

        console.log(`Tri cijela broja: ${broj1}, ${broj2} i ${broj3} u rastucem obliku izgledaju ovako: ${broj3}, ${broj2}, ${broj1}. `);

    }
}

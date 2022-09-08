//Kreirajte funkciju koja uzima niz objekata (namirnica) i izračunava ukupnu cijenu i vraća je kao broj. Objekat ima ime proizvoda, količinu i cijenu. 

function getTotalPrice(groceries) {
    let price = 0;
    for (let i = 0; i < groceries.length; i++) {
        price += groceries[i].quantity*groceries[i].price
    }
    return price;
}
console.log(getTotalPrice([ 
    { product: "Milk", quantity: 3, price: 1.50 }, 
    { product: "Cereals", quantity: 1, price: 2.50 } 
    ]
    ));
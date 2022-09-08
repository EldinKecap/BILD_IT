let tezina = 70;
let visinaCM = 175;
let visinaM = visinaCM / 100;
let bmi = tezina/(visinaM*visinaM);
let rjesenje = `Za visinu od ${visinaCM}cm i tezinu od ${tezina}kg 
vas BMI je ${bmi.toFixed(1)}. I to spada u kategoriju`;

if(bmi < 18.5){

   console.log(rjesenje, "Pothranjenost");

}else if(bmi >= 18 && bmi < 25 ){

    console.log(rjesenje, "Normalan BMI.");

}else if (bmi >= 25 && bmi < 30){

    console.log(rjesenje,"Gojaznost");

}else if(bmi >= 30){

    console.log(rjesenje,"Pretilost");

}

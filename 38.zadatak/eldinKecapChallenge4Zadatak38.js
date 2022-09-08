let brojMinuta = 1000000000;
let brojDana = brojMinuta/1440;
let brojGodina =Math.floor(brojDana/365)  ;

brojDana = brojDana%365;

let ispis = `${brojMinuta} minuta je otprilike ${brojGodina.toFixed(0)} godine i ${brojDana.toFixed(0)} dana.`;

console.log(ispis);
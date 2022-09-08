let r = 5.5;
let h = 12 ;
let p = 2 * r * r * Math.PI + h * 2 * r * Math.PI;
let v = r * r * Math.PI * h;

let rjesenje = `Za cilindar radiusa  ${r} i visine ${h} povrsina iznosi ${p.toFixed(3)} , a zapremina ${v.toFixed(3)}.`;

console.log(rjesenje);
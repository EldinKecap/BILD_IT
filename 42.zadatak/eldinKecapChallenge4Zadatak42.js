let str = `Java is to JavaScript what car is to Carpet.` ;
let i ,count = 0;
for( i = 0 ; i < str.length ; i++ ){
    if(str.charAt(i) === "a" || str.charAt(i) === "A"){
        count++;
    }

}
// for(let a of str ){
//     if(a === 'a' ) i++ ;
// }
console.log(`A se pojavljuje : ${ count }`);
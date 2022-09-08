let str = `Before s.` ; 
let i ,count = 0;
for( i = 0; i < str.length ; i++){
    if(str.charAt(i)===" "){
              
        continue;
    }
    count++;
}

// for( let a of str ){
//     if( a === " "){
//         continue;
//     }
    
//     i++;
// }
console.log( count ) ;
function sortedOutput (a,b,c){
   let arr = [a,b,c];
   arr.sort((f,g)=>{return f-g;});
   console.log(`Sortirani brojevi: ${arr.toString()}`);
}

sortedOutput(17,3,42);

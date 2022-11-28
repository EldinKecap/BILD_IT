function sumOddFib(num) {
   const fib = [1,1];
   let lastOdd = 1;
   let currEl;
   for (let i = 2; (currEl = fib[i-1]+fib[i-2]) <= num; i++) {
      if (currEl % 2 === 1) {
         lastOdd = currEl
      }
      fib.push(currEl);
   }
   if(lastOdd === 1 )return 2;
   return lastOdd + sumOddFib(lastOdd-1);
}
console.log(sumOddFib(21));
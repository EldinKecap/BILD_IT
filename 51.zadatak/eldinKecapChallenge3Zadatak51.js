let palindromePrimeObj = {
    palindromePrimeArr: [],
    fillPalindromePrimeArr: function () {
        let brojac = 0;
        let num = 0;
        while (brojac < 100) {
            if (isPrime(num)) {
                if (isPalindrome(num)) {
                    this.palindromePrimeArr[brojac] = num;
                    brojac++;
                }
            }
            num++;
        }
    },
    printPalindromPrimeArr: function(){
        for(let i = 0 ; i < 100 ; i += 10){
            console.log(this.palindromePrimeArr[i],this.palindromePrimeArr[i+1],this.palindromePrimeArr[i+2],this.palindromePrimeArr[i+3],this.palindromePrimeArr[i+4],this.palindromePrimeArr[i+5],this.palindromePrimeArr[i+6],this.palindromePrimeArr[i+7],this.palindromePrimeArr[i+8],this.palindromePrimeArr[i+9]);
        }
    }
}

function isPrime(prime) {
    if (prime === 1 || prime === 2) {
        return true;
    }
    for (let i = 2; i <= prime; i++) {
        if (prime % i === 0 && i !== prime) {
            break;
        } else if (i === prime) {
            return true;
        }
    }
    return false;
}

// console.log(isPrime(96));

function isPalindrome(num) {
    let temp = String(num);
    if (temp[0] === temp[temp.length - 1] && Number(temp) > 10) {
        return true;
    }
    return false;
}

// console.log(isPalindrome(55));

// function palindromePrimeNum() {
//     let brojac = 0;
//     let num = 0;
//     let arr = [];

//     while (brojac < 100) {
//         if (isPrime(num)) {
//             if (isPalindrome(num)) {
//                 arr[brojac] = num;
//                 brojac++;
//             }
//         }
//         num++;
//     }
//     return arr;
// }

// console.log(palindromePrimeNum());

palindromePrimeObj.fillPalindromePrimeArr();
palindromePrimeObj.printPalindromPrimeArr();

// console.log(palindromePrimeObj.palindromePrimeArr);
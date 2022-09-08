let numbers = [ 'jedan' , 'dva' , 'tri' , 'cetiri' , 'pet' , 'sest' , 'sedam' , 'osam' , 'devet' , 'deset' ];

// for(let a of numbers){
//     console.log(a);
// }

for(let i = 0 ; i < numbers.length ; i++){
    console.log(`${i+1} : ${numbers[i]}`);
}
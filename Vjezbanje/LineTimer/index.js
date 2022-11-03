function LineTimer(timerCheck) {
    let line = document.querySelector('hr');
    let start = 100 ;
    let sec = 0; 
       console.log(timerCheck);
   
       let myInterval = setInterval(()=>{
           sec++;
           console.log(sec);
       },1000)
   
       let timer = setInterval(() => {
           start-=0.25;
           line.style.width = start + 'vw' 
           if(start == 0) clearInterval(timer);
           // console.log('asfd');
       }, 37.5);
       button.addEventListener('click',()=>{
           clearInterval(timer);
           clearInterval(myInterval);
           line.style.width = '100vw';
       },{once:true})
       
   }
   
   let timerCheck = false
   let button = document.querySelector('button');
   button.addEventListener('click',()=>{
           LineTimer(timerCheck);
           timerCheck = true;
   })
   
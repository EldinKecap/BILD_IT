// Napisati funkciju koja racuna broj dana izmedju dva datuma. 
// Datum u funkciju prosljedjujete kao string u formatu DD.MM.YYYY. 
function countDays(date1,date2){
    let days = 0;
    // let maxDays = 0;
    date1 = date1.split('.');
    date2 = date2.split('.');
    let date1Days = new Date(`${date1[1]}/${date1[0]}/${date1[2]}`)
    let date2Days = new Date(`${date2[1]}/${date2[0]}/${date2[2]}`)
    let razlika = date2Days.getTime()-date1Days.getTime()
    days = Math.floor(razlika/(1000*60*60*24)); 
    console.log(days)
    // for (let i = 0; i < 3; i++) {
    //     date1[i]=Number(date1[i]);
    //     date2[i]=Number(date2[i]);     
    // }
    // console.log(date2);
    // while(true){
        
    //     if (date1[1]%2!=0&&date1[1]<8) {
    //         maxDays=31
    //         date1[0]++;
    //         if (date1[0]==31) {
    //             date1[0]=1;
    //             date1[1]++;
    //         }
    //     }
    //     if (date1[1]%2==0&&date1[1]>=8) {
    //         maxDays=31
    //         date1[0]++;
    //         if (date1[0]==31) {
    //             date1[0]=1;
    //             date1[1]++;
    //             if(date1[1]==12){
    //                 date1[1]=1
    //                 date1[2]++;
    //             }
    //         }
    //     }
    //     if (date1[1]==2) {
    //         if (date1[2]%4==0&&date1[2]%100==0&&date1[2]%400==0||date1[2]%4==0) {
    //             maxDays = 29;
    //             date1[0]++;
    //         if (date1[0]==29) {
    //             date1[0]=1;
    //             date1[1]++;
    //         }
    //         continue;
    //     }else{
    //         maxDays = 28;
    //         date1[0]++;
    //     if (date1[0]==28) {
    //         date1[0]=1;
    //         date1[1]++;
    //     }
    //     continue;
    //     }
    //     }
    //     if((date1[1]%2==0&&date1[1]<7)||date1[1]==9||date1[1]==11){
    //         maxDays = 30;
    //         date1[0]++;
    //         if(date1[0]==30){
    //             date1[0]=1;
    //             date1[1]++;
    //         }
    //     }
    //     if(date1[0]==date2[0]&&date1[1]==date2[1]&&date1[2]==date2[2]){
    //         break;
    //     }
    //     days++
    //     console.log(days)
    // }
}

countDays('19.09.2022', '17.05.2023');
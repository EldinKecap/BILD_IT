// 1. Jake je osoba od navike. On uvijek ima dorucak u 7:00 ujutro, rucak u 12:00 sati i vecera u 19:00 sati. 
// Kreirajte funkciju koja uzima trenutno vrijeme kao string i racuna vrijeme do Jakeovog sljedeceg obroka. 
// Predstavite ovo kao niz od dva elementa koji predstavljaju sate i minute.



// Primjeri: 
// timeToEat("14:00") ➞ [5, 0] 
// // 5 sati do sljedeceg obroka, vecera



// timeToEat("5:50") ➞ [1, 10] 
// // 1 sat i 10 minuta do sljedeceg obroka, dorucak
function timeToEat(str){
    let dorucak = 7 ;
    let rucak = 12 ; 
    let vecera = 19 ;
    let timeArr = str.split(':');
    // console.log(timeArr);    
    if(timeArr[0]==rucak&&timeArr[1]==0||timeArr[0]<dorucak){
        timeArr[0]= dorucak - timeArr[0]- 1
        timeArr[1]= 60 - timeArr[1];
        if(timeArr[1] == 60){
            timeArr[0]++;
            timeArr[1]=0;
        }
        return timeArr;
    }else if(timeArr[0]==rucak&&timeArr[1]==0||timeArr[0]<rucak){
        timeArr[0]= rucak - timeArr[0]- 1
        timeArr[1]= 60 - timeArr[1];
        if(timeArr[1] == 60){
            timeArr[0]++;
            timeArr[1]=0;
        }
        return timeArr;
    }else if(timeArr[0]==vecera&&timeArr[1]==0||timeArr[0]<vecera){
        timeArr[0]= vecera - timeArr[0]- 1
        timeArr[1]= 60 - timeArr[1];
        if(timeArr[1] == 60){
            timeArr[0]++;
            timeArr[1]=0;
        }
        return timeArr;
    }else if(timeArr[0]>=vecera){
        timeArr[0]= 24 - timeArr[0] + dorucak-1;
        timeArr[1]= 60 - timeArr[1];
        if(timeArr[1] == 60){
            timeArr[0]++;
            timeArr[1]=0;
        }
        return timeArr;
    }
}
console.log(timeToEat('5:50'));
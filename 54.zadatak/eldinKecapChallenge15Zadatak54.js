// Imamo robota koji hoda po 2D koordinatnoj mreži sa osama x i y. Počinje na (0, 0) tj x = 0 i y = 0 i okrenut je prema sjeveru. Nakon svakog kretanja, robot se rotira za 90 stepeni u smjeru kazaljke na satu. S obzirom na količinu koju je robot pomjerio svaki put, morate izračunati konačnu poziciju robota. Ilustracije radi, ako se robotu daju pokreti 20, 30, 10, 40 onda će se kretati: 20 koraka sjeverno, sada na (0, 20) 30 koraka istočno, sada na (30, 20) 10 koraka južno. sada u (30, 10) 40 koraka zapadno, sada na (-10, 10) ...i završit će na koordinatama (-10, 10).
function kretanjeRobota(...args){
    let x = 0;
    let y = 0;
    let ispis = [...args];
    // y+=sjever;
    // x+=istok;
    // y-=jug;
    // x-=zapad;
    let br = 0;
    for (let i = 0; i < arguments.length; i++) {
        br++;
        switch(br){
            case 1:
                y+=arguments[i];
                break;
            case 2:
                x+=arguments[i];
                break;
            case 3:
                y-=arguments[i];
                break;
            case 4:
                x-=arguments[i];
                br=0;
                break
        }
    
        
    }
    console.log(`Za koordinate ${ispis} robot ce se naci na koordinatama ${x}, ${y}`);
}
kretanjeRobota(20,30,10,40,10,23);
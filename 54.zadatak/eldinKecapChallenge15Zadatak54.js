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
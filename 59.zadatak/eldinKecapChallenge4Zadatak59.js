// 4.      Napišite funkciju koji prima broj kao argument i ubacuje crtice (-)
// između svaka dva parna broja. Na primjer, ako je proslijedjeni broj 225468
// ispis bi trebao biti 2-254-6-8.
function addDashToEvens(num){
    let str = String(num);
    // console.log(str);
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(Number(str[i]));
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2===0&&arr[i+1]%2===0){
            arr.splice(i+1,1,`-${arr[i+1]}`)
            // console.log(arr);
        }
    }
    console.log(String(arr).replace(/,/g,''));
}
addDashToEvens(2232134683222);

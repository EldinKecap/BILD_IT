// Napisati funkciju koja provjerava jednakost dva objekta. Dva objekta su jednaka
// ukoliko su vrijednosti svih propertija oba objekta jednake.
function areObjectEqual(obj1,obj2) {
    let arr1=[];
    for (const it in obj1) {
        arr1.push(obj1[it]);
    }
    let arr2=[];
    for (const it in obj2) {
        arr2.push(obj2[it]);
    }
    if(arr1.length!=arr2.length){
        return false;
    }
    let i = 0;
    while (i!=arr1.length) {
        if(arr1[i]!=arr2[i])return false;
        i++;
    }
    return true;
}
console.log(areObjectEqual({bla:12,bleh:2},{bla:12,blem:2}));

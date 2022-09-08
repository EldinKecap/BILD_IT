// 10. Napisati funkciju koja provjerava da li je password dovoljno jak. Da bi password bio jak mora zadovoljiti sljedeca pravila:
// - Password mora imati najmanje 8 a najvise 20 karaktera
// - Password mora imati barem jednom malo slovo, barem jedno veliko slovo i barem jedan broj
// - Password ne smije imati vise od 2 uzastopna karaktera koji se ponavlja. Npr: password ne smije sadrzavati aaa 
function checkPass(password){
    if(password.length<8 || password.length>20){
        return 'Password mora imati najmanje 8 a najvise 20 karaktera';
    }
    if(!(/[a-z]/.test(password) && /[A-Z]/.test(password)&&/\d/.test(password))){
        return 'Password mora sadrziti veliko slovo, malo slovo i broj';
    }
    for (let i = 0; i < password.length; i++) {
        if(password[i] === password[i+1] && password[i] === password[i+2]){
            return 'Password ne smije imati vise od 2 uzastopna karaktera koji se ponavljaju.';
        }
    }
    return 'Password je uredu';
}
let str = 'Odl1c4nPassw0rd'
console.log(checkPass(str));
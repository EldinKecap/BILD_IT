// let fs = require('fs');
// let allNames = fs.readFileSync('./employees.txt','utf8').split('\r\n');
let allNames = `Rosa Rose
Sage Turner
Terrence Blackwell
Gisselle Bauer
Enzo Mcdaniel
Gloria Jones
Kennedy Shields
Bradyn Larsen
India Rush
June Everett
Jamison Haney
Hugo Castro
Rohan Cox
Averie Hart
Grayson Hammond
Patricia Copeland
Brian Dean
Muhammad Horton
Noelle Lucas
Roger Coffey
Sam Farmer
Charlize Bush
Tyrell Howard
Kylie Melendez
Ruben Bailey
Emilee Page
Mattie Schaefer
Stephany Pope
Mireya Montoya
Ashlee Dominguez
Gerardo Nelson
Evan Juarez
Braylen Byrd
Chad Calhoun
Avery Day
Cora Liu
Colt Malone
Maritza Copeland
Raelynn Hayes
Ibrahim Morales
Parker Obrien
Nathanial Osborne
Krista Owen
Aliana Mendoza
Charlie Beck
Dallas Maxwell
Gavyn Chavez
Stanley Golden
Keely Stein
Raphael Hunt
Carmelo Ray
Patience Khan
Nicole Cantu
Geovanni Beard
Savion Aguirre
Karma Cross
Selah Woods
Chanel Shah
Walter Delacruz
Jessie Mcmillan
Antoine Castillo
Emmy Watson
Camryn Proctor
Mariah Hammond
Alexzander Riley
Jovani Bullock
Moriah Wilkinson
Yareli Durham
Allyson Alexander
Anton Phillips
Alexandra Travis
Isai Adams
Payton Mcmahon
Shaniya Estes
Felipe Dickson
Marisa Duncan
Douglas Patterson
Kymani Stewart
Miya Fritz
Irvin Villarreal
Julian Middleton
Clara Mooney
Henry Guerrero
Alec Davis
Irene Mckinney
Kamila Burns
Waylon Callahan
Roman Mitchell
Mikayla Costa
Gauge Mckee
Haven Weeks
Georgia Harrell
Ruby Benitez
Krystal Gates
Marquis Dorsey
Marlon Quinn
Braylen Zimmerman
Chaya Austin
Kaylie Terry
Melody Hill
`.split('\n');
allNames.length = 100;
// console.log(allNames);
let BazaPodataka = {
    BANKS:[],
    PEOPLE:[],
    addPeople(person){
        this.PEOPLE.push(person);
    },
    addBank(bank){
        this.BANKS.push(bank);
    }
}
function createBank(ID,name,location) {
    return{
        ID,
        name,
        location,
        accounts : [],
        transactions:[],
        NEXTACCID:1,
        NEXTTRANSACTIONID:1,
        createAccount(person){
            let account = Account(this.NEXTACCID,person.firstName+' '+person.lastName,this.name);
            this.accounts.push(account);
            this.NEXTACCID++;
        },
        deleteAccount(ID){
           for (let i = 0; i < this.accounts.length; i++) {
               if(ID == this.accounts[i].ID){
                   this.accounts.splice(i,1);
               }
           }
        },
        executeTransaction(transaction){
            transaction.ID = this.NEXTTRANSACTIONID;
            this.NEXTTRANSACTIONID++;
            switch (transaction.type) {
                case 'DEPOSIT':
                    for (let i = 0; i < this.accounts.length; i++) {
                       if(this.accounts[i].ID===transaction.account.ID){
                           this.accounts[i].deposit(transaction.amount)
                        //    console.log(transaction);
                           this.transactions.push(transaction);
                           return this.accounts[i] 
                       }
                    }
                    break;
                    case 'WITHDRAW':
                        for (let i = 0; i < this.accounts.length; i++) {
                            if(this.accounts[i].ID===transaction.account.ID){
                                this.accounts[i].withdraw(transaction.amount)
                                this.transactions.push(transaction);
                                return this.accounts[i] 
                            }
                         }
                    break;
                case 'BALANCE_CHECK':
                    for (let i = 0; i < this.accounts.length; i++) {
                        transaction.amount = 0;
                        if(this.accounts[i].ID===transaction.account.ID){
                            this.accounts[i].checkBalance(transaction.amount)
                            this.transactions.push(transaction); 
                            // console.log(transaction,this.transactions)
                            return this.accounts[i]
                        }
                     }
                    break;
            
                default:
                    this.transactions.push(transaction);
                    console.log('Neuspjela transakcija explodiro automat')
                    break;
            }
        },
        printAccAndTransactions(accID){
            for (let i = 0; i < this.accounts.length; i++) {
                const element = this.accounts[i].ID;
                if (element === accID) {
                    console.table(this.accounts[i]);
                    let accountTransactions=[];
                    for (let i = 0; i < this.transactions.length; i++) {
                        const element = this.transactions[i].account.ID;
                        if (element===accID) {
                          accountTransactions.push(this.transactions[i]);  
                        }
                    }
                    console.table(accountTransactions);
                }
                
            }
        }
        
    }
}

function createPerson(ID,firstName,lastName,JMBG) {
    return {
        ID,
        firstName,
        lastName,
        JMBG,
    }
}

function Account(ID,owner,bank) {
    return{
        ID,
        owner,
        bank,
        balance : 0,
        deposit(Input){
            this.balance+=Input;
        },
        withdraw(Input){
            if (this.balance - Input >= 0) {
                this.balance -= Input;
                console.log(`Uspjesno ste podigli ${Input}`);        
            }else{
                console.log(`Nemate dovoljno sredstava na racunu`);
            }
        },
        checkBalance(){
            console.log(`Iznos na vasem racunu je ${this.balance}`);
        }
    }
}

function createTransaction(account,person,amount = 0,typeA) {
    return{
        ID: null,
        account,
        person,
        amount,
        type: checkType(typeA),
        }
}    


function checkType(typeInput){
    // console.log(typeInput);
    switch (typeInput) {
        case 'DEPOSIT':
            return 'DEPOSIT'
            break;
            case 'WITHDRAW':
                return 'WITHDRAW'
            break;
        case 'BALANCE_CHECK':
            return 'BALANCE_CHECK'
            break;
    
        default:
            return 'Greska. Pogresan tip'
            break;
    }
}

function generateJMBG() {
    let JMBG = '';
        for (let j = 0; j < 13; j++) {
            JMBG+=Math.floor(Math.random()*10);
        }
        return JMBG;
}

function randomAccCreator(bank,people,numOfAcc) {
    let i = 0;
    while(i!=numOfAcc){
            let random = Math.floor(Math.random()*BazaPodataka.PEOPLE.length);
            // console.log(random);
            bank.createAccount(people[random]);
            i++;
        }
}

function tenTransactionsPerAcc(banks) {
    for (let i = 0; i < banks.length; i++) {
        for (let j = 0; j < banks[i].accounts.length; j++) {
            for (let k = 0; k < 10; k++) {
                let money = Math.floor(Math.random()*(2000-500)+500)
                let transactionTypes = ['DEPOSIT','WITHDRAW','BALANCE_CHECK'];
                let randTransactionType = Math.floor(Math.random()*3);
                let transaction = createTransaction(banks[i].accounts[j],banks[i].accounts[j].owner,money,transactionTypes[randTransactionType]);
                banks[i].executeTransaction(transaction)
            }
        }        
    }
}

//Kreiranje ljudi i dodavanje u Bazu Podataka
skip:
for (let i = 0; i < allNames.length; i++) {
    // console.log(allNames);
    const element = allNames[i].split(' ');
    let person = createPerson(i+1,element[0],element[1],generateJMBG());       
        for (let i = 0; i < BazaPodataka.PEOPLE.length; i++) {
            if (person.JMBG === BazaPodataka.PEOPLE[i].JMBG) {
                i--;
                continue skip;
            }
        }
        BazaPodataka.addPeople(person);    
    
}


// console.log(BazaPodataka.PEOPLE);
let bankOFAmerica = createBank(1,'BankOfAmerica','New York');
randomAccCreator(bankOFAmerica,BazaPodataka.PEOPLE,Math.floor(BazaPodataka.PEOPLE.length*0.4));
BazaPodataka.addBank(bankOFAmerica);
let bankOfTuzla = createBank(2,'BankOfTuzla','Tuzla');
randomAccCreator(bankOfTuzla,BazaPodataka.PEOPLE,Math.floor(BazaPodataka.PEOPLE.length*0.4));
BazaPodataka.addBank(bankOfTuzla);
let bankOfBoston = createBank(3,'BankOfBoston','Boston');
randomAccCreator(bankOfBoston,BazaPodataka.PEOPLE,Math.floor(BazaPodataka.PEOPLE.length*0.2));
BazaPodataka.addBank(bankOfBoston);

tenTransactionsPerAcc(BazaPodataka.BANKS);

BazaPodataka.BANKS[1].printAccAndTransactions(3);
// console.table(BazaPodataka.BANKS)
///////////////////////////////////////////////////////////////////////////////
let ime = document.getElementById('ime');
let prezime = document.getElementById('prezime');
let jmbg = document.getElementById('jmbg');
let form = document.getElementById('form');
let errorElement = document.getElementById('error');
let persona = JSON.parse(localStorage.getItem('Baza'));
if (persona == null) {
    persona=[1]
}
function takeInput(){
    // event.preventDefault();    
    let select = document.getElementById('banka');
    let bankIndex = select.options[select.selectedIndex].value;
    let person = createPerson(BazaPodataka.PEOPLE.length,ime.value,prezime.value,jmbg.value);
    BazaPodataka.BANKS[bankIndex].createAccount(person);
    console.table(BazaPodataka.BANKS[bankIndex].accounts);
    let arr=[...persona];
    arr.push(person);
    if(arr[0]==1){
        arr.shift();
        persona.shift();
    }
    console.log(arr)
    localStorage.setItem('Baza',JSON.stringify(arr));
    localStorage.setItem('Index',JSON.stringify(bankIndex));
    // console.log(localStorage);
}
// //  localStorage.removeItem('Baza');
 console.table('persona',persona);
    let bankIndex = JSON.parse(localStorage.getItem('Index'));
    for (let i = 1; i < persona.length; i++) {
        BazaPodataka.BANKS[bankIndex].createAccount(persona[i]);        
    }
//     localStorage.setItem('Baza',JSON.stringify(persona));

    console.table(BazaPodataka.BANKS[bankIndex].accounts)   
    // localStorage.clear();
form.addEventListener('submit',(e)=>{
    let messages = [];
    if (ime.value === '' || ime.value == null || /[0-9]|\s/g.test(ime.value)) {
        messages.push('Ime ne smije biti prazno, sadrzavati broj ili razmak')
    }
    if (prezime.value === '' || prezime.value == null || /[0-9]|\s/g.test(prezime.value)) {
        messages.push('Prezime ne smije biti prazno, sadrzavati broj ili razmak')
    }
    if (jmbg.value === '' || jmbg.value == null || !/[0-9]/g.test(jmbg.value) || jmbg.value.length != 13) {
        messages.push('JMBG polje ne smije biti prazno, mora sadrzavati 13 cifara')
    }
    if (messages.length > 0) {
        console.log(e.preventDefault());
        errorElement.innerText = messages.join(', ');
    }
})
let fs = require('fs');
let allNames = fs.readFileSync('./employees.txt','utf8').split('\r\n');
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
console.table(BazaPodataka.BANKS)
// console.table(bankOFAmerica.accounts)
// console.table(bankOfTuzla.accounts)
// console.table(bankOfBoston.accounts)

// let transaction = createTransaction(bankOFAmerica.accounts[1],bankOFAmerica.accounts[1].owner,1233,'DEPOSIT');
// let transaction2 = createTransaction(bankOFAmerica.accounts[0],bankOFAmerica.accounts[0].owner,1233,'BALANCE_CHECK');

// bankOFAmerica.executeTransaction(transaction)
// bankOFAmerica.executeTransaction(transaction2)
// console.table(bankOFAmerica.transactions)
//console.table(transaction2)//Ovdje sam stao sad transakcije naguro u banku da prati u transakcije array

// console.log(transaction)

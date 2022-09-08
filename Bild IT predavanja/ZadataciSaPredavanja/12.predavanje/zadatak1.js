const fs = require('fs');
let allNames = fs.readFileSync('employees.txt','utf8');
allNames = allNames.split('\n');
// console.log(allNames);
function createCompany(ID,name,location,employees){
    this.ID = ID;
    this.name = name;
    this.location = location;
    this.employees = employees;
    this.numberOfEmployees = this.employees.length;
    this.hireEmployee = function (unemployedArr,numOfPeople){
        for (let i = 0; i < numOfPeople; i++) {
            let random = Math.floor(Math.random()*(unemployedArr.length-1)+1)
            unemployedArr[random].isEmployed = true;
            unemployedArr[random].salary = 100*Math.floor(Math.random()*(30-10)+10) ;
            unemployedArr[random].companyID = this.ID;
            this.employees.push(unemployedArr[random]); 
            unemployedArr.splice(random,1);         
        }
        this.numberOfEmployees = this.employees.length;
    } ;
    this.fireEmployee = function(employeeID){
        for (let i = 0; i < this.employees.length; i++) {
            if(employeeID === this.employees[i].ID){
                this.employees[i].isEmployed = false;
                this.employees[i].salary = null;
                this.employees[i].companyID = null;
                PEOPLE.push(this.employees[i]);
                this.employees.splice(i,1);
                
            }            
        }
        this.numberOfEmployees = this.employees.length;
    };
    this.averagePay = function(){
        let sum = 0 ;
        for (let i = 0; i < this.employees.length; i++) {
           sum += this.employees[i].salary ; 
        }
        return (sum / this.employees.length).toFixed(2);
    };
}
function createPerson(ID,firstName,lastName,isEmployed,salary,companyID){
    this.ID = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isEmployed = isEmployed;
    this.salary = salary;
    this.companyID = companyID;
}
function fillPeople(arr,names) {
    for (let i = 0; i < names.length; i++) {
        let fullName = names[i].split(' ');
        // console.log(fullName);
        let person1 = new createPerson(i+1,fullName[0],fullName[1],false,null,null);
        arr.push(person1);
    }
}
function fireLowIncomePeople(company){
        for (let i = 0; i < company.employees.length; i++) {
            if (company.employees[i].salary<1500) {
                company.fireEmployee(company.employees[i].ID);
            }          
        }
}
function unemploymentRate(){
    let unemployedProcentage = (100*PEOPLE.length/numberOfPeopleCapableOfWork).toFixed(2);
    console.log(`Procenat nezaposlenih je ${unemployedProcentage} % od ${numberOfPeopleCapableOfWork} ljudi sposobnih za rad zaposleno je ${numberOfPeopleCapableOfWork-PEOPLE.length} a nezaposleno ${PEOPLE.length}.`);
}
function hireWhereLowestAvgPay(companies) {
    let min = Infinity ;
    let index = 0;
    for (let i = 0; i < companies.length; i++) {
        if (min<companies[i].averagePay()) {
            min=companies[i].averagePay();
            index = i;
        }
    }
    companies[index].hireEmployee(PEOPLE,50);
}
function printCompanies(companies) {
    for (let i = 0; i < companies.length; i++) {
        console.log(companies[i].name,'kompanija ima ',companies[i].numberOfEmployees,' zaposlenih i prosjecnu platu od',companies[i].averagePay());
        // console.table(company.employees);//UNCOMMENT FOR TABLE PRINTING    
    }
}
let COMPANIES = [];
let PEOPLE = [];
//KREIRAO KOMPANIJE
let anarchyCorp = new createCompany(1,'Anarchy Corp','Tuzla',[]);
let evilCorp = new createCompany(2,'Evil Corp','London',[]);
let umbrellaCorp = new createCompany(3,'Umbrella Corp','Racoon City',[]);
COMPANIES.push(anarchyCorp);
COMPANIES.push(evilCorp);
COMPANIES.push(umbrellaCorp);
// POPUNIO PEOPLE NIZ SA OBJEKTIMA PERSON
fillPeople(PEOPLE,allNames);
let numberOfPeopleCapableOfWork = PEOPLE.length;
//ZAPOSLJAVANJE RADNIKA
COMPANIES[0].hireEmployee(PEOPLE,Math.floor(PEOPLE.length*0.4));
COMPANIES[1].hireEmployee(PEOPLE,Math.floor(PEOPLE.length*0.33));
COMPANIES[2].hireEmployee(PEOPLE,Math.floor(PEOPLE.length*0.5));
//PROCENAT NEZAPOSLENIH
unemploymentRate();

//OTPUSTANJE LJUDI SA PLATOM MANJOM OD 1500
fireLowIncomePeople(COMPANIES[0]);
fireLowIncomePeople(COMPANIES[1]);
fireLowIncomePeople(COMPANIES[2]);
//PROCENATA NEZAPOSLENIH POSLIJE OTKAZA
unemploymentRate();
//ZAPOSLJAVANJE KOD KOMPANIJE SA NAJMANJOM PLATOM
hireWhereLowestAvgPay(COMPANIES);
//PROCENAT NEZAPOSLENIH NAKON PONOVNOG ZAPOSLJAVANJA
unemploymentRate();
//PRINTANJE KOMPANIJA
printCompanies(COMPANIES);
console.log('Broj zaposlenih je ',numberOfPeopleCapableOfWork-PEOPLE.length,' prosjecna plata je ',((Number(anarchyCorp.averagePay())+Number(umbrellaCorp.averagePay())+Number(umbrellaCorp.averagePay()))/3).toFixed(2));
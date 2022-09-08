class Person {
    #name;
    setName(name){
        this.#name = name;
     }
     getName(){
        return this.#name
     }
}
let person = new Person();
person.setName('sdfasd')
console.log(person['#name'])
console.log(person.getName())

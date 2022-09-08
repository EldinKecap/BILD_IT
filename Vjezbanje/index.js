function createPerson(sIdentity) {
    var oPerson = new Function('console.log(arguments.callee.identity);');
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson('John Smith');

john();
console.log(john);

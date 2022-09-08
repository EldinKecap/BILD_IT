class User {

    name; 
    userName; 
    #password; 

    constructor(name, userName, password) {
        this.name = name; 
        this.userName = userName;
        this.#password = password; 
    }

    login(userName, password){

        if (userName === this.userName && password === this.#password) {
            console.log('User logged in succesfully');
          } else {
            console.log('User authentication failed!!');
          }

    }

     setUserName(newUsername){
      if(newUsername.length < 3){
        console.log('Username must be at least 3 characters long')
      }
      else {
        this.userName = newUsername;
      }
    }

     getUserName(){
      return this.userName;
    }
}

class Admin extends User {

  age; 

  constructor(name, userName, password, age) {
    super(name, userName, password);
    this.age = age;
  }

  removeUser(username){
    console.log('User ' + username + ' removed succesfully');
  }
}

let user = new User('Dejan', 'dejan', 'password'); 
console.log('*** Regular user *** '); 
console.log(user);

let admin = new Admin('Admin', 'nimda', 'password', 35);
console.log('*** Admin user *** '); 
console.log(admin)

admin.removeUser('dejan');


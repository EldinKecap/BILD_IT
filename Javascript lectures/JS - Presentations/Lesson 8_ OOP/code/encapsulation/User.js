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

     setPassword(newPassword){
      if(newPassword.length < 3){
        console.log('Password must be at least 3 characters long')
      }
      else{
        this.#password = newPassword;
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
}; 


let user = new User('Dejan', 'dejan', 'password'); 
console.log(user);
console.log(' *** *** ***'); 
user.login('dejan', 'password'); 
console.log(' *** *** ***'); 

user.setUserName('johnny')
user.setPassword('password'); 
console.log(user);

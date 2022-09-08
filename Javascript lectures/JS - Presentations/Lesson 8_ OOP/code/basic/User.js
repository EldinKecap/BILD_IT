class User {

    name; 
    userName; 
    password; 

    // constructor(name, userName, password) {
    //     this.name = name; 
    //     this.userName = userName;
    //     this.password = password; 
    // }

    login(userName, password){

        if (userName === this.userName && password === this.password) {
            console.log('User logged in succesfully');
          } else {
            console.log('User authentication failed!!');
          }

    }
}; 

const user = new User();
user.name = 'Dejan'; 
user.userName = 'dejan';
user.password = 'password'; 

// const user = new User('Dejan', 'dejan', 'password'); 

user.login('dejan', 'password'); 
user.login('password', 'password'); 
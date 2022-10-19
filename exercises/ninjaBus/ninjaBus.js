// var userOne = {
// email: 'hector@ninja.com',
// name: 'hector',
// login() {
//     console.log(this.email, `has logged in`);
// },
// logout(){
//     console.log(this.email, `has logged out`);
// },

// };

// class User {
//     constructor(email, name){
//         this.email = email;
//             this.name = name;
//             this.score = 0;
//     }
//     login(){
//         console.log(this.email, `just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(this.email, `just logged out`);
//         return this;
//     }
//     updateScore(){
// this.score++;
// console.log(this.email, `Score is now`, this.score );
// return this;
//     }
    
// }

// class Admin extends User {
// deleteuser(user){
// users = users.filter(u => { 
// return u.email != user.email; 
// })
// }
// }
// let userOne = new User('hdgya@ninja.com', 'bob');
// let userTwo = new User('yololoa@ninja.com', 'dabb');
// let admin = new Admin('dhaukh@ninja.com', 'snoop');
// let users = [userOne, userTwo, admin];
// admin.deleteuser(userOne);
// console.log(users);

function User(email, name){
this.email = email;
this.name = name;
this.online = false; 

}
User.prototype.login = function(){
    this.online = true;
    console.long(this.email, `has logged in`);
}
User.prototype.logout = function(){
    this.online = true;
    console.long(this.email, `has logged out`);
}
function Admin(...args){
User.apply(this, args);
this.role = `super admin`;
} 
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
users = users.filter(user => {
    return user.email != u.email;
});
};


let userOne = new User('hdgya@ninja.com', 'bob');
 let userTwo = new User('yololoa@ninja.com', 'dabb');
 let admin = new Admin('gang@ninja.com', 'gang agng');
 let users = ['userOne', 'userTwo', 'admin'];
console.log(admin);
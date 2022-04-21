const user={
    name: "Name",
    username:"Username",
    phonenumber: 123445,
    email: "lalalalala@lalal.com",
    autoLogin:"yes",
    isAutoLogON: function(){
         if (this.autoLogin=="yes") return `Auto LogIn is Active`
    }
}

console.log(user)
console.log(user.isAutoLogON())
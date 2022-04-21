const user={
    name: "Username",
    phonenumber: 123445,
    email: "lalalalala@lalal.com",
    monitorfunction:"yes",
    isMonitorActive: function(){
         if (this.monitorfunction=="yes") return `La función de monitoreo de contenido está activa`
    }
}

console.log(user)
console.log(user.isMonitorActive())
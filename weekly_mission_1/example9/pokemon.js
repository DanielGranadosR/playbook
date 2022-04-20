class Pokemon {
    constructor(name) {
      
      this.name = name 
    }
  
  
    sayHello () {
      console.log(`Mi Pokemon: ${this.name} te saluda` )
    }
  
    // método
    sayMessage (message) {
      console.log(`Mi Pokemon: ${this.name} dice: ${message}`)
    }
  }
  

module.exports=Pokemon
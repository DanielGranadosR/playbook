const UserService = require("./../services/UserService")

class Userview {
    static createUser (payload){
        if(payload == null){
            console.log("Error es Null")
            return {error:"El payload no existe"}
        } else if (typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id==='number'){
            return UserService.create(payload.id, payload.username, payload.name)
        }else{
            return {error: "Valores no válidos"}
        }
    }
}

module.exports = Userview
     

const User = require('./../models/User')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")

    }
    static getInfo(list){
        const newlist = Object.values(list)
        return newlist
            
        }

    static updateUserName(newobject){
        newobject.name = "newusername"
        return newobject
    }
 
}



module.exports = UserService
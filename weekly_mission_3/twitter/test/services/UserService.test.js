const UserService = require('./../../app/services/UserService')

describe("Test for UserService",()=>{
    
    test("1. Create a new User using UserService",()=>{
        const user = UserService.create(1,"username","Name")
        expect(user.username).toBe("username")
        expect(user.name).toBe("Name")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })

    test("2. Create a new static method wich returns a list",()=>{
        const user = UserService.create(1,"username","Name")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("username")
        expect(userInfoList[2]).toBe("Name")
        expect(userInfoList[3]).toBe("Sin bio")

    })

    test ("3. Create a new static method that updates the name",()=>{
        const user = UserService.create(1,"username","name")
        UserService.updateUserName(user,"newusername")
        expect(user.name).toBe("newusername")
    })
})


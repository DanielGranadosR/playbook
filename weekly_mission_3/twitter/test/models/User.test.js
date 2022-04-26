const User = require("./../../app/models/User")

describe("Unit Tests for User class",()=>{
    test("Create User Object",()=>{
    const user = new User (1,"username","Name","Bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("username")
    expect(user.name).toBe("Name")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
    })    

    test("Create User Object",()=>{
        const user = new User(1,"username","Name","Bio")
        expect(user.getUsername).toBe("username")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
})
const UserView = require("./../../app/views/UserView")

describe("Tests for User view",()=>{
    test("Return an error object when trying to create a new user with a null payload",()=>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
    test("Return an error object when trying to create a new user with a payload whith invalid properties",()=>{
        const payload = {username:null,name:12,id:"id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Valores no válidos/)

    })

    test("Return an error object when trying to create a new user with payload whit missing properties",()=>{
        const payload = {username:"username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Valores no válidos/)

    })

    test("Create a user by a given valid payload",()=>{
        const payload = {username:"username",id:1,name:"name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })
    
})
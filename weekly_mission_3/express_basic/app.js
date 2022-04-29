const express = require('express')

const app=express()

const port = 3000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/launchx',(req,res)=>{
    res.send('Bienvenidos a launchx')
})

app.get('/explorersInNode',(req,res)=>{
    const explorer = {name:"Explorer",msg:"Hello"}
    res.send(explorer)
})

app.listen(port,()=>{
    console.log(`Example app listeing on port ${port}`)
})
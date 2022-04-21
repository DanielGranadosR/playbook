const profile={
    name:"username",
    phone:"1234",
    mail:"mail@gmail.com",
    password:"*********",
    isGoogleconected:function(){
        let pos=Object.values(profile)
        if(pos[2].includes("gmail")) return "Google está conectado"
    }

}

console.log(profile.isGoogleconected())
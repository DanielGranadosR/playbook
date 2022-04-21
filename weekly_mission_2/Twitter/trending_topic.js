const trending={
    position1:'Mexico',
    position2:'#comida',
    position3:'Japon',
    position4:'Tacos',
    position5:'Aguas Locas',
    position6:'#jugos',
    position7:'#python',
    position8:'#javascript',
    position9:'Series',
    position10:'Spider-Man',
    isThereAHashtag: function(){

       for (const key of Object.keys(trending)) {
        let position = trending[key].includes("#")
        if(position==true) return `${trending[key]} tiene hashtag`               
       }      

    }
        
}

console.log(trending.isThereAHashtag())
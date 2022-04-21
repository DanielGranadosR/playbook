const bio={
    name:"Username",
    about:"This is where people write about themselves",
    postnumber:456,
    staticimages:345,
    gifs:43,
    videos:346,
    editAbout: function(data){
        this.about=data
        return this.about
    }
}


console.log(bio.editAbout("Nueva Bio"))
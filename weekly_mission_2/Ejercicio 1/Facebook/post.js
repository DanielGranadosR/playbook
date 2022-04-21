const post={
    user:"User",
    text:"This text is an example of what someone could write",
    image:"yes",
    likereactions:2,
    lovereactions:3,
    laughreactions:1,
    angryreactions:0,
    carereactions:4,
    totalReactions:function(){
        return `El total de reacciones es: ${this.likereactions+this.lovereactions,this.laughreactions,this.angryreactions,this.carereactions}`
    }
}

console.log(post.totalReactions())
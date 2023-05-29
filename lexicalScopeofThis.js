//^ lexical means range 

// lexical scope of this , sometimes object lost their this 

// let data = {
//     list : "Friends " ,
//     names : ["bruce " , "peter " , "sam "] ,
//     getFriends: function() {
//        // console.log(this.list)
//        let that = this.list ;
//        this.names.map(function(item){
//         console.log(that , item)
//        })
//     }
// }



let data = {
    list : "Friends " ,
    names : ["bruce " , "peter " , "sam "] ,
    getFriends: function() {
       // console.log(this.list)
       //let that = this.list ;
       this.names.map((item)=>{
        console.log(this.list, item)
       })
    }
}
data.getFriends() ;
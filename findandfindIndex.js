//let data = [10 ,20 ,7 ,50 ,1,100] ;
let data = [
    {id : 10 , name :"A"} , 
    {id : 8 , name : "B"} , 
    {id : 50 , name : "C"} , 
    {id : 1 , name :"D"} , 
    {id : 100 , name : "e"} , 
]
// function custom(item) {
//     return item.id>50 ; 
// }

// let result = data.find(function(item){
//     return item < 50 ;
// })

// let result = data.findIndex(function(item){
//     return item < 50 ;
// })
// let result = data.find(function(item){
//     return item < 50 ;
// })


let result = data.find(function (item){
    return item.id > 50 ; 
})
console.log(result) ;


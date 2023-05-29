let data = [10 , 20 , 30 ,40 ,50 ] ;
// function test() {
//     return 1 ;
// }
// let test2 = function () {
//     return 1 ;
// }

// let test3 = ()=>{
//     return 1 
// }
// console.log(test3());
// console.log(test2());


// let newData = data.map(function(item){
//     return item*2 ;
// })

// let newData = data.map((item) => item*2)
// console.log(newData) ;

// class App extends component{
//     <button onClick = {()=>this.test()}>test</button>
//     <button onClick = {this.test.bind(this)}>test</button>
// }


let item = {
    name : "Vikas" ,
    getName : function()
    {
        console.log("normal" , this)
    } ,

    getNameArrow : () =>{
        console.log("arrow" ,this) ;
    }
}
item.getName() ;
item.getNameArrow();
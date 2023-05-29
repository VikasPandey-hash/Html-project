class Fruits {

    name = "Orange"
   constructor(){
    console.log("constructor" , this.name )
   }
   getFruits()
   {
    return "Apple"
   }
}

let f1 = new Fruits()

console.log(f1.getFruits()) ;
console.log(f1.name) ;
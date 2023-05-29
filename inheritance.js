class Category {
    dryFruit() {
        return "almond is dry fruit"
    }
    pomeFruit(){
        return "apple is pome fruit"
    }
}

class Fruits extends Category{
    constructor(){
        super() // to call contructer of parent class 
        console.log("Vikas")
    }
    getFruits(){
        return "You got apple"
    }
}

let f1 = new Fruits ;

let c1 = new Category ;
//console.log(f1.pomeFruit())
console.log(c1.dryFruit())
//console.log(c1.getFruit())
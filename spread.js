
// let otherFruits = ["pineapple" , "guava" , "lichi"]
// let fruits = ["apple" ,...otherFruits , "banana" , "kiwi"] ;
// function PrintAll(...a) {  // rest
//     console.log(a)
// }
//PrintAll(fruits[0] , fruits[1] , fruits[2])
// PrintAll(...fruits) ; // spread


//let allFruits = [...fruits , ... otherFruits]


//console.log(allFruits) ;//[ 'apple', 'banana', 'kiwi', 'pineapple', 'guava', 'lichi' ]



let fruits = ["apple"  , "banana" , "kiwi"] ;
let newFruits = [...fruits] ;
newFruits.push("test")

console.log(newFruits) ;
console.log(fruits) ;
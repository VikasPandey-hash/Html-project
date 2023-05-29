//^ unpacking the value of array in variables 

//const [count , setCount ] = useState()

// let fruits = ["Apple" , "mongo" , "kiwi" ,"orange"] ;

//let fruits1 = fruits[0]

//let[fruits1, fruit2 ,fruit3] = fruits
//let[fruits1, ,fruit3] = fruits
// let[fruits1, ,fruit3 ,fruit4="unknown fruit"] = fruits
// console.log(fruits1  , fruit3,fruit4) ;

// let[fruits1 ,fruit2,...fruitx] = fruits;
// console.log(fruitx)



// let arr = [1,2,37]
// let result = arr.reduce((acc,item)=> acc + item)
// console.log(result)


// function x(num1 , num2) {
//     if(num1 && num2) {
//         return num1 + num2
//     }else {
//         return function(num3) {
//             return num1 + num3
//         }
//     }
// }

// console.log(x(1,3)) ; // add


//const arr = [1-100] // 1 number is missing 
// let mostrecentNumber =1 ;
// function x(arr) {
//     const arr2 = arr.sort((a,b)=> b-a)
//     for(let i = 0 ; i<arr2.length ; i++){
//         if(arr[i] !== i){
//             return arr2[i]
//         }else {
//             console.log("check another number ")
//         }
//     }
// }


// let len = arr.length ;
// let total = n*(n+1) / 2 ;
// let arrayTotal = arr.reduce((t,i) => t+i)
// console.log(total - arrayTotal)


// function x() {
// //declaratiom
// }

// (function x() {
//     //expression
//     })

//     (function () {
//         //expression IIFE
//         })()


// let y= function() {
// // expression 
// }


// let str = "i Love javasript" ;
// // revese this string 

// let str2 = str.split("").reverse().join("")
// console.log(str2); 


let x = 1234 ;  // len =4

function findNumberLength(number) {
    let numLength = 0 ;
    while(number !=0) {
        number = number/10 ;
        console.log(number)
        numLength++ ;
    }
    return numLength ;
}

console.log(findNumberLength(x))
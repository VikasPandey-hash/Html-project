let a = undefined ;
setTimeout(() => {
    a= "Hello Ecma"
}, 3000);

let promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        a= "Hello Ecma"
    }, 3000);
    resolve("done") ;
    
})
promiseData.then(() =>{
    console.log(a)
})
//alert(a) ;
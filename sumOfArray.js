function findSum(arr) {
    let sum =0 ;
    for(let i=0 ; i<arr.length ; i++){
        sum += arr[i]
    }
    return sum ;
}

const numbers = [2,3,7,4,3,2,4,5]

console.log(findSum(numbers))
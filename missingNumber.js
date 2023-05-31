// function findMissingNumber(arr) {
//     const n = arr.length +1 ;
//     const totalSum = (n*(n+1))/2 ;
//     const arraySum = arr.reduce((acc,curr)=> acc+ curr ,0)
//     return totalSum - arraySum ;
// }

// const numbers = [1,2,3,5,6,7]
// console.log(findMissingNumber(numbers))



function findmisingNumber(nums) {
    const n = nums.length ;
    
    let expectedSum = (n*(n+1))/2

    let actualSum =0 ;
    for(let num of nums) {
        actualSum += num ;
    }
    return expectedSum -actualSum ;
}
console.log(findmisingNumber([3,0,1]))
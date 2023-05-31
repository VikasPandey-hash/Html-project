function findMinMax(arr) {
    let min = arr[0] ;
    let max = arr[0] ;
    for(let i=1 ; i<arr.length ; i++) {
        if(arr[i] < min) {
            min = arr[i] ;
        }
        if(arr[i] > max ) {
            max = arr[i];
        }
    }
    return {min , max} ;
}

const numbers = [2,4,5,6,7,3,123 ,0]

console.log(findMinMax(numbers)) ;
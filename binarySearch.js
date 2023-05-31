function binarySearch(arr,target) {
    let left = 0 ;
    let right = arr.length -1 ;
    while(left <= right) {
        const mid = Math.floor((left +right)/2) ;
        if(arr[mid]=== target){
            return mid ;
        }else if (arr[mid] < target) {
            left = mid +1 ;
        } else {
            right = mid -1 ;
        }
    }
    return -1 ;
}

const numbers = [2,3,7,8,10,45,77]
console.log(binarySearch(numbers , 23)) ;
console.log(binarySearch(numbers , 45)) ;
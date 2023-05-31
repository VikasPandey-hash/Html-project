function countOccurrences(arr) {
    const occurrenceMap = {} ;
    for(let i=0 ; i< arr.length ; i++) {
        const element = arr[i];
        if(occurrenceMap[element]) {
            occurrenceMap[element]++ ;
        }else {
           occurrenceMap[element] =1 ;
        }
    }
    return occurrenceMap ;
}
const numbers = [1,2,3,4,5,2,1,2,3,6,8,9,6,5]
console.log(countOccurrences(numbers)) ;
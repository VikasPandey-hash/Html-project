function moveZeroes(nums) {
    let nonZeroIndex = 0 ;
    for(let i=0 ; i<nums.length ; i++) {
        if(nums[i] !== 0 ) {
            nums[nonZeroIndex] = nums[i] ;
            nonZeroIndex++ ;
        }
    }
    while(nonZeroIndex < nums.length) {
        nums[nonZeroIndex] = 0 ;
        nonZeroIndex++ ;
    }
    return nums ;
}

console.log(moveZeroes([0,1,0,3,0,12]))
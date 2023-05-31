function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));


    return merge(left, right);
}

function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const numbers = [7, 2, 5, 1, 8, 9, 3]
console.log(mergeSort(numbers));
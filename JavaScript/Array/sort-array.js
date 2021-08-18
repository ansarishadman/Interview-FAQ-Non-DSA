let arr = [51, 1, 2, 77, 44, 102, 88, 99, 307, 3366, 465, 3];
console.log(sortArray(arr));

// Time Complexity -> O(n^2)
// Auxiliary Space -> O(1)

function sortArray(arr) {
    let n = arr.length;
    let temp;
    let idx;
    for(let j = 0; j < n; j++) {
        temp = arr[j];
        idx = j;
        for (let i = j; i < n; i++) {
            if (temp > arr[i]) {
                temp = arr[i];
                idx = i;
            }
        }
        arr[idx] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
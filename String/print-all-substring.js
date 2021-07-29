// work on Time Complexity -> currently O(n^3)

function subString(str, n) {
    let arr = [];
    // Pick starting point
    for (let len = 1; len <= n; len++) {
        // Pick ending point
        for (let i = 0; i <= n - len; i++) {
            //  Print characters from current
            // starting point to current ending
            // point.
            let j = i + len - 1;
            let strVal = '';
            for (let k = i; k <= j; k++) {
                strVal += str[k];
                arr.push(strVal);
            }
        }
    }
    console.log(arr.filter((v, i) => arr.indexOf(v) === i));
}
// Driver program to test above function
let str = ('missme').split('')
subString(str, str.length);

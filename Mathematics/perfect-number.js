checkPerfectNumber(6);

function checkPerfectNumber(n) {
    let originalValue = n;
    if (n === undefined) {
        console.log("Please enter a number!");
        return;
    }
    let sum = 0;
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === originalValue) {
        console.log("The number " + originalValue + " is perfect number!");
    } else {
        console.log("The number " + originalValue + " is not a perfect number!");
    }
}

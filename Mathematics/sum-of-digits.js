sumOfDigits(123456789);
sumOfDigitsRecur(123456789);

function sumOfDigits(n) {
    if (n === undefined) {
        console.log("Please enter a number!");
        return;
    }

    let sum = 0;
    while (n > 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    console.log("Sum of digits is => ", sum);
}

function sumOfDigitsRecur(n) {
    if (n === undefined) {
        console.log("Please enter a number!");
        return;
    }
    let sum = 0;
    let sumValue = findSum(n, sum);
    console.log("Sum of digits is => ", sumValue);
}

function findSum(n, sum) {
    sum = sum + n % 10;
    n = parseInt(n / 10);
    if (n > 0){
        findSum(n, sum);
    }
    return sum;
}
checkPalindrome(123454321);

function checkPalindrome(n) {
    let originalValue = n;
    if (n === undefined) {
        console.log("Please enter a number!");
        return;
    }
    let c = "";
    while (n > 0) {
        c = c + n % 10;
        n = parseInt(n / 10);
    }
    if (+c === originalValue) {
        console.log("The number ", +originalValue, " is a palindrome!");
    } else {
        console.log("Not a palindrome!");
    }
}
reverseDigit(6467677876767);

function reverseDigit(n) {
    if (n === undefined) {
        console.log("Please enter a number!");
        return;
    }
    let c = "";
    while(n > 0) {
        c = c + n % 10;
        n = parseInt(n / 10);
    }
    console.log("The reversed digit is ", +c);
}
countDigits(12345);

function countDigits(n) {
    if (n === undefined) {
        console.log('Please enter a number!')
        return;
    }
    let c = 0;
    while (n > 0) {
        c++;
        n = parseInt(n / 10);
    }
    console.log("The digits length ", c);
}
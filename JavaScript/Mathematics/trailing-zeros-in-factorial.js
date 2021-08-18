findTrailingZerosInFactorial(20);

function findTrailingZerosInFactorial(n) {
    let originalValue = n;
    if (n === undefined) {
        console.log('Please enter a number!');
        return;
    }

    let c = 1;
    while(n > 0) {
        c = c * n;
        n--;
    }
    n = c;
    let zeroCount = 0;
    while (n > 0) {
        if(n % 10 === 0) {
            zeroCount++;
        } else {
            break;
        }
        n = parseInt(n / 10);
    }

    console.log('The number of trailing zeroes in '+ +originalValue + "! equals " +c + " is ", +zeroCount);
}
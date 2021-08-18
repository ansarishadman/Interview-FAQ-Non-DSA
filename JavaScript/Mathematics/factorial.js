findFactorial(5);

function findFactorial(n) {
    let originalValue = n;
    if (n === undefined) {
        console.log("Please enter a number!");
        return;
    }
    let c = 1;
    while (n > 0) {
        c = c * n;
        n--;
    }

    console.log(+originalValue + '! equals ', +c);
}
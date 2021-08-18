printPrimeNumbers(100);

function printPrimeNumbers(n) {
    let primeFactors = [];
    let primeVal = 1;
    while (primeVal <= n) {
        let count = 0;
        for (let i = 1; i <= primeVal; i++) {
            if (primeVal % i === 0) {
                count++;
            }
        }
        if (count === 2) {
            primeFactors.push(primeVal);
        }
        primeVal++;
    }

    console.log("Prime Factors within " + n + " is ", primeFactors);
}
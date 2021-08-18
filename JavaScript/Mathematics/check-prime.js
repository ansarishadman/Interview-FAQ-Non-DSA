checkPrime(37);

function checkPrime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 2)
        console.log("The number " + n + " is prime!");
    else
        console.log("The number " + n + " is not prime!"); 
}
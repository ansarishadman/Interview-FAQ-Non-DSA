countAllDivisors(36);

function countAllDivisors(n) {
    if (n === undefined) {
        console.log("Please enter a number!");
    }

    let divisorsArr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisorsArr.push(i);
        }
    }

    console.log("The divisors of "+ n + " are ", divisorsArr);
}
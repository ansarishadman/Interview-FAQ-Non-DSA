findFibonacciNonRecurring(1000);
findFibonacciRecurring(1000);

function findFibonacciNonRecurring(n) {
    if (n === undefined) {
        console.log("Please enter a number!");
        return;
    }

    let fibonacciArr = [];
    if (n === 0) {
        fibonacciArr = [0];
    } else {
        fibonacciArr = [0, 1];
    }
    let n1 = 0;
    let n2 = 1;
    let fibSum = n1 + n2;
    
    while (fibSum <= n) {
        fibonacciArr.push(fibSum);
        n1 = n2;
        n2 = fibSum;
        fibSum = n1 + n2;
    }

    console.log("The Fibonacci series(Non Recur) for " + n + " is ", fibonacciArr);
}

function findFibonacciRecurring(n) {
    if (n === undefined) {
        console.log("Please enter a number!");
    }

    let fibSeries;
    if (n === 0) {
        fibSeries = [0];
    } else {
        fibSeries = [0, 1];
    }
    let n1 = 0;
    let n2 = 1;
    let fibSum = n1 + n2;

    findFib(n1, n2, n, fibSeries, fibSum);
}

function findFib(n1, n2, n, fibSeries, fibSum) {
    fibSum = n1 + n2;
    if (fibSum <= n){
        fibSeries.push(fibSum);
        n1 = n2;
        n2 = fibSum;
        findFib(n1, n2, n, fibSeries, fibSum);
    } else {
        console.log("The Fibonacci series(Recur) for " + n + " is ", fibSeries);
    }
}
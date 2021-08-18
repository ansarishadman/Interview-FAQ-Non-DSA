findNthFibonacci(15);

function findNthFibonacci(n) {
    if (n === undefined) {
        console.log('Please enter a number!');
        return;
    }

    if (n === 0 || n === 1) {
        console.log('nth Fibonacci', n);
    } else {
        let t1 = 0;
        let t2 = 1;
        let sum = 0;
        for (i = 3; i <= n; i++) {
            sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
        console.log("nth fibonacci", t2);
    }

}

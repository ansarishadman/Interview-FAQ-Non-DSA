findSum(100);
findSum(10);

function findSum(n) {
    if (n === undefined) {
        console.log('Please enter a number!');
        return;
    }

    let c = 1;
    let sum = 0;
    while (c <= n) {
        sum = sum + c;
        c++;
    }
    console.log('sum of n natural numbers', sum);
}
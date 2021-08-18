checkArmstrong(1634);

function checkArmstrong(n) {
    if (n === undefined) {
        console.log("Please enter a number!");
        return;
    }
    let originalValue = n;
    let length = 0;
    while (n > 0) {
        length++;
        n = parseInt(n / 10);
    }
    n = originalValue;
    let c;
    let sum = 0;
    while (n > 0) {
        c = n % 10;
        sum = sum + calcExp(c, length);

        n = parseInt(n / 10);
    }
    if (sum === originalValue) {
        console.log("Armstrong number ", originalValue);
    } else {
        console.log("Not an Armstrong number ", originalValue);
    }
}

function calcExp(c, l) {
   let cube = c;
   for (let i = 0; i < l-1; i++) {
       cube = cube * c;
   }
   return cube;
}

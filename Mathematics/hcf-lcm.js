findHCF(36, 24);
findLCM(36, 24);

function findHCF(n1, n2) {
    let dividend = n1;
    let divisor = n2;
    let remainder = 1;
    let hcfValue;

    if (dividend === 0 || divisor === 0) {
        if (dividend > divisor)
            hcfValue = dividend;
        else
            hcfValue = divisor;
    }

    while (divisor !== 0 && dividend !== 0) {
        remainder = dividend % divisor;
        dividend = divisor;
        divisor = remainder;
        if (remainder !== 0) {
            hcfValue = remainder;
        } else {
            break;
        }
    }

    console.log("The HCF of " + n1 + " and " + n2 + " is ", +hcfValue);
}

function findLCM(n1, n2) {
    let divisors1 = [];
    let divisors2 = [];

    
}
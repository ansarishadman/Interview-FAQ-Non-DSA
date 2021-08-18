// Cases valid for positive integer values

findHCF(36, 12, "HCF");
findLCM(36, 12, "LCM");

function findHCF(n1, n2, operation) {
    let dividend = n1;
    let divisor = n2;
    let remainder = 1;
    let hcfValue = divisor;

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

    if (operation === "LCM") {
        return hcfValue;
    } else {
        console.log("The HCF of " + n1 + " and " + n2 + " is ", +hcfValue);
    }

}

function findLCM(n1, n2, operation) {
    let hcfValue = findHCF(n1, n2, operation);
    let lcmValue;
    
    lcmValue = (n1 * n2) / hcfValue;
    console.log("The LCM of " + n1 + " and " + n2 + " equals ", lcmValue);
}
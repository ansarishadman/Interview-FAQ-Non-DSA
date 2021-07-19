swap(12, 32);
swapUsingTemp(12, 32);

function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("Swapped no is ", +a + " and " + +b);
}

function swapUsingTemp(a, b) {
    let c;
    c = a;
    a = b;
    b = c;
    console.log("Swapped no (using temp variable) is ", +a + " and " + +b);
}
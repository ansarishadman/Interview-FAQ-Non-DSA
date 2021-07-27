findFrequency("mississipi");

function findFrequency(strValue) {
    if (strValue === undefined) {
        console.log("Please enter a string value!");
        return;
    }

    let strValArr = strValue.split('');
    let freqArr = [];
    for (let i = 0; i < strValArr.length; i++) {
        let iterations = 0;
        iterations = findIterations(strValArr[i], strValArr);
        freqArr.push(iterations);
    }
    console.log('Frequency =>', freqArr.filter((v,i) => freqArr.indexOf(v) === i).sort());
}

function findIterations(strVal, strValArr) {
    let count = 0;
    for (let j = 0; j < strValArr.length; j++) {
        if (strValArr[j] === strVal) {
            count++;
        }
    }
    return (strVal + count);
}

checkSubsequence('mississipi', 'issip');

function checkSubsequence(strVal, subSeq) {
    if (strVal === '') {
        return 0;
    }
    if (strVal === undefined || subSeq === undefined) {
        console.log('Please enter string value');
        return;
    }

    let strValArr = Object.assign([], strVal);
    let subSeqVal = Object.assign([], subSeq);

    let j = 0;
    for (let i = 0; i < strVal.length && j < subSeqVal.length; i++) {
        if (strVal[i] === subSeqVal[j])
            j++;
    }
    if (j === subSeqVal.length)  {
        console.log('Subsequence exists!');
    } else {
        console.log('Subsequence does not exist!');
    }
}

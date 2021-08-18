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
    let subSeqArr = Object.assign([], subSeq);

    let j = 0;
    for (let i = 0; i < strValArr.length && j < subSeqArr.length; i++) {
        if (strValArr[i] === subSeqArr[j])
            j++;
    }
    if (j === subSeqArr.length)  {
        console.log('Subsequence exists!');
    } else {
        console.log('Subsequence does not exist!');
    }
}

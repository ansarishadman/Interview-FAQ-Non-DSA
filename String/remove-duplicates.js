removeDuplicateValues('missme');

function removeDuplicateValues(strValue) {
    if (strValue === undefined) {
        console.log('Please enter a string value!');
        return;
    }

    let strArr = [];
    let newStr = '';
    for (let ch of strValue) {
        if(!foundIndex(strArr, ch)) {
            strArr.push(ch);
            newStr += ch;
        }
    }
    console.log('string after dupes removal =>', newStr);
}

function foundIndex(arr, value) {
    for (let ch of arr) {
        if (ch === value) {
            return true;
        }
    }
    return false;
}
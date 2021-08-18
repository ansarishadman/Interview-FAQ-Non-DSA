reverseString('mississipi');

function reverseString(strValue) {
    let strValArr = Object.assign([], strValue);

    let reversedString = '';
    for (let i = strValArr.length - 1; i >= 0; i--) {
        reversedString += strValArr[i];
    }
    console.log('Reversed String =>', reversedString);
}
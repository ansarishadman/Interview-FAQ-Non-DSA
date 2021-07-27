reverseOrderOfWord('I AM A GEEK!');

function reverseOrderOfWord(strValue) {
    let strArr = strValue.split(' ');

    let reversedOrderWord = '';
    for (let i = strArr.length - 1; i >= 0; i--) {
        reversedOrderWord += strArr[i] + (i !== 0 ? ' ' : '');
    }
    console.log('Reversed Word =>', reversedOrderWord);
}
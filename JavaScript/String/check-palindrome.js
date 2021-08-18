checkPalindrome('naman');
checkPalindrome('madam');

function checkPalindrome(name) {
    if (name === '' || name === undefined) {
        console.log('Please enter a string value!');
        return;
    }

    let nameArr = [];
    Object.assign(nameArr, name);
    console.log(nameArr);
    let reverseName = [];
    for (let i = nameArr.length -1 ; i >= 0; i--) {
        reverseName.push(nameArr[i]);
    }
    let count = 0;
    for (let i = 0; i < nameArr.length; i++) {
        if(nameArr[i] === reverseName[i]) {
            count++;
        }
    }
    if (count === nameArr.length) {
        console.log(name, "is Palindrome!");
    } else {
        console.log(name, "is not palindrome!");
    }
}
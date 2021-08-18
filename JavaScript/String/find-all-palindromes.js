findAllPalindromes("aaabaa");

function findAllPalindromes(str) {
  if (str === undefined || str === "") {
    console.log("Please enter a string value");
    return;
  }
  let palindromeArr = [];
  let n = str.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let strVal = str.substring(i, j + 1);
      if (isPalindrome(strVal)) {
        palindromeArr.push(strVal);
      }
    }
  }
  console.log(palindromeArr);
}

function isPalindrome(str) {
  let i = 0;
  let j = str.length;
  let len = (j / 2) | 0;
  j = j - 1;
  while (i <= len) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// Output => ["aa", "aaa", "aa", "aabaa", "aba", "aa"]

checkAnagram("talent", "latent");

function checkAnagram(strValue, anagVal) {
  if (strValue === undefined || anagVal === undefined) {
    console.log("Please enter a string value!");
    return;
  }

  if (strValue.length !== anagVal.length) {
    console.log("Not anagram!");
    return;
  }

  let strValArr = Object.assign([], strValue);
  let anagValArr = Object.assign([], anagVal);

  strValArr.sort();
  anagValArr.sort();
  let j = 0;
  let isAnagram = true;
  for (let i = 0; i < strValArr.length && j < anagValArr.length; i++) {
    if (strValArr[i] !== anagValArr[j]) {
      isAnagram = false;
      break;
    }
    j++;
  }
  isAnagram ? console.log("anagram!") : console.log("not anagram!");
}

// Retain character and reverse a strings

reverseString("Sh*a#dm+an");

function reverseString(name) {
  let str = "";
  let n = name.length;
  // reverse string without special char
  for (let i = n - 1; i >= 0; i--) {
    if (
      (name[i] >= "A" && name[i] <= "Z") ||
      (name[i] >= "a" && name[i] <= "z")
    ) {
      str += name[i];
    }
  }

  // reverse and retain
  let c = 0;
  let revStr = "";
  for (let k = 0; k < name.length; k++) {
    if (
      (name[k] >= "A" && name[k] <= "Z") ||
      (name[k] >= "a" && name[k] <= "z")
    ) {
      revStr += str[c];
      c++;
    } else {
      revStr += name[k];
    }
  }
  console.log(revStr);
}

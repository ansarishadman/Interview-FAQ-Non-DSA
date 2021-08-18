reverseArray([1, 3, 5, 6, 7]);

function reverseArray(arr) {
  if (arr === []) {
    console.log("Empty array");
    return;
  }

  let arrCopy = [];
  let c = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    arrCopy[c] = arr[i];
    c++;
  }
  console.log(arrCopy);
}

// Output => [7, 6, 5, 3, 1]

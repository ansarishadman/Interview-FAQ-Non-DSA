insertIntoArray([1, 3, 5, 6, 7], 24, 4);

function insertIntoArray(arr, ele, idx) {
  let arrCpy = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < idx) {
      arrCpy[i] = arr[i];
    } else {
      arrCpy[i + 1] = arr[i];
    }
    if (i === idx) {
      arrCpy[i] = ele;
    }
  }
  console.log(arrCpy);
}

// Output => [1, 3, 5, 6, 24, 7]

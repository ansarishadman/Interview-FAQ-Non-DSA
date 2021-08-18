deleteElement([1, 3, 5, 6, 7], 3);

function deleteElement(arr, pos) {
  if (pos < 0) {
    console.log("Invalid position");
    return;
  }
  let arrCpy = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < pos) {
      arrCpy[i] = arr[i];
    } else if (i > pos) {
      arrCpy[i - 1] = arr[i];
    }
  }
  console.log(arrCpy);
}

// Output => [1, 3, 5, 7]

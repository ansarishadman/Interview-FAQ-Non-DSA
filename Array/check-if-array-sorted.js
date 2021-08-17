checkIfSortedArray([1, 42, 56, 91, 100]);

function checkIfSortedArray(arr) {
  if (arr === []) {
    console.log("Empty array!");
    return;
  }

  let initValue;
  for (let i = 0; i < arr.length; i++) {
    initValue = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (initValue > arr[j]) {
        console.log("Not Sorted!");
        return;
      }
    }
  }
  console.log("Array is sorted!");
}

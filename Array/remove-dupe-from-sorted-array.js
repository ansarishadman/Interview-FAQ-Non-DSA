removeDupes([1, 2, 3, 4, 5, 6, 4, 3, 0]);

function removeDupes(arr) {
  if (arr.length === 0) {
    console.log("Empty array");
    return;
  }

  let arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    if (!eleFound(arrCopy, arr[i])) {
      arrCopy.push(arr[i]);
    }
  }
  console.log("Array with removed dupes", arrCopy);
}

function eleFound(arr, ele) {
  let isFound = false;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === ele) {
      isFound = true;
    }
  }
  return isFound;
}

// Output => Array with removed dupes [1, 2, 3, 4, 5, 6, 0]

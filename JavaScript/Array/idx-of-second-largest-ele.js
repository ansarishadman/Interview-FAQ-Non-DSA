findIndexOfSecondLargestEle([1, 2, 54, 76, 345, 13, 42, 53]);

function findIndexOfSecondLargestEle(arr) {
  if (arr === []) {
    console.log("Empty Array!");
    return;
  }

  let max = arr[0];
  let secondMax = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (k = 0; k < arr.length; k++) {
    if (arr[k] > secondMax && arr[k] < max) {
      secondMax = arr[k];
      index = k;
    }
  }
  console.log("position of second max", index, "with value", secondMax);
}

// Output => position of second max 3 with value 76

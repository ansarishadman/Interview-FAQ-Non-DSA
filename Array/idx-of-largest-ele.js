findIndexOfLargestEle([1, 3, 54, 651, 123, 45, 6, 7]);

function findIndexOfLargestEle(arr) {
  if (arr === []) {
    console.log("Empty!");
    return;
  }

  let max = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  console.log("Largest element index =>", index);
}

// Output -> Largest element index => 3

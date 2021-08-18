firstAndLastOccurence([1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 9], 4);

function firstAndLastOccurence(arr, ele) {
  if (arr.length === 0 || ele === undefined) {
    console.log("Please re enter array or element!");
    return;
  }
  let startIndex = 0,
    endIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele && startIndex === 0) {
      startIndex = i;
    }
    if (arr[i] === ele && arr[i + 1] !== ele) {
      endIndex = i;
    }
  }
  console.log("start", startIndex, "end", endIndex);
}

// Output => start 3 end 7

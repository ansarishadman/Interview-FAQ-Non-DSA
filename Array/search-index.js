// Binary search

findIndex([34, 64, 23, 65, 78, 90], 65);

function findIndex(arr, ele) {
  let arrNew = sortArray(arr);
  console.log(arrNew);
  let n = arr.length;
  searchIndex(arr, ele, 0, n);
}

function searchIndex(arr, ele, idx, r) {
  let midVal;
  if (r >= idx) {
    midVal = idx + Math.floor((r - idx) / 2);
    if (arr[midVal] === ele) {
      console.log("found at =>", midVal);
      return;
    }

    if (arr[midVal] > ele) {
      searchIndex(arr, ele, idx, midVal - 1);
    } else {
      searchIndex(arr, ele, midVal + 1, r);
    }
  } else {
    console.log("not found!");
    return;
  }
}

function sortArray(arr) {
  // sort the array first
  let n = arr.length;
  let tempMin;
  let idx;
  for (let i = 0; i < n; i++) {
    tempMin = arr[i];
    idx = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < tempMin) {
        tempMin = arr[j];
        idx = j;
      }
    }
    arr[idx] = arr[i];
    arr[i] = tempMin;
  }
  return arr;
}

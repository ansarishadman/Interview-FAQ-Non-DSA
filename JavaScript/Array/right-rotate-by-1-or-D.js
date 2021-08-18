rightRotate([1, 2, 3, 4, 67, 3, 45, 5], 4);
rightRotate([1, 2, 3, 4, 67, 3, 45, 5], 1);

function rightRotate(arr, d) {
  if (arr.length === 0 || d === undefined) {
    console.log("Please re enter values!");
    return;
  }

  let arrCopy = [];
  let n = arr.length;

  for (let j = n - d; j < arr.length; j++) {
    arrCopy.push(arr[j]);
  }
  for (let i = 0; i < n - d; i++) {
    arrCopy.push(arr[i]);
  }

  console.log(arrCopy);
}

// Output D => [67, 3, 45, 5, 1, 2, 3, 4]
// Output 1 => [5, 1, 2, 3, 4, 67, 3, 45]

leftRotateByD([1, 4, 53, 5, 2, 3], 5);
leftRotateByD([1, 4, 53, 5, 2, 3], 1);

function leftRotateByD(arr, d) {
  if (arr.length === 0 || d === undefined) {
    console.log("Please re enter values!");
    return;
  }

  let arrCopy = [];

  for (let i = d; i < arr.length; i++) {
    arrCopy.push(arr[i]);
  }
  for (let j = 0; j < d; j++) {
    arrCopy.push(arr[j]);
  }
  console.log(arrCopy);
}

// Output 1 => [3, 1, 4, 53, 5, 2]
// Output 2 => [4, 53, 5, 2, 3, 1]

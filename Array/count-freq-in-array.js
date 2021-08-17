countFrequency([1, 23, 5, 35, 23, 4, 5, 4, 0, 13, 1, 5, 1]);

function countFrequency(arr) {
  if (arr.length === 0) {
    console.log("empty array!");
    return;
  }

  let freqObj = {};
  for (let i = 0; i < arr.length; i++) {
    freqObj[arr[i]] = freqObj[arr[i]] ? freqObj[arr[i]] + 1 : 1;
  }
  console.log(freqObj);
}

// Output => {0: 1, 1: 3, 4: 2, 5: 3, 13: 1, 23: 2, 35: 1}

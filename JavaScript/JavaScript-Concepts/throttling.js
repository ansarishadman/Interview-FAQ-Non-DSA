let counter = 0;
let getData = () => {
  console.log("fetching data..", counter++);
};

let throttle = (fn, delay) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

let apiCall = throttle(getData, 300);

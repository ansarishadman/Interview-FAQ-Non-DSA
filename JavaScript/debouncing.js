let counter = 0;
const getData = function () {
  console.log("fetching data...", counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const apiCall = debounce(getData, 300);

// var object = {
//     firstname: 'Shadman',
//     lastname: 'Ansari'
// }

// Function.prototype.mybind = function () {
//     console.log('adad')
// }

// function fun() {}

let name1 = {
  firstname: "Shadman",
  lastname: "Ansari",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

printFullName.call(name1, "Jsr", "Jh");

let name2 = {
  firstname: "Aquib",
  lastname: "Jawed",
};

printFullName.call(name2, "Jsr", "Jh");

printFullName.apply(name2, ["Jsr", "Jh"]);

let printMyName = printFullName.bind(name2, "Jsr", "Jh");

printMyName();

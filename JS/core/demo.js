console.log("test");

val = 10;
function sum(a, b) {
  return a + b;
}

function main(a, b, callback) {
  console.log(val);
  return callback(a, b);
}

function parent() {
  var c = 0;
  let val = 5;
  var user = { name: "Kamran", marks: 90 };
  console.log(user);
  console.log(this.val);
  const child = () => {
    console.log(c);
    console.log(this.user);
    console.log(this.val);
  };
  child();
}

const arrowfn = () => {
  var c = 0;
  let val = 5;
  console.log(this.val);
  function child() {
    // console.log(c);
  }
  child();
};
console.log(main(2, 3, sum));

parent();
arrowfn();

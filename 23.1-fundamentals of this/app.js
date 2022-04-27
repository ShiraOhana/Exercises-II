// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
// console.log(this);
// Window information
// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//   name: "Timmy",
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

//this is scoped to the parent (window) context.
// I changed the arrow function to declaration function

// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//   console.log(this);
// };
// Nothing, he has nothing to point to
// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();

//To the window because it's an arrow funtion
// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
document.querySelector(".element").addEventListener(function () {
  console.log(this);
});

//changed the arrow to declaration function

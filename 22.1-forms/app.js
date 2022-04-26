const fname = document.querySelector("#fname");
const form = document.querySelector("#form");
const age = document.querySelector("#age");
const email = document.querySelector("#email");

form.addEventListener("submit", function (e) {
  alert("Submited!");
  console.log("name", fname.value);
  console.log("age", age.value);
  console.log("email", email.value);
  e.preventDefault();
});

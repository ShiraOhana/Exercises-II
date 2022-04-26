const fname = document.querySelector("#fname");
const form = document.querySelector("#form");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const notice = document.querySelector("#notice");
let txt;
form.addEventListener("submit", function (e) {
  //   alert("Submited!");
  console.log("name", fname.value);
  console.log("age", age.value);
  console.log("email", email.value);
  e.preventDefault();

  if (confirm("Are you sure?")) {
    txt = "You succesfuly submited the form";
  } else {
    txt = "Edit the form and press submit";
  }
  document.getElementById("notice").innerHTML = txt;
});

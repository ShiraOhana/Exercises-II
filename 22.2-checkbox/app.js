let someCheckbox = document.querySelector("#check");
let dogo = document.querySelector("img");

someCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    dogo.style.display = "block";
  } else {
    dogo.style.display = "none";
  }
});

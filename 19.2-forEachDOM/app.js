const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
const newOl = document.createElement("ol");
newOl.setAttribute("style", "list-style-type: none;");

// document.body.appendChild(newOl);

users.forEach((user) => {
  const newLi = document.createElement("li");
  newLi.setAttribute("data-id", user.id.toString());
  newLi.textContent = `${user.firstName} ${user.lastName}`;
  newOl.appendChild(newLi);
});

console.log(newOl);

// 1. Loop over the array with the forEach method and dynamically
// create an ordered list of the first and last names from the objects.
// 2. Remove the bullet points of the ordered list with javaScript.
// 2. Create a custom data attribute called “data-id” and attach the id
// value to each li.

// let names = Object.entries(users).forEach((entry) => {
//   const [key, value] = entry;
//   console.log(value.firstName, value.lastName);
// });
//

// const target = document.querySelector('.container');
// const olEl = document.createElement('ol');
// olEl.style.listStyleType = 'none';
// users.forEach((el) => {
//   const liEl = document.createElement('li');
//   liEl.setAttribute('data-id', el.id);
//   liEl.textContent = el.firstName + ' ' + el.lastName;
//   target.append(olEl);
//   olEl.append(liEl);
// });

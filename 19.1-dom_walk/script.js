// 1
let myList = document.querySelector("li.start-here");
myList.innerText = "main title";
// 2
const li3 = myList.nextElementSibling; //+= "<li>sub title 4</li>";
const myListSiblingChild = li3.firstElementChild;
let newSub = document.createElement("li");
let textList = document.createTextNode("sub title 4");
newSub.appendChild(textList);
myListSiblingChild.appendChild(newSub);
// 3
const parent = myList.parentElement;
parent.lastElementChild.remove();

// 4

const body = parent.parentElement;
const head = body.previousElementSibling;
const title = head.lastElementChild;
title.textContent = "Master Of The Dom";
console.dir(title);

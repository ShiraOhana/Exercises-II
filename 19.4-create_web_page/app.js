// const newHeader = document.createElement("h1");
// const newHead = document.createTextNode("New Website!");
// newHeader.appendChild(newHead);

// const newDiv = document.createElement("div");
// const newContent = document.createTextNode("Hi there and greetings!");
// newDiv.appendChild(newContent);
// const currentDiv = document.getElementById("div1");
// document.body.insertBefore(newDiv, currentDiv);

const header1 = document.createElement("h1");
header1.innerText = "This is the main title";
document.body.appendChild(header1);
header1.style.color = "red";

const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);
para.style.textDecoration = "underline";

const btn = document.createElement("button");
btn.innerText = "This is a button";
document.body.appendChild(btn);
btn.style.backgroundColor = "yellow";

const anchor = document.createElement("a");
anchor.setAttribute("href", "javascript:showSignature(xyz)");
anchor.innerText = "I'm a link";
document.body.appendChild(anchor);
anchor.style.color = "gold";

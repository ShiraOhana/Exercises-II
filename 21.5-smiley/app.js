const input = document.querySelector('input');
const button = document.querySelector('button');
const smilesDiv = document.querySelector('.smiles-container');

//? solution 1: controlled by JS - we hold the input all the time in our JS
// let userInput = 0; //? our state
// input.addEventListener('keyup', (e) => {
//   const p = document.querySelector('p');
//   if (e.target.value === '' || Number(e.target.value)) {
//     userInput = Number(e.target.value);
//     p.textContent = '';
//   } else {
//     p.textContent = 'Wrong input';
//     p.style.color = 'red';
//   }
// });
// button.addEventListener('click', () => {
//   smilesDiv.innerHTML = '';
//   for (let i = 0; i < userInput; i++) {
//     const smile = document.createElement('img');
//     smile.src =
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOQjYNCvG8jbfe8cH4xuYI3VcyNClWfhLTw&usqp=CAU';
//     smile.style.height = '50px';
//     smile.style.margin = '1rem';
//     smilesDiv.appendChild(smile);
//   }
// });

//? solution 2: not controlled
button.addEventListener('click', () => {
  smilesDiv.innerHTML = ''; //*  clear smiles div
  const p = document.querySelector('p');
  const userInput = document.querySelector('input');
  if (userInput.value === '' || Number(userInput.value)) {
    //* input is number or empty string
    for (let i = 0; i < Number(userInput.value); i++) {
      const smile = document.createElement('img');
      smile.src =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOQjYNCvG8jbfe8cH4xuYI3VcyNClWfhLTw&usqp=CAU';
      smile.style.height = '50px';
      smile.style.margin = '1rem';
      smilesDiv.appendChild(smile);
    }
    p.textContent = '';
  } else {
    //* wrong input
    p.textContent = 'Wrong input';
    p.style.color = 'red';
  }
});

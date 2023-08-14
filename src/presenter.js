import saludar from "./saludar";


const name = document.querySelector("#nombre");
// // const second = document.querySelector("#segundo-numero");
// // const first1 = document.querySelector("#first-number");
// // const second1 = document.querySelector("#second-number");
// // const form = document.querySelector("#sumar-form");
// // const form1 = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");
const form = document.querySelector("#saludar-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

   const nombre = name.value;

  div.innerHTML = "<p>" + saludar(nombre) + "</p>";

});

// form1.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstNumber = Number.parseInt(first1.value);
//   const secondNumber = Number.parseInt(second1.value);

//   div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
// });
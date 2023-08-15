import saludar from "./saludar";


const name = document.querySelector("#nombre");
const gender = document.querySelector("#genero");
const age = document.querySelector("#edad");
// // const second1 = document.querySelector("#second-number");
// // const form = document.querySelector("#sumar-form");
// // const form1 = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");
const form = document.querySelector("#saludar-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

   const nombre = name.value;
   const genero = gender.value;
   const edad = age.value;

  div.innerHTML = "<p>" + saludar(nombre, genero, edad) + "</p>";

});

// form1.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstNumber = Number.parseInt(first1.value);
//   const secondNumber = Number.parseInt(second1.value);

//   div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
// });
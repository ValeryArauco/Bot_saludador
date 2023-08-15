import saludar from "./saludar";


const name = document.querySelector("#nombre");
const gender = document.querySelector("#genero");
const age = document.querySelector("#edad");
const language = document.querySelector("#idioma");

const div = document.querySelector("#resultado-div");
const form = document.querySelector("#saludar-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

   const nombre = name.value;
   const genero = gender.value;
   const edad = age.value;
   const now = new Date();
   const hora = now.getHours();
   const idioma = language.value;

  div.innerHTML = "<p>" + saludar(nombre, genero, edad, hora, idioma) + "</p>";

});

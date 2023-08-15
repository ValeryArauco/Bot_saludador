function saludar(nombre, genero, edad, hora) {
  let saludo = " "
  let prefijo = " "

  if (hora < 12) {
    saludo = "Buenos dias,"
  }
  else if (hora < 18) {
    saludo = "Buenas tardes,"
  } else {
    saludo = "Buenas noches,"
  }
  
  if(edad > 30){
    prefijo = " Sr. "
    if (genero == "femenino") {
      prefijo = " Sra. "
    }
  }
  return saludo + prefijo + nombre + ".";
}
  
  export default saludar;
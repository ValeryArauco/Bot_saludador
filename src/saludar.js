function saludar(nombre, genero, edad, hora, idioma) {
  let saludo = " "
  let prefijo = " "
  if (idioma == "es"){
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
      if (genero.includes("f") || genero.includes("F")) {
        prefijo = " Sra. "
      }
    }
  }
  else{
    if (hora < 12) {
      saludo = "Good morning,"
    }
    else if (hora < 18) {
      saludo = "Good afternoon,"
    } else {
      saludo = "Good evening,"
    }
    
    if(edad > 30){
      prefijo = " Mr. "
      if (genero.includes("f") || genero.includes("F")) {
        prefijo = " Ms. "
      }
    }
  }
  return saludo + prefijo + nombre + ".";
}
  
  export default saludar;
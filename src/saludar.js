function saludar(nombre, genero) {
  let prefijo = "Sr. "
    if (genero == "femenino") {
      prefijo = "Sra. "
    }
    return "Hola, " + prefijo + nombre ;
  }
  
  export default saludar;
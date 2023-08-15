function saludar(nombre, genero, edad) {
  let saludo = "Hola,"
  let prefijo = " "
  if(edad > 30){
    prefijo = " Sr. "
    if (genero == "femenino") {
      prefijo = " Sra. "
    }
  }
  return saludo + prefijo + nombre ;
}
  
  export default saludar;

//• Objetos: propiedades y métodos

// objeto
let persona = {
    nombre: "Ivan",
    edad: 20,
  
    // Método del objeto
    saludar: function() {
      return `Hola, mi nombre es ${this.nombre}`;
    }
  };
  
  // propiedades
  console.log(persona.nombre); 
  
  // método
  console.log(persona.saludar());








//String Length
var apellido = "Ruano";
console.log("Su apellido tiene: " + apellido.length + " caracteres");

//String charAt()
var example = "FUP";
console.log("El carácter en el índice 0 es '" + example.charAt(0) + "'",);
console.log("El carácter en el índice 1 es '" + example.charAt(1) + "'",);
console.log("El carácter en el índice 2 es '" + example.charAt(2) + "'",);

//String charCodeAt()
var ejemplo = "ABC".charCodeAt(0); 
console.log("El valor Unicode para el carácter A es: " + ejemplo + "");

// String at()
let ej = "Soy estudiante de sistemas";
console.log("Carácter en la posición 1 usando at():", ej.at(1));

//variables utilizadas para los siguientes ejemplos

let cadena = "Hola, mundo";
let cadenaEspaciada = "   Hola, mundo   ";
let saludo = "Hola";
let cadenaRepetida = "Hola, mundo. Hola, a todos.";

//String [ ]
console.log(cadena[0]); 
//String slice()
console.log(cadena.slice(0, 4)); 
//String substring()
console.log(cadena.substring(0, 4)); 
//String substr()
console.log(cadena.substr(0, 4)); 
//String toUpperCase()
console.log(cadena.toUpperCase()); 
//String toLowerCase()
console.log(cadena.toLowerCase());
 //String concat()
console.log(saludo.concat(", mundo")); 
//String trim()
console.log(cadenaEspaciada.trim()); 
//String trimStart()
console.log(cadenaEspaciada.trimStart()); 
//String trimEnd()
console.log(cadenaEspaciada.trimEnd());
 //String padStart()
console.log(saludo.padStart(10, "*")); 
//String padEnd()
console.log(saludo.padEnd(10, "*")); 
//String repeat()
console.log(saludo.repeat(3)); 
//String replace()
console.log(cadena.replace("mundo", "JavaScript")); 
//String replaceAll()
console.log(cadenaRepetida.replaceAll("Hola", "Saludos")); 
//String split()
console.log(cadena.split(", "));
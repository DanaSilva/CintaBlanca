alert ("hola")

// alert, no se debe utilizar en producción porque el usuario se siente incomodó, puede no causar confianza, se usa para comprobar que esta bien conectado con nuestro html, es recomendable desactivarlo luego

var numero = 10;
//String o de texto es una variable
var nombre = "Dana";
// variable booleano
var verdadero = true; // en su contexto falso

// variables de object u objeto, utiliza operadores 
// operadores aritméticos básicos, suma, resta, multiplicación y division 

// las variables de objeto 

var num1 = 200;
var num2 = 300; 

num1 + num2 
// para mostrar el resultado de la suma que se encuentra arriba le colocamos console 
console.log ( num1 + num2)

//console log es una variable para contener datos 

var suma = num1 + num2;
var saludo = "Holaaaa " 

console.log (suma);
console.log (nombre);
console.log (verdadero);
console.log ("Hola desde la consola ") //para mostrar o unir textos le llaman concatenar 

// los textos siempre deben ir entre comillas 

//ejemplo de concatenar

console.log (saludo + "  " + nombre)

// para la salida se puede usar prompt 

//console.log funciona para ver el comportamiento de lo que esta detrás de mi código y ver su reacción, no es como el css que se muestra visualmente 

var pregunta = prompt ("Ingresa tu nombre")
// el prompt necesita una salida para mostrarse 
console.log (pregunta)

//no afecta si tiene el punto y coma y se tiene que tomar en cuenta que si no lo vas a colocar en todo el JS 

//____________________
//CHALLENGE

var preguntanombre = prompt ("Hola ¿Cómo te llamas?")

console.log (preguntanombre)

var telefono = prompt ("Ingresa tu número de teléfono")

console.log (telefono)

var direccion = prompt ("Cuéntanos, ¿dónde vives?")

console.log (direccion)

// CHALLENGE DOS 

var nacimiento = 2020;

var edad = prompt ("¿En que año naciste")

console.log (nacimiento - edad)


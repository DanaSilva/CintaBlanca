//alert ('Danaaa')


// if (condicion) {
    //accion en caso que sea verdad

//}else{
    //accion en caso de que sea falso 
//}

//var num1 = 10 

//<menor que 
// <= menor igual 
// >mayor que 
// >= mayor igual 

//if (num = 10){
   // console.log ('es verdad')
//} else {
  //  console.log ('es falso')
//}

// problema de JS javascripts == es para comparar 

// == NUNCA USAR LOS DOS IGUALES ejemplo 

// if (num ==10){}

// === es para comparar identico 

// siempre se debe USAR los 3 iguales 

// if (num !== '10') { } SALE QUE ES FALSO PORQUE NO ES COMO EL 10 NUMERICO OJO CON ESTO 

// INVESTIGAR QUE ES MODULO EN JAVASCRIPT  -> % <-

// Luego decir si un número es par o impar pero el número lo tiene que dar el usuario 

//var preguntanumero = prompt ('Introduce un numero')

//var numreal = Number (preguntanumero)


//if (numreal % 2 === 0){
  //  console.log (numreal + ':es PAR')
//} else if (numreal % 2 === 1){
  //  console.log (numreal + ':es IMPAR')   
//}else{
  //  console.error ('es un error')
//}

//NaN es un valor mnumerico que no existe 

 //var reto2 = prompt ('Cual es la clave')

// if (reto2 === 'perritosalchicha1234'){
  //   console.log ('Correcto')
 //}else{
   //  console.error('clave incorrecta')
 //}


 //-------Operadores logicos-----------

// AND && OBLIGA A QUE LAS DOS CONDICIONES SEAN TRUE 

 //Edad para no conducir 0 -> 15 y 71 -> 
// Edad para sacar permiso 16 o 17 
// Edad para manejar 18 -> 70

var edad = Number (prompt ('Ingresa tu edad'))

if (edad >= 18 && edad <=70 ){
    console.log ('PUEDES SACAR TU LICENCIA')
}else if (edad === 16 || edad === 71){
    console.log ('PUEDES SACAR TU PERMISO PARA CONDUCIR')
} else if (edad <=15 || edad >=71) {
    console.log ('NO PUEDES MANEJAR')

} else { 
    console.error ('DATOS INCORRECTOS, intentalo de nuevo')


}

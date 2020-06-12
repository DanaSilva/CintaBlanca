// --------Piedra, papel o tijera -----
// 2 jugadores ----> prompts 
// consola mostrar que jugador gano 

var jugador1 = prompt ('piedra,papel o tijera') .toLowerCase()
var jugador2 = prompt ('piedra,papel o tijera') .toLowerCase()

// ---> .toUpperCase()   -> todo a mayuscula
// ---> .toLowerCase()  -> todo a minuscula

if (jugador1 === jugador2){
    console.log ('EMPATE INTENTA NUEVAMENTE')
}else if (jugador1 === 'piedra' && jugador2 === 'tijera'|| jugador1 === 'tijera' && jugador2 === 'papel' || jugador1 === 'papel' && jugador2 === 'piedra') {

    console.log ('GANA EL JUGADOR 1')

}else if (jugador2 === 'piedra' && jugador1 === 'tijera'|| jugador2 === 'tijera' && jugador1 === 'papel' || jugador2 === 'papel' && jugador1 === 'piedra'){

    console.log ('GANA EL JUGADOR 2')

} else {

    console.error ('JUEGA BIEN! INTENTA DE NUEVO')

}

// 😎 EMOJIS EN CONTROL + COMAND + SPACE 🥰
  










 //var reto2 = prompt ('Cual es la clave')

// if (reto2 === 'perritosalchicha1234'){
  //   console.log ('Correcto')
 //}else{
   //  console.error('clave incorrecta')
 //}




// var edad = Number (prompt ('Ingresa tu edad'))

// if (edad >= 18 && edad <=70 ){
//     console.log ('PUEDES SACAR TU LICENCIA')
// }else if (edad === 16 || edad === 71){
//     console.log ('PUEDES SACAR TU PERMISO PARA CONDUCIR')
// } else if (edad <=15 || edad >=71) {
//     console.log ('NO PUEDES MANEJAR')

// } else { 
//     console.error ('DATOS INCORRECTOS, intentalo de nuevo')


// }
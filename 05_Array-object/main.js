//alert ('Hola Dana')

// arreglos que nos permite almacenar diferentes valores 

//                0         1       2      3       4
var colores =  ['negro', 'rojo', 'rosa','azul','amarillo']

//console.log (colores)

//console.log (colores [2])

// forma antigua 

colores [5] = 'verde'
colores [3] = 'blanco'


//metodo de arreglo 

//.push() agrega nuevo valor al final 

colores.push ('gris')

//console.log (colores)


//,pop () -> borra nuestro ultimo valor 

colores.pop ()

//console.log (colores)

//.splice -> borra elementos especificos


// primer numero es la posición 
// segundo numero es la cantidad que deseas borrar 

colores.splice(4,1)
colores.splice (1,1, 'violeta')
//console.log (colores)

// Objetos 

var persona = {
    nombre: "Dana",
    //las comas son para separar los valores 
    cel: "546546546",
    //el celular puede ser string porque no se van a realizar operaciones 
    direccion: "CDMX",
    email: "danasilvadg@gmail.com",
    password: "1234556",
    musica: ['rock', 'corridos tumbados', 'cumbia','pop','kpop','trap'],
    peliculas: {
        accion: ['R&F', 'MI', 'El transportador'],
        survivalHorror: ['Chucky', 'Blair witch', 'El exorcista'],
        comedia: ['Scary movie','click','this is my son'],
        romanticas: {
            comediasRomanticas: ['La Propuesta', 'Zohan'],
            tristeza: ['titanic', 'robando a la novia']

        }
    }

    //jason significa JavaScript object notaction

}

console.log (persona)
console.log (persona.nombre)
console.log (persona.password)

// los arreglos empiezan en la posicion 0 

console.log (persona.musica [1])

console.log (persona.peliculas.romanticas.comediasRomanticas [1])


//[] para arreglos 

//{} para objetos 

//var dulces = [
    //'cajeta',

    //{
        //picantes: 'pika fresa'
    //}
//]
    //console.log (dulces [1].picantes)


    


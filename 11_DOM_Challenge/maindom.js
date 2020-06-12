let titulo = document.getElementById('titulo')
let texto = document.getElementById('texto')


let pnombre = document.getElementById('pnombre')
let ptelefono = document.getElementById('ptelefono')
let pdireccion = document.getElementById ('pdireccion')
let pconpina = document.getElementById ('pconpina')

let rnombre = document.getElementById('rnombre')
let rtelefono = document.getElementById ('rtelefono')
let rdireccion = document.getElementById ('rdireccion')
let rconpina = document.getElementById ('rconpina')

let boton = document.getElementById('boton') 

//////////////////////////


const ordenar = () => {

    titulo.innerHTML = 'Gracias por tus datos'
    texto.innerHTML = 'Verifica tus datos antes de enviar'
    
 
    rnombre.innerHTML = pnombre.value
    rtelefono.innerHTML = ptelefono.value
    rdireccion.innerHTML = pdireccion.value
    rconpina.innerHTML = pconpina.value

}


boton.addEventListener('click', ordenar)
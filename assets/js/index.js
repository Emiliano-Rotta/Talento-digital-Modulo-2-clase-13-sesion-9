
// var alumno = {nombre: "Katherine", apellido: "Barahona" }
// var nombres = [
//     {nombre: "Katherine", apellido: "Barahona" },
//     {nombre: "Bernarda", apellido: "Perez" }
// ]

// for (let i = 0; i < nombres.length; i++) {
//   console.log(nombres[i].apellido)
  
// }

// var numero = 0
// var numeroDos = parseInt(prompt("ingrese un numero"))

// while (numero < numeroDos ) {
//     console.log(numero)
//     numero++
// }

//----------------FIN SESION 8 ------------------
//----------------SESION 9 ------------------

var body =  document.querySelector("body")
// var body = document.getElementsByTagName("body")
var saludo = document.querySelector(".saludo")
// var saludo = document.getElementsByClassName("saludo")
var boton = document.querySelector("#btn-claro-oscuro")
// var boton = document.getElementById("btn-claro-oscuro")

// saludo.style.display = "none"

var cambio = true
var claroOscuro = () => {
    // if (cambio === true){ hacer esto es igual a hacer
    if (cambio){
        body.style.backgroundColor = "black"
        body.style.color = "white"
        cambio = false
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black"
        cambio = true
    }

}


boton.onclick = claroOscuro

//-----------Modal

var modal = document.querySelector(".modal")
var main = document.querySelector("main")
var btnModal = document.querySelector("#btn-modal")

var abrirModal = () =>{
    main.style.display = "none"
    modal.style.display = "block"
}

btnModal.onclick = abrirModal
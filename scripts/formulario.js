var formulario = document.querySelector("#form")

//Se agrego el nombre form a la funcion
function formula(event) {
  //se corrigio: preventDefault()
  event.preventDefault();
  //Se agregaron ";"
  //Se refactorizo con getElementById
  //Se cambio var => let
  let nombre = document.getElementById("name").value;
  let edad = document.getElementById("age").value;
  let na = document.getElementById("nationality");
  let nacionalidad = na.value;
  
  //var n = formulario.elements[0];
  //var e = formulario.elements[1];

  //var nombre = n.value;
  //var edad = e.value;

  //let i = na.selectedIndex;
  //let nacionalidad = na.options[i].value;
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  //Se cerraron parentesis y llaves
  if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
    agregarInvitado(nombre, edad, nacionalidad)
    }
}

let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

let lista = document.getElementById("lista-de-invitados");

//Se corrio .added -> .add
let elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
//spanNombre.textContent = "Nombre: "
//inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}
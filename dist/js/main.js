const input = document.querySelector("input"); 
const btn = document.querySelector("button"); 

const inicio = document.getElementById("contenedorP"); 
const error = document.getElementById("contenedor0"); 

initialForm() 

//Eliminar demás formularios   

function initialForm() {
    error.classList.add("desaparecer");
}

function regalo() {
 
    btn.setAttribute("type", "button");
    error.classList.remove("desaparecer")
    inicio.classList.add("desaparecer")
}

$(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
      
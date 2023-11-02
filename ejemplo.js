/*  SELECTORES  video 1*/
//console.log(document);
//console.log(document.getElementById("cabecera")); //Busca por id pasado por parámetro
//console.log(document.getElementsByClassName("border-grey")); //Busca una lista de los elementos que contienen la clase
//console.log(document.getElementsByTagName("li")); //Busca por etiqueta
//console.log(document.getElementsByName("cabecera")); //Busca por etiqueta name
//console.log(document.querySelector("li")); //Busca por selectores de css, solo el primero
                                  //(".border-grey") . para buscar por clase
                                  //("#main") . para buscar por id
//console.log(document.querySelector("[name=cabecera]"));
//console.log(document.querySelectorAll("li")); //Busca por selectores de css, todos

/*  TIPOS DE DATOS  */
//const elemento = document.getElementById("header");
//const lista1 = document.getElementsByClassName("border-grey"); //Devuelve una lista dinámica
//const lista2 = document.querySelectorAll(".border-grey"); //Devuelve una lista estática

/*  CREAR ELEMENTOS  video 2*/
//const titulo2 = document.createElement("h2"); //Param1: etiqueta Param2: objeto(opcional)
//const textTitulo2 = document.createTextNode("Titulo para probar");
//const comentario = document.createComment("No se suele comentar así");

/*  CLONANDO ELEMENTOS  
Seleccionar un elemento y luego clonarlo en consola*/
//const articulo = document.querySelector("article");
/* articulo.cloneNode()  
   articulo.cloneNode(true) --> clona el nodo completo */
//const articulo2 = articulo.cloneNode(true);

/*  INSERTANDO ELEMENTOS visualizarlos en html  
    articulo.isConnected --> boolean: Si el elemento está insertado o no*/
//const section = document.getElementById("section");
//section.appendChild(articulo2); //Insertar
//section.insertAdjacentElement("beforebegin", articulo2); //Insertar en x posición
//section.insertAdjacentText("beforeend", "Aquí acaba la sección"); //Insertar texto
//section.insertAdjacentHTML("beforeend", "<h3>Insertando código html</h3>") //Insertar código html

/*  ELIMINAR ELEMENTOS  */
//section.remove(); //Eliminar nodo

/*  MODIFICAR ELEMENTOS  */
//section.innerHTML = "<h2>Nuevo título</h2>"; 
//section.outerHTML = "<h2>Nuevo título</h2>" //Para rremplazar todo lo que hay dentro
//section.children[0].textContent = "Otro título" //Modifica el texto el contenido de texto del elemento h2
//section.getAttribute("id") //Param1: elemento Param2: otro valor
//section.classList //Devuelve un listado de las clases en our elemento
//section.className //Devuelve un string con la clase
//section.className += "nuevaClaseCss";
//section.classList.add("nuevaClase"); //Agrega una clase
//section.classList.remove("nuevaClase"); //Elimina una clase
//section.classList.toggle("nuevaClase") //Comprueba si hay una clase, si no hay, la agrega; si si hay, la quita

/*  LISTENERS  video 3*/

/* 1° forma -No recomendada-
Introducir dentro de nuestra etiqueta html: 'onclick="clickTitulo()"'
En nuestro JS: Definir la función
function clickTitulo() {
    console.log("El usuario hizo click en el título");
}
*/

//const titulo2 = document.getElementById("tituloForm");
/*2° forma
titulo2.onclick = clickTitulo;
*/

/*3° forma -Recomendada-*/
//titulo2.addEventListener("click", clickTitulo);
//titulo2.removeEventListener("click", clickTitulo);

//Más eventos --> https://developer.mozilla.org/es/docs/Web/Events
//Documentación --> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

//Nos permite conocer el momento en el que todos los elementos HTML de un proyecto, están cargados.
/*document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento se ha cargado");
})*/

const form = document.querySelector("#formulario");

/*const enviarFormulario = (evento) => {
    event.preventDefault();
    console.log(
        event.target.name.value,
        event.target.email.value, 
        event.target.password);
}; */

//   o 


function enviarFormulario(evento) {
    event.preventDefault();
    
    const {name, email, password} = event.target;
    console.log(
        name.value,
        email.value,
        password.value
    );

    //Verificar que se haya llenado el campo
    if(name.value.length === 0) {
        alert("El nombre no es válido")
    }
}

form.addEventListener("submit", enviarFormulario);

const section = document.querySelector("#section");
const tituloForm = document.querySelector("#tituloForm");

tituloForm.addEventListener("click", (event) => {
    console.log(event.bubbles, event.cancelBubble);
    event.stopPropagation();
    console.log(event.bubbles, event.cancelBubble);
    console.log("CLICK EN EL TÍTULO")
});

//BUENÍSIMO
section.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget);
});




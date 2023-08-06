// acceso por id
const tituloSeccionInicio = document.getElementById("init");

tituloSeccionInicio.setAttribute("init-title", "titulo-seccion-inicio");
console.log(tituloSeccionInicio);

const tituloSeccionInicioAtributo =
  tituloSeccionInicio.getAttribute("init-title");

console.log(tituloSeccionInicioAtributo);

console.log(tituloSeccionInicio.getAttribute("init-title"));

// acceso por etiqueta

const parrafos = document.getElementsByTagName("p");

console.log(parrafos);

// acceso por nombre de clase css

const iconosContacto = document.getElementsByClassName("fa-2xl");

console.log(iconosContacto);

// acceso por querySelector

const iconosContactoQuery = document.querySelector(".fa-2xl");

console.log(iconosContactoQuery);

// acceso por querySelectorAll

const iconosContactoQueryAll = document.querySelectorAll(".fa-2xl");

console.log(iconosContactoQueryAll);

//HTMLCollection

const parrafosHTMLCollection = document.getElementsByTagName("p");

//pasando la html collection a array con metodo "Array.from"
const arrayParrafosHTMLCollection = Array.from(parrafosHTMLCollection);

console.log(arrayParrafosHTMLCollection);

//pasando la html collection a array con "spread operator"

const spreadArrayParrafosHTMLCollection = [...parrafosHTMLCollection];

console.log(spreadArrayParrafosHTMLCollection);

// ----------------------- EVENTOS DOM

// evento CLICK

// const button = document.getElementById("btn");
// const button2 = document.getElementById("btn-2");

// const alertaBoton = () => {
//   alert("Que me tocas cubilla....QUE ME TOCAS????");
// };

// button.addEventListener("click", alertaBoton);

const botones = document.getElementsByTagName("button");
console.log(botones);

const arrayBotones = [...botones];

const alertaBotones = () => {
  alert("Que me tocas cubilla....QUE ME TOCAS????");
};

// for (let i = 0; i < botones.length; i++) {
//   botones[i].addEventListener("click", alertaBotones);
// }

arrayBotones.map((boton) => {
  return boton.addEventListener("click", alertaBotones, false);
});

// evento Blur

const inputs = document.getElementsByTagName("input");
console.log(inputs);

const arrayInputs = [...inputs];
console.log(arrayInputs);

// const validarInputs = () => {
//   if (arrayInputs.value.trim() === "")
//     return alert("no seas gil, ingresa el dato solicitado");
// };

// arrayInputs.map((input) => {
//   return input.addEventListener("blur", validarInputs);
// });

arrayInputs.map((input) => {
  return input.addEventListener("blur", () => {
    if (input.value.trim() === "")
      return alert("no seas gilazo, completa el dato");
  });
});

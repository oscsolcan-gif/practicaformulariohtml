/**
 * Práctica 1.1.10 · Formularios en HTML
 * Enunciado: 01-modulo1-html-css-js/1.1-HTML/1.1.10-practica-formulario.md
 *
 * El enunciado solo pide los dos formularios en HTML (no pide validación
 * con JavaScript). Este archivo sigue el esquema de 1.3.16 (capturar el
 * evento submit): evita que la página se recargue y muestra por consola
 * lo que se ha escrito. La validación básica la hace el propio HTML
 * (required, min, max, maxlength).
 */

/**
 * Formulario 1: registrarse en el club.
 * @type {HTMLFormElement}
 */
const miformulario = document.querySelector("#miformulario");

/**
 * Formulario 2: registrar el robo de la bicicleta.
 * @type {HTMLFormElement}
 */
const formularioRobo = document.querySelector("#formularioRobo");


/**
 * Escucha el envío del formulario 1. Cuando se pulsa "Enviar" y el HTML
 * da por buenos los campos, evita el envío real y muestra los datos.
 * @param {SubmitEvent} event - El evento submit del formulario.
 * @returns {void}
 */
miformulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío del formulario

  // Cada campo se saca de formulario.elements por su atributo name
  const nombre = miformulario.elements["nombre"].value;
  const apellidos = miformulario.elements["apellidos"].value;
  const edad = miformulario.elements["edad"].value;
  // Los radios comparten name="genero": .value da el del marcado ("" si ninguno)
  const genero = miformulario.elements["genero"].value;
  // La casilla no usa .value sino .checked (true si está marcada)
  const delClub = miformulario.elements["deseopertenecer"].checked;
  const habladeti = miformulario.elements["habladeti"].value;
  const email = miformulario.elements["email"].value;
  const telefono = miformulario.elements["telefono"].value;

  console.log("Nombre:", nombre);
  console.log("Apellidos:", apellidos);
  console.log("Edad:", edad);
  console.log("Sexo:", genero);
  console.log("Me siento del club:", delClub);
  console.log("Sobre mí:", habladeti);
  console.log("Email:", email);
  console.log("Teléfono:", telefono);
});


/**
 * Escucha el envío del formulario 2. Igual que el primero: evita el
 * envío real y muestra los datos por consola.
 * @param {SubmitEvent} event - El evento submit del formulario.
 * @returns {void}
 */
formularioRobo.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío del formulario

  const dia = formularioRobo.elements["dia"].value;
  const hora = formularioRobo.elements["hora"].value;
  const color = formularioRobo.elements["color"].value;
  const precio = formularioRobo.elements["precio"].value;
  const tipo = formularioRobo.elements["tipo"].value;
  const marca = formularioRobo.elements["marca"].value;

  // El select múltiple tiene varias opciones marcadas: recorro las
  // seleccionadas y guardo el value de cada una en un array
  /** @type {string[]} */
  const accesorios = [];
  const seleccionadas = formularioRobo.elements["accesorios"].selectedOptions;
  for (let i = 0; i < seleccionadas.length; i++) {
    accesorios.push(seleccionadas[i].value);
  }

  console.log("Día:", dia);
  console.log("Hora:", hora);
  console.log("Color:", color);
  console.log("Precio:", precio);
  console.log("Tipo de bicicleta:", tipo);
  console.log("Accesorios:", accesorios);
  console.log("Marca:", marca);
});

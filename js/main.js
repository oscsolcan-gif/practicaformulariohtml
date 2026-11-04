const miformulario = document.querySelector("#miformulario");



miformulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío del formulario

  const nombre = miformulario.elements["nombre"].value;
  const email = miformulario.elements["email"].value;
  const apellidos = miformulario.elements["apellidos"].value;
  const edad = miformulario.elements["edad"].value;
  const hombre = miformulario.genero.elements["hombre"].value;
  const mujer = miformulario.genero.elements["mujer"].value;


  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Apellidos:", apellidos);
  console.log("Edad:", edad);
  console.log("Hombre", hombre);
  console.log("Mujer", mujer);



  // Aquí puedes agregar la validación y el procesamiento de datos






  // Si todo está bien, puedes enviar el formulario
  // formulario.submit();
});
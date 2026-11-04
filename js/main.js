const miformulario = document.querySelector("#miformulario");



miformulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío del formulario

  const nombre = miformulario.elements["nombre"].value;
  const email = miformulario.elements["email"].value;

  console.log("Nombre:", nombre);
  console.log("Email:", email);

  // Aquí puedes agregar la validación y el procesamiento de datos

  // Si todo está bien, puedes enviar el formulario
  // formulario.submit();
});
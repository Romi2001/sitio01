/**
 * Función que valida el formulario antes de su envío.
 * Verifica que se haya ingresado un texto, se haya seleccionado un turno y se hayan elegido tres preferencias.
 * Muestra alertas de error en caso de que alguna validación falle.
 * @returns {boolean} True si el formulario es válido, False si hay errores.
 */
function validarFormulario() {
    const texto = document.querySelector('input[type="text"]');
    const turnos = document.querySelectorAll('input[type="radio"]');
    const preferencias = document.querySelectorAll('input[type="checkbox"]');
  
    // Validación del campo de texto
    if (texto.value.trim() === '') {
      alert('Por favor, ingrese un texto.');
      return false;
    }
  
    // Validación del turno seleccionado
    let turnoSeleccionado = false;
    for (const turno of turnos) {
      if (turno.checked) {
        turnoSeleccionado = true;
        break;
      }
    }
    if (!turnoSeleccionado) {
      alert('Por favor, elija un turno.');
      return false;
    }
  
    // Validación de las preferencias seleccionadas
    let preferenciasSeleccionadas = 0;
    for (const preferencia of preferencias) {
      if (preferencia.checked) {
        preferenciasSeleccionadas++;
      }
    }
    if (preferenciasSeleccionadas !== 3) {
      alert('Por favor, elija exactamente tres preferencias.');
      return false;
    }
  
    return true;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Captura el evento cuando el contenido del DOM está completamente cargado
    const form = document.querySelector('form');
    if (form) {
      // Agrega un evento al formulario para capturar el envío
      form.addEventListener('submit', function (event) {
        if (!validarFormulario()) {
          // Si el formulario no es válido, se previene el envío
          event.preventDefault();
        } else {
          // Si el formulario es válido, se establece la acción del formulario a 'p00_validada.php'
          this.action = 'p00_validada.php';
        }
      });
    }
  });
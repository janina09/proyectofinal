
const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    
    // Mostrar una alerta con el texto del botón
    alert(`Has seleccionado un producto: ${buttonText}`);
  });
});

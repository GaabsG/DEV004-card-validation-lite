// Boton de espera 

const myButton = document.getElementById('myButton');
 
myButton.addEventListener('click', function() {
    myButton.disabled = true;
    myButton.style.opacity = 0.7;
    myButton.textContent = 'Ejecutando proceso...';

// Validar si es un numero 

function validarNumero() {
    var numeroTarjeta = document.getElementById("cardNumber");
    if(typeof numeroTarjeta === "number") {
        alert("Sus datos están siendo procesados");    
    } 
    else {
        alert("Solo se admiten números");   
    }
} 

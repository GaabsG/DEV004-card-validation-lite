// Validar si es un numero 
const numeroTarjeta = document.getElementsById("cardNumber");

// Validar numeros

function validarNum(){    
    var dividir = numeroTarjeta.split(" "); // Dividir numeros individuales
    var reversa = dividir.reverse(); // Reversa
    var numPares = reversa.slice(1,3,5,7,9,11,13,15,16); // Pares
    var multiplicar = numPares *2 // Multiplicar por dos
    console.log(multiplicar)    
}

//Reversa


// Boton de espera 



// Validar si es correcto el numero 


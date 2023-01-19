// Validar si es un numero
function validateNumber() {
    const parsed = document.getElementById("cardNumber").value;
    // Condicional que alerta si es o no es un numero    
    if (isNaN(parsed)) {
        alert("Solo se aceptan numeros");
    }
    else {
        isValid(parsed);
    }
}

// Desarrollo del algoritmo 
function isValid(numeroDeTarjeta) {
    const dividir = numeroDeTarjeta.split(""); // Dividir el num en digitos
    let reversa = dividir.reverse(); // Reversa
    let suma = 0; // Variable para sumar mas adelante
    console.log("El num se divide " + dividir); // El num se divide 
    console.log("El numero esta en reversa " + reversa);
    // Loop para doblar cada dos digitos     
    for (let index = 1; index < reversa.length; index += 2) {
        let doblar = Number(reversa[index]) * 2;
        reversa[index] = doblar;
        console.log("El numero se dobla en el indice: " + index + ":" + reversa[index]);
        // Condicional para separar los digitos si son mayores a 9 y sumarlos
        if (doblar > 9) {
            let sumaMayores = doblar.toString().split("").map(Number).reduce(function (a, b) {
                return a + parseInt(b)
            }, 0);
            suma += sumaMayores;
            console.log("Suma de num mayores " + suma);
        }
        // Condicional para numeros menores a 9 y sumarlos
        if (doblar < 9) {
            let sumaMenores = doblar.toString().split("").map(Number).reduce(function (a, b) {
                return a + parseInt(b)
            }, 0);
            suma += sumaMenores;
            console.log("Suma de num menores " + suma)
        }
    }
    // Sumar numeros que no fueron doblados
    for (let i = 0; i < reversa.length; i += 2) {
        suma += parseInt(reversa[i]);
        console.log("Suma de num ordinarios " + suma)
    }
    // Condicional en la que si el residuo de una multiplicacion /10 es cero, es válida
    if ((suma % 10) == 0) {
        document.getElementById("result").innerHTML = "La tarjeta es válida";
    }
    else {
        document.getElementById("result").innerHTML = "La tarjeta no es válida. Intente de nuevo";
    }
}
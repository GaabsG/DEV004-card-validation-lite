// Validar si es un numero
function validateNumber() {
    const parsed = parseInt(document.getElementById("cardNumber").value); 
    // Condicional que alerta si es o no es un numero    
    if (isNaN(parsed)) { 
      alert("Solo se aceptan numeros"); 
    }
    else {
      alert("Estamos procesando sus datos...");
      isValid();
    }
  }

  // Desarrollo del algoritmo 
  function isValid() {
    const numeroTarjeta = (document.getElementById("cardnumber").value)
    const dividir = numeroTarjeta.split(""); // Dividir el num en digitos
    let reversa = dividir.reverse(); // Reversa
    let suma = 0 // Variable para sumar mas adelante
    // Loop para doblar cada dos digitos     
    for(let index = 1; index < reversa.length; index += 2) {
      let doblar = Number(reversa[index]) * 2;
      reversa[index] = doblar; 
      // Condicional para separar los digitos si son mayores a 9 y sumarlos
      if (doblar > 9) {
        let sumaMayores = doblar.toString().split("").map(Number).reduce(function (a, b) { return a + parseInt(b)
          }, 0);
        suma += sumaMayores;
        console.log(suma);        
      }
      // Condicional para numeros menores a 9 y sumarlos
      if (doblar < 9) {
        let sumaMenores = doblar.toString().split("").map(Number).reduce(function (a, b) { return a + parseInt(b)
          }, 0);
        suma += sumaMenores;
        console.log(suma)
      }      
    }  
    // Sumar numeros que no fueron doblados
    for (let i = 0; i < reversa.length; i += 2) {
      suma += parseInt(reversa[i]);
      console.log(suma)
    }   
    // Condicional para sabes si la tarjeta es correcta o no
    if ((suma % 10) == 0){
      document.getElementById("result").innerHTML = "La tarjeta es válida";
    }        
    else {
      document.getElementById("result").innerHTML = "La tarjeta no es válida. Intente de nuevo";
    }
  }

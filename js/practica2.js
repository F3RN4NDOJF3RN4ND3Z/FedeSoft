function esPar() {
    var numero = parseInt(prompt("Ingrese un numero por favor."));
    if (!isNaN(numero)) {
        if (numero % 2 == 0) {
            alert("El numero:" + numero + " " + "es par.");
        } else {
            alert("El numero:" + numero + " " + "es impar.");
        }
    } else {
        alert("El parametro ingresado no es un numero");
    }

}

function validarEdad() {
    var edad = prompt("Ingrese la Edad");
    edad < 18 ? console.log("estudie") : console.log("trabaje");
}
//alert("Holaaaa mundo");
var sueldo = 781242;
var subsidioTransporte = 88250;
var totalGastos, gastos, mesada;
var felicitar = "Lo estamos haciendo bien";
var reprender = "Aprendamos a programar";

function salarioMinimo() {
    return sueldo + subsidioTransporte;
}

/*function desconTar() {
    var gastosDelMes = prompt("Ingresa el valor de los gastos para este mes:");
    totalGastos = salarioMinimo() - gastosDelMes;
    if (totalGastos < 500000) {
        alert("Te restan:" + totalGastos);
    } else {
        alert("Tienes un saldo Negativo de:" + totalGastos);
    }
}*/

function calcularGastos() {
    gastos = prompt("ingrese gastos");
    mesada = salarioMinimo() - gastos;
    console.log("Esta es la mesada:" + mesada);
    if (mesada > 500000) {
        document.getElementById("jsoperation").innerHTML = felicitar;
    } else {
        document.getElementById("jsoperation").innerHTML = reprender;
    }
}

calcularGastos();
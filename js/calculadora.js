function Operacion(accion) {
    $("#operacion").val(accion);
    var resultado = parseFloat($("#resultado").val());
    if (isNaN(resultado)) {
        resultado = 0;
    }
    var valor = parseFloat($("#valor").val());
    if (isNaN(valor)) {
        valor = 0;
    }
    switch (accion) {
        case "Sumar":
            resultado = resultado + valor;
            if (isNaN(resultado)) {
                resultado = 0;
            }
            break;
        case "Restar":
            resultado = resultado - valor;
            if (isNaN(resultado)) {
                resultado = 0;
            }
            break;
        case "Dividir":
            resultado = resultado / valor;
            if (isNaN(resultado)) {
                resultado = 0;
            }
            break;
        case "Multiplicar":
            resultado = resultado * valor;
            if (isNaN(resultado)) {
                resultado = 0;
            }
            break;
        case "Cuadrado":
            resultado = Math.pow(valor, 2);
            if (isNaN(resultado)) {
                resultado = 0;
            }
            break;
        case "Raiz":
            resultado = Math.sqrt(valor);
            if (isNaN(resultado)) {
                resultado = 0;
            }
            break;
    }
    $("#resultado").val(resultado);
}

$(document).ready(function() {
    $("#btnSumar").click(function() { Operacion("Sumar"); });
    $("#btnRestar").click(function() { Operacion("Restar"); });
    $("#btnDividir").click(function() { Operacion("Dividir"); });
    $("#btnMultiplicar").click(function() { Operacion("Multiplicar"); });
    $("#btnCuadrado").click(function() { Operacion("Cuadrado"); });
    $("#btnRaiz").click(function() { Operacion("Raiz"); });
    $("#btnLimpiar").click(function() {
        $("#resultado").val("0");
        $("#valor").val("0");
        $("#operacion").val("");
    });
});
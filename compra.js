var intervalo;
var contador = 7;
var numero;
window.onload = function () {
    document.getElementById("cuenta").innerHTML = "" + contador;
    intervalo = window.setInterval(function () {
        contador--;
        document.getElementById("cuenta").innerHTML = "" + contador;
    }, 1000);
    numero = Math.floor((Math.random() * 10));
    console.log("numero generado:" + numero);
    var checkbtn = document.getElementById("comprar");
    checkbtn.addEventListener("click", checkInput, false);
};
function checkInput() {
    var valor = document.getElementById("numero");
    var valortxt = valor.value;
    var numeroInput = parseInt(valortxt);
    if (numeroInput === numero) {
        window.document.getElementById("mensaje").innerHTML = numeroInput + " = " + numero;
        window.opener.document.getElementById("mensaje").innerHTML = numeroInput + " = " + numero;
    }
    else {
        if (numeroInput > numero) {
            window.document.getElementById("mensaje").innerHTML = "numero inferior";
            window.opener.document.getElementById("mensaje").innerHTML = "numero inferior";
        }
        else {
            window.document.getElementById("mensaje").innerHTML = "numero superior";
            window.opener.document.getElementById("mensaje").innerHTML = "numero superior";
        }
    }
}

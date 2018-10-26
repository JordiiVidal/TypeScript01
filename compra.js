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
    checkbtn.addEventListener("click", checkInput2, false);
};
function checkInput2() {
    var valor = document.getElementById("numero");
    var valortxt = valor.value;
    var numeroInput = parseInt(valortxt);
    if (numeroInput === numero) {
        window.document.getElementById("mensaje").innerHTML = "Mis bendiciones numero acertado!!";
        window.opener.document.getElementById("mensaje").innerHTML = "Mis bendiciones numero acertado!!";
        window.opener.close();
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

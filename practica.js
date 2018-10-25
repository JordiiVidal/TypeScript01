var numbers = [0,];
var words = ["",];
window.onload = function () {
    //01
    var date = new Date();
    document.getElementById('listaPropiedades').innerHTML =
        "<ul>" +
            "<li>" + Math.max() + "</li><li>" + Math.min() + "</li>" +
            "<li>" + window.screen.height + "</li><li>" + window.screen.width + "</li>" +
            "<li>" + window.innerHeight + "</li><li>" + window.innerWidth + "</li>" +
            "<li>" + document.location.href + "</li><li>" + document.title + "</li>" +
            "<li>" + Math.floor(Math.random() * 200) + "</li><li>" + window.navigator.appVersion + "</li>" +
            "<li>" + date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear() + "</li><li>" + date.getHours() + ":" + date.getMinutes() + "</li>" +
            "</ul>";
    //02
    var checkbtn = document.getElementById("check");
    checkbtn.addEventListener("click", checkInput, false);
    //03
    var comprabtn = document.getElementById("comprar");
    comprabtn.addEventListener("click", openCompra, false);
};
function checkInput() {
    var divResult = document.getElementById("resulttxt");
    var textResult = divResult.textContent;
    var divResultnum = document.getElementById("resultnum");
    var numResult = divResultnum.textContent;
    var miInput = document.getElementById("inputExc2");
    var txtInput = miInput.value;
    var lastNumber = numbers.length - 1;
    var lastText = words.length - 1;
    var wordfinal = words[lastText];
    var numberfinal = numbers[lastNumber];
    var input = parseInt(txtInput);
    if (isNaN(input)) {
        if (txtInput == '') {
            alert('Campo Vacio');
        }
        else { //cuando es texto
            if (wordfinal.length > txtInput.length) {
                divResult.innerHTML = "La ultima palabra introducida " + wordfinal + " es mas grande que la actual " + txtInput;
                words.push(txtInput);
            }
            else if (wordfinal.length < txtInput.length) {
                divResult.innerHTML = "La palabra actual " + txtInput + " es mas grande que la anterior " + wordfinal;
                words.push(txtInput);
            }
            else {
                divResult.innerHTML = "La palabra actual " + txtInput + " es igual a la anterior " + wordfinal;
                words.push(txtInput);
            }
        }
    }
    else { //cuando es numero
        if (numberfinal > input) {
            divResult.innerHTML = "El ultimo numero introducida " + numberfinal + " es mas grande que la actual " + input;
            numbers.push(input);
        }
        else if (numberfinal < input) {
            divResult.innerHTML = "El numero actual " + input + " es mas grande que la anterior " + numberfinal;
            numbers.push(input);
        }
    }
}
function openCompra() {
    var width = window.screen.width / 2;
    var height = window.screen.height / 2;
    var Top = height - 300;
    var Left = width - 300;
    ventanaComprar = window.open("compra.html", "", "width=300,height=300,menubar=no,left=" + Left + ",top=" + Top);
    //ventanaAciertaNumero = window.open("numero.html","","width=300,height=300;menubar=no;left=0");
    window.setTimeout(function () {
        ventanaComprar.close();
    }, 7000);
}
var ventanaComprar;

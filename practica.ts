window.onload = function (){

   //01
    var date = new Date();
    document.getElementById('listaPropiedades').innerHTML =
    "<ul>"+
    "<li>"+Math.max()+"</li><li>"+Math.min()+"</li>"+
    "<li>"+window.screen.height+"</li><li>"+window.screen.width+"</li>"+
    "<li>"+window.innerHeight+"</li><li>"+window.innerWidth+"</li>"+
    "<li>"+document.location.href+"</li><li>"+document.title+"</li>"+
    "<li>"+Math.floor(Math.random()*200)+"</li><li>"+ window.navigator.appVersion+"</li>"+
    "<li>"+date.getDay()+"-"+date.getMonth()+"-"+date.getFullYear()+"</li><li>"+date.getHours()+":"+date.getMinutes()+"</li>"+
    "</ul>";

    //02

    var checkbtn = document.getElementById("check");
    checkbtn.addEventListener("click",checkInput,false);

    //03
    var comprabtn = document.getElementById("comprar");
    comprabtn.addEventListener("click",openCompra,false);

}
function checkInput(){

    let divResult = document.getElementById("resulttxt");
    let textResult  = divResult.textContent;

    let divResultnum = document.getElementById("resultnum");
    let numResult  = divResultnum.textContent;

    let miInput: HTMLInputElement = <HTMLInputElement>document.getElementById("inputExc2");
    let txtInput:string= miInput.value;

    let input: number = parseInt(txtInput);
    if (isNaN(input)) {
        
        if(txtInput == ''){
            alert('Campo Vacio');
        }else{//cuando es texto
           if(textResult.length > txtInput.length){
                divResult.innerHTML = ""+textResult;
                
           }else{
                divResult.innerHTML = ""+txtInput;
           }
        }
    }else{//cuando es numero
        if(parseInt(numResult) > input){
            divResultnum.innerHTML = ""+numResult;
       }else{
            divResultnum.innerHTML = ""+input;
       }
    }
}function openCompra(){
    var width = window.screen.width/2;
    var height= window.screen.height/2;
    var Top= height-300;
    var Left= width-300;
    ventanaComprar = window.open("compra.html","","width=300,height=300,menubar=no,left="+Left+",top="+Top);
    //ventanaAciertaNumero = window.open("numero.html","","width=300,height=300;menubar=no;left=0");
    window.setTimeout(function(){
        ventanaComprar.close();
    },7000)
}
var ventanaComprar;
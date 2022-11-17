alert("oi");
var Valor1
var Valor2

function Adicao(){ 
    Valor1=document.getElementById('valor1').value;
    Valor2=document.getElementById('valor2').value; 
    total = parseInt(Valor1) + parseInt(Valor2);
    document.getElementById("txtTotal").value=total;
}
function Subtracao(){
    Valor1=document.getElementById('valor1').value;
    Valor2=document.getElementById('valor2').value;
    total = parseInt(Valor1) - parseInt(Valor2);
    document.getElementById('txtTotal').value=total;
}
function Divisao(){ 
    Valor1=document.getElementById('valor1').value;
    Valor2=document.getElementById('valor2').value; 
    total = parseInt(Valor1) / parseInt(Valor2);
    document.getElementById("txtTotal").value=total;
}
function Multiplicacao(){ 
    Valor1=document.getElementById('valor1').value;
    Valor2=document.getElementById('valor2').value; 
    total = parseInt(Valor1) * parseInt(Valor2);
    document.getElementById("txtTotal").value=total;
}

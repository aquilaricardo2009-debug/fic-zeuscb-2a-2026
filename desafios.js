let pessoas=[];

function cadastrar(){

let nome=document.getElementById("nome").value;

let idade=parseInt(document.getElementById("idade").value);

let nota1=parseFloat(document.getElementById("nota1").value);

let nota2=parseFloat(document.getElementById("nota2").value);

let media=(nota1+nota2)/2;

let status="";

if(media>=6)
status="Aprovado";
else if(media>=1)
status="Recuperação";
else
status="Reprovado";

pessoas.push({nome,idade,media});

document.getElementById("lista").innerHTML+=`
<tr>
<td>${nome}</td>
<td>${idade}</td>
<td>${media.toFixed(1)}</td>
<td>${status}</td>
</tr>`;

let maiores=pessoas.filter(p=>p.idade>=18).map(p=>p.nome);

document.getElementById("maiores").innerHTML=maiores.join(", ");

}

function separar(){

let texto=document.getElementById("nomes").value;

let lista=texto.split(",");

document.getElementById("resultadoSplit").innerHTML=lista.join("<br>");

}

function mostrarDia(){

let dia=parseInt(document.getElementById("dia").value);

let nomeDia="";

switch(dia){

case 1:nomeDia="Domingo";break;

case 2:nomeDia="Segunda";break;

case 3:nomeDia="Terça";break;

case 4:nomeDia="Quarta";break;

case 5:nomeDia="Quinta";break;

case 6:nomeDia="Sexta";break;

case 7:nomeDia="Sábado";break;

default:nomeDia="Inválido";

}

document.getElementById("resultadoDia").innerHTML=nomeDia;

}

function votacao(){

let votos=0;

let voto;

while(voto!=80){

voto=parseInt(prompt("Digite 80 para votar"));

votos++;

}

document.getElementById("votos").innerHTML="Total de tentativas: "+votos;

}

function calcular(){

let a=parseFloat(document.getElementById("n1").value);

let b=parseFloat(document.getElementById("n2").value);

let op=document.getElementById("op").value;

let r;

switch(op){

case "+":r=a+b;break;

case "-":r=a-b;break;

case "*":r=a*b;break;

case "/":r=a/b;break;

}

document.getElementById("calc").innerHTML="Resultado: "+r;

}

function ordenar(){

let nomes=pessoas.map(p=>p.nome);

nomes.sort();

document.getElementById("ordenados").innerHTML=nomes.join(", ");

}

function trocarCor(){

document.body.style.background=
document.body.style.background=="lightblue"?"#f2f2f2":"lightblue";

}

function trocarImagem(){

let img=document.getElementById("imagem");

if(img.src.includes("200"))
img.src="https://picsum.photos/201";
else
img.src="https://picsum.photos/200";

}

function mostrarTexto(){

let t=document.getElementById("texto");

if(t.style.display=="none")
t.style.display="block";
else
t.style.display="none";

}

function mostrarData(){

document.getElementById("data").innerHTML=new Date();

}

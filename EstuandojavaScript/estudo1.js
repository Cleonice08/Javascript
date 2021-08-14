<button>Aperte-me</button>
let button = document.querySelector('button');
button.onclik = function(){
    let nome = prompt('Qual seu nome?');
    alert('Olá '+ nome + ', é um prazer te ver!');
}
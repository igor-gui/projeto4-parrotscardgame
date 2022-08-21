
let qtd = prompt("Com quantas cartas quer jogar?");

while((qtd%2 !== 0)||(qtd<=0)||(qtd>14)){
alert('Digite um valor par entre 2 e 14!!');
qtd = prompt("Com quantas cartas quer jogar?");
}

const divGame = document.querySelector('.game');
const gamelist = [qtd];

let contador = 0;


while(contador<(qtd)){
divGame.innerHTML = divGame.innerHTML + 
`<div class="front-card">
    <img class="front-img" src="Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">
    <img class="back-img hidden" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/parrot0.gif">
</div>`;
contador++;
}
contador = 0;

const a = divGame.children;
console.log(a[0]);
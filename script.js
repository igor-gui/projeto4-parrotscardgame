
let qtd = prompt("Com quantas cartas quer jogar?");

while((qtd%2 !== 0)||(qtd<=0)||(qtd>14)){
alert('Digite um valor par entre 4 e 14!!');
qtd = prompt("Com quantas cartas quer jogar?");
}

const divGame = document.querySelector('.game');

let contador = 0;
let cards = [];
// Aproveitar o for abaixo para criar um array guardando as informações


for(let i=0;i<2;i++){
while(contador<(qtd/2)){
let pos = `<div onclick="viraCarta(this)" class="card">
    <img class="front-img" src="Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">
    <img class="back-img hidden" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/parrot${contador}.gif">
</div>`;
contador++;
cards.push(pos);
}
contador = 0;

}



function viraCarta(elemento) {
    const s = elemento.querySelectorAll('img');
    for(let i=0;i<2;i++){
        s[i].classList.toggle('hidden');
    }
}


let a = [divGame.querySelectorAll('.card')];



function comparador() { 
	return Math.random() - 0.5; 
}
cards.sort(comparador);
console.log(cards);

for(let i = 0; i<cards.length; i++){
    divGame.innerHTML += cards[i];
}

    
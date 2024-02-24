const resultado = document.querySelector('.resultado');
const pontuacaoHuman = document.querySelector('#pontuacao-human');
const pontuacaoComputer = document.querySelector('#pontuacao-computer');

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choice = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log(`Jogador jogou ${human}`);
    console.log(`Máquina jogou ${machine}`);

    if (human === machine) {
        resultado.innerHTML = 'Deu empate!';
    } else if (
        (human === "pedra" && machine === "tesoura") ||
        (human === "papel" && machine === "pedra") ||
        (human === "tesoura" && machine === "papel")
    ) {
        pontuacaoHuman.innerHTML =  Number(pontuacaoHuman.innerHTML) + 1;
        resultado.innerHTML = "Você ganhou da Alexia!";
    } else {
        pontuacaoComputer.innerHTML =  Number(pontuacaoComputer.innerHTML) + 1;
        resultado.innerHTML = "Você perdeu da Alexia!";
    }
}

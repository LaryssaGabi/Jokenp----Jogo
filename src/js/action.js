const resultado = document.querySelector('.resultado')
const pontuacaoHuman = document.querySelector('#pontuacao-human')
const pontuacaoComputer = document.querySelector('#pontuacao-computer')


const playHuman = (humamChoice) => {
    playTheGame(humamChoice, playMachine())
}

const playMachine = () => {
    const choice = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3);

    return choice[Math.floor(randomNumber)]
}

const playTheGame = (human, machine) => {
    console.log(`Jogador jogou ${human}`)
    console.log(`Máquina jogou ${machine}`)
    if (human == machine) {
        resultado.innerHTML = 'Deu empate!'
    } else if ((human == "pedra" && machine == "tesoura") || (human == "tesoura" && machine == "pedra")) {
        pontuacaoComputer.innerHTML =  Number(pontuacaoComputer.innerHTML) + 1
        resultado.innerHTML = "Você perdeu da Alexia!"
        
    } else {
        pontuacaoHuman.innerHTML =  Number(pontuacaoHuman.innerHTML) + 1
        resultado.innerHTML = "Você ganhou da Alexia!"
    }
}
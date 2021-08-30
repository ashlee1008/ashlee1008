const choiceValue = {
    rock: 0,
    paper: 1,
    scissors: 2
}

const checkUserInput = input => {
    switch (input){
        case 'rock':
            break;
        case 'paper':
            break;
        case 'scissors':
            break;
        case 'bomb':
            console.log(`YOU win!`);
            break;
        default:
            console.log('Invalid Input.')
            process.exit(1);
            break;
    }
}

const getComputerChoice = () => {
    let choiceIndex = Math.floor(Math.random() * 3);
    const choices = {
        0: 'rock',
        1: 'paper',
        2: 'scissors'
    }
    return choices[choiceIndex];
}

const determineWinner = (userChoice, computerChoice) => {
    let result = choiceValue[userChoice] - choiceValue[computerChoice];
    switch (result) {
        case 0:
            return 'tied';
            break;
        case -1:
            return 'Player lost';
            break;
        case 2:
            return 'Player lost';
            break;
        case 1:
            return 'Player win';
            break;
        case -2:
            return 'Player win';
            break;
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const playGame = () => {
    readline.question(`INPUT (rock, paper or scissors): `, input => {
        let userInput = input.toLowerCase();
        readline.close();
        checkUserInput(userInput);
        console.log(`Your choice: ${userInput}`)
        let computerInput = getComputerChoice()
        console.log(`Computer choice: ${computerInput}`)
        console.log(`RESULT: ${determineWinner(userInput, computerInput)}`)
    })
}

playGame()


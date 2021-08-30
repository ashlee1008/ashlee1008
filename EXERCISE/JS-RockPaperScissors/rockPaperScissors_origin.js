const getUserChoice = userInput => {
    input = userInput.toLowerCase();
    if (input === 'rock'){
        return input;
    } else if (input === 'paper'){
        return input;
    } else if (input === 'scissors'){
        return input;
    } else {
        console.log('Invalid input!');
        process.exit(1);
    }
}

const getComputerChoice = () => {
    let index = Math.floor(Math.random() * 3)
    switch (index) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (
        userChoice === 'rock' && computerChoice ==='paper' ||
        userChoice === 'paper' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'rock'
        ) {
            return 'Player lost!'
        } else if (
            userChoice === 'rock' && computerChoice ==='scissors' ||
            userChoice === 'paper' && computerChoice === 'rock' ||
            userChoice === 'scissors' && computerChoice === 'paper'
        ) {
            return 'Player win!'
        } else {
            return 'Tied!'
        }

}

const playGame = () => {
    let userChoice = getUserChoice('rock');
    if (userChoice === 'bomb') {
        console.log('Player win!!!');
        process.exit(1)
    }
    let computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}`);
    console.log(`Computer: ${computerChoice}`);
    console.log(`Result: ${determineWinner(userChoice, computerChoice)}`)
}

playGame()
const doorImage1 = document.querySelector('#door1')
const doorImage2 = document.querySelector('#door2')
const doorImage3 = document.querySelector('#door3')
const startButton = document.querySelector('#start');
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let currentlyPlaying = true;

doorImage1.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1)
    };
})
doorImage2.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2
        playDoor(doorImage2);
    }
})
doorImage3.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
})
startButton.onclick = () => {
    if (!currentlyPlaying) startRound();
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good Luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game Over!';
    }
    currentlyPlaying = false;
}

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    }
    return false;
}

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    }
    return true;
}

const playDoor = (door) => {
    numClosedDoors -= 1;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver()
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }
}
randomChoreDoorGenerator()
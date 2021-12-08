/*----- constants -----*/
class DISK {
    constructor(num, name ,width) {
        this.num = num;
        this.name = `testing ${name}`;
        this.width = width;
    }
}

/*----- app's state (variables) -----*/
// game win condition
let gameFinished;
// variable number of disks
let stackHeight;
// selected disk
let selectDisk;
let selectTower;
let stackOneArr;
let stackTwoArr;
let stackThreeArr;

/*----- cached element references -----*/
const aboutGameBtn = document.querySelector('.aboutGame');
const startGame = document.querySelector('.initGame');
const resetGameBtn = document.querySelector('.resetGame');
const towerHeight = document.querySelector('.towerHeight');
const towerContainer = document.querySelector('.gameContainer');
const stackOne = document.querySelector('.stackOne');
const stackTwo = document.querySelector('.stackTwo');
const stackThree = document.querySelector('.stackThree');

/*----- event listeners -----*/
startGame.addEventListener('click', init);
// resetGameBtn.addEventListener('click', render);
towerContainer.addEventListener('click', disk);
// stackOne.addEventListener('click', move);
// stackTwo.addEventListener('click', move);
// stackThree.addEventListener('click', move);

/*----- functions -----*/
// init function
    // sets the game to the start with all the disks on the left side and ordered
function init(event) {
    // event.preventDefault();
    // set win condition to false
    gameFinished = false;
    stackOneArr = [];
    stackTwoArr = [];
    stackThreeArr = [];
    stackHeight = parseInt(towerHeight.value);
    render();
    // track();
}

// render function
function render(event) {
    // event.preventDefault();

    // clear current tower
    // while(stackOne.contains(div)) {
    //     stackOne.removeChild();
    // }

    // create as many disks as the input value
    for (let i = 1; i < stackHeight + 1; i++) {
        // create new object
        const disk = new DISK(i, i, i);
        // create div element
        const placeholderDisk = document.createElement('div');
        // fill inner text of div element for testing purposes
        placeholderDisk.innerText = disk.name;
        // add class to div element
        placeholderDisk.classList.add('disk');
        // push disk to stackOneArr
        stackOneArr.push(disk);
        // append the div element to the parent div element
        stackOne.appendChild(placeholderDisk);
    }
}

// https://stackoverflow.com/questions/24050738/javascript-how-to-dynamically-move-div-by-clicking-and-dragging
// function track(event) {
    // towerContainer.addEventListener('mousedown', function() {
    //     moved = false;
    //     // console.log('down', moved);
    // });
    // towerContainer.addEventListener('mousemove', function() {
    //     moved = true;
    //     // console.log('hold', moved);
    // });
    // towerContainer.addEventListener('mouseup', function(event) {
    //     if(moved === true) {
    //         // console.log('down and hold');
    //     }
    //     console.log(event);
    //     move(event);
    // });
// }

function disk(event) {
    if(event.target.classList.contains('disk')) {
        selectDisk = event.target;
        // console.log(selectDisk);
    }
    tower(event, selectDisk);
}

function tower(event, selectDisk) {
    if(event.target.classList.contains('towerSection')) {
        selectTower = event.target;
        if(event.target.classList.contains('stackTwo')) {
            stackOneArr.shift();
            stackTwoArr.unshift(stackOneArr[0]);
            console.log(stackTwoArr);
            selectTower.prepend(selectDisk);
        }
        // console.log(selectTower);
    }
}
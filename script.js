/*----- constants -----*/
// class DISK {
//     constructor(num) {
//         this.num = num
//     }
// }

/*----- app's state (variables) -----*/
// game win condition
let gameFinished;
// variable number of disks
let stackHeight;
// selected disk
let selectDisk;

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
towerContainer.addEventListener('click', select);
stackOne.addEventListener('click', move);
stackTwo.addEventListener('click', move);
stackThree.addEventListener('click', move);

/*----- functions -----*/
// init function
    // sets the game to the start with all the disks on the left side and ordered
function init() {
    // set win condition to false
    gameFinished = false;
    startPos = false;
    stackHeight = parseInt(towerHeight.value);
    render();
    track();
}

// render function
function render() {
    // clear current tower
    // while(stackOne.contains(div)) {
    //     stackOne.removeChild();
    // }

    // create as many disks as the input value
    for (let i = 1; i < stackHeight + 1; i++) {
        // create div element
        const disk = document.createElement('div');
        // add class to div element
        disk.classList.add(i, 'disk');
        // add css to div element for testing purposes
        disk.style.paddingLeft = '25px';
        disk.style.paddingRight = '25px';
        disk.style.border = 'solid red';
        // fill inner text of div element for testing purposes
        disk.innerText = 'testing' + i;
        // append the div element to the parent div element
        stackOne.appendChild(disk);
    }
}

// https://stackoverflow.com/questions/24050738/javascript-how-to-dynamically-move-div-by-clicking-and-dragging
function track(event) {
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
}

function select(event) {
    if(event.target.classList.contains('disk')) {
        selectDisk = event.target;
    }
}

function move(event) {
    console.log(event.target);
}
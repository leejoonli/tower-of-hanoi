/*----- constants -----*/
// class Disk {
//     constructor(num) {
//         this.num = num
//     }
// }

/*----- app's state (variables) -----*/
// game win condition
let gameFinished;
// variable number of disks
let stackHeight;
// variable to see if the div element is interacted with
let moved;

/*----- cached element references -----*/
const aboutGameBtn = document.querySelector('.aboutGame');
const startGame = document.querySelector('.initGame');
const resetGameBtn = document.querySelector('.resetGame');
const towerHeight = document.querySelector('.towerHeight');
const stackOne = document.querySelector('.stackOne');
const stackTwo = document.querySelector('.stackTwo');
const stackThree = document.querySelector('.stackThree');

/*----- event listeners -----*/
startGame.addEventListener('click', init);

/*----- functions -----*/
// init function
    // sets the game to the start with all the disks on the left side and ordered
function init() {
    // set win condition to false
    gameFinished = false;
    moved = false;
    stackHeight = parseInt(towerHeight.value);
    render();
}

// render function
function render() {
    // create as many disks as the input value
    for (let i = 1; i < stackHeight + 1; i++) {
        // create div element
        const disk = document.createElement('div');
        // add event listeners to the div element <- maybe add them to parent element
        disk.addEventListener('mousedown', function() {
            moved = false;
            console.log('down', moved);
        });
        disk.addEventListener('mousemove', function() {
            moved = true;
            console.log('hold', moved);
        });
        disk.addEventListener('mouseup', function() {
            if(moved === true) {
                console.log('down and hold');
            }
        });
        // add class to div element
        disk.classList.add(i);
        // add css to div element for testing purposes
        disk.style.paddingLeft = '25px';
        disk.style.paddingRight = '25px';
        // fill inner text of div element for testing purposes
        disk.innerText = 'testing' + i;
        // append the div element to the parent div element
        stackOne.appendChild(disk);
        // console.log(disk.classList);
    }
}
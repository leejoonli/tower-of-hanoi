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
// selected disk and tower
let selectDisk;
let selectTower;
// stack arrays to store objects
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
resetGameBtn.addEventListener('click', reset);
towerContainer.addEventListener('click', pickTower);

/*----- functions -----*/
// init function
    // sets the game to the start with all the disks on the left side and ordered
function init() {
    // set win condition to false
    gameFinished = false;
    selectDisk = false;
    stackOneArr = [];
    stackTwoArr = [];
    stackThreeArr = [];
    stackHeight = parseInt(towerHeight.value);
    render();
    // track();
}

// render function
function render() {
    // create as many disks as the input value
    for (let i = stackHeight; i > 0; i--) {
        // create new object
        const disk = new DISK(i, i);
        // create div element
        const placeholderDisk = document.createElement('div');
        // fill inner text of div element for testing purposes
        placeholderDisk.innerText = disk.name;
        // add class to div element
        placeholderDisk.classList.add('disk', `${i}`);
        // push disk to stackOneArr
        stackOneArr.unshift(disk);
        // append the div element to the parent div element
        stackOne.prepend(placeholderDisk);
    }
}

function reset() {
    while(stackOne.firstChild) {
        stackOne.removeChild(stackOne.firstChild);
    }
    while(stackTwo.firstChild) {
        stackTwo.removeChild(stackTwo.firstChild);
    }
    while(stackThree.firstChild) {
        stackThree.removeChild(stackThree.firstChild);
    }
    selectDisk = false;
    stackOneArr = [];
    stackTwoArr = [];
    stackThreeArr = [];
    render();
}

function pickTower(event) {
    if(event.target.classList.contains('disk') && event.target === event.target.parentElement.firstChild) {
        selectDisk = event.target;
    }
    if(event.target.classList.contains('stackOne')) {
        tower1();
        selectDisk = false;
    }
    else if(event.target.classList.contains('stackTwo')) {
        tower2();
        selectDisk = false;
    }
    else if(event.target.classList.contains('stackThree')) {
        tower3();
        selectDisk = false;
    }
    else {
        return;
    }
}

function tower1() {
    selectTower = event.target;
    if(selectDisk.parentElement.classList.contains('stackTwo')) {
        if(stackOneArr.length === 0 && selectDisk !== undefined) {
            stackOneArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            stackOne.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[1]) < stackOneArr[0].num) {
            stackOneArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            stackOne.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    if(selectDisk.parentElement.classList.contains('stackThree')) {
        if(stackOneArr.length === 0 && selectDisk !== undefined) {
            stackOneArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackOne.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[1]) < stackOneArr[0].num) {
            stackOneArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackOne.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}

function tower2() {
    selectTower = event.target;
    if(selectDisk.parentElement.classList.contains('stackOne')) {
        if(stackTwoArr.length === 0 && selectDisk !== undefined) {
            stackTwoArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            stackTwo.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[1]) < stackTwoArr[0].num) {
            stackTwoArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            stackTwo.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    else if(selectDisk.parentElement.classList.contains('stackThree')) {
        if(stackTwoArr.length === 0 && selectDisk !== undefined) {
            stackTwoArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackTwo.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[1]) < stackTwoArr[0].num) {
            stackTwoArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackTwo.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    else {
        return
    }
}

function tower3() {
    selectTower = event.target;
    if(selectDisk.parentElement.classList.contains('stackOne')) {
        if(stackThreeArr.length === 0 && selectDisk !== undefined) {
            stackThreeArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            stackThree.prepend(selectDisk);
            win();
        }
        else if(parseInt(selectDisk.classList[1]) < stackThreeArr[0].num) {
            stackThreeArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            stackThree.prepend(selectDisk);
            win();
        }
        else {
            return;
        }
    }
    if(selectDisk.parentElement.classList.contains('stackTwo')) {
        if(stackThreeArr.length === 0 && selectDisk !== undefined) {
            stackThreeArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            stackThree.prepend(selectDisk);
            win();
        }
        else if(parseInt(selectDisk.classList[1]) < stackThreeArr[0].num) {
            stackThreeArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            stackThree.prepend(selectDisk);
            win();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}

function win() {
    if(stackThreeArr.length === stackHeight) {
        console.log('you win');
    }
    else {
        return;
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
/*----- constants -----*/
class DISK {
    constructor(num, name, width) {
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
const modalAboutGame = document.querySelector('.modalAboutGame');
const winGame = document.querySelector('.winGame');
const winGameCloseBtn = document.querySelector('.winGameClose');
const closeAboutGameBtn = document.querySelector('.modalClose');
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
aboutGameBtn.addEventListener('click', displayAboutGameModal);
closeAboutGameBtn.addEventListener('click', closeAboutGameModal);
winGameCloseBtn.addEventListener('click', closeWinGame);

/*----- functions -----*/
// init function sets the game to the start with all the disks on the left side and ordered
function init() {
    // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/ removes all previous child elements if any
    while(stackOne.firstChild) {
        stackOne.removeChild(stackOne.firstChild);
    }
    while(stackTwo.firstChild) {
        stackTwo.removeChild(stackTwo.firstChild);
    }
    while(stackThree.firstChild) {
        stackThree.removeChild(stackThree.firstChild);
    }
    // set win condition to false
    gameFinished = false;
    selectDisk = false;
    stackOneArr = [];
    stackTwoArr = [];
    stackThreeArr = [];
    stackHeight = parseInt(towerHeight.value);
    render();
    // track(); <- not implemented
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
    // removes all child elements of stackOne div, stackTwo div, and stackThree div
    while(stackOne.firstChild) {
        stackOne.removeChild(stackOne.firstChild);
    }
    while(stackTwo.firstChild) {
        stackTwo.removeChild(stackTwo.firstChild);
    }
    while(stackThree.firstChild) {
        stackThree.removeChild(stackThree.firstChild);
    }
    // sets all current arrays to empty and current selected disk and win game to false
    gameFinished = false;
    selectDisk = false;
    stackOneArr = [];
    stackTwoArr = [];
    stackThreeArr = [];
    render();
}

function clear() {
    // removes all child elements of stackOne div, stackTwo div, and stackThree div
    while(stackOne.firstChild) {
        stackOne.removeChild(stackOne.firstChild);
    }
    while(stackTwo.firstChild) {
        stackTwo.removeChild(stackTwo.firstChild);
    }
    while(stackThree.firstChild) {
        stackThree.removeChild(stackThree.firstChild);
    }
}

function pickTower(event) {
    // choose disk div element and store it in the app state variable
    if(event.target.classList.contains('disk') && event.target === event.target.parentElement.firstChild) {
        selectDisk = event.target;
    }
    // choose disk tower div element to move selectDisk to the said disk tower
    // depending on which tower element is chosen run a specific function
    if(event.target.classList.contains('stackOne')) {
        tower1();
        // sets the chosen disk back to false just in case.  I don't know if this actually does anything useful
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
    // when the function runs set the selected tower div element to its app state variable
    selectTower = event.target;
    // check to know which stack the select disk div element is coming from
    if(selectDisk.parentElement.classList.contains('stackTwo')) {
        // check to see if the chosen tower element and its corresponding array has any elements inside
        if(stackOneArr.length === 0 && selectDisk !== undefined) {
            // if no elements in the array, shift it in and remove it the array that it came from
            stackOneArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            // update html to reflect the current array
            stackOne.prepend(selectDisk);
        }
        // check to see if the selected disk div element has a num value less than the num value of the first index of the selected tower array
        else if(parseInt(selectDisk.classList[1]) < stackOneArr[0].num) {
            // if true, then shift it in and remove it from the array that it came from
            stackOneArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            // update html to reflect the current array
            stackOne.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    else if(selectDisk.parentElement.classList.contains('stackThree')) {
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
    else if(selectDisk.parentElement.classList.contains('stackTwo')) {
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
        gameFinished = true;
        winGame.style.display = 'block';
    }
    else {
        return;
    }
}

function displayAboutGameModal() {
    modalAboutGame.style.display = 'block';
}

function closeAboutGameModal() {
    modalAboutGame.style.display = 'none';
}

function closeWinGame() {
    winGame.style.display = 'none';
    if(gameFinished === true) {
        clear();
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
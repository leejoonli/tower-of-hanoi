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
// resetGameBtn.addEventListener('click', render);
towerContainer.addEventListener('click', disk);
towerContainer.addEventListener('click', pickTower);
// stackOne.addEventListener('click', tower1);
// stackTwo.addEventListener('click', tower2);
// stackThree.addEventListener('click', tower3);

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

//&& stackOneArr[0] == event.target.classList[1]
function disk(event) {
    if(event.target.classList[1] == stackOneArr[0].num) {
        selectDisk = event.target;
    }
    // else if(event.target.classList[1] == stackTwoArr[0].num) {
    //     selectDisk = event.target;
    // }
    // else if(event.target.classList[1] == stackThreeArr[0].num) {
    //     selectDisk = event.target;
    // }
}

function pickTower(event) {
    if(event.target.classList.contains('stackOne') && event.target.classList.contains('towerSection')) {
        tower1(event);
    }
    else if(event.target.classList.contains('stackTwo') && event.target.classList.contains('towerSection')) {
        tower2(event);
    }
    else if(event.target.classList.contains('stackThree') && event.target.classList.contains('towerSection')) {
        tower3(event);
    }
    else {
        return;
    }
}

function tower1(event) {
    // conditional to see if user clicked on any tower section
    selectTower = event.target;
    if(selectDisk.parentElement.classList.contains('stackTwo')) {
        // console.log(selectTower);
        if(stackOneArr[0].length === 0 && selectDisk !== undefined) {
            // check the width of the first element in stack one and compare it to the width of the first element in stack two
            // if the width is greater then return early
            stackOneArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            // console.log(stackOneArr, stackTwoArr);
            stackOne.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[0]) < stackOneArr[0].num) {
            stackOneArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            stackOne.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    if(event.target.classList.contains('stackThree')) {
        selectTower = event.target;
        // console.log(selectTower);
        if(stackThreeArr[0] == undefined && selectDisk !== undefined) {
            // check the width of the first element in stack one and compare it to the width of the first element in stack three
            // if the width is greater then return early
            stackThreeArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            console.log(stackOneArr, stackThreeArr);
            stackThree.prepend(selectDisk);
        }
        else if(selectDisk.classList[1] < stackThreeArr[0].num) {
            stackThreeArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            stackThree.prepend(selectDisk);
        }
        else {
            return;
        }
    }
}

function tower2(event) {
    // conditional to see if user clicked on any tower section
    selectTower = event.target;
    if(selectDisk.parentElement.classList.contains('stackOne')) {
        if(stackTwoArr.length === 0 && selectDisk !== undefined) {
            // check the width of the first element in stack one and compare it to the width of the first element in stack two
            // if the width is greater then return early
            stackTwoArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            // console.log(stackOneArr, stackTwoArr);
            stackTwo.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[0]) < stackTwoArr[0].num) {
            stackTwoArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            stackTwo.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    else if(selectDisk.parentElement.classList.contains('stackThree')) {
        if(stackTwoArr[0] === 0 && selectDisk !== undefined) {
            // check the width of the first element in stack one and compare it to the width of the first element in stack three
            // if the width is greater then return early
            stackTwoArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackTwo.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[0]) < stackTwoArr[0].num) {
            stackTwoArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackTwo.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}

function tower3(event) {
    // conditional to see if user clicked on any tower section
    if(event.target.classList.contains('stackOne')) {
        selectTower = event.target;
        // console.log(selectTower);
        if(stackOneArr[0] == undefined && selectDisk !== undefined) {
            // check the width of the first element in stack one and compare it to the width of the first element in stack two
            // if the width is greater then return early
            stackOneArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackOne.prepend(selectDisk);
            // console.log(stackOneArr, stackTwoArr);
        }
        else if(selectDisk.classList[1] < stackOneArr[0].num) {
            stackOneArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackOne.prepend(selectDisk);
        }
        else {
            return;
        }
    }
    if(event.target.classList.contains('stackTwo')) {
        selectTower = event.target;
        // console.log(selectTower);
        if(stackTwoArr[0] == undefined && selectDisk !== undefined) {
            // check the width of the first element in stack one and compare it to the width of the first element in stack three
            // if the width is greater then return early
            stackTwoArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackTwo.prepend(selectDisk);
            // console.log(stackOneArr, stackThreeArr);
        }
        else if(selectDisk.classList[1] < stackTwoArr[0].num) {
            stackTwoArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            stackTwo.prepend(selectDisk);
        }
        else {
            return;
        }
    }
}
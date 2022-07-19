/*----- constants -----*/
class DISK {
    constructor(num, name, color, width) {
        this.num = num;
        this.name = name;
        this.color = color;
        this.width = width;
    }
}

// Auto solution stretch goal https://en.wikipedia.org/wiki/Tower_of_Hanoi
function solution() {
    if(stackHeight % 2 === 0) {
        // For an even number of disks:
        while(stackThreeArr.length !== stackHeight) {
            // make the legal move between pegs A and B (in either direction)
            if(stackTwoArr[0] === undefined) {
                stackTwoArr.unshift(stackOneArr[0]);
                stackOneArr.shift();
                stackTwo.prepend(stackOne.firstChild);
                count++;
            }
            else if(stackOneArr[0] === undefined) {
                stackOneArr.unshift(stackTwoArr[0]);
                stackTwoArr.shift();
                stackOne.prepend(stackTwo.firstChild);
                count++;
            }
            else if(stackOneArr[0].num < stackTwoArr[0].num) {
                stackTwoArr.unshift(stackOneArr[0]);
                stackOneArr.shift();
                stackTwo.prepend(stackOne.firstChild);
                count++;
            }
            else if(stackOneArr[0].num > stackTwoArr[0].num) {
                stackOneArr.unshift(stackTwoArr[0]);
                stackTwoArr.shift();
                stackOne.prepend(stackTwo.firstChild);
                count++;
            }
            // make the legal move between pegs A and C (in either direction)
            if(stackThreeArr[0] === undefined || stackOneArr[0].num < stackThreeArr[0].num) {
                stackThreeArr.unshift(stackOneArr[0]);
                stackOneArr.shift();
                stackThree.prepend(stackOne.firstChild);
                count++;
            }
            else if(stackOneArr[0] === undefined || stackOneArr[0].num > stackThreeArr[0].num){
                stackOneArr.unshift(stackThreeArr[0]);
                stackThreeArr.shift();
                stackOne.prepend(stackThree.firstChild);
                count++;
            }
            // make the legal move between pegs B and C (in either direction)
            if(stackThreeArr[0] === undefined || stackTwoArr[0].num < stackThreeArr[0].num) {
                stackThreeArr.unshift(stackTwoArr[0]);
                stackTwoArr.shift();
                stackThree.prepend(stackTwo.firstChild);
                count++;
            }
            else if(stackTwoArr[0] === undefined || stackTwoArr[0].num > stackThreeArr[0].num){
                stackTwoArr.unshift(stackThreeArr[0]);
                stackThreeArr.shift();
                stackTwo.prepend(stackThree.firstChild);
                count++;
            }
            // repeat until complete.
        }
    }
    else {
        // For an odd number of disks:
        while(stackThreeArr.length !== stackHeight) {
            // make the legal move between pegs A and C (in either direction),
            if(stackThreeArr[0] === undefined) {
                stackThreeArr.unshift(stackOneArr[0]);
                stackOneArr.shift();
                stackThree.prepend(stackOne.firstChild);
                count++
            }
            else if(stackOneArr[0] === undefined) {
                stackOneArr.unshift(stackThreeArr[0]);
                stackThreeArr.shift();
                stackOne.prepend(stackThree.firstChild);
                count++
            }
            else if(stackOneArr[0].num < stackThreeArr[0].num) {
                stackThreeArr.unshift(stackOneArr[0]);
                stackOneArr.shift();
                stackThree.prepend(stackOne.firstChild);
                count++
            }
            else if(stackOneArr[0].num > stackThreeArr[0].num ) {
                stackOneArr.unshift(stackThreeArr[0]);
                stackThreeArr.shift();
                stackOne.prepend(stackThree.firstChild);
                count++
            }
            // make the legal move between pegs A and B (in either direction),
            if(stackTwoArr[0] === undefined && stackThreeArr.length !== stackHeight) {
                stackTwoArr.unshift(stackOneArr[0]);
                stackOneArr.shift();
                stackTwo.prepend(stackOne.firstChild);
                count++
            }
            else if(stackOneArr[0] === undefined && stackThreeArr.length !== stackHeight) {
                stackOneArr.unshift(stackTwoArr[0]);
                stackTwoArr.shift();
                stackOne.prepend(stackTwo.firstChild);
                count++
            }
            else if(stackThreeArr.length !== stackHeight && stackOneArr[0].num < stackTwoArr[0].num) {
                stackTwoArr.unshift(stackOneArr[0]);
                stackOneArr.shift();
                stackTwo.prepend(stackOne.firstChild);
                count++
            }
            else if(stackThreeArr.length !== stackHeight && stackOneArr[0].num > stackTwoArr[0].num) {
                stackOneArr.unshift(stackTwoArr[0]);
                stackTwoArr.shift();
                stackOne.prepend(stackTwo.firstChild);
                count++
            }
            // // make the legal move between pegs B and C (in either direction),
            if(stackThreeArr[0] === undefined && stackThreeArr.length !== stackHeight) {
                stackThreeArr.unshift(stackTwoArr[0]);
                stackTwoArr.shift();
                stackThree.prepend(stackTwo.firstChild);
                count++
            }
            else if(stackTwoArr[0] === undefined && stackThreeArr.length !== stackHeight) {
                stackTwoArr.unshift(stackThreeArr[0]);
                stackThreeArr.shift();
                stackTwo.prepend(stackThree.firstChild);
                count++
            }
            else if(stackThreeArr.length !== stackHeight && stackTwoArr[0].num < stackThreeArr[0].num) {
                stackThreeArr.unshift(stackTwoArr[0]);
                stackTwoArr.shift();
                stackThree.prepend(stackTwo.firstChild);
                count++
            }
            else if(stackThreeArr.length !== stackHeight && stackTwoArr[0].num > stackThreeArr[0].num) {
                stackTwoArr.unshift(stackThreeArr[0]);
                stackThreeArr.shift();
                stackTwo.prepend(stackThree.firstChild);
                count++
            }
            // repeat until complete.
        }
    }
    return;
}
  
/*----- app's state (variables) -----*/
// game win condition
let gameFinished;
// variable to store number of disks
let stackHeight;
// variables to store selected disk and stack
let selectDisk;
let selectStack;
// stack arrays to store objects
let stackOneArr;
let stackTwoArr;
let stackThreeArr;
// move counter
let count;

/*----- cached element references -----*/
const aboutGameBtn = document.querySelector('.aboutGame');
const modalAboutGame = document.querySelector('.modalAboutGame');
const moveCount = document.querySelector('.counter');
const winGame = document.querySelector('.winGameModal');
const countCompare = document.querySelector('.winGameCompare');
const winGameCloseBtn = document.querySelector('.winGameClose');
const closeAboutGameBtn = document.querySelector('.aboutGameClose');
const startGame = document.querySelector('.initGame');
const resetGameBtn = document.querySelector('.resetGame');
const inputHeight = document.querySelector('.inputHeight');
const stackContainer = document.querySelector('.gameContainer');
const stackOne = document.querySelector('.stackOne');
const stackTwo = document.querySelector('.stackTwo');
const stackThree = document.querySelector('.stackThree');
const solveGame = document.querySelector('.solveGame');

/*----- event listeners -----*/
startGame.addEventListener('click', init);
resetGameBtn.addEventListener('click', reset);
stackContainer.addEventListener('click', pickStack);
aboutGameBtn.addEventListener('click', displayAboutGameModal);
closeAboutGameBtn.addEventListener('click', closeAboutGameModal);
winGameCloseBtn.addEventListener('click', closeWinGame);
solveGame.addEventListener('click', solution);

/*----- functions -----*/
// init function sets the game to the start with all the disks on the left side and ordered
function init() {
    clear();
    // console.log(stackTwoArr[0]);
    // check to see if user has correct input value
    if(inputHeight.value >= 3 && inputHeight.value <= 8) {
        stackHeight = parseInt(inputHeight.value);
    }
    else {
        return;
    }
    render();
}

// render function
function render() {
    // create as many disks as the input value
    for (let i = stackHeight; i > 0; i--) {
        // create new object
        const disk = new DISK(i, i, diskColor(i), `${((i * 5)/2) + 78}%`);
        // create div element to represent the object
        const placeholderDisk = document.createElement('div');
        // fill inner text of div element to represent which disk it is
        placeholderDisk.innerText = disk.name;
        // add css styling to change the width of the disks
        placeholderDisk.style.width = disk.width;
        // add css styling to change the color of the disks
        placeholderDisk.style.backgroundColor = disk.color;
        // add classes to div element
        placeholderDisk.classList.add('disk', `${i}`);
        // add disk object to stackOneArr
        stackOneArr.unshift(disk);
        // append the disk div element to the parent stack div element
        stackOne.prepend(placeholderDisk);
    }
}

// function to set the color of the disk div element depending on input value
function diskColor(i) {
    let color = '';
    switch(i) {
        case 8:
            color = '#93E9BE';
            break;
        case 7:
            color = '#28FEF3';
            break;
        case 6:
            color = '#DE8DF3';
            break;
        case 5:
            color = '#FE5A4C';
            break;
        case 4:
            color = '#FF7216';
            break;
        case 3:
            color = '#F7F700';
            break;
        case 2:
            color = '#FF4DC3';
            break;
        case 1:
            color = '#FFC0C9';
            break;
    }
    return color;
}

function reset() {
    clear();
    render();
}

// clear function to reset everything
function clear() {
    // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/ removes all child elements if any
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
    // sets all current arrays to empty, current selected disk and win game to false, and resets the player move count
    gameFinished = false;
    selectDisk = false;
    stackOneArr = [];
    stackTwoArr = [];
    stackThreeArr = [];
    count = 0;
}

function pickStack(event) {
    // choose disk div element and store it in the app state variable
    if(event.target.classList.contains('disk') && event.target === event.target.parentElement.firstChild) {
        selectDisk = event.target;
    }
    // choose disk stack div element to move selectDisk to the said disk stack
    // depending on which stack element is chosen run its corresponding function
    if(event.target.classList.contains('stackOne')) {
        stack1(event);
        // sets the chosen disk back to false just in case.  I don't know if this actually does anything useful
        selectDisk = false;
    }
    else if(event.target.classList.contains('stackTwo')) {
        stack2(event);
        selectDisk = false;
    }
    else if(event.target.classList.contains('stackThree')) {
        stack3(event);
        selectDisk = false;
    }
    else {
        return;
    }
}

function stack1() {
    // when the function runs set the selected stack div element to its app state variable
    selectStack = event.target;
    // check to know which stack the select disk div element is coming from
    if(selectDisk.parentElement.classList.contains('stackTwo')) {
        // check to see if the chosen stack element and its corresponding array has any elements inside
        if(stackOneArr.length === 0 && selectDisk !== undefined) {
            // if no elements in the array, shift it in and remove it the array that it came from
            stackOneArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            // increment count
            count++;
            // update html to reflect the current array
            stackOne.prepend(selectDisk);
        }
        // check to see if the selected disk div element has a num value less than the num value of the first index of the selected stack array
        else if(parseInt(selectDisk.classList[1]) < stackOneArr[0].num) {
            // if true, then shift it in and remove it from the array that it came from
            stackOneArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            count++;
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
            count++;
            stackOne.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[1]) < stackOneArr[0].num) {
            stackOneArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            count++;
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

function stack2() {
    selectStack = event.target;
    if(selectDisk.parentElement.classList.contains('stackOne')) {
        if(stackTwoArr.length === 0 && selectDisk !== undefined) {
            stackTwoArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            count++;
            stackTwo.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[1]) < stackTwoArr[0].num) {
            stackTwoArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            count++;
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
            count++;
            stackTwo.prepend(selectDisk);
        }
        else if(parseInt(selectDisk.classList[1]) < stackTwoArr[0].num) {
            stackTwoArr.unshift(stackThreeArr[0]);
            stackThreeArr.shift();
            count++;
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

function stack3() {
    selectStack = event.target;
    if(selectDisk.parentElement.classList.contains('stackOne')) {
        if(stackThreeArr.length === 0 && selectDisk !== undefined) {
            stackThreeArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            count++;
            stackThree.prepend(selectDisk);
            win();
        }
        else if(parseInt(selectDisk.classList[1]) < stackThreeArr[0].num) {
            stackThreeArr.unshift(stackOneArr[0]);
            stackOneArr.shift();
            count++;
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
            count++;
            stackThree.prepend(selectDisk);
            win();
        }
        else if(parseInt(selectDisk.classList[1]) < stackThreeArr[0].num) {
            stackThreeArr.unshift(stackTwoArr[0]);
            stackTwoArr.shift();
            count++;
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
    // if the stack three array length is equal to the input height value, win condition === true
    if(stackThreeArr.length === stackHeight) {
        gameFinished = true;
        moveCount.innerText = `It took you ${count} moves`;
        countCompare.innerText = `The minimum amount of moves for this level is ${2 ** stackHeight - 1} moves`;
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
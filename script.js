/*----- constants -----*/
class DISK {
    constructor(num, name, color, width) {
        this.num = num;
        this.name = name;
        this.color = color;
        this.width = width;
    }
}

// Auto solution stretch goal
function solution() {
    if(stackHeight % 2 === 0) {
        // For an even number of disks:
        while(stackTwoArr.length !== 1) {
            // make the legal move between pegs A and B (in either direction),
            if(stackOneArr[0] < stackTwoArr[0] || stackTwoArr[0] !== undefined) {
                stackTwoArr.unshift(stackOneArr[0]);
                stackOneArr.shift();
                console.log("move from 1 to 2", stackTwoArr);
            }
            else {
                console.log("move from 2 to 1");
            }
            // make the legal move between pegs A and C (in either direction),
            if(stackOneArr[0] < stackThreeArr[0] || stackOneArr[0] !== undefined) {
                console.log("move from 1 to 3");
            }
            else {
                console.log("move from 3 to 1");
            }
            // make the legal move between pegs B and C (in either direction),
            if(stackTwoArr[0] < stackThreeArr[0] || stackThreeArr[0] !== undefined) {
                console.log("move from 2 to 3");
            }
            else {
                console.log("move from 3 to 2");
            }
            // repeat until complete.
        }
    }
    else {
        // For an odd number of disks:
        while(stackThreeArr.length !== stackHeight) {
            // make the legal move between pegs A and C (in either direction),
            if(stackOneArr[0] < stackThreeArr[0] || stackThreeArr[0] !== undefined) {
                console.log("move from 1 to 3");
            }
            else {
                console.log("move from 3 to 1");
            }
            // make the legal move between pegs A and B (in either direction),
            if(stackOneArr[0] < stackTwoArr[0] || stackTwoArr[0] !== undefined) {
                console.log("move from 1 to 2");
            }
            else {
                console.log("move from 2 to 1");
            }
            // make the legal move between pegs B and C (in either direction),
            if(stackTwoArr[0] < stackThreeArr[0] || stackThreeArr[0] !== undefined) {
                console.log("move from 2 to 3");
            }
            else {
                console.log("move from 3 to 2");
            }
            // repeat until complete.
        }
    }
    return;
}
        // In each case, a total of 2n − 1 moves are made.

        // Equivalent iterative solution
        // Another way to generate the unique optimal iterative solution:

        // Number the disks 1 through n (largest to smallest).

        // If n is odd, the first move is from peg A to peg C.
        // If n is even, the first move is from peg A to peg B.
        // Now, add these constraints:

        // No odd disk may be placed directly on an odd disk.
        // No even disk may be placed directly on an even disk.
        // There will sometimes be two possible pegs: one will have disks, and the other will be empty. Place the disk on the non-empty peg.
        // Never move a disk twice in succession.

    // Recursive solution
        // Illustration of a recursive solution for the Towers of Hanoi puzzle with 4 disks
        // The key to solving a problem recursively is to recognize that it can be broken down into a collection of smaller sub-problems, to each of which that same general solving procedure that we are seeking applies, and the total solution is then found in some simple way from those sub-problems' solutions. Each of these created sub-problems being "smaller" guarantees that the base case(s) will eventually be reached. Thence, for the Towers of Hanoi:

        // label the pegs A, B, C,
        // let n be the total number of disks,
        // number the disks from 1 (smallest, topmost) to n (largest, bottom-most).
        // Assuming all n disks are distributed in valid arrangements among the pegs; assuming there are m top disks on a source peg, and all the rest of the disks are larger than m, so they can be safely ignored; to move m disks from a source peg to a target peg using a spare peg, without violating the rules:

        // Move m − 1 disks from the source to the spare peg, by the same general solving procedure. Rules are not violated, by assumption. This leaves the disk m as a top disk on the source peg.
        // Move the disk m from the source to the target peg, which is guaranteed to be a valid move, by the assumptions — a simple step.
        // Move the m − 1 disks that we have just placed on the spare, from the spare to the target peg by the same general solving procedure, so they are placed on top of the disk m without violating the rules.
        // The base case is to move 0 disks (in steps 1 and 3), that is, do nothing – which obviously doesn't violate the rules.
        // The full Tower of Hanoi solution then consists of moving n disks from the source peg A to the target peg C, using B as the spare peg.
        
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

/*----- event listeners -----*/
startGame.addEventListener('click', init);
resetGameBtn.addEventListener('click', reset);
stackContainer.addEventListener('click', pickStack);
aboutGameBtn.addEventListener('click', displayAboutGameModal);
closeAboutGameBtn.addEventListener('click', closeAboutGameModal);
winGameCloseBtn.addEventListener('click', closeWinGame);

/*----- functions -----*/
// init function sets the game to the start with all the disks on the left side and ordered
function init() {
    clear();
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
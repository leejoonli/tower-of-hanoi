# Tower of Hanoi

## Project Description

Browser based interactive puzzle
Only one disk can be moved at a time
Every move involves taking the top disk from one of the stacks and placing it on top of another stack or an empty stack
No disk can be put on top of a smaller disk

## Planning Process

Scaffold out html elements.
State variables.
Query DOM elements.
Create init function and render function.
See if the element can be interacted with.
Track the element that is clicked.
Be able to move the selected element.
Move the selected element based on the rules of the game.

## Wire Frames

![image](https://media.git.generalassemb.ly/user/40293/files/52ccdb00-56b1-11ec-839f-f559d7edc841)

![image](https://media.git.generalassemb.ly/user/40293/files/5bbdac80-56b1-11ec-8afd-8015992da9d4)

![image](https://media.git.generalassemb.ly/user/40293/files/61b38d80-56b1-11ec-8050-bd1ab6461356)

![image](https://media.git.generalassemb.ly/user/40293/files/69733200-56b1-11ec-9da9-377747edf4cf)

## User Stories
- As a user, I want to be able to move the disks using the mouse.
- As a user, I want to be able, if I make a valid move, place the disk onto whatever stack I move it to.
- As a user, I want to be able, if I make an invalid move, place the disk I clicked on back to wherever it was originally clicked.
- As a user, I want to be able to know when I complete the puzzle.

### MVP Goals
- As a user, I want to be able to move the disks using the mouse.
- As a user, I want to be able, if I make a valid move, place the disk onto whatever stack I move it to.
- As a user, I want to be able, if I make an invalid move, place the disk I clicked on back to wherever it was originally clicked.
- As a user, I want to be able to know when I complete the puzzle.

### Stretch Goals
- As a user, I want to a counter that tracks the amount of moves I make
- As a user, I want a timer to track how much time has elapsed
- As a user, I want a button that can show the best possible solution

# Tower of Hanoi - MVP

## MVP Project Description
This browser based game offers the similar, if not the same, functionality as a real life tower of hanoi game.  The goal is to get all the disks from the left-most side to the right-most side without stacking a larger disk on top of a smaller disk and whilst moving one disk at a time.  This game/puzzle is created using Javascript, CSS, and HTML.

![image](https://media.git.generalassemb.ly/user/40293/files/57a1cf80-59ce-11ec-8bb5-9eb372c945e8)

## MVP Wireframes

## Layout
Since it's a simple game the layout of the webpage is reflective of the game itself.

### Buttons
Starting from left going right:

About Game:
The about game button will display a window and describe the rules of the game and how to interact with the elements on the page.

![image](https://media.git.generalassemb.ly/user/40293/files/3be7fa80-59c9-11ec-8e46-2b9326793b6e)

Reset:
The reset button will move all the current disks onto the leftmost side like how it would appear when you first initialize the game.  It will also reset the current tracking data back to the start as well.

Number input window and Go:
The number input to the left of the "Go" button will display and tell the program how many disks you would like to make.  It is currently capped at the lowest end to "3" and the highest end to "8".  There is also a scroller on the number input window that will increment or decrement the current value by one.  Once the user determines how many disks they would like to create, the go button will initialize the game and make a number of disks on the left-most side equal to the inputted number.

![image](https://media.git.generalassemb.ly/user/40293/files/5d93b280-59c6-11ec-86c5-2bf2b29330a7)

### Game Section

The game board is divided into three sections.  These sections represent the pegs that the disks will go in in the real life version of the game.

![image](https://media.git.generalassemb.ly/user/40293/files/bf551c00-59c8-11ec-8404-3ea473c37a73)

There is no visual indicator that the disk has been clicked but the cursor will change to a pointer when hovering over a disk.  Once the disk has been clicked, the user will need to click on the "stack area" to register where the user wants to move the selected disk to.

![image](https://media.git.generalassemb.ly/user/40293/files/ff68ce80-59c9-11ec-8001-5ebab13ce603)

Once the game is completed, another window will pop up that will display a message that says "You Win".  It will also tell the user how many moves they took to complete the game.  And along with how many moves the user took, the following message will tell the user the minimum amount of moves it takes to finish the game based on the user's input value.

![image](https://media.git.generalassemb.ly/user/40293/files/99c91200-59ca-11ec-8d4f-1a5291411d3f)

The bottom brown colored section is only an aesthetic choice.  It has no impact or interaction with the game.

## Installation Instructions

Download this repository and copy either the HTTPS or SSH key

![image](https://media.git.generalassemb.ly/user/40293/files/1c060600-59cc-11ec-8edf-69440461309b)

Open your terminal and change directory into whichever directory you would like to store this repository (Your terminal may look differently than the one shown).

![image](https://media.git.generalassemb.ly/user/40293/files/edd4f600-59cc-11ec-8192-f6de6db9ac1f)

Once you're in where you want this repository to be, make a new directory and then change directory into the one you just made.

![image](https://media.git.generalassemb.ly/user/40293/files/a0f11f80-59cc-11ec-9636-f294469e2130)
![image](https://media.git.generalassemb.ly/user/40293/files/ce3dcd80-59cc-11ec-8945-eb81ab484fdd)

Once you're in your newly created directory, run the git clone command with your copied HTTPS or SSH key.

![image](https://media.git.generalassemb.ly/user/40293/files/57550480-59cd-11ec-8777-de29177830ad)

Now that you have cloned this repository to your local machine, you can either use the GUI or your terminal to navigate to where you stored this repository.

In that folder/directory is an HTML document.  Open it up and now you can play tower of hanoi as much as you want!

If you're having difficulty cloning this repository visit https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository for more information.

## Unsolved Problems

The current version of this game doesn't have complete physical accuracy compared to the real life version, but it is very close.  It currently does not have the pegs and the CSS I tried seemed to interfere with the JS code and breaks the game.  It is a minor aesthetic detail that I decided to ignore since not having it doens't egregiously interfere with the user experience.

One thing to keep in mind that may become an issue is that if the parameters for the number of disks input isn't capped, the disks will bleed out of their respective containers.  Also, at eight disks, the minimum number of moves to complete the game is 255 moves!  If you're keen on making it past 8 then you can change the width in JS to be a static number so it doesn't go past it's container.  The height of the stack might also bleed out above its container (this is has not been tested since the game was designed with a cap of eight disks in mind).

## Major Hurdles

The game logic was the most challenging part of this game.  The current version uses conditionals to manage the game logic to accurately represent what the real life version of the game would be like.  The data is stored using JS and the HTML elements represent that stored data.

## Future Goals and Implementations

The biggest thing I would like to implement in a future iteration is a drag and drop functionality.  Not only would it be more visible for the user but also more intuitive for the user experience.

Another future implementation may include warning messages to alert the user if they are making invalid moves.  And a timer to keep track of how long it takes until the user finishes the game.  Then a leaderboard could be implemented to compare users results.

As far as aesthetics are concerned, I would eventually like to implement a version with the pegs on the board instead of just the containers.
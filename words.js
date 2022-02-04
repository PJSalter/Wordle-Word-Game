// settings page to appear once cogg is clicked.
function settings() {
document.querySelector("#overlay").style.display = "block"
document.querySelector("#wordle-Name").style.display = "none";
document.querySelector(".line").style.display = "none";
document.querySelector("#word-grid").style.display = "none";
document.querySelector(".tab").style.display = "none";
};

// once user clicks the cross from settings page then returns back to game.
function backToGame() {
document.querySelector("#wordle-Name").style.display = "flex";
document.querySelector("#word-grid").style.display = "flex";
document.querySelector(".tab").style.display = "flex";
document.querySelector(".line").style.display = "flex";
document.querySelector("#overlay").style.display = "none";
}

//......... dark mode toggle for settings page .............. //

//creating a variable that will reference the input type of checkbox from its id attribute.
const modeSwitch = document.getElementById("dark-mode-switch");

//creating an event Listener to see when the toggle is clicked on.
// it will be looking for a click.
// I will then want it to check it's own status to know if its on or off.
// I am writing a function for this called identifyMode.
modeSwitch.addEventListener('click', identifyMode);



let heightInner = 6; // this will initiate the number of tries the user has.
let lengthOfWord = 5; //this will initiate the length of the word, the user can only spell out 5 letters each word.

//allows the function to load
// this calls the function
window.onload = function(){
    initializeGameBoard();
}

// JavaScript to create the game board

function initializeGameBoard(){

    //making the board
    for (let i = 0; i < heightInner; i++){
        for (let j = 0; j < lengthOfWord; j++){
            // now to create a new html element.
            // example - <span id="0-0" class="tile">p</span>
            let squareTile = document.createElement("span");
            //modifying the fields.
            // example the id will represent as id=0-0, 0-3, 1-2 and further.
            squareTile.id = i.toString() + "-" + j.toString();
            //this will add the class styling from square within my css.
            squareTile.classList.add("square")
            // placeholder letter p which visually be identified within each square as a letter centered to see how a letter will look once typed by the user.
            squareTile.innerText = "p";
            // picking up the id and then appending the child attribute which inserts the html tag inside the section tag.
            document.getElementById("word-grid").appendChild(squareTile);
        }
    }
}
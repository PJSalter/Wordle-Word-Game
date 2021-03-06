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
document.querySelector("#darkMode-wrapper").style.display = "none";
}

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

//......... dark mode toggle for settings page .............. //

//creating a variable that will reference the input type of checkbox from its id attribute.
const modeSwitch = document.getElementById("dark-mode-switch");

//creating an event Listener to see when the toggle is clicked on.
// it will be looking for a click.
// I will then want it to check it's own status to know if its on or off.
// I am writing a function for this called identifyMode.
modeSwitch.addEventListener('click', identifyMode);

// ............. IdentifyMode Function ................//

// I want to check what state the check box is in.
//if it is checked then I want to enable a dark mode.
//if it isn't checked then I want to remove it from the dark mode.

function identifyMode(){
    //once clicking on the checkbox then the message will appear in the console.
    //console.log('checking...... approved for identifying the click');
  
    //after i want to check the state of this input so that when click it will turn on the dark mode and when it is off i will then remove the dark mode class.
    if(modeSwitch.checked){
      //checks dark mode on
      //console.log('dark mode on');
      switchToDarkMode();
    } else {
      //checks dark mode off
      //console.log('dark mode off')
      lightModeSwitchedBack();
    }
  }
  // adding the dark mode class attribute styling.
  function switchToDarkMode(){
    document.body.classList.add("dark-mode");
  }

  // function to switch back to original light mode.
  function lightModeSwitchedBack(){
    document.body.classList.remove("dark-mode");
  }
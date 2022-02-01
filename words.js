
let heightInner = 6; // this will initiate the number of tries the user has.
let lengthOfWord = 5; //this will initiate the length of the word, the user can only spell out 5 letters each word.

//allows the function to load

window.onload = function(){
    initializeGameBoard();
}

// JavaScript to create the game board

function initializeGameBoard(){

    //making the board
    for (let i = 0; i < heightInner; i++){
        for (let j = 0; j < lengthOfWord; j++){
            // example - <span id="0-0" class="tile">p</span>
            let squareTile = document.createElement("span");
            squareTile.id = i.toString() + "-" + j.toString();
            squareTile.classList.add("square")
            // placeholder letter p
            squareTile.innerText = "p";
            document.getElementById("word-grid").appendChild(squareTile);
        }
    }
}
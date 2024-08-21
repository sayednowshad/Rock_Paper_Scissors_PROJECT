// Rock Paper Scissors;
let choices = ['rock','paper','scissors'];

let Player_Display = document.getElementById("PlayerDisplay");

let Computer_Display = document.getElementById("ComputerDisplay");

let Result_Display = document.getElementById("ResultDisplay");

let playerscoreDisplay = document.getElementById("playerscoreDisplay"); // 0 initialized......

let computerscoreDisplay = document.getElementById("computerscoreDisplay");// 0 initialized......

let playerScore = 0 ;
let computerScore = 0; 


function playGame(playerChoice){

    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === computerChoice){
    
        result = "It's a TIE ";
    }

    else{

        switch(playerChoice){

            case "rock":

            result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOOSE";
            break;

            case "paper" :
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOOSE";
                break;

            case "scissors" :
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOOSE";
                break;
        }
    }

    PlayerDisplay.textContent = `PLAYER : ${playerChoice}`;
    ComputerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    ResultDisplay.textContent = result;

    ResultDisplay.classList.remove("greenText", "redText");

    switch(result){

        case "YOU WIN" :

        ResultDisplay.classList.add("greenText");
        playerScore++;
        playerscoreDisplay.textContent = `${playerScore}`;
        break;

        case "YOU LOOSE" :
            
            ResultDisplay.classList.add("redText");
            computerScore++;
            computerscoreDisplay.textContent = `${computerScore}`;
            break;
    }
    
}

const compOptions = ["rock", "paper", "scissors"];
const stats = {
    wins : 0,
    ties : 0,
    losses : 0,
};

const playGame = function(){

    //until user cancels the game
    var cont = true;

    //in order for computer to remember something after you've refreshed the screen you have to save it to local storage
    //it's a chrome database or built in windows database and it saves local chrome instance
    //when you do, you'll save the input and it'll remember
    //lookup local storage in documentation

    //while user continues
    while(cont){
        //grab user input
        var userInput = prompt("Choose the following: Rock, Paper, or Scissors.");
        var lowerInput = userInput.toLowerCase();
        
        //get random computer option
        var rand = Math.floor(Math.random() * 3);
        var compSelect = compOptions[rand];
        
        if(lowerInput == compSelect){
            stats.ties += 1;
            cont = confirm("It's a Draw");
        }
        else if (lowerInput == "rock"){
            if(compSelect == "paper"){
                stats.losses += 1;
                cont = confirm("Computer chose Paper, Computer Wins");
            }
            else{
                stats.wins += 1;
                cont = confirm("Computer chose Scissors, User Wins");
            }
        }
        else if(lowerInput == "paper"){
            if(compSelect == "scissors"){
                stats.losses += 1;
                cont = confirm("Computer chose Scissors, Computer Wins");
            }
            else{
                stats.wins += 1;
                cont = confirm("Computer chose Rock, User Wins");
            }
        }
        else if (lowerInput == "scissors"){
            if(compSelect == "rock"){
                stats.losses += 1;
                cont = confirm("Computer chose Rock, Computer Wins");
            }
            else{
                stats.wins += 1;
                cont = confirm("Computer chose Paper, User Wins");
            }
        }
        else{
            cont = false;
        }
    }

    alert(`Thanks for Playing! Your final scores: wins : ${stats.wins}, ties: ${stats.ties}, losses: ${stats.losses}`);
    return;

 }

playGame();



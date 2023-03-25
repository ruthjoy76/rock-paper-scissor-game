function getComputerChoice(){
    const val = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*val.length);
    return val[random];
}

function playRound(playerSelection, computerSelection){
    const winPlayer= {'rock': 'paper', 'paper': 'scissors', 'scissors': 'rock'};
    if(playerSelection === computerSelection) 
    return "tie";
    else if(playerSelection === winPlayer[computerSelection]) 
    return  "Winner chicken dinner";
    else return "You Lose";
}

function game() {
    if (playerScore === 5 || computerScore === 5) {
      const winner =
        playerScore === 5
          ? "You win the game!"
          : "Computer wins the game!";
      alert(winner);
      return true;
    }
    return false;
  }


    const playerSelection1 = prompt("Enter Rock, Paper, or Scissors");
    const computerSelection= getComputerChoice();
    let playerSelection= playerSelection1.toLowerCase();
   
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    
  
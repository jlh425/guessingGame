let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget= () =>{
  return Math.floor(Math.random()*10);
  
}
const compareGuesses = (currentHumanGuess, computerGuess, targetGuess) =>{
  if ((Math.abs(currentHumanGuess-targetGuess)) <= (Math.abs(computerGuess-targetGuess))){
    return true;
  } else {
    return false;
  }
} 
const updateScore= winner => {
  if (winner === "human"){
    humanScore++;
  } else {
    computerScore++;
  }
}
const advanceRound = (currentRoundNumber) => {
   currentRoundNumber++;
  return;
}

































































































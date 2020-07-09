function computerPlay(){
  let random = Math.floor(Math.random() * ( 3 - 1 + 1)) +1;
  let election;
  if (random == 1){
    election = 'rock';
  } 
  else if(random == 2){
    election = 'paper';
  } 
  else {
    election = 'scissors';
  }
  return election;
}

let userElection = prompt();
function playerInput(){
  let converter = userElection.toLowerCase();
  return converter;
}

const computerSelection = computerPlay();
const playerSelection = playerInput();
let computerScore = 0;
let userScore = 0;

function playRound(){

  //In case that both selections are equals
  if(computerSelection == 'rock' && playerSelection == 'rock') {
    console.log('There is a draw with Rock in both selections!');
  }

  else if(computerSelection == 'paper' && playerSelection == 'paper') {
    console.log('There is a draw with Paper in both selections!');
  }

  else if(computerSelection == 'scissors' && playerSelection == 'scissors') {
    console.log('There is a draw with Scissors in both selections!');
  }
 //Rock vs Paper && Rock vs Scissors
  else if(computerSelection == 'rock' && playerSelection == 'paper'){
    console.log('You win! Paper beats Rock');
    return userScore++;
  }
  else if(computerSelection == 'rock' && playerSelection == 'scissors'){
    console.log('You lose! Rock beats Scissors');
    return computerScore++;
  }
//Paper vs Scissors && Paper vs Rock
  else if(computerSelection == 'paper' && playerSelection == 'scissors'){
    console.log('You win! Scissors beats Paper');
    return userScore++;
  }
  else if(computerSelection == 'paper' && playerSelection == 'rock'){
    console.log('You lose! Paper beats Rock');
    return computerScore++;
  }
  //Scissors vs Paper && Scissors vs Rock
  else if(computerSelection == 'scissors' && playerSelection == 'paper'){
    console.log('You lose! Scissors beats Paper');
    return computerScore++;
  }
  else if(computerSelection == 'scissors' && playerSelection == 'rock'){
    console.log('You win! Rock beats Scissors');
    return userScore++;
  }
}

function game(){
  for(let i = 0; i < 5; i++){
  playRound();
  }
  if (userScore > computerScore) {
    return 'Congrats, you have win with a total of ' + userScore + ' points!!';
  } else if (computerScore > userScore) {
    return 'Sorry, you have lost with a total of ' + computerScore + ' points.';
  } else {
    return 'There is a draw!';
  }
}

console.log(game());
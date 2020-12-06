function randomNumber(max){
	return Math.floor(Math.random() * Math.floor(max));
}

function computerSelect(){
	const aleatoryChoice = randomNumber(3);
	const choiceArr = ['rock', 'paper', 'scissors'];

	return choiceArr[aleatoryChoice];
}

// This function modify the text that our div "message" contains
// inside, showing in this way the text we want to show.
function display(text){
	const display = document.querySelector('#display');
	display.textContent = text;
}

function pointNumber(user){
	const target = document.querySelector(`#${user}`);
	target.textContent = Number(target.textContent) + 1;
}

function playGame(e){
	const plPoints = document.querySelector('#playerNumber');
	const compPoints = document.querySelector('#computerNumber');
	let message = '';

	if(Number(plPoints.textContent) < 5 && Number(compPoints.textContent) < 5){
		const compSelection = computerSelect();
		const plSelection = e.target.id;

		const counter = document.querySelector('#countN');
		counter.textContent = Number(counter.textContent) + 1;

		/*Draw*/
		if(compSelection == 'scissors' && plSelection == 'scissors' ||
			compSelection == 'rock' && plSelection == 'rock' ||
			compSelection == 'paper' && plSelection == 'paper'){
			message = 'we have a tie this round!';
			display(message);
		}

		/*Player win*/
		if(plSelection == 'paper' && compSelection == 'rock' ||
		 	plSelection == 'rock' && compSelection == 'scissors' ||
		 	plSelection == 'scissors' && compSelection == 'paper'){
			message = 'You have won this round!';
			display(message);
			pointNumber('playerNumber');
		}

		/*Computer win*/
		if(compSelection == 'paper' && plSelection == 'rock' ||
		 	compSelection == 'rock' && plSelection == 'scissors' ||
		 	compSelection == 'scissors' && plSelection == 'paper'){
			message = 'You have lose this round!';
			display(message);
			pointNumber('computerNumber');
		}
	}

	if(Number(plPoints.textContent) == 5 && Number(compPoints.textContent) < 5){
		message = 'You have won the game!!';
		display(message);
	}

	if(Number(compPoints.textContent) == 5 && Number(plPoints.textContent) < 5){
		message = 'You have lose the game.';
		display(message);
	}

}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', playGame));

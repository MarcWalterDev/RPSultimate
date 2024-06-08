//hides begin button, calls playGame()

document.getElementById("begin-btn").addEventListener("click", function () {
	document.getElementById("begin-btn").style.display = "none";
	document.getElementById("game").style.display = "block";
	playGame();
});

//show and close instructions

document.getElementById("help").addEventListener("click", function () {
	let instruct = document.getElementById("howto");
	if (instruct.style.display === "none") {
		instruct.style.display = "block";
	} else {
		instruct.style.display = "none";
	}
});

document.getElementById("close-help").addEventListener("click", function () {
	document.getElementById("howto").style.display = "none";
});

//gane choices array

let choices = ["rock", "paper", "scissors"];

//main game function

playerChoice = document.querySelectorAll("#choices div");

playerChoice.forEach(choice => {
	choice.addEventListener("click", function () {
		let selection = this.id;
		let compChoice = choices[Math.floor(Math.random() * choices.length)];
		input.innerHTML = `computer chose: <b>${compChoice}</b>  |  you chose: <b>${selection}</b>`;

		winner(selection, compChoice);
	});
});

function playGame(playerChoice) {
	let input = document.getElementById("input");
	playerWins = 0;
	compWins = 0;
}

//determins winner

function winner(player, computer) {
	let message = document.getElementById("message");
	if (player === computer) {
		message.innerHTML = "<p>It's a draw</p>";
	} else if (
		(player === "rock" && computer === "scissors") ||
		(player === "paper" && computer === "rock") ||
		(player === "scissors" && computer === "paper")
	) {
		message.innerHTML = "<p>You win!</p>";
		playerWins++;
		checkWin();
	} else {
		message.innerHTML = "<p>You lost</p>";
		compWins++;
		checkWin();
	}
}

//scoring

let playerWins = 0;
let compWins = 0;

function checkWin() {
	if (playerWins === 2) {
		endGame("YOU WIN!");
	} else if (compWins === 2) {
		endGame("YOU LOST!");
	}
}

function endGame(resultMessage) {
	document.getElementById("game").style.display = "none";
	document.getElementById("begin-btn").style.display = "block";
	document.getElementById("result").textContent = resultMessage;
	playerWins = 0;
	compWins = 0;
}

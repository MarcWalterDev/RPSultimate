document.getElementById("begin-btn").addEventListener("click", function () {
	document.getElementById("begin-btn").style.display = "none";
	document.getElementById("game").style.display = "block";
	playGame();
});

let choices = ["rock", "paper", "scissors"];
let playerWins = 0;
let compWins = 0;

function playGame(playerChoice) {
	let input = document.getElementById("input");

	playerChoice = document.querySelectorAll("#choices div");

	playerChoice.forEach(choice => {
		choice.addEventListener("click", function () {
			let selection = this.id;
			let compChoice = choices[Math.floor(Math.random() * choices.length)];
			input.innerHTML = `computer chose: <b>${compChoice}</b>  |  you chose: <b>${selection}</b>`;

			winner(selection, compChoice);
		});
	});
}

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
	} else {
		message.innerHTML = "<p>You lost</p>";
		compWins++;
	}
}

if (playerWins === 2) {
	console.log("you won");
} else if (compWins === 2) {
	console.log("you lost");
}

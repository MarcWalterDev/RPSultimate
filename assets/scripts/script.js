document.getElementById("begin-btn").addEventListener("click", function () {
	document.getElementById("begin-btn").style.display = "none";
	document.getElementById("game").style.display = "block";
	playGame();
});

let choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
	let input = document.getElementById("input");

	playerChoice = document.querySelectorAll("#choices div");

	playerChoice.forEach(choice => {
		choice.addEventListener("click", function () {
			let selection = this.id;
			let compChoice = choices[Math.floor(Math.random() * choices.length)];
			input.innerHTML = `computer chose: ${compChoice}  |  you chose: ${selection}`;

			winner(selection, compChoice);
		});
	});
}

function winner(player, computer) {
	if (player === computer) {
		console.log("it's a draw");
	} else if (
		(player === "rock" && computer === "scissors") ||
		(player === "paper" && computer === "rock") ||
		(player === "scissors" && computer === "paper")
	) {
		console.log("you win");
	} else {
		console.log("loser!");
	}
}

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
		});
	});
}

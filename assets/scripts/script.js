document.getElementById("begin-btn").addEventListener("click", function () {
	document.getElementById("begin-btn").style.display = "none";
	document.getElementById("choices").style.display = "flex";
	document.getElementById("input").style.display = "block";
	document.getElementById("score").style.display = "block";
	playGame();
});

let result = [];
let choices = ["rock", "paper", "scissors"];

function playGame() {
	let input = document.getElementById("input");

	let playerChoice = "rock";

	let compChoice = choices[Math.floor(Math.random() * choices.length)];
	input.innerHTML = `computer chose: ${compChoice}  |  you chose: ${playerChoice}`;

	result.push(compChoice);
}

console.log(result);

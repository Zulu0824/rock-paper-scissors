let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You Win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You Lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

function updateUI(message) {
  const resultsDiv = document.getElementById("results");
  const scoreDiv = document.getElementById("score");

  resultsDiv.textContent = message;
  scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      resultsDiv.textContent = "You reached 5 points! You win the game!";
    } else {
      resultsDiv.textContent = "Computer reached 5 points! You lose the game!";
    }
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
  }
}

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    updateUI(roundResult);
  });
});

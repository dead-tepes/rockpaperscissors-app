const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const message = document.getElementById("message");
const hider = document.getElementById("hider");

const choices = ["rock", "paper", "scissors"];

function play(event) {
  const userChoice = event.target.id;
  message.innerHTML = "You selected " + userChoice + "!" + "<br/>";
  // console.log("User choice is", userChoice);

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  // console.log("Computer choice is", computerChoice);
  message.innerHTML = "The computer selected " + computerChoice + "!";

  // the game logic
  if (computerChoice === userChoice) {
    result.innerHTML = "It's a draw!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result.innerHTML = "You win!";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result.innerHTML = "You lose!";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result.innerHTML = "You win!";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result.innerHTML = "You lose!";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result.innerHTML = "You win!";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result.innerHTML = "You lose!";
  }
  hider.classList.remove("d-none");

}

rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

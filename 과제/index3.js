const inputForm = document.querySelector("form");
const guessChoose = document.querySelector("#guessChoose");
const guessResult = document.querySelector("#guessResult");

function randomGame(event) {
  event.preventDefault();
  const maxNum = parseInt(document.querySelector("#maxNum").value);
  const guessNum = parseInt(document.querySelector("#guessNum").value);
  const randomNum = Math.round(Math.random() * maxNum);
  guessChoose.innerHTML = `You choose: ${guessNum}, the machine choose: ${randomNum}.`;
  if (guessNum === randomNum) {
    guessResult.innerHTML = `You won!`;
  } else {
    guessResult.innerHTML = `You lost!`;
  }
}
inputForm.addEventListener("submit", randomGame);

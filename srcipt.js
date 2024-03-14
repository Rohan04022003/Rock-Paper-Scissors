let optionBox = document.getElementsByClassName("optionBox");
let youWin = document.getElementById("youWin");
let compWin = document.getElementById("compWin");
let imgDiv1 = document.getElementById("imgDiv1");
let imgDiv2 = document.getElementById("imgDiv2");
let chanceLeft = document.getElementById("chanceLeft");
let finalResult = document.querySelector("#main > p");

let options = [
  '<img src="./images/rock.png" class="answerImg">',
  '<img src="./images/paper.png" class="answerImg">',
  '<img src="./images/scissors.png" class="answerImg">',
];

let player1 = 0;
let player2 = 0;
let chances = 10;

function youChose(elem) {
  let comp = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  chances--;
  if (chances >= 0) {
    if (
      (elem === 0 && comp === 0) ||
      (elem === 1 && comp === 1) ||
      (elem === 2 && comp === 2)
    ) {
      player1 = player1 + 1;
      player2 = player2 + 1;
    } else if (
      (elem === 0 && comp === 1) ||
      (elem === 1 && comp === 2) ||
      (elem === 2 && comp === 0)
    ) {
      player2 += 1;
    } else if (
      (elem === 0 && comp === 2) ||
      (elem === 1 && comp === 0) ||
      (elem === 2 && comp === 1)
    ) {
      player1 += 1;
    }

    imgDiv1.innerHTML = options[elem];
    imgDiv2.innerHTML = options[comp];
    youWin.innerHTML = `${player1}`;
    compWin.innerHTML = `${player2}`;
    chanceLeft.innerHTML = `${chances}`;
  } else {
    chanceLeft.parentElement.style.color = "red";
    if (player1 > player2) {
      finalResult.textContent = "You Win";
      finalResult.style.color = "green";
    } else if (player1 === player2) {
      finalResult.textContent = "Tied";
      finalResult.style.color = "orange";
    } else {
      finalResult.textContent = "Oops! You Lose";
      finalResult.style.color = "red";
    }
  }
}

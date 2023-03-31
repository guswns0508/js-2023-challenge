const form = document.querySelector(".form");
const generateNumber = document.querySelector(".generate-num");
const guessNumber = document.querySelector(".guess-num");
const choseCheck = document.querySelector(".chose-check");
const result = document.querySelector(".result");

function gameResult(guessNum, randomNum) {
  result.style.fontWeight = "600";
  result.style.fontSize = "20px";
  if (parseInt(guessNum, 10) === randomNum) {
    result.innerText = "\n 승리!";
  } else {
    result.innerText = "\n 패배!";
  }
}

function playButton(event) {
  event.preventDefault();
  const generateNum = generateNumber.value;
  const guessNum = guessNumber.value;
  const randomNum = Math.ceil(Math.random() * generateNum);
  if (parseInt(generateNum, 10) < parseInt(guessNum, 10)) {
    choseCheck.innerText =
      "\n❗입력한 숫자는 범위로 지정한 숫자보다 클 수 없어요. Retry!";
  } else {
    choseCheck.innerText = `당신의 숫자: ${guessNum}, 랜덤 숫자: ${randomNum}.`;
    gameResult(guessNum, randomNum);
  }
}

form.addEventListener("submit", playButton);

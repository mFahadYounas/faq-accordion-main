const questionButton = document.querySelectorAll(".question > button");

const answer = document.querySelectorAll(".answer");

const plusMinusImg = document.querySelectorAll(
  ".question > button > span > img"
);

let answerState: boolean[] = new Array(questionButton.length).fill(false);

questionButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (!answerState[i]) {
      answer[i].classList.remove("hidden");
      plusMinusImg[i].setAttribute("src", "./src/assets/images/icon-minus.svg");
      answerState[i] = true;
    } else {
      answer[i].classList.add("hidden");
      answerState[i] = false;
      plusMinusImg[i].setAttribute("src", "./src/assets/images/icon-plus.svg");
    }
  });
});

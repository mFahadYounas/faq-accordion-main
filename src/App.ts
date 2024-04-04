const questionButton = document.querySelectorAll(".question > button");

const answer = document.querySelectorAll(".answer");

const plusMinusImg = document.querySelectorAll(
  ".question > button > span > img"
);

let answerState = false;

questionButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (!answerState) {
      answer[i].classList.remove("hidden");
      plusMinusImg[i].setAttribute("src", "./src/assets/images/icon-minus.svg");
      answerState = true;
      return;
    }
    answer[i].classList.add("hidden");
    answerState = false;
    plusMinusImg[i].setAttribute("src", "./src/assets/images/icon-plus.svg");
  });
});

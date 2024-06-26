import { makeQna } from "./MakeQna";
import { allQna } from "./resources/Qna";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";

allQna.forEach((qna) => {
  makeQna(qna.question, qna.answer);
});

const questionButton = document.querySelectorAll(".question > button");

const answer = document.querySelectorAll(".answer") as NodeListOf<HTMLElement>;

const plusMinusImg = document.querySelectorAll(
  ".question > button > span > img"
);

let answerState: boolean[] = new Array(questionButton.length).fill(false);

questionButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (!answerState[i]) {
      answer[i].style.maxHeight = "400px";
      plusMinusImg[i].setAttribute("src", minusIcon);
      answerState[i] = true;
    } else {
      answer[i].style.maxHeight = "0";
      answerState[i] = false;
      plusMinusImg[i].setAttribute("src", plusIcon);
    }
  });
});

import plusIcon from "./assets/images/icon-plus.svg";

export const makeQna = (qText: string, aText: string) => {
  const accordionBody = document.querySelector(".accordion-body");
  const qna = document.createElement("li");
  qna.classList.add("qna");
  // question section
  const question = document.createElement("div");
  question.classList.add("question");
  const qButton = document.createElement("button");
  const qSpan = document.createElement("span");
  qSpan.textContent = qText;
  qButton.appendChild(qSpan);
  qButton.tabIndex = 0;
  const expandSpan = document.createElement("span");
  const expandImg = document.createElement("img");
  expandImg.src = plusIcon;
  expandImg.alt = "plus icon";
  expandSpan.appendChild(expandImg);
  qButton.appendChild(expandSpan);
  question.appendChild(qButton);
  qna.appendChild(question);
  accordionBody?.appendChild(qna);
  // answer section
  const answer = document.createElement("div");
  answer.classList.add("answer");
  answer.classList.add("hidden");
  const answerParagraph = document.createElement("p");
  answerParagraph.innerHTML = aText;
  answer.appendChild(answerParagraph);
  qna.appendChild(answer);
};

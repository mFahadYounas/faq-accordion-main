export const makeQna = (qText: string, aText: string) => {
  const accordionBody = document.querySelector(".accordion-body");
  const qna = document.createElement("li");
  qna.classList.add("qna");
  // question section
  const question = document.createElement("section");
  question.classList.add("question");
  const qButton = document.createElement("button");
  qButton.textContent = qText;
  qButton.tabIndex = 0;
  const expandSpan = document.createElement("span");
  const expandImg = document.createElement("img");
  expandImg.src = "./src/assets/images/icon-plus.svg";
  expandImg.alt = "plus icon";
  expandSpan.appendChild(expandImg);
  qButton.appendChild(expandSpan);
  question.appendChild(qButton);
  qna.appendChild(question);
  accordionBody?.appendChild(qna);
  // answer section
  const answer = document.createElement("section");
  answer.classList.add("answer");
  answer.classList.add("hidden");
  const answerParagraph = document.createElement("p");
  answerParagraph.innerHTML = aText;
  answer.appendChild(answerParagraph);
  qna.appendChild(answer);
};
